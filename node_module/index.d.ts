export class Application
{
	private static templates : haxe.ds.ObjectMap<any, Template>;
	private static getTemplate(klass:Class<Component>) : Template;
	static run<T:Component>(selector:any, componentClass:Class<T>, params?:any) : T;
}

type AttachMode = string;

export class Component
{
	constructor(parent:Component, parentNode:haxe.extern.EitherType<string, haxe.extern.EitherType<js.html.Element, JQuery>>, params?:any, attachMode?:AttachMode);
	page : Component;
	parent : Component;
	id : string;
	fullID : string;
	prefixID : string;
	children : any;
	private nextAnonimID : number;
	private nodes : JQuery;
	private template() : { };
	remove() : void;
	private q(arg:any, context?:any) : JQuery;
	private attachNode(node:js.html.DocumentFragment, parentNode:JQuery, attachMode:AttachMode) : void;
}

export class ComponentInitializationException
{
	constructor(message:string);
	message : string;
}

export class ComponentList<T:Component>
{
	constructor(type:Class<T>, parentComponent:Component, parentNode:JQuery, paramsList?:any[]);
	private type : Class<T>;
	private parentComponent : Component;
	private parentNode : JQuery;
	private emptyContent : string;
	private components : T[];
	length : number;
	create(params?:any, append?:boolean) : T;
	clear() : void;
	iterator() : Iterator<T>;
	getByIndex(n:number) : T;
}

export class ComponentTools
{
	static processSubstitutions(baseNode:js.html.Node, object:any) : void;
	private static processSubstitution(s:string, object:any) : string;
	static expandDocElemIDs(prefixID:string, baseNode:GenericHtmlElement) : void;
	static htmlStringToDocumentFragment(html:string) : js.html.DocumentFragment;
	static createChildren(parent:Component, node:GenericHtmlElement, imports:any) : Component[];
	static loadFieldValues(component:Component, params:any) : void;
	private static convertValueType(rawValue:any, typedValue:any) : any;
	private static getElementAttributesAsObject(element:js.html.Element) : any;
	static callMethodIfExists(obj:any, methodName:string, args?:any[]) : void;
	static ensureStylesActive(klassName:string, css:string) : void;
	static createStyleElement(styleBlockID:string, css:string) : js.html.StyleElement;
	private static classNames : haxe.ds.ObjectMap<any, string>;
	private static classNameCounter : number;
	static getClassName(klass:Class<Component>) : string;
}

export class CssGlobalizer
{
	constructor(klassName:string);
	prefix : string;
	className(name:string) : string;
	selector(selector:string) : string;
	styles(text:string) : string;
	doc(baseNode:GenericHtmlElement) : void;
	fixJq(jq:JQuery) : JQuery;
}

export class Event<EventArgsType>
{
	constructor();
	private handlers : (arg:EventArgsType) => void[];
	on(handler:(arg:EventArgsType) => void) : void;
	off(handler?:(arg:EventArgsType) => void) : void;
	emit(args:EventArgsType) : void;
}

export class EventTools
{
	private static elemEventNames : string[];
	static attachHtmlEventHandlers(component:Component, node:GenericHtmlElement, ignoreTags:string[]) : void;
	static attachComponentEventHandlers(component:Component) : void;
}

type GenericHtmlElement =
{
	children : js.html.HTMLCollection;
	querySelectorAll(s:string) : js.html.NodeList;
}

type JQuery = js.jquery.JQuery;

type JqEvent = js.jquery.Event;

export class Template
{
	constructor(klass:Class<Component>);
	private doc : js.html.DocumentFragment;
	private preparedDoc : js.html.DocumentFragment;
	css : string;
	imports : any;
	newDoc() : js.html.DocumentFragment;
	private static getImports(klass:Class<Component>, superKlass:Class<Component>) : any;
	private static getDoc(klass:Class<Component>, superTemplate:Template) : js.html.DocumentFragment;
	private static getRawDoc(klass:Class<Component>) : js.html.DocumentFragment;
	private static resolvePlaceHolders(doc:js.html.DocumentFragment) : void;
	private static processStyles(klassName:string, doc:js.html.DocumentFragment) : string;
	private static extractChildrenNodes(base:js.html.Element) : js.html.DocumentFragment;
	private static getImmediateChildren(base:GenericHtmlElement, tag:string) : js.html.Element[];
}