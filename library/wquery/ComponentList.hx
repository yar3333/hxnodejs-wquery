package wquery;

@:jsRequire("wquery", "ComponentList") extern class ComponentList<T>
{
	function new(type:Class<T>, parentComponent:wquery.Component, parentNode:wquery.JQuery, ?paramsList:Array<Dynamic>) : Void;
	private var type : Class<T>;
	private var parentComponent : wquery.Component;
	private var parentNode : wquery.JQuery;
	private var emptyContent : String;
	private var components : Array<T>;
	function create(?params:Dynamic) : T;
	function clear() : Void;
}