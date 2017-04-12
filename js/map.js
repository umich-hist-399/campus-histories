"use strict";

/* ==============================
 * Google Sheets interface
 * ==============================
 */

// Sheetrock expects to be outputting HTML for each row, so here's a place to put it.
$('<div id="sheetrock"></div>').appendTo(document.body).hide();

function getMarkersByDateRange(year, callback) {
    // The spreadsheet must be either "visible to anyone with the link", or "public on the web".
    var sheetURL =
     "https://docs.google.com/spreadsheets/d/1FUMifB2hMs0nSj3l7NYDgqjnBBYPfPBqBzKK1kmSvBY/edit?usp=sharing#gid=0";
    var markers = [];
    $('#sheetrock').sheetrock({
        url: sheetURL,
        //query: "select * where C <= " + year + " and D >= " + year,
        query: "select *",
        fetchSize: 0,
        reset: true,
        target: document.getElementById("sheetrock"),
        rowTemplate: function(row) {
            //console.log(row);
            var m = row.cellsArray;
            m.name = m[0];
            m.teaser = m[1];
            m.kmlFile = m[2];
            m.contentPages = m[3].split(",");
            console.log(m.contentPages);
            markers.push(m);
            console.log("Row " + row.num + " is OK.");
            return $('<span></span>'); // appease the sheetrock table handler
        },
        callback: function (error, options, response) {
            console.log("Retrieved " + markers.length + " rows.");
            //console.log(error, options, response);

            // when data is done loading, execute supplied callback function
            callback(markers);
        }
    });
}

function loadMarker(i, markerData) {

  var slug = markerData.kmlFile;
  var filename = "kml/" + slug + ".kml";
  var geojsonFeature = {};
  $.ajax(filename).done(function(xml) {
    geojsonFeature = toGeoJSON.kml(xml);
    //console.log(geojsonFeature);
    //console.log(JSON.stringify(geojsonFeature));

    // create pop-up
    console.log("assembling popup...");


    $.each(markerData.contentPages, function(i,val) {
      var filename = val + '.html';
      console.log(filename);

      var $div = $('<div>');

      $div.load(filename + '', function(){
          console.log("getting data from file...")
          //console.log($(this).html());
          var title = $(this).find("h1:first");
          console.log(title);
          var ttext = $(title).text();
          console.log(ttext);
      });


    });

    var popup = '<a href="#"><div class="map-popup">';
    popup += "<h4>" + markerData.name + "</h4>";
    popup += '<p>' + markerData.teaser + '</p>';
    popup += '</div></a>';

    popup += '<a href="#"><div class="map-popup">';
    popup += "<h4>The University Goes South</h4>";
    popup += '<p>Nothing Expands like a University</p>';
    popup += '</div></a>';

    console.log(popup);


    var popup = L.popup().setContent(popup);
    outlines.addLayer(L.geoJSON(geojsonFeature).bindPopup(popup).on('click', function(e) {
      //console.log(e.layer.feature.properties.name);
    }));

  }); //end ajax
} //end loadMarker


getMarkersByDateRange(year, function(markers) {
    // clear away old markers
    outlines.clearLayers();
    // and add the markers for this year
    $.each(markers, loadMarker);
    console.log(outlines);
    map.addLayer(outlines);
  }
);
