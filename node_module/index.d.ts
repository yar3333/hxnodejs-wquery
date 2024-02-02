export namespace wquery
{
	export class Application
	{
		private static templates : Map<any, wquery.Template>;
		private static getTemplate(klass:any) : wquery.Template;
		static run<T:wquery.Component>(selector:any, componentClass:any, params?:any) : T;
	}
	
	type AttachMode = string;
	
	export class Component
	{
		private constructor(parent:wquery.Component, parentNode:any, params?:any, attachMode?:wquery.AttachMode);
		page : wquery.Component;
		parent : wquery.Component;
		id : string;
		fullID : string;
		prefixID : string;
		children : any;
		private nextAnonimID : number;
		private nodes : js.JQuery;
		private template() : { };
		remove() : void;
		private q(arg:any, context?:any) : js.JQuery;
		private attachNode(node:HTMLElement, parentNode:js.JQuery, attachMode:wquery.AttachMode) : void;
		static create<T:wquery.Component>(klass:any, parent:wquery.Component, parentNode:any, params?:any, attachMode?:wquery.AttachMode) : T;
	}
	
	export class ComponentInitializationException
	{
		constructor(message:string);
		message : string;
	}
	
	export class ComponentList<T:wquery.Component>
	{
		constructor(type:any, parentComponent:wquery.Component, parentNode:js.JQuery, paramsList?:any[]);
		private type : any;
		private parentComponent : wquery.Component;
		private parentNode : js.JQuery;
		private emptyContent : string;
		private components : T[];
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
		private static processSubstitution(s:string, object:any) : string;
		static expandDocElemIDs(prefixID:string, baseNode:wquery.GenericHtmlElement) : void;
		static htmlStringToDocumentFragment(html:string) : DocumentFragment;
		static documentFragmentToHtmlStringTo(doc:DocumentFragment) : string;
		static createChildren(parent:wquery.Component, node:wquery.GenericHtmlElement, imports:any) : wquery.Component[];
		static loadFieldValues(component:wquery.Component, params:any) : void;
		private static convertValueType(rawValue:any, typedValue:any) : any;
		private static getElementAttributesAsObject(element:HTMLElement) : any;
		static callMethodIfExists(obj:any, methodName:string, args?:any[]) : void;
		static ensureStylesActive(klassName:string, css:string) : void;
		static createStyleElement(styleBlockID:string, css:string) : HTMLStyleElement;
		private static classNames : haxe.ds.ObjectMap<any, string>;
		private static classNameCounter : number;
		static getClassName(klass:any) : string;
		static callMethodFromParentToChildren(parent:wquery.Component, methodName:string) : void;
		static callMethodFromChildrenToParent(parent:wquery.Component, methodName:string) : void;
	}
	
	export class CssGlobalizer
	{
		constructor(klassName:string);
		prefix : string;
		className(name:string) : string;
		selector(selector:string) : string;
		styles(text:string) : string;
		doc(baseNode:wquery.GenericHtmlElement) : void;
		fixJq(jq:js.JQuery) : js.JQuery;
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
		static attachHtmlEventHandlers(component:wquery.Component, node:wquery.GenericHtmlElement, ignoreTags:string[]) : void;
		static attachComponentEventHandlers(component:wquery.Component) : void;
	}
	
	type GenericHtmlElement =
	{
		children : HTMLCollection;
		querySelectorAll(s:string) : NodeList;
	}
	
	export class Template
	{
		constructor(klass:any);
		private doc : DocumentFragment;
		private preparedDoc : DocumentFragment;
		css : string;
		imports : any;
		newDoc() : DocumentFragment;
		static baseURL : string;
		private static getImports(klass:any, superKlass:any) : any;
		private static getDoc(klass:any, superTemplate:wquery.Template) : DocumentFragment;
		private static getRawDoc(klass:any) : DocumentFragment;
		private static resolvePlaceHolders(doc:DocumentFragment) : void;
		private static processStyles(klassName:string, doc:DocumentFragment) : string;
		private static extractChildrenNodes(base:HTMLElement) : DocumentFragment;
		private static getImmediateChildren(base:wquery.GenericHtmlElement, tag:string) : HTMLElement[];
		private static resolveUrlsInHtml(klass:any, base:wquery.GenericHtmlElement) : void;
		private static resolveUrlsInCss(klass:any, css:string) : string;
		private static getUrlFromClass(klass:any) : string;
	}
}