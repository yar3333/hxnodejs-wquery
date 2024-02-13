package wquery;

@:jsRequire("hxnodejs-wquery", "EventTools") extern class EventTools {
	private static var elemEventNames : Array<String>;
	static function attachHtmlEventHandlers(component:wquery.Component, node:wquery.GenericHtmlElement, ignoreTags:Array<String>):Void;
	static function attachComponentEventHandlers(component:wquery.Component):Void;
}