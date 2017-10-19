package wquery;

@:jsRequire("wquery", "ComponentList") extern class ComponentList<T:wquery.Component>
{
	function new(type:Class<T>, parentComponent:wquery.Component, parentNode:wquery.JQuery, ?paramsList:Array<Dynamic>) : Void;
	private var type : Class<T>;
	private var parentComponent : wquery.Component;
	private var parentNode : wquery.JQuery;
	private var emptyContent : String;
	private var components : Array<T>;
	var length(default, null) : Int;
	function create(?params:Dynamic, ?append:Bool) : T;
	function clear() : Void;
	function iterator() : Iterator<T>;
	function getByIndex(n:Int) : T;
}