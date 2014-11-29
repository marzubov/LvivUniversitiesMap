//>>built
define(["dojo/_base/lang","dojo/_base/array","jimu/LayerInfos/LayerInfos","dojo/Deferred","dojo/promise/all"],function(d,e,g,f,h){function m(a){var b=[],c=[];e.forEach(a,function(a){0>b.indexOf(a.name)?b.push(a.name):c.push(a)});e.forEach(c,function(a){a.name=a.name+"-"+a.id})}var l={readLayerInfosObj:function(a){return g.getInstance(a,a.itemInfo)},readLayerInfosFromMap:function(a){var b=new f;g.getInstance(a,a.itemInfo).then(d.hitch(this,function(a){var k=[];a.traversal(d.hitch(this,function(a){k.push(a)}));
b.resolve(k)}),d.hitch(this,function(a){console.error(a);b.reject(a)}));return b},readLayerObjectsFromMap:function(a){var b=new f,c=[];this.readLayerInfosFromMap(a).then(d.hitch(this,function(a){e.forEach(a,d.hitch(this,function(a){c.push(a.getLayerObject())}));h(c).then(d.hitch(this,function(a){b.resolve(a)}),d.hitch(this,function(a){b.reject(a);console.error(a)}))}),d.hitch(this,function(a){b.reject(a)}));return b},readConfigLayerInfosFromMap:function(a){var b=new f,c=[];this.readLayerInfosFromMap(a).then(d.hitch(this,
function(a){var f=[];e.forEach(a,function(a){c.push(a.getLayerType())});h(c).then(d.hitch(this,function(c){e.forEach(c,d.hitch(this,function(b,c){"FeatureLayer"===b&&(a[c].name=a[c].title,f.push(a[c]))}));m(f);b.resolve(f)}),d.hitch(this,function(a){b.reject(a)}))}),d.hitch(this,function(a){b.reject(a)}));return b},getConfigInfosFromLayerInfos:function(a){return e.map(a,function(a){return l.getConfigInfoFromLayerInfo(a)})},getConfigInfoFromLayerInfo:function(a){var b={};b.name=a.name;b.id=a.id;b.show=
a.isShowInMap();b.layer={url:a.getUrl()};if((a=a.getPopupInfo())&&!a.description)b.layer.fields=e.map(a.fieldInfos,function(a){return{name:a.fieldName,alias:a.label.toLowerCase(),show:a.visible}});return b}};return l});