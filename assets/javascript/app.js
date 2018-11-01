window.onload = function() {
  dogapp.getdogs()
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

var dogs = [
  "maltese", 
  "shiba", 
  "pomeranian", 
  "golden retriever",
  "keeshond",
  "+ Add a Dog"
]

var dogapp = {
  getdogs : function() {
    for (var i = 0; i < dogs.length; i++) {
        currentdog = dogs[i]
        // Then dynamicaly generating buttons
        var dcard = $("<div>");
        // Adding a class to our button
        dcard.addClass("dog-card card");
        // Adding a data-attribute
        dcard.attr("data-name", currentdog);
        // Providing the initial button text
        var dcardtitle = $("<div>");
        dcardtitle.addClass("dog-card-title");
        dcardtitle.text(currentdog);
        dcard.append(dcardtitle)
        // Adding the button
        $("#dog-area").append(dcard);
    }
  }
}