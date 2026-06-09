ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([613639.422162, 9082880.245700, 647660.086036, 9107769.270706]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PenggunaanLahanKabupatenBlitar_1 = new ol.format.GeoJSON();
var features_PenggunaanLahanKabupatenBlitar_1 = format_PenggunaanLahanKabupatenBlitar_1.readFeatures(json_PenggunaanLahanKabupatenBlitar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PenggunaanLahanKabupatenBlitar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenggunaanLahanKabupatenBlitar_1.addFeatures(features_PenggunaanLahanKabupatenBlitar_1);
var lyr_PenggunaanLahanKabupatenBlitar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PenggunaanLahanKabupatenBlitar_1, 
                style: style_PenggunaanLahanKabupatenBlitar_1,
                popuplayertitle: 'Penggunaan Lahan Kabupaten Blitar',
                interactive: true,
    title: 'Penggunaan Lahan Kabupaten Blitar<br />\
    <img src="styles/legend/PenggunaanLahanKabupatenBlitar_1_0.png" /> Badan Air<br />\
    <img src="styles/legend/PenggunaanLahanKabupatenBlitar_1_1.png" /> Hutan<br />\
    <img src="styles/legend/PenggunaanLahanKabupatenBlitar_1_2.png" /> Hutan Produktif<br />\
    <img src="styles/legend/PenggunaanLahanKabupatenBlitar_1_3.png" /> Perkebunan<br />\
    <img src="styles/legend/PenggunaanLahanKabupatenBlitar_1_4.png" /> Permukiman<br />\
    <img src="styles/legend/PenggunaanLahanKabupatenBlitar_1_5.png" /> Sawah Basah<br />\
    <img src="styles/legend/PenggunaanLahanKabupatenBlitar_1_6.png" /> Sawah Kering<br />\
    <img src="styles/legend/PenggunaanLahanKabupatenBlitar_1_7.png" /> Semak Belukar<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_PenggunaanLahanKabupatenBlitar_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PenggunaanLahanKabupatenBlitar_1];
lyr_PenggunaanLahanKabupatenBlitar_1.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Klasifikas': 'Klasifikas', 'Keterangan': 'Keterangan', });
lyr_PenggunaanLahanKabupatenBlitar_1.set('fieldImages', {'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Klasifikas': '', 'Keterangan': '', });
lyr_PenggunaanLahanKabupatenBlitar_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'Klasifikas': 'inline label - always visible', 'Keterangan': 'inline label - always visible', });
lyr_PenggunaanLahanKabupatenBlitar_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});