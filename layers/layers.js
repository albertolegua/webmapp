var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Provincias_1 = new ol.format.GeoJSON();
var features_Provincias_1 = format_Provincias_1.readFeatures(json_Provincias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincias_1.addFeatures(features_Provincias_1);
var lyr_Provincias_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Provincias_1, 
                style: style_Provincias_1,
                interactive: true,
    title: 'Provincias<br />\
    <img src="styles/legend/Provincias_1_0.png" /> ACOBAMBA<br />\
    <img src="styles/legend/Provincias_1_1.png" /> ANGARAES<br />\
    <img src="styles/legend/Provincias_1_2.png" /> CASTROVIRREYNA<br />\
    <img src="styles/legend/Provincias_1_3.png" /> CHURCAMPA<br />\
    <img src="styles/legend/Provincias_1_4.png" /> HUANCAVELICA<br />\
    <img src="styles/legend/Provincias_1_5.png" /> HUAYTARA<br />\
    <img src="styles/legend/Provincias_1_6.png" /> TAYACAJA<br />'
        });
var format_Vasdeacceso_2 = new ol.format.GeoJSON();
var features_Vasdeacceso_2 = format_Vasdeacceso_2.readFeatures(json_Vasdeacceso_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vasdeacceso_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vasdeacceso_2.addFeatures(features_Vasdeacceso_2);
var lyr_Vasdeacceso_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vasdeacceso_2, 
                style: style_Vasdeacceso_2,
                interactive: true,
    title: 'Vías de acceso<br />\
    <img src="styles/legend/Vasdeacceso_2_0.png" /> Asfaltado<br />\
    <img src="styles/legend/Vasdeacceso_2_1.png" /> Afirmado<br />\
    <img src="styles/legend/Vasdeacceso_2_2.png" /> Sin Afirmar<br />\
    <img src="styles/legend/Vasdeacceso_2_3.png" /> Trocha<br />'
        });
var format_CentrosPoblados_3 = new ol.format.GeoJSON();
var features_CentrosPoblados_3 = format_CentrosPoblados_3.readFeatures(json_CentrosPoblados_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentrosPoblados_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentrosPoblados_3.addFeatures(features_CentrosPoblados_3);
var lyr_CentrosPoblados_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CentrosPoblados_3, 
                style: style_CentrosPoblados_3,
                interactive: true,
    title: 'Centros Poblados<br />\
    <img src="styles/legend/CentrosPoblados_3_0.png" /> Capital de Distrito<br />\
    <img src="styles/legend/CentrosPoblados_3_1.png" /> Pueblo<br />'
        });

lyr_GoogleTerrain_0.setVisible(true);lyr_Provincias_1.setVisible(true);lyr_Vasdeacceso_2.setVisible(true);lyr_CentrosPoblados_3.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_Provincias_1,lyr_Vasdeacceso_2,lyr_CentrosPoblados_3];
lyr_Provincias_1.set('fieldAliases', {'gid': 'gid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'ccdd': 'ccdd', 'nombdep': 'nombdep', 'ccpp': 'ccpp', 'nombprov': 'nombprov', 'capital': 'capital', 'idprov': 'idprov', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_Vasdeacceso_2.set('fieldAliases', {'gid': 'gid', 'ccodruta': 'ccodruta', 'dlongitud': 'dlongitud', 'csentido': 'csentido', 'csuperfici': 'csuperfici', 'rst_lbl': 'rst_lbl', 'sentido': 'sentido', 'data': 'data', 'fecha_act': 'fecha_act', 'base': 'base', 'iddpto': 'iddpto', 'nombdep': 'nombdep', 'idprov': 'idprov', 'nombprov': 'nombprov', 'iddist': 'iddist', 'nombdist': 'nombdist', 'trayectori': 'trayectori', 'cambios': 'cambios', 'ruta': 'ruta', 'notas': 'notas', 'mod_eje': 'mod_eje', });
lyr_CentrosPoblados_3.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'provincia': 'provincia', 'distrito': 'distrito', 'region_nat': 'region_nat', 'longitud': 'longitud', 'latitud': 'latitud', 'categoria': 'categoria', 'codigo': 'codigo', 'ubigeo': 'ubigeo', 'departamen': 'departamen', 'altitud': 'altitud', 'descripcio': 'descripcio', 'cpv2017_gi': 'cpv2017_gi', 'poblacion': 'poblacion', 'origen': 'origen', 'ccdd': 'ccdd', 'ccpp': 'ccpp', 'ccdi': 'ccdi', 'cod_grupo': 'cod_grupo', 'flag_tipo_': 'flag_tipo_', });
lyr_Provincias_1.set('fieldImages', {'gid': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'ccdd': 'TextEdit', 'nombdep': 'TextEdit', 'ccpp': 'TextEdit', 'nombprov': 'TextEdit', 'capital': 'TextEdit', 'idprov': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Vasdeacceso_2.set('fieldImages', {'gid': 'TextEdit', 'ccodruta': 'TextEdit', 'dlongitud': 'TextEdit', 'csentido': 'TextEdit', 'csuperfici': 'TextEdit', 'rst_lbl': 'TextEdit', 'sentido': 'TextEdit', 'data': 'TextEdit', 'fecha_act': 'TextEdit', 'base': 'TextEdit', 'iddpto': 'TextEdit', 'nombdep': 'TextEdit', 'idprov': 'TextEdit', 'nombprov': 'TextEdit', 'iddist': 'TextEdit', 'nombdist': 'TextEdit', 'trayectori': 'TextEdit', 'cambios': 'TextEdit', 'ruta': 'TextEdit', 'notas': 'TextEdit', 'mod_eje': 'TextEdit', });
lyr_CentrosPoblados_3.set('fieldImages', {'id': 'TextEdit', 'objectid': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'region_nat': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'categoria': 'TextEdit', 'codigo': 'TextEdit', 'ubigeo': 'TextEdit', 'departamen': 'TextEdit', 'altitud': 'TextEdit', 'descripcio': 'TextEdit', 'cpv2017_gi': 'TextEdit', 'poblacion': 'TextEdit', 'origen': 'TextEdit', 'ccdd': 'TextEdit', 'ccpp': 'TextEdit', 'ccdi': 'TextEdit', 'cod_grupo': 'TextEdit', 'flag_tipo_': 'TextEdit', });
lyr_Provincias_1.set('fieldLabels', {'gid': 'header label', 'objectid_1': 'header label', 'objectid': 'header label', 'ccdd': 'header label', 'nombdep': 'header label', 'ccpp': 'header label', 'nombprov': 'header label', 'capital': 'header label', 'idprov': 'header label', 'shape_leng': 'header label', 'shape_area': 'header label', });
lyr_Vasdeacceso_2.set('fieldLabels', {'gid': 'header label', 'ccodruta': 'header label', 'dlongitud': 'header label', 'csentido': 'header label', 'csuperfici': 'header label', 'rst_lbl': 'header label', 'sentido': 'header label', 'data': 'header label', 'fecha_act': 'header label', 'base': 'header label', 'iddpto': 'header label', 'nombdep': 'header label', 'idprov': 'header label', 'nombprov': 'header label', 'iddist': 'header label', 'nombdist': 'header label', 'trayectori': 'header label', 'cambios': 'header label', 'ruta': 'header label', 'notas': 'header label', 'mod_eje': 'header label', });
lyr_CentrosPoblados_3.set('fieldLabels', {'id': 'header label', 'objectid': 'header label', 'provincia': 'header label', 'distrito': 'header label', 'region_nat': 'header label', 'longitud': 'header label', 'latitud': 'header label', 'categoria': 'header label', 'codigo': 'header label', 'ubigeo': 'header label', 'departamen': 'header label', 'altitud': 'header label', 'descripcio': 'header label', 'cpv2017_gi': 'header label', 'poblacion': 'header label', 'origen': 'header label', 'ccdd': 'header label', 'ccpp': 'header label', 'ccdi': 'header label', 'cod_grupo': 'header label', 'flag_tipo_': 'header label', });
lyr_CentrosPoblados_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});