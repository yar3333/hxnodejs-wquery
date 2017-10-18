package wquery;

@:jsRequire("wquery", "Application") extern class Application
{
	private static var templates : haxe.ds.ObjectMap<Dynamic, wquery.Template>;
	@:allow(wquery.Component)
	@:allow(wquery.Template)
	private static function getTemplate(klass:Class<wquery.Component>) : wquery.Template;
	static function run(selector:Dynamic, componentClass:Class<wquery.Component>, ?params:Dynamic) : wquery.Component;
}