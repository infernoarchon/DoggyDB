window.onload = function() {
    dogapp.getdogs()

    $(".dog-card").on("click", function() {
      // $("#intro-card").addClass("invisible")
      dogapp.getgifs($(this).attr("data-name"),gifLimit)

    

      
    });
    $(".navbar-brand").on("click", function() {
      location.reload()
    });
};

// Global Variables
var gifLimit = 31;
var lastdog;
var gifOffset = 1;
var gifgroup = 0
var giphydogs;
var dogs = [
  "maltese", 
  "shiba", 
  "pomeranian", 
  "golden retriever",
  "french bulldog",
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
    if(lastdog !== d) {
      gifOffset=1
    }
    $("#gif-area").html("")
    function getNextGif() {
        lastdog = d
        var currentgif = d
        if(gifCount <= gifLimit) {
        var dtrim = d.replace(/\s/g, '');
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?q=" + currentgif + "_dog&limit=1&offset=" + gifOffset + "&api_key=dc6zaTOxFJmzC",
            method: "GET",
            success: function(response) {
                if (gifCount <= maxCategories) {
                  console.log(response)
                    gifOffset++;
                    gifCount++;
                    dimage = $("<img>")
                    dimage.addClass("gif card-img-top")
                    dimage.attr("id",dtrim + gifOffset)
                    dimage.attr("src",response.data[0].images.fixed_width_still.url)
                    dimage.attr("data-animate",response.data[0].images.fixed_width.url)
                    dimage.attr("data-still",response.data[0].images.fixed_width_still.url)
                    dimage.attr("data-state","still")
                    diconcontainer = $("<div>")
                    diconcontainer.addClass("icon-container invisible d-flex align-items-center justify-content-center")
                    diconcontainer.attr("id",dtrim + gifOffset + "icon")
                    dicon = $("<i>")
                    dicon.addClass("fas fa-play")
                    dcard = $("<div>")
                    dcard.addClass("card")
                    dcardbody = $("<div>")
                    dcardbody.addClass("card-body")
                    dcardtitle = $("<h5>")
                    dcardtitle.addClass("card-title")
                    dcardtitle.text(response.data[0].title)
                    dcardtext = $("<p>")
                    dcardtext.addClass("card-text gif-text")
                    dcardtext.text(response.data[0].source_tld)
                    dcard.append(dimage)
                    diconcontainer.append(dicon)
                    dcard.append(diconcontainer)
                    dcardbody.append(dcardtitle)
                    dcardbody.append(dcardtext)
                    dcard.append(dcardbody)
                    $("#gif-area").append(dcard)
                    getNextGif()
                    dogapp.assigncontrol(dtrim, gifOffset)
                    }
            
    
            }
        })
      }
  }   
      getNextGif();
  },
  assigncontrol : function(x,y,z) {
    $("#" + x + y).on("mouseover", function() {
      var state = $(this).attr("data-state")
      if(state === "still") {
      $("#" + x + y + "icon").removeClass("invisible")
      }
    })
    $("#" + x + y).on("mouseout", function() {
      $("#" + x + y + "icon").addClass("invisible")
    })
    $("#" + x + y).on("click", function() {
      var state = $(this).attr("data-state")
      if(state === "still") {
        $("#" + x + y + "icon").addClass("invisible")
        var animateurl = $(this).attr("data-animate")
        $(this).attr("src", animateurl)
        $(this).addClass("fullopacity")
        $(this).attr("data-state", "animate")
      }
      if(state === "animate") {
        var stillurl = $(this).attr("data-still")
        $("#" + x + y + "icon").removeClass("invisible")
        $(this).attr("src", stillurl)
        $(this).removeClass("fullopacity")
        $(this).attr("data-state", "still")
      }
      
    });
  }
}