// variables
let filterTag = $('.filterTag');
let count = 0;

// show and collapse smooth effect on filters
toggleShow(filterTag);

function toggleShow(element) {
  element.click(function () {
    // toggle rotation for '+' icon on filters
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

// inject content inside the app (in the real application data will come from external json file and/or other sources)

// Destinations filters
let destinations = ['Africa and Indian Ocean', 'Alaska, American West Coast', 'Antarctica', 'Arctic & Greenland', 'Asia', 'Australia & New Zealand', 'Canada & New England', 'Caribbean & Central America', 'Galápagos Islands', 'Mediterranean', 'Northern Europe & British Isles', 'Russian Far East', 'South America', 'South Pacific Islands', 'Transoceanic','World Cruises', 'Grand Voyages'];

for(var i = 0; i < destinations.length; i++) {
  $('#destinations').append('<label class="boxes"><input type="checkbox" /><span>'+ destinations[i] +'</span></label>')
}

// Ports (Note: I chose a random number of ports, but it will be replaced by portsArray.length in the real application)
for(var i = 1; i < 40; i++) {
  $('#ports').append('<label class="boxes"><input type="checkbox" /><span>Port' + i + '</span></label>')
}

// Cruises (again 'fake' data, but simulating data injection from json format)
const cruises = [
  {
    name: 'SAN JUAN to BRIDGETOWN',
    departure: 'NOV 04 2018',
    duration: '6 days',
    price: '€ 2,680',
    ship :'SILVER WHISPER'
  },
  {
    name: 'DURBAN to MAPUTO',
    departure: 'DEC 15 2018',
    duration: '6 days',
    price: '€ 3,900',
    ship :'SILVER DISCOVERER'
  },
  {
    name: 'SAN JUAN to BRIDGETOWN',
    departure: 'MAR 12 2019',
    duration: '8 days',
    price: '€ 4,500',
    ship :'SILVER SHADOW'
  },
  {
    name: 'SAN JUAN to BRIDGETOWN',
    departure: 'OCT 10 2018',
    duration: '10 days',
    price: '€ 3,800',
    ship :'SILVER MUSE'
  },
  {
    name: 'SINGAPORE to HONG KONG',
    departure: 'JAN 02 2019',
    duration: '13 days',
    price: '€ 7,400',
    ship :'SILVER WHISPER'
  },
  {
    name: 'TOKYO to TOKYO',
    departure: 'FEV 23 2019',
    duration: '7 days',
    price: '€ 5,200',
    ship :'SILVER MUSE'
  }
]

// data is sent to results column
cruises.forEach((element) => {
  $('#cruise').append('<div class="cruise-info"><div class="cruise-date"><p>'+ element.departure +'</p><p>'+ element.duration +'</p></div><div class="cruise-destinations"><p>'+ element.name +'</p><p>'+ element.ship +'</p></div><div class="cruise-book"><p>from<span>'+ element.price +'</span></p><button>REQUEST A QUOTE</button></div></div>')
})
