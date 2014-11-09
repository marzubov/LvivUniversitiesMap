//>>built
require({cache:{"widgets/OverviewMap/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/OverviewMap/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\r\n  \x3cdiv class\x3d"settings-section" data-dojo-attach-point\x3d"searchesSection"\x3e\r\n    \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.visible}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cinput style\x3d"margin-left: 10px;" data-dojo-attach-point\x3d"visibleCheckbox" \r\n            data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd rowspan\x3d"8"\x3e\r\n            \x3cdiv class\x3d"container"\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"minDiv" class\x3d"min"\x3e\x3c/div\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"maxDiv" class\x3d"max"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.minWidth}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox"\r\n            data-dojo-attach-point\x3d"minWidth" invalidMessage\x3d\'Invalid Value.\' placeHolder\x3d"200"\r\n            data-dojo-props\x3d\'style:{width:"100%"},constraints:{min:1}\' /\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.minHeight}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox"\r\n            data-dojo-attach-point\x3d"minHeight" invalidMessage\x3d\'Invalid Value.\' placeHolder\x3d"150"\r\n            data-dojo-props\x3d\'style:{width:"100%"},constraints:{min:1}\' /\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.maxWidth}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox"\r\n            data-dojo-attach-point\x3d"maxWidth" invalidMessage\x3d\'Invalid Value.\' placeHolder\x3d"400"\r\n            data-dojo-props\x3d\'style:{width:"100%"},constraints:{min:1}\' /\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.maxHeight}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox"\r\n            data-dojo-attach-point\x3d"maxHeight" invalidMessage\x3d\'Invalid Value.\' placeHolder\x3d"300"\r\n            data-dojo-props\x3d\'style:{width:"100%"},constraints:{min:1}\' /\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv style\x3d"margin:10px; width:50px; height:25px; background-color: #83FCB6"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e${nls.minText}\x3c/td\x3e\r\n          \x3ctd\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv style\x3d"margin:10px; width:50px; height:25px; background-color: #0080C0"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e${nls.maxText}\x3c/td\x3e\r\n          \x3ctd\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/OverviewMap/setting/css/style.css":".jimu-widget-overviewmap-setting{margin:0; padding:0; font-size:15px;}.jimu-widget-overviewmap-setting .setting-table \x3e thead \x3e tr \x3e th,.jimu-widget-overviewmap-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.jimu-widget-overviewmap-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto; text-align: right; padding-right:15px;}.jimu-widget-overviewmap-setting .input-table \x3e tbody \x3e tr \x3e .second{width:100px;}.jimu-widget-overviewmap-setting .input-table \x3e tbody \x3e tr \x3e .third{width:35px;}.jimu-widget-overviewmap-setting .container{width: 450px; height: 330px;}.jimu-widget-overviewmap-setting .min{background-color: #83FCB6; position: absolute; width:200px; height: 150px; margin: 20px; z-index: 10; right: 0px; bottom: 0px;}.jimu-widget-overviewmap-setting .max{background-color: #0080C0; position: absolute; width:400px; height: 300px; margin: 20px; right: 0px; bottom: 0px;}",
"*now":function(f){f(['dojo/i18n!*preload*widgets/OverviewMap/setting/nls/Setting*["ar","cs","da","de","en","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","ROOT"]'])}}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/on dojo/dom-style dijit/form/NumberTextBox dijit/form/CheckBox".split(" "),function(f,g,h,c,d,e){return f([g,h],{baseClass:"jimu-widget-overviewmap-setting",startup:function(){this.inherited(arguments);this.config.overviewMap||(this.config.overviewMap={});this.setConfig(this.config);this.own(d(this.minWidth,"change",c.hitch(this,this.onTextBoxChange,"minWidth")));this.own(d(this.minHeight,"change",
c.hitch(this,this.onTextBoxChange,"minHeight")));this.own(d(this.maxWidth,"change",c.hitch(this,this.onTextBoxChange,"maxWidth")));this.own(d(this.maxHeight,"change",c.hitch(this,this.onTextBoxChange,"maxHeight")))},onTextBoxChange:function(a,b){b||(b=0);"minWidth"===a?e.set(this.minDiv,"width",b+"px"):"minHeight"===a?e.set(this.minDiv,"height",b+"px"):"maxWidth"===a?e.set(this.maxDiv,"width",b+"px"):"maxHeight"===a&&e.set(this.maxDiv,"height",b+"px")},setConfig:function(a){this.config=a;this.visibleCheckbox.set("checked",
a.overviewMap.visible);a.minWidth&&this.minWidth.set("value",a.minWidth);a.minHeight&&this.minHeight.set("value",a.minHeight);a.maxWidth&&this.maxWidth.set("value",a.maxWidth);a.maxHeight&&this.maxHeight.set("value",a.maxHeight)},getConfig:function(){this.config.overviewMap.visible=this.visibleCheckbox.checked;this.config.minWidth=parseInt(this.minWidth.get("value"),10);this.config.minHeight=parseInt(this.minHeight.get("value"),10);this.config.maxWidth=parseInt(this.maxWidth.get("value"),10);this.config.maxHeight=
parseInt(this.maxHeight.get("value"),10);return this.config}})});