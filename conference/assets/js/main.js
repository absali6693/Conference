/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function(){
	handleTopNavAnimation();
});

$(window).load(function(){
	handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

	if(top>10){
		$('#site-nav').addClass('navbar-solid'); 
	}
	else{
		$('#site-nav').removeClass('navbar-solid'); 
	}
}

/*
 * Registration Form
*/

$('#registration-form').submit(function(e){
    e.preventDefault();
    
    var postForm = { //Fetch form data
            'fname'     : $('#registration-form #fname').val(),
            'lname'     : $('#registration-form #lname').val(),
            'email'     : $('#registration-form #email').val(),
            'cell'      : $('#registration-form #cell').val(),
            'address'   : $('#registration-form #address').val(),
            'zip'       : $('#registration-form #zip').val(),
            'city'      : $('#registration-form #city').val(),
            'program'   : $('#registration-form #program').val()
    };

    $.ajax({
            type      : 'POST',
            url       : './assets/php/contact.php',
            data      : postForm,
            dataType  : 'json',
            success   : function(data) {
                            if (data.success) {
                                $('#registration-msg .alert').html("Registration Successful");
                                $('#registration-msg .alert').removeClass("alert-danger");
                                $('#registration-msg .alert').addClass("alert-success");
                                $('#registration-msg').show();
                            }
                            else
                            {
                                $('#registration-msg .alert').html("Registration Failed");
                                $('#registration-msg .alert').removeClass("alert-success");
                                $('#registration-msg .alert').addClass("alert-danger");
                                $('#registration-msg').show();
                            }
                        }
        });
});

function PopupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}
    
var btn=document.getElementById("myBtn");

btn.addEventListener("click", function(){

PopupCenter('https://script.google.com/macros/s/AKfycbyDNN1emKkFF916Qx-WgngUtPmORq5KsVQlQ8yC807F-P8IUqRv/exec','Registration','600','600'); 

}, false);






/*
 * SmoothScroll
*/

smoothScroll.init();

/*
 * map
*/

jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();

    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ['London Eye, London', 51.503454,-0.119562],
        ['Palace of Westminster, London', 51.499633,-0.124755]
    ];
                        
    // Info Window Content
    var infoWindowContent = [
    ['<div class="info_content">' +
        '<h3>London Eye</h3>' +
        '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
        ['<div class="info_content">' +
        '<h3>Palace of Westminster</h3>' +
        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
        '</div>']
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
}