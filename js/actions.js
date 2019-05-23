$(document).ready(function() {
  var neatoAnimation = "animated jello";
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  //jquery triggered on button click
  $("#getMessage").on("click", function() {
    //grabs json from api this is the api
    $.getJSON('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json', function(data) {
      console.log(data);
      //declare html variable to put json on to in html formatted way
      var html = "";
      //use key and value from json object format to html add to html variable
      /*
        $.each(data, function(key, val) {
          html += "<div class='quote'>";
          html += val + "<br>";
          html += "<div><br>";
        })
        */

      var dataLength = data.length;
      var selectedQuoteIndex = Math.floor(Math.random() * dataLength-1)+1;
      var selectedQuote = data[selectedQuoteIndex];
      var currentQuote = selectedQuote.quote;
      var currentAuthor = selectedQuote.author;

      html += "<div class=quoteBox>";
      html += "<div class=quote>" + currentQuote + "</div><br>";
      html += "<div class=quoteAuthor>" + currentAuthor + "</div><br>";
      html += "</div><br>";
      //tell html var where and how to opened using html jsquery method

      $(".message").html(html);
      $(".message").addClass(neatoAnimation).one(animationEnd, function() {
        $(this).removeClass(neatoAnimation)
      });
    });
  });

  $("#twitterButton").on("click", function() {
    var textToTweet = $(".quote").text();

    var tweetLink = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(textToTweet);
    window.open(tweetLink, "tweet", "height=300,width=550,resizable=0");
  });
});
