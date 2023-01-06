var mymap = L.map('mapid').setView([50.27264, 7.26469], 7)
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mymap)
var point = L.point(400, 600)
mymap.panBy(point)