// create map
const map = L.map('mapid').setView([-9.6490476, -35.7184664], 15);

//create add add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupIcon: [170, 2]

})

// create popup overlay

const popup = L.popup({
    closeButton: false,
})


//create and add marker
L.marker([-9.6490476, -35.7184664])
.addTo(map)
.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
.openPopup();