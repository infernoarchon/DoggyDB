window.onload = function() {
    autocomplete(document.getElementById("myInput"), dogdir);
    $("#add-dog-form").hide();
    dogapp.getdogs()
    dogapp.getlist()
    dogapp.gethero()

// On Click Events
    $(".dog-card").on("click", function() {
      dogapp.getgifs($(this).attr("dog-name"),gifLimit)
      dogapp.getbio($(this).attr("dog-name"))
      dogapp.getdogpic($(this).attr("data-name"))
      console.log(gifOffset)
    });
    $(".navbar-brand").on("click", function() {
      dogapp.resetbio()
      $(".dog-img").attr("style","background: url('" + unsplash + "')")
      $("#gif-area").html('')
    });
    $("#cancel-add").click(function(){
      $("#add-dog-form").hide();
    });
    $("#add-dog").click(function(){
      $("#add-dog-form").show();
      $("#myInput").focus(function() {
      });
    });
    $("#submit-dog").click(function(){
      event.preventDefault();
      $("#add-dog-form").hide();
      var getdog = $("#myInput").val().trim()
      $("#myInput").val('')
      dogapp.adddog(getdog)
      $(".dog-card-added").on("click", function() {
        dogapp.getgifs($(this).attr("dog-name"),gifLimit)
        dogapp.getbio($(this).attr("dog-name"))
        dogapp.getdogpic($(this).attr("data-name"))
        console.log(gifOffset)
      });
    });
    $("#surprise-me").click(function() {
      var randomdog = dogdir[Math.floor(Math.random() * dogdir.length)];
      dogapp.getgifs(randomdog,gifLimit)
      dogapp.getbio(randomdog)
      dogapp.getdogpic(getKeyByValue(alldogs,randomdog))
    })
// Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function(event) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
      // Trigger the button element with a click
      document.getElementById("submit-dog").click();
  }
});
    
};

// Global Variables
var gifLimit = 31;
var lastdog;
var gifOffset = 0;
var gifgroup = 0
var giphydogs;
var skipgif = false;
var unsplash;

var dogs = [
  "maltese", 
  "shiba inu", 
  "pomeranian", 
  "golden retriever",
  "french bulldog"
]
var doghelper = ["maltese", "pomeranian", "dalmatian", "boxer", "african", "samoyed", "newfoundland", "malinois", "mexican hairless", "papillon"]
var spanielhelper = ["clumber"]
var australianhelper = ["kelpie", "silky terrier"]
var welshcorgihelper = ["pembroke", "cardigan corgi"]
var softcoathelper = ["wheaten terrier"]
var alaskanhelper = ["malamute"]
var americanhelper = ["eskimo"]
var shorthairedhelper = ["german pointer"]
var foxhoundhelper = ["english hound"]
var walkerhelper = ["walker hound"]
var bernardhelper = ["saint bernard"]
var blenheimhelper = ["blenheim spaniel"]
var chinhelper = ["japanese spaniel"]
var bostonhelper = ["boston bulldog"]
var brittanyhelper = ["brittany spaniel"]
var staffordshirehelper = ["american terrier"]
var lhasahelper = ["lhasa"]
var chesapeakehelper = ["chesapeake retriever"]
var springerhelper = ["welsh spaniel"]
var appenzellerhelper = ["appenzeller"]
var chihuahuahelper = ["chihuahua"]
var longhairedhelper = ["german longhair pointer"]
var cairnhelper = ["cairn"]
var westhighlandhelper = ["westhighland terrier"]
var terrierhelper = ["airedale"]
var akitahelper = ["akita"]
var brabanconhelper = ["brabancon"]
var bouvierhelper = ["bouvier"]
var sheepdoghelper = ["english sheepdog"]
var coonhoundhelper = ["redbone"]
var dandiehelper = ["dandie terrier"]
var shibahelper = ["shiba"]
var labradorhelper = ["labrador"]

var alldogs = {
  "affenpinscher": "affenpinscher", "african": "african", "airedale": "airedale", "akita": "akita", "appenzeller": "appenzeller", "basenji": "basenji", "beagle": "beagle", "bluetick": "bluetick", "borzoi": "borzoi", "bouvier": "bouvier", "boxer": "boxer", "brabancon": "brabancon", "briard": "briard", "bulldog-boston": "boston bulldog", "bulldog-french": "french bulldog", "bullterrier-staffordshire": "staffordshire bullterrier", "cairn": "cairn", "cattledog-australian": "australian cattledog", "chihuahua": "chihuahua", "chow": "chow chow", "clumber": "clumber", "cockapoo": "cockapoo", "collie-border": "border collie", "coonhound": "coonhound", "corgi-cardigan": "cardigan corgi", "cotondetulear": "cotondetulear", "dachshund": "dachshund", "dalmatian": "dalmatian", "dane-great": "great dane", "deerhound-scottish": "scottish deerhound", "dhole": "dhole", "dingo": "dingo", "doberman": "doberman", "elkhound-norwegian": "norwegian elkhound", "entlebucher": "entlebucher", "eskimo": "eskimo", "frise-bichon": "bichon frise", "germanshepherd": "german shepherd", "greyhound-italian": "italian greyhound", "groenendael": "groenendael", "hound-afghan": "afghan hound", "hound-basset": "basset hound", "hound-blood": "blood hound", "hound-english": "english hound", "hound-ibizan": "ibizan hound", "hound-walker": "walker hound", "husky": "husky", "keeshond": "keeshond", "kelpie": "kelpie", "komondor": "komondor", "kuvasz": "kuvasz", "labrador": "labrador", "leonberg": "leonberger", "lhasa": "lhasa", "malamute": "malamute", "malinois": "malinois", "maltese": "maltese", "mastiff-bull": "bull mastiff", "mastiff-tibetan": "tibetan mastiff", "mexicanhairless": "mexican hairless", "mountain-bernese": "bernese mountain", "mountain-swiss": "swiss mountain", "newfoundland": "newfoundland", "otterhound": "otterhound", "papillon": "papillon", "pekinese": "pekinese", "pembroke": "pembroke", "pinscher-miniature": "miniature pinscher", "pointer-german": "german pointer", "pointer-germanlonghair": "german longhair pointer", "pomeranian": "pomeranian", "poodle-standard": "poodle", "pug": "pug", "puggle": "puggle", "pyrenees": "pyrenees", "redbone": "redbone", "retriever-chesapeake": "chesapeake retriever", "retriever-curly": "curly retriever", "retriever-flatcoated": "flatcoated retriever", "retriever-golden": "golden retriever", "ridgeback-rhodesian": "rhodesian ridgeback", "rottweiler": "rottweiler", "saluki": "saluki", "samoyed": "samoyed", "schipperke": "schipperke", "schnauzer-giant": "giant schnauzer", "schnauzer-miniature": "miniature schnauzer", "setter-english": "english setter", "setter-gordon": "gordon setter", "setter-irish": "irish setter", "sheepdog-english": "english sheepdog", "sheepdog-shetland": "shetland sheepdog", "shiba": "shiba inu", "shihtzu": "shih tzu", "spaniel-blenheim": "blenheim spaniel", "spaniel-brittany": "brittany spaniel", "spaniel-cocker": "cocker spaniel", "spaniel-irish": "irish spaniel", "spaniel-japanese": "japanese spaniel", "spaniel-sussex": "sussex spaniel", "spaniel-welsh": "welsh spaniel", "springer-english": "english springer", "stbernard": "saint bernard", "terrier-american": "american terrier", "terrier-australian": "australian terrier", "terrier-bedlington": "bedlington terrier", "terrier-border": "border terrier", "terrier-dandie": "dandie terrier", "terrier-fox": "fox terrier", "terrier-irish": "irish terrier", "terrier-kerryblue": "kerryblue terrier", "terrier-lakeland": "lakeland terrier", "terrier-norfolk": "norfolk terrier", "terrier-norwich": "norwich terrier", "terrier-patterdale": "patterdale terrier", "terrier-russell": "russell terrier", "terrier-scottish": "scottish terrier", "terrier-sealyham": "sealyham terrier", "terrier-silky": "silky terrier", "terrier-tibetan": "tibetan terrier", "terrier-toy": "toy terrier", "terrier-westhighland": "westhighland terrier", "terrier-wheaten": "wheaten terrier", "terrier-yorkshire": "yorkshire terrier", "vizsla": "vizsla", "weimaraner": "weimaraner", "whippet": "whippet", "wolfhound-irish": "irish wolfhound"
}
var dogdir = []


var input = document.getElementById("myInput");

var dogapp = {
  getlist : function () {
    for (var key in alldogs) {
      if (alldogs.hasOwnProperty(key)) {
          dogdir.push(alldogs[key])
      }   
  }

  },
  getdogs : function() {
    for (var i = 0; i < dogs.length; i++) {
        currentdog = dogs[i]
        // Then dynamicaly generating buttons
        var dcard = $("<div>");
        // Adding a class to our button
        dcard.addClass("dog-card btn-light btn border-0 btn-block text-left");
        // Adding a data-attribute
        dcard.attr("dog-name",currentdog)
        dcard.attr("data-name", getKeyByValue(alldogs,currentdog));
        // Providing the initial button text
        var dcardtitle = $("<div>");
        dcardtitle.addClass("dog-card-title");
        dcardtitle.text(currentdog);
        dcard.append(dcardtitle)
        // Adding the button
        $("#dog-area").append(dcard);
    }
  },
  adddog : function(d) {
        currentdog = d
        // Then dynamicaly generating buttons
        var dcard = $("<div>");
        // Adding a class to our button
        dcard.addClass("dog-card-added btn-light btn border-0 btn-block text-left");
        // Adding a data-attribute
        dcard.attr("dog-name",currentdog)
        dcard.attr("data-name", getKeyByValue(alldogs,currentdog));
        // Providing the initial button text
        var dcardtitle = $("<div>");
        dcardtitle.addClass("dog-card-title");
        dcardtitle.text(currentdog);
        dcard.append(dcardtitle)
        // Adding the button
        $("#dog-area").append(dcard);
  },
  getgifs : function(d, maxCategories) {
    skipgif = false
    var gifCount = 0;
    dogapp.skipgif(d,"maltese")
    dogapp.skipgif(d,"doberman")
    if(lastdog !== d && lastdog && skipgif===false) {
      gifOffset=0
    }
    $("#gif-area").html("")
    function getNextGif() {
        lastdog = d
        var currentgif = d
        if(gifCount <= gifLimit) {
        var dtrim = d.replace(/\s/g, '');
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?q=" + dogapp.searchhelper(currentgif) + "&limit=1&offset=" + gifOffset + "&api_key=sjv1E2EK4CYM8IxZ8xrFG3NvpMPG4Q4u",
            method: "GET",
            success: function(response) {
                if (gifCount <= maxCategories) {
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
                    dcard.addClass("card gif-card shadow-sm")
                    dcardbody = $("<div>")
                    dcardbody.addClass("card-body")
                    dcardtitle = $("<h5>")
                    dcardtitle.addClass("card-title")
                    
                    dcardtitle.text(response.data[0].title)
                    if(response.data[0].title.length < 2) {
                      dcardtitle.text("Untitled GIF")
                    }
                    dcardtext = $("<p>")
                    dcardtext.addClass("card-text gif-text")
                    dcardtext.text(response.data[0].source_tld)
                    if(response.data[0].source_tld.length < 2) {
                      dcardtext.text("No source provided")
                    }

                    dcard.append(dimage)
                    diconcontainer.append(dicon)
                    dcard.append(diconcontainer)
                    dcardbody.append(dcardtitle)
                    dcardbody.append(dcardtext)
                    dcard.append(dcardbody)
                    $("#gif-area").append(dcard)
                    var j = dcardbody.height()
                    var k = response.data[0].images.fixed_width_still.height 
                    var l = response.data[0].images.fixed_height_still.width
                    var m = dcard.height()
                    var q = ((k / l) + (m/j)) + 31
                    dicon.attr("style","margin-bottom:" + q + "%")
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
  },
  skipgif : function(dog, name) {
    if(dog === name && lastdog !== name) {
      gifOffset=1
      skipgif = true
    }
  },
  getbio : function(d) {
    $("#dog-intro-card").removeClass("intro-card")
    $("#dog-intro-card").removeClass("col-md-5")
    $("#dog-intro-card").addClass("col-md-8")
    $("#dog-pic").removeClass("dog-img intro-card")
    $("#dog-pic").removeClass("col-md-7")
    $("#dog-pic").addClass("col-md-3")
    $("#dog-bio-title").removeClass("intro-text")
    $("#dog-bio-text").removeClass("intro-text")
    $("#surprise-me").hide()
    $("#dog-bio-title").text(d)
    var wikiurl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&suggest=true&search="
    $.ajax({
      url: wikiurl + dogapp.searchhelper(d),
      method: "GET",
      dataType: 'jsonp',
      success: function(response) {
        doginfo = response[2]
        $("#dog-bio-text").text(doginfo[0])
    }
     })
    },
    searchhelper : function(d) {
      if (doghelper.includes(d)) {
        if (d === "african") {
          d = d + " wild"
        }
        d = d + " dog"
        return d
      }
      if (spanielhelper.includes(d)) {
        d = d + " spaniel"
        return d
      }
      if (australianhelper.includes(d)) {
        d = "australian " + d
        return d
      }
      if (welshcorgihelper.includes(d)) {
        if (d === "cardigan corgi") {
          d = "cardigan"
        }
        d = d + " welsh corgi"
        return d
      }
      if (softcoathelper.includes(d)) {
        d = "soft-coated " + d
        return d
      }
      if (alaskanhelper.includes(d)) {
        d = "alaskan " + d
        return d
      }
      if (americanhelper.includes(d)) {
        d = "american " + d + " dog"
        return d
      }
      if (shorthairedhelper.includes(d)) {
        d = "german shorthaired pointer"
        return d
      }
      if (foxhoundhelper.includes(d)) {
        d = "english foxhound"
        return d
      }
      if (walkerhelper.includes(d)) {
        d = "treeing walker coonhound"
        return d
      }
      if (bernardhelper.includes(d)) {
        d = "st. bernard (dog)"
        return d
      }
      if (blenheimhelper.includes(d)) {
        d = "cavalier king charles spaniel"
        return d
      }
      if (chinhelper.includes(d)) {
        d = "japanese chin"
        return d
      }
      if (bostonhelper.includes(d)) {
        d = "boston terrier"
        return d
      }
      if (brittanyhelper.includes(d)) {
        d = "brittany dog"
        return d
      }
      if (staffordshirehelper.includes(d)) {
        d = "american staffordshire terrier"
        return d
      }
      if (staffordshirehelper.includes(d)) {
        d = "american staffordshire terrier"
        return d
      }
      if (lhasahelper.includes(d)) {
        d = d + " apso"
        return d
      }
      if (chesapeakehelper.includes(d)) {
        d = "chesapeake bay retriever"
        return d
      }
      if (springerhelper.includes(d)) {
        d = "welsh springer spaniel"
        return d
      }
      if (appenzellerhelper.includes(d)) {
        d = d + " sennenhund"
        return d
      }
      if (chihuahuahelper.includes(d)) {
        d = "chihuahua (dog)"
        return d
      }
      if (longhairedhelper.includes(d)) {
        d = "german longhaired pointer"
        return d
      }
      if (cairnhelper.includes(d)) {
        d = d + " terrier"
        return d
      }
      if (westhighlandhelper.includes(d)) {
        d = "west highland white terrier"
        return d
      }
      if (terrierhelper.includes(d)) {
        d = d + " terrier"
        return d
      }
      if (akitahelper.includes(d)) {
        d = d + " (dog)"
        return d
      }
      if (brabanconhelper.includes(d)) {
        d = "griffon bruxellois"
        return d
      }
      if (bouvierhelper.includes(d)) {
        d = d + " des Flandres"
        return d
      }
      if (sheepdoghelper.includes(d)) {
        d = "Old " + d
        return d
      }
      if (coonhoundhelper.includes(d)) {
        d = d + " coonhound"
        return d
      }
      if (dandiehelper.includes(d)) {
        d = "dandie dinmont terrier"
        return d
      }
      if (labradorhelper.includes(d)) {
        d = "labrador retriever"
        return d
      }

      else{
      return d
      }
    },
    resetbio : function () {
    $("#dog-intro-card").addClass("intro-card")
    $("#dog-intro-card").removeClass("col-md-8")
    $("#dog-intro-card").addClass("col-md-5")
    $("#dog-pic").addClass("dog-img intro-card")
    $("#dog-pic").removeClass("col-md-3")
    $("#dog-pic").addClass("col-md-7")
    $("#dog-bio-title").addClass("intro-text")
    $("#dog-bio-text").addClass("intro-text")
    $("#surprise-me").show()
    $("#dog-bio-title").text("Welcome to DoggyDB!")
    $("#dog-bio-text").text("Feeling stressed? Having a ruff day? Just need some good 'ol eye bleach? Then sit back, relax, and enjoy some high-quality dog gifs.")
    },
    gethero : function() {
      $.ajax({
        url: "https://api.unsplash.com/photos/random?client_id=822166163a7b2545ddf3fb9ca64b5246ede5b8d7b18a8b38703665bbe948adc9&query=dog&orientation=landscape",
        method: "GET",
        success: function(response) {
          unsplash = response.urls.full
          $("#dog-pic").attr("style","background: url('" + unsplash + "')")
      }
    })
    },
    getdogpic : function(d) {
      var dogpicurl = "https://dog.ceo/api/breed/" + d + "/images/random"
      console.log(dogpicurl)
      $.ajax({
        url: dogpicurl,
        method: "GET",
        statusCode: {
          404: function() {
            console.log( "page not found" );
          }
        },
        success: function(response) {
          $("#dog-pic").attr("style","background: url('" + response.message + "')")
        }
      })
    }
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}


function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}