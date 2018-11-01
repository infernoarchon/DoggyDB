window.onload = function() {
  gif.gettopics()
};

$(".gif").on("click", function() {

    if(state === "still") {
      var animateurl = $(this).attr("data-animate")
      $(this).attr("src", animateurl)
      $(this).attr("data-state", "animate")
    }
    if(state === "animate") {
      var stillurl = $(this).attr("data-still")
      $(this).attr("src", stillurl)
      $(this).attr("data-state", "still")
    }
    
});

var topics = [
  "maltese", 
  "shiba inu", 
  "pomeranian", 
  "golden retriever",
  "keeshond",
]

var gif = {
  gettopics : function() {
    for (var i = 0; i < topics.length; i++) {
        currenttopic = topics[i]
        // Then dynamicaly generating buttons
        var a = $("<a href='#'>");
        // Adding a class to our button
        a.addClass("topic btn btn-secondary");
        // Adding a data-attribute
        a.attr("data-name", currenttopic);
        // Providing the initial button text
        a.text(currenttopic);
        // Adding the button
        $("#topic-area").append(a);
    }
  }
}