package wquery;

#if jquery
	typedef JQuery = js.JQuery;
#else
	typedef JQuery = js.jquery.JQuery
#end
