package wquery;

#if jquery
	typedef JqEvent = js.JQuery.JqEvent;
#else
	typedef JqEvent = js.jquery.Event;
#end
