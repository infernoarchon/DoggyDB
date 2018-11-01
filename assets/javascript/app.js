window.onload = function() {
  dogapp.getdogs()
//   $(".gif").on("click", function() {

//     if(state === "still") {
//       var animateurl = $(this).attr("data-animate")
//       $(this).attr("src", animateurl)
//       $(this).attr("data-state", "animate")
//     }
//     if(state === "animate") {
//       var stillurl = $(this).attr("data-still")
//       $(this).attr("src", stillurl)
//       $(this).attr("data-state", "still")
//     }
    
// });

    $(".dog-card").on("click", function() {
      dogapp.getgifs($(this).attr("data-name"),9)
      
    });

};

// Global Variables

var gifgroup = 0
var giphydogs;
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
        dcard.addClass("dog-card btn btn-secondary btn-block text-left");
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
  },
  getgifs : function(d, maxCategories) {
    var gifCount = 0;
    function getNextGif() {
        var currentgif = d
        if(gifCount < 10) {
        var dtrim = d.replace(/\s/g, '_');
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?q=" + d + "_dog" + "&offset=" + gifOffset + "&limit=1&api_key=dc6zaTOxFJmzC",
            method: "GET",
            success: function(response) {
                if (gifCount <= maxCategories) {
                    gifOffset++;
                    gifCount++;
                    console.log(gifOffset)
                    console.log(response)
                    dimage = $("<img>")
                    dimage.attr("src",response.data[0].images.fixed_height_still.url)
                    $("#gif-area").append(dimage)
                    getNextGif()
                    }
            
    
            }
        })
      }
  }
      getNextGif();
  },
}