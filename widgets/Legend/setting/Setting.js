//>>built
require({cache:{"widgets/Legend/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Legend/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\r\n  \x3cdiv class\x3d"settings-section" data-dojo-attach-point\x3d"searchesSection"\x3e\r\n    \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.arrangement}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cselect style\x3d"margin-left: 10px;" data-dojo-attach-point\x3d"selectArrangement" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n              \x3coption value\x3d"0"\x3e${nls.left}\x3c/option\x3e\r\n              \x3coption value\x3d"1"\x3e${nls.right}\x3c/option\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.autoUpdate}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cinput style\x3d"margin-left: 10px;" data-dojo-attach-point\x3d"autoUpdate" \r\n            data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.respectCurrentMapScale}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cinput style\x3d"margin-left: 10px;" data-dojo-attach-point\x3d"respectCurrentMapScale" \r\n            data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Legend/setting/css/style.css":".jimu-widget-legend-setting{margin:0; padding:0; font-size:15px;}.jimu-widget-legend-setting .dijitArrowButtonContainer{width: 17px;}.jimu-widget-legend-setting .dijitSelect{height: 30px; width: 100%;}.jimu-widget-legend-setting .setting-table \x3e thead \x3e tr \x3e th,.jimu-widget-legend-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.jimu-widget-legend-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto; text-align: right; padding-right:15px;}.jimu-widget-legend-setting .input-table \x3e tbody \x3e tr \x3e .second{width:200px;}.jimu-widget-legend-setting .input-table \x3e tbody \x3e tr \x3e .third{width:35px;}",
"*now":function(b){b(['dojo/i18n!*preload*widgets/Legend/setting/nls/Setting*["ar","cs","da","de","en","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","ROOT"]'])}}});
define(["dojo/_base/declare","jimu/BaseWidgetSetting","dijit/_WidgetsInTemplateMixin","dijit/form/NumberTextBox","dijit/form/CheckBox"],function(b,c,d){return b([c,d],{baseClass:"jimu-widget-legend-setting",startup:function(){this.inherited(arguments);this.config.legend||(this.config.legend={});this.setConfig(this.config)},setConfig:function(a){this.config=a;void 0!==a.legend.arrangement&&this.selectArrangement.set("value",a.legend.arrangement);this.autoUpdate.set("checked",a.legend.autoUpdate);this.respectCurrentMapScale.set("checked",
a.legend.respectCurrentMapScale)},getConfig:function(){this.config.legend.arrangement=parseInt(this.selectArrangement.get("value"),10);this.config.legend.autoUpdate=this.autoUpdate.checked;this.config.legend.respectCurrentMapScale=this.respectCurrentMapScale.checked;return this.config}})});