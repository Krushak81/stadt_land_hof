function initMap() {
    var offenburg = {lat: 48.469656, lng: 7.943482};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: offenburg
    });

    var contentString = '<div id="content" class="map-content-container">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="map-name-heading" class="map-name-heading">Spargel Hof</h1>'+
        '<div id="bodyContent" class="map-body-content">'+
        '<p>Badstr. 15, 77652 Offenburg' +
        '</p>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: offenburg,
        map: map,
        title: 'Offenburg Wochenmarkt'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}

