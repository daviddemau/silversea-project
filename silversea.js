// variables
let filterTag = $('.filterTag');
let count = 0;

// show and collapse smooth effect on filter tags
toggleShow(filterTag);

function toggleShow(element) {
  element.click(function () {
    // toggle rotation for '+' icon on filter tab
    if(count == 45) {
      count = -45
    }
    count += 45;
    let icon = $("ion-icon",this);
    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(150, function () {
    });
    // rotate icon
    icon.css('transform', 'rotate(' + count + 'deg)')
  });
}

// inject content inside each filter category (in the real application data will come from external json file or other source)
// Destinations
let destinations = ['Africa and Indian Ocean', 'Alaska, American West Coast', 'Antarctica', 'Arctic & Greenland', 'Asia', 'Australia & New Zealand', 'Canada & New England', 'Caribbean & Central America', 'Galápagos Islands', 'Mediterranean', 'Northern Europe & British Isles', 'Russian Far East', 'South America', 'South Pacific Islands', 'Transoceanic','World Cruises', 'Grand Voyages'];

for(var i = 0; i < destinations.length; i++) {
  $('#destinations').append('<label class="boxes"><input type="checkbox" /><span>'+ destinations[i] +'</span></label>')
}

// Ports
// Note: I chose a random number of ports, but it will be replaced by portsArray.length in the real application
for(var i = 1; i < 40; i++) {
  $('#ports').append('<label class="boxes"><input type="checkbox" /><span>Port' + i + '</span></label>')
}
