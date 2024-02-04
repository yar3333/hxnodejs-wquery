package wquery;

@:autoBuild(wquery.Macro.buildComponent()) @:jsRequire("wquery", "Component") extern class Component {
	private function new(parent:wquery.Component, parentNode:haxe.extern.EitherType<String, haxe.extern.EitherType<js.html.Element, js.JQuery>>, ?params:Dynamic, ?attachMode:wquery.AttachMode):Void;
	var page(default, null) : wquery.Component;
	var parent(default, null) : wquery.Component;
	var id(default, null) : String;
	var fullID(default, null) : String;
	var prefixID(default, null) : String;
	var children(default, null) : Dynamic<wquery.Component>;
	private var nextAnonimID : Int;
	private var nodes : js.JQuery;
	private function template():{ };
	function remove():Void;
	private function q(arg:Dynamic, ?context:Dynamic):js.JQuery;
	private function attachNode(node:js.html.Element, parentNode:js.JQuery, attachMode:wquery.AttachMode):Void;
	static function create<T:(wquery.Component)>(klass:Class<T>, parent:wquery.Component, parentNode:haxe.extern.EitherType<String, haxe.extern.EitherType<js.html.Element, js.JQuery>>, ?params:Dynamic, ?attachMode:wquery.AttachMode):T;
}