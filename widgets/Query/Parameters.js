//>>built
require({cache:{"url:widgets/Query/Parameters.html":'\x3cdiv\x3e\r\n  \x3ctable style\x3d"width:100%;border-collapse:collapse;"\x3e\r\n    \x3ctbody data-dojo-attach-point\x3d"tbody"\x3e\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./Parameters.html dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/query dijit/registry jimu/filterUtils ./SingleParameter".split(" "),function(m,n,p,q,r,e,h,k,u,g,l,s,t){return m([n,p,q],{baseClass:"jimu-widget-query-parameters",templateString:r,nls:null,partsObj:null,layerInfo:null,OPERATORS:null,_filterUtils:null,postCreate:function(){this.inherited(arguments);this._filterUtils=
new s;this.OPERATORS=e.clone(this._filterUtils.OPERATORS);this.partsObj&&this.build(this.partsObj)},destroy:function(){this.clear();this._filterUtils=null;this.inherited(arguments)},getNewFilterExpr:function(){for(var a=e.mixin({},this.partsObj),f=this._getAllIntractiveSinglePartArray(a),d=0;d<f.length;d++){var c=f[d],b=c.spId;if(b&&(b=g("#"+b,this.tbody)[0])){b=l.byNode(b).getValueObj();if(!b)return null;c.valueObj=b}}return this._filterUtils.getExprByFilterObj(a)},clear:function(){var a=g(".jimu-widget-query-single-parameter",
this.tbody);k.forEach(a,e.hitch(this,function(a){l.byNode(a).destroy()}));h.empty(this.tbody);this.layerInfo=this.partsObj=null},build:function(a,f){this.clear();this.partsObj=e.mixin({},a);this.layerInfo=e.mixin({},f);var d=this._getAllIntractiveSinglePartArray(a);k.forEach(d,e.hitch(this,function(c){var b=h.create("tr",{innerHTML:"\x3ctd\x3e\x3c/td\x3e"},this.tbody),b=g("td",b)[0],a=this._getFieldInfo(c.fieldObj.name,this.layerInfo),a=new t({nls:this.nls,part:c,fieldInfo:a,OPERATORS:this.OPERATORS});
a.placeAt(b);a.startup();c.spId=a.id}))},_getFieldInfo:function(a,f){for(var d=f.fields,c=0;c<d.length;c++){var b=d[c];if(a===b.name)return e.mixin({},b)}return null},_getAllIntractiveSinglePartArray:function(a){for(var f=[],d=0;d<a.parts.length;d++){var c=a.parts[d];if(c.parts)for(var b=0;b<c.parts.length;b++){var e=c.parts[b];e.interactiveObj&&f.push(e)}else c.interactiveObj&&f.push(c)}return f}})});