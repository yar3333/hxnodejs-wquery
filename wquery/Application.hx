package wquery;

@:jsRequire("wquery", "Application") extern class Application
{
	private function new() : Void;
	private var templates : Dynamic<wquery.Template>;
	@:allow(wquery.Component)
	@:allow(wquery.Template)
	private function getTemplate(fullTag:String) : wquery.Template;
	static function run(selector:Dynamic, componentClass:Class<wquery.Component>) : wquery.Component;
}