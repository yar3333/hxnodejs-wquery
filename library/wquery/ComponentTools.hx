package wquery;

@:jsRequire("wquery", "ComponentTools") extern class ComponentTools
{
	static function processSubstitutions(baseNode:js.html.Node, object:Dynamic) : Void;
	private static function processSubstitution(s:String, object:Dynamic) : String;
	static function expandDocElemIDs(prefixID:String, baseNode:wquery.GenericHtmlElement) : Void;
	static function htmlStringToDocumentFragment(html:String) : js.html.DocumentFragment;
	static function createChildren(parent:wquery.Component, node:wquery.GenericHtmlElement, imports:Dynamic<wquery.Component>) : Array<wquery.Component>;
	static function loadFieldValues(component:wquery.Component, params:Dynamic) : Void;
	private static function convertValueType(rawValue:Dynamic, typedValue:Dynamic) : Dynamic;
	private static function getElementAttributesAsObject(element:js.html.Element) : Dynamic;
	static function callMethodIfExists(obj:Dynamic, methodName:String, ?args:Array<Dynamic>) : Void;
	static function ensureStylesActive(klassName:String, css:String) : Void;
	static function createStyleElement(styleBlockID:String, css:String) : js.html.StyleElement;
}