package wquery;

@:jsRequire("wquery", "Template") extern class Template
{
	function new(klass:Class<wquery.Component>) : Void;
	private var doc : js.html.DocumentFragment;
	private var preparedDoc : js.html.DocumentFragment;
	var css(default, null) : String;
	var imports(default, null) : Dynamic<wquery.Component>;
	function newDoc() : js.html.DocumentFragment;
	private static function getImports(klass:Class<wquery.Component>, superKlass:Class<wquery.Component>) : Dynamic<wquery.Component>;
	private static function getDoc(klass:Class<wquery.Component>, superTemplate:wquery.Template) : js.html.DocumentFragment;
	private static function getRawDoc(klass:Class<wquery.Component>) : js.html.DocumentFragment;
	private static function resolvePlaceHolders(doc:js.html.DocumentFragment) : Void;
	private static function processStyles(klassName:String, doc:js.html.DocumentFragment) : String;
	private static function extractChildrenNodes(base:js.html.Element) : js.html.DocumentFragment;
	private static function getImmediateChildren(base:wquery.GenericHtmlElement, tag:String) : Array<js.html.Element>;
}