package wquery;

@:jsRequire("wquery", "Event") extern class Event<EventArgsType>
{
	function new() : Void;
	private var handlers : Array<EventArgsType -> Void>;
	function on(handler:EventArgsType -> Void) : Void;
	function off(?handler:EventArgsType -> Void) : Void;
	function fire(args:EventArgsType) : Void;
}