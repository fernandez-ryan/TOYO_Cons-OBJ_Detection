var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_TINModel_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "TIN Model",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TINModel_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13479025.691432, 1642991.391870, 13480238.721018, 1643709.452171]
                            })
                        });
var format_Toyo_ConsObject_Detection_2 = new ol.format.GeoJSON();
var features_Toyo_ConsObject_Detection_2 = format_Toyo_ConsObject_Detection_2.readFeatures(json_Toyo_ConsObject_Detection_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toyo_ConsObject_Detection_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toyo_ConsObject_Detection_2.addFeatures(features_Toyo_ConsObject_Detection_2);cluster_Toyo_ConsObject_Detection_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Toyo_ConsObject_Detection_2
});
var lyr_Toyo_ConsObject_Detection_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Toyo_ConsObject_Detection_2, 
                style: style_Toyo_ConsObject_Detection_2,
                popuplayertitle: "Toyo_Cons-Object_Detection",
                interactive: true,
                title: '<img src="styles/legend/Toyo_ConsObject_Detection_2.png" /> Toyo_Cons-Object_Detection'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_TINModel_1.setVisible(true);lyr_Toyo_ConsObject_Detection_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_TINModel_1,lyr_Toyo_ConsObject_Detection_2];
lyr_Toyo_ConsObject_Detection_2.set('fieldAliases', {'field_1': 'Point_No', 'field_2': 'X_PRS92', 'field_3': 'Y_PRS92', 'field_4': 'field_4', });
lyr_Toyo_ConsObject_Detection_2.set('fieldImages', {'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', });
lyr_Toyo_ConsObject_Detection_2.set('fieldLabels', {'field_1': 'no label', 'field_2': 'inline label - always visible', 'field_3': 'inline label - always visible', 'field_4': 'no label', });
lyr_Toyo_ConsObject_Detection_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});