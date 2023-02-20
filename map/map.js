
function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
 
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    map.setTilt(50);

    var markers = [
        ['Filiala Chișinău' , 47.034591, 28.857157],
        ['Filiala Bălți' ,  47.7623599, 27.928665],
        ['Sediul' , 46.997125341279045, 28.82071134047601],
        ['Filiala Ungheni' , 47.21010971069336, 27.792118072509766],
        ['Filiala Criuleni' , 47.209547, 29.158062],
        ['Filiala Călălrași' , 47.249605, 28.313869],
    ];

   
    var infoWindowContent = [
        ['<img src="../images/chisinau.png">'+
         '<div class="text"><h4><b>Filiala Chișinău</b></h4></div>'+
         '<br><div class="description"><div class="sub-text">Adresa:</div> str. Andrei Doga 27, Chișinău</div>'+
         '<br><a class="map-item" href="https://www.facebook.com/profile.php?id=100083381340571"><i class="fa-brands fa-facebook"></i></a>'+
         '<a class="map-item" href="https://www.instagram.com/crucea_rosie_md_chisinau/"><i class="fa-brands fa-instagram"></i></a>'],
        ['<img src="../images/balti2.png">'+
         '<div class="text"><h4><b>Filiala Bălți</b></h4></div>'+
         '<br><div class="description"><div class="sub-text">Număr de telefon:</div> 0794 03 480</div>'+
         '<div class="description"><div class="sub-text">Adresa de e-mail:</div> cristinacrudu@mail.ru</div>'+
         '<br><a class="map-item" href="https://www.facebook.com/redcross.balti/"><i class="fa-brands fa-facebook"></i></a>'],
        ['<img src="../images/SN.png">'+
         '<div class="text"><h4><b>Sediul Central</b></h4></div>'+
         '<br><div class="description"><div class="sub-text">Adresa:</div> str. Gheorghe Asachi 67A, Chisinau</div>'+
         '<div class="description"><div class="sub-text">Număr de telefon:</div> 022 729 644</div>'+
         '<br><a class="map-item" href="https://www.facebook.com/redcross.md"><i class="fa-brands fa-facebook"></i></a>'],
        ['<img src="../images/ungheni.png">'+
         '<div class="text"><h4><b>Filiala Ungheni</b></h4></div>'+
         '<br><div class="description"><div class="sub-text">Adresa:</div> str. Alexandru cel Bun, Ungheni</div>'+
         '<br><a class="map-item" href="https://www.facebook.com/ungheni.redcross/"><i class="fa-brands fa-facebook"></i></a>'],
        ['<img src="../images/criuleni.png">'+
         '<div class="text"><h4><b>Filiala Criuleni</b></h4></div>'+
         '<br><a class="map-item" href="https://www.facebook.com/redcross.criuleni/about/?ref=page_internal"><i class="fa-brands fa-facebook"></i></a>'],
        ['<img src="../images/calarasi.png">'+
         '<div class="text"><h4><b>Filiala Călărași</b></h4></div>'+
         '<br><a class="map-item" href="https://www.facebook.com/CruciiRosiiCalarasi"><i class="fa-brands fa-facebook"></i></a>'],

    ];

    
    var infoWindow = new google.maps.InfoWindow(), marker, i;

    
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });

    
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infoWindow.setContent(infoWindowContent[i][0]);
            infoWindow.open(map, marker);
        }
    })(marker, i));

    
     map.fitBounds(bounds);
    }

    
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function() {
        this.setZoom(7);
        google.maps.event.removeListener(boundsListener);
    });
}

window.initMap = initMap;