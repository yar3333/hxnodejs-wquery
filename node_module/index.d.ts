export class Application
{
	protected static templates : Map<any, Template>;
	protected static getTemplate(klass:any) : Template;
	static run<T:Component>(selector:any, componentClass:any, params?:any) : T;
}

type AttachMode = string;

export class Component
{
	protected constructor(parent:Component, parentNode:any, params?:any, attachMode?:AttachMode);
	page : Component;
	parent : Component;
	id : string;
	fullID : string;
	prefixID : string;
	children : any;
	protected nextAnonimID : number;
	protected nodes : js.JQuery;
	protected template() : { };
	remove() : void;
	protected q(arg:any, context?:any) : js.JQuery;
	protected attachNode(node:HTMLElement, parentNode:js.JQuery, attachMode:AttachMode) : void;
	static create<T:Component>(klass:any, parent:Component, parentNode:any, params?:any, attachMode?:AttachMode) : T;
}

export class ComponentInitializationException
{
	constructor(message:string);
	message : string;
}

export class ComponentList<T:Component>
{
	constructor(type:any, parentComponent:Component, parentNode:js.JQuery, paramsList?:any[]);
	protected type : any;
	protected parentComponent : Component;
	protected parentNode : js.JQuery;
	protected emptyContent : string;
	protected components : T[];
	length : number;
	create(params?:any, append?:boolean) : T;
	remove(item:T) : boolean;
	clear() : void;
	iterator() : Iterator<T>;
	getByIndex(n:number) : T;
}

export class ComponentTools
{
	static processSubstitutions(doc:DocumentFragment, object:any) : DocumentFragment;
	protected static processSubstitution(s:string, object:any) : string;
	static expandDocElemIDs(prefixID:string, baseNode:GenericHtmlElement) : void;
	static htmlStringToDocumentFragment(html:string) : DocumentFragment;
	static documentFragmentToHtmlStringTo(doc:DocumentFragment) : string;
	static createChildren(parent:Component, node:GenericHtmlElement, imports:any) : Component[];
	static loadFieldValues(component:Component, params:any) : void;
	protected static convertValueType(rawValue:any, typedValue:any) : any;
	protected static getElementAttributesAsObject(element:HTMLElement) : any;
	static callMethodIfExists(obj:any, methodName:string, args?:any[]) : void;
	static ensureStylesActive(klassName:string, css:string) : void;
	static createStyleElement(styleBlockID:string, css:string) : HTMLStyleElement;
	protected static classNames : haxe.ds.ObjectMap<any, string>;
	protected static classNameCounter : number;
	static getClassName(klass:any) : string;
	static callMethodFromParentToChildren(parent:Component, methodName:string) : void;
	static callMethodFromChildrenToParent(parent:Component, methodName:string) : void;
}

export class CssGlobalizer
{
	constructor(klassName:string);
	prefix : string;
	className(name:string) : string;
	selector(selector:string) : string;
	styles(text:string) : string;
	doc(baseNode:GenericHtmlElement) : void;
	fixJq(jq:js.JQuery) : js.JQuery;
}

export class Event<EventArgsType>
{
	constructor();
	protected handlers : (arg:EventArgsType) => void[];
	on(handler:(arg:EventArgsType) => void) : void;
	off(handler?:(arg:EventArgsType) => void) : void;
	emit(args:EventArgsType) : void;
}

export class EventTools
{
	protected static elemEventNames : string[];
	static attachHtmlEventHandlers(component:Component, node:GenericHtmlElement, ignoreTags:string[]) : void;
	static attachComponentEventHandlers(component:Component) : void;
}

type GenericHtmlElement =
{
	children : HTMLCollection;
	querySelectorAll(s:string) : NodeList;
}

export class Template
{
	constructor(klass:any);
	protected doc : DocumentFragment;
	protected preparedDoc : DocumentFragment;
	css : string;
	imports : any;
	newDoc() : DocumentFragment;
	static baseURL : string;
	protected static getImports(klass:any, superKlass:any) : any;
	protected static getDoc(klass:any, superTemplate:Template) : DocumentFragment;
	protected static getRawDoc(klass:any) : DocumentFragment;
	protected static resolvePlaceHolders(doc:DocumentFragment) : void;
	protected static processStyles(klassName:string, doc:DocumentFragment) : string;
	protected static extractChildrenNodes(base:HTMLElement) : DocumentFragment;
	protected static getImmediateChildren(base:GenericHtmlElement, tag:string) : HTMLElement[];
	protected static resolveUrlsInHtml(klass:any, base:GenericHtmlElement) : void;
	protected static resolveUrlsInCss(klass:any, css:string) : string;
	protected static getUrlFromClass(klass:any) : string;
}