package wquery;

@:jsRequire("hxnodejs-wquery", "CssGlobalizer") extern class CssGlobalizer {
	function new(klassName:String):Void;
	var prefix : String;
	function className(name:String):String;
	function selector(selector:String):String;
	function styles(text:String):String;
	function doc(baseNode:wquery.GenericHtmlElement):Void;
	function fixJq(jq:js.JQuery):js.JQuery;
}