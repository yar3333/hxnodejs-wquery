export class Application
{
	static run(selector:any, componentClass:Class<Component>) : Component;
}

export class Component
{
	constructor(parent:Component, parentNode:(Element|JQuery), params?:any, replaceParentNode?:boolean);
	page : Component;
	parent : Component;
	id : string;
	fullID : string;
	prefixID : string;
	children : any;
	private nextAnonimID : number;
	private nodes : JQuery;
	private template() : { };
	private q(arg:any, context?:any) : JQuery;
	remove() : void;
}

export class ComponentList<T>
{
	constructor(type:Class<T>, parentComponent:Component, parentNode:JQuery, paramsList?:any[]);
	create(params?:any) : T;
	clear() : void;
}

export class CssGlobalizer
{
	constructor(klassName:string);
	prefix : string;
	className(name:string) : string;
	selector(selector:string) : string;
	styles(text:string) : string;
	doc(baseNode:HtmlElement) : void;
	fixJq(jq:JQuery) : JQuery;
}

export class Event<EventArgsType>
{
	on(handler:(arg:EventArgsType) => void) : void;
	off(handler?:(arg:EventArgsType) => void) : void;
	emit(args:EventArgsType) : void;
}
