package wquery;

@:autoBuild(wquery.Macro.buildComponent()) @:jsRequire("wquery", "Component") extern class Component
{
	function new(app:wquery.Application, parent:wquery.Component, nodeToReplace:js.html.Element, params:Dynamic) : Void;
	var app(default, null) : wquery.Application;
	var parent(default, null) : wquery.Component;
	var id(default, null) : String;
	var fullID(default, null) : String;
	var prefixID(default, null) : String;
	var children(default, null) : Dynamic<wquery.Component>;
	private var nextAnonimID : Int;
	private var nodes : wquery.JQuery;
	private function template() : { };
	private function q(arg:Dynamic, ?context:Dynamic) : wquery.JQuery;
}