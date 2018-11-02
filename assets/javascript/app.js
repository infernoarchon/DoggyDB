window.onload = function() {
    dogapp.getdogs()

    $(".dog-card").on("click", function() {
      dogapp.getgifs($(this).attr("data-name"),10)
      
    });
};

// Global Variables
var lastdog;
var gifOffset = 1;
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
    console.log(d)
    console.log(lastdog)
    console.log(gifOffset)
    if(lastdog !== d) {
      gifOffset=0
    }
    $("#gif-area").html("")
    function getNextGif() {
        lastdog = d
        var currentgif = d
        if(gifCount < 11) {
        var dtrim = d.replace(/\s/g, '');
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?q=" + currentgif + "_dog&limit=1&offset=" + gifOffset + "&api_key=dc6zaTOxFJmzC",
            method: "GET",
            success: function(response) {
                if (gifCount <= maxCategories) {
                    gifOffset++;
                    gifCount++;
                    dimage = $("<img>")
                    dimage.addClass("gif")
                    dimage.attr("id",dtrim + gifOffset)
                    dimage.attr("src",response.data[0].images.fixed_width_still.url)
                    dimage.attr("data-animate",response.data[0].images.fixed_width.url)
                    dimage.attr("data-still",response.data[0].images.fixed_width_still.url)
                    dimage.attr("data-state","still")
                    $("#gif-area").append(dimage)
                    getNextGif()
                    dogapp.assigncontrol(dtrim, gifOffset)
                    }
            
    
            }
        })
      }
  }   
      getNextGif();
  },
  assigncontrol : function(x,y) {
    $("#" + x + y).on("click", function() {
      var state = $(this).attr("data-state")
      console.log("hello there")
      if(state === "still") {
        var animateurl = $(this).attr("data-animate")
        $(this).attr("src", animateurl)
        $(this).addClass("fullopacity")
        $(this).attr("data-state", "animate")
      }
      if(state === "animate") {
        var stillurl = $(this).attr("data-still")
        $(this).attr("src", stillurl)
        $(this).removeClass("fullopacity")
        $(this).attr("data-state", "still")
      }
      
    });
  }
}