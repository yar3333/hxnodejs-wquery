package wquery;

@:jsRequire("wquery", "Application") extern class Application
{
	private static var templates : haxe.ds.ObjectMap<Dynamic, wquery.Template>;
	@:allow(wquery.Component)
	@:allow(wquery.Template)
	private static function getTemplate(klass:Class<wquery.Component>) : wquery.Template;
	static function run<T:wquery.Component>(selector:Dynamic, componentClass:Class<T>, ?params:Dynamic) : T;
}