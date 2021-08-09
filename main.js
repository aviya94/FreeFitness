var mainApp = {};
(function () {
  var mainContainer = document.getElementById("main_container");

  // Logout the user and change to the login page
  var logtout = function () {
    firebase
      .auth()
      .signOut()
      .then(
        function () {
          window.location.replace("login.html");
        },
        function () {}
      );
  };


  var init = function () {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        mainContainer.style.display = "";
      } else {
        // No user is signed in.
        mainContainer.style.display = "none";
        window.location.replace("login.html");
      }
    });
  };

  init();

  mainApp.logout = logtout;
})();

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          /*when an item is clicked, update the original select box,
          and the selected item:*/
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                  s.selectedIndex = i;
                  h.innerHTML = this.innerHTML;
                  y = this.parentNode.getElementsByClassName("same-as-selected");
                  yl = y.length;
                  for (k = 0; k < yl; k++) {
                      y[k].removeAttribute("class");
                  }
                  this.setAttribute("class", "same-as-selected");
                  break;
              }
          }
          h.click();
      });
      b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
          arrNo.push(i);
      } else {
          y[i].classList.remove("select-arrow-active");
      }
  }
  for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
      }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

var map = L.map("map", {
zoomControl: true,
maxZoom: 28,
minZoom: 15,
}).fitBounds([
[31.987334299687106, 34.926075336051994],
[32.010167028893086, 34.96238629449836],
]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix(
'<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>'
);
var autolinker = new Autolinker({
truncate: { length: 30, location: "smart" },
});
var bounds_group = new L.featureGroup([]);
function setBounds() {}
map.createPane("pane_OSMStandard_0");
map.getPane("pane_OSMStandard_0").style.zIndex = 400;
var layer_OSMStandard_0 = L.tileLayer(
"http://tile.openstreetmap.org/{z}/{x}/{y}.png",
{
pane: "pane_OSMStandard_0",
opacity: 1.0,
attribution:
'<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
minZoom: 1,
maxZoom: 28,
minNativeZoom: 0,
maxNativeZoom: 19,
}
);
layer_OSMStandard_0;
map.addLayer(layer_OSMStandard_0);
function pop____1(feature, layer) {
var popupContent =
'<table>\
<tr>\
<th scope="row">id:</th>\
<td>' +
(feature.properties["id"] !== null
? autolinker.link(feature.properties["id"].toLocaleString())
: "") +
'</td>\
</tr>\
<tr>\
<th scope="row">name:</th>\
<td>' +
(feature.properties["name"] !== null
? autolinker.link(feature.properties["name"].toLocaleString())
: "") +
'</td>\
</tr>\
<tr>\
<td colspan="2">' +
(feature.properties["distance"] !== null
? autolinker.link(feature.properties["distance"].toLocaleString())
: "") +
'</td>\
</tr>\
<tr>\
<th scope="row">population:</th>\
<td>' +
(feature.properties["population"] !== null
? autolinker.link(feature.properties["population"].toLocaleString())
: "") +
'</td>\
</tr>\
<tr>\<th scope="row">length:</th>\
<td>' +
(feature.properties["length"] !== null
? autolinker.link(feature.properties["length"].toLocaleString())
: "") +
"</td>\
</tr>\
</table>";
layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style____1_0() {
return {
pane: "pane____1",
opacity: 1,
color: "rgba(109,173,252,1.0)",
dashArray: "",
lineCap: "square",
lineJoin: "bevel",
weight: 3.5,
fillOpacity: 0,
interactive: true,
};
}
map.createPane("pane____1");
map.getPane("pane____1").style.zIndex = 401;
map.getPane("pane____1").style["mix-blend-mode"] = "normal";
var layer____1 = new L.geoJson(json____1, {
attribution: "",
interactive: true,
dataVar: "json____1",
layerName: "layer____1",
pane: "pane____1",
onEachFeature: pop____1,
style: style____1_0,
});
bounds_group.addLayer(layer____1);
map.addLayer(layer____1);
function pop____2(feature, layer) {
var popupContent =
'<table>\
<tr>\<th scope="row">id:</th>\
<td>' +
(feature.properties["id"] !== null
? autolinker.link(feature.properties["id"].toLocaleString())
: "") +
'</td>\
</tr>\
<tr>\<th scope="row">name:</th>\
<td>' +
(feature.properties["name"] !== null
? autolinker.link(feature.properties["name"].toLocaleString())
: "") +
'</td>\
</tr>\
<tr>\
<td colspan="2">' +
(feature.properties["distance"] !== null
? autolinker.link(feature.properties["distance"].toLocaleString())
: "") +
'</td>\
</tr>\
<tr>\<th scope="row">size:</th>\
<td>' +
(feature.properties["size"] !== null
? autolinker.link(feature.properties["size"].toLocaleString())
: "") +
'</td>\
</tr>\
<tr>\<th scope="row">population:</th>\
<td>' +
(feature.properties["population"] !== null
? autolinker.link(feature.properties["population"].toLocaleString())
: "") +
"</td>\
</tr>\
</table>";
layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style____2_0() {
return {
pane: "pane____2",
opacity: 1,
color: "rgba(35,35,35,1.0)",
dashArray: "",
lineCap: "butt",
lineJoin: "miter",
weight: 1.0,
fill: true,
fillOpacity: 1,
fillColor: "rgba(0,91,91,1.0)",
interactive: true,
};
}
map.createPane("pane____2");
map.getPane("pane____2").style.zIndex = 402;
map.getPane("pane____2").style["mix-blend-mode"] = "normal";
var layer____2 = new L.geoJson(json____2, {
attribution: "",
interactive: true,
dataVar: "json____2",
layerName: "layer____2",
pane: "pane____2",
onEachFeature: pop____2,
style: style____2_0,
});
bounds_group.addLayer(layer____2);
map.addLayer(layer____2);

setBounds();

//fields
var inputTextField = document.getElementById("fname");
var searchButton = document.getElementById("searchButton");
var volumeField = document.getElementById("VolumeLabel");
var lengthField = document.getElementById("LengthLabel");

// search
var searchFunction = function () {
var delta = 10;
var finalIndex = -1;
var objectName = "";

//console.log(json____2);

var fixedValue = parseInt(inputTextField.value);

if (fixedValue < 0 || isNaN(fixedValue)) {
return;
}

//if volume check
if (volumeField.checked) {
for (i = 0; i < json____2.features.length; i++) {
var currentDelta = Math.abs(
json____2.features[i].properties.size - fixedValue
);
if (currentDelta < delta) {
delta = currentDelta;
finalIndex = i;
}
}

if (finalIndex != -1) {
objectName = json____2.features[finalIndex].properties.name;
}
}

//if size check
if (lengthField.checked) {
for (i = 0; i < json____1.features.length; i++) {
var currentDelta = Math.abs(
json____1.features[i].properties.length - fixedValue
);
if (currentDelta < delta) {
delta = currentDelta;
finalIndex = i;
}
}

if (finalIndex != -1) {
objectName = json____1.features[finalIndex].properties.name;
}
}

if (objectName != "") {
var layers = Object.values(map._layers);
for (i = 0; i < layers.length; i++) {
var layer = layers[i];
var feature = layers[i].feature;
if (feature != undefined) {
if (feature.properties.name == objectName) {
layer.openPopup();
var center = layer._bounds.getCenter();
map.panTo(center);
}
}
}
}
};

// searchButton.onclick = searchFunction;

function myFunction() {
var element = document.body;
element.classList.toggle("dark-mode");
}
