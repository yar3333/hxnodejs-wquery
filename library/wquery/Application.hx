package wquery;

@:jsRequire("wquery", "Application") extern class Application
{
	private static var templates : Dynamic<wquery.Template>;
	@:allow(wquery.Component)
	@:allow(wquery.Template)
	private static function getTemplate(fullTag:String) : wquery.Template;
	static function run(selector:Dynamic, componentClass:Class<wquery.Component>) : wquery.Component;
}