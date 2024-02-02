package wquery;

@:jsRequire("wquery", "wquery.ComponentInitializationException") extern class ComponentInitializationException {
	function new(message:String):Void;
	var message(default, null) : String;
}