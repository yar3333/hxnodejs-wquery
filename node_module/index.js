// Generated by Haxe 3.4.2 (git build master @ 890f8c7)
(function ($hx_exports, $global) { "use strict";
var $hxClasses = {},$estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	match: function(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) {
			return this.r.m[n];
		} else {
			throw new js__$Boot_HaxeError("EReg::matched");
		}
	}
	,matchedRight: function() {
		if(this.r.m == null) {
			throw new js__$Boot_HaxeError("No string matched");
		}
		var sz = this.r.m.index + this.r.m[0].length;
		return HxOverrides.substr(this.r.s,sz,this.r.s.length - sz);
	}
	,matchedPos: function() {
		if(this.r.m == null) {
			throw new js__$Boot_HaxeError("No string matched");
		}
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchSub: function(s,pos,len) {
		if(len == null) {
			len = -1;
		}
		if(this.r.global) {
			this.r.lastIndex = pos;
			var tmp = this.r;
			var tmp1 = len < 0 ? s : HxOverrides.substr(s,0,pos + len);
			this.r.m = tmp.exec(tmp1);
			var b = this.r.m != null;
			if(b) {
				this.r.s = s;
			}
			return b;
		} else {
			var b1 = this.match(len < 0 ? HxOverrides.substr(s,pos,null) : HxOverrides.substr(s,pos,len));
			if(b1) {
				this.r.s = s;
				this.r.m.index += pos;
			}
			return b1;
		}
	}
	,map: function(s,f) {
		var offset = 0;
		var buf_b = "";
		while(true) {
			if(offset >= s.length) {
				break;
			} else if(!this.matchSub(s,offset)) {
				buf_b += Std.string(HxOverrides.substr(s,offset,null));
				break;
			}
			var p = this.matchedPos();
			buf_b += Std.string(HxOverrides.substr(s,offset,p.pos - offset));
			buf_b += Std.string(f(this));
			if(p.len == 0) {
				buf_b += Std.string(HxOverrides.substr(s,p.pos,1));
				offset = p.pos + 1;
			} else {
				offset = p.pos + p.len;
			}
			if(!this.r.global) {
				break;
			}
		}
		if(!this.r.global && offset > 0 && offset < s.length) {
			buf_b += Std.string(HxOverrides.substr(s,offset,null));
		}
		return buf_b;
	}
	,__class__: EReg
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
HxOverrides.remove = function(a,obj) {
	var i = a.indexOf(obj);
	if(i == -1) {
		return false;
	}
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Lambda = function() { };
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
Lambda.find = function(it,f) {
	var v = $iterator(it)();
	while(v.hasNext()) {
		var v1 = v.next();
		if(f(v1)) {
			return v1;
		}
	}
	return null;
};
Math.__name__ = ["Math"];
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
			a.push(f);
		}
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	if(typeof(f) == "function") {
		return !(f.__name__ || f.__ename__);
	} else {
		return false;
	}
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) {
		return false;
	}
	delete(o[field]);
	return true;
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) {
		v = parseInt(x);
	}
	if(isNaN(v)) {
		return null;
	}
	return v;
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.startsWith = function(s,start) {
	if(s.length >= start.length) {
		return HxOverrides.substr(s,0,start.length) == start;
	} else {
		return false;
	}
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	if(!(c > 8 && c < 14)) {
		return c == 32;
	} else {
		return true;
	}
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,r,l - r);
	} else {
		return s;
	}
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,0,l - r);
	} else {
		return s;
	}
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
var ValueType = { __ename__ : true, __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getSuperClass = function(c) {
	return c.__super__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
	if(a == null) {
		return null;
	}
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) {
		return null;
	}
	return cl;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	case 9:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8]);
	case 10:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9]);
	case 11:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9],args[10]);
	case 12:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9],args[10],args[11]);
	case 13:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9],args[10],args[11],args[12]);
	case 14:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9],args[10],args[11],args[12],args[13]);
	default:
		throw new js__$Boot_HaxeError("Too many arguments");
	}
};
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "function":
		if(v.__name__ || v.__ename__) {
			return ValueType.TObject;
		}
		return ValueType.TFunction;
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) {
			return ValueType.TInt;
		}
		return ValueType.TFloat;
	case "object":
		if(v == null) {
			return ValueType.TNull;
		}
		var e = v.__enum__;
		if(e != null) {
			return ValueType.TEnum(e);
		}
		var c = js_Boot.getClass(v);
		if(c != null) {
			return ValueType.TClass(c);
		}
		return ValueType.TObject;
	case "string":
		return ValueType.TClass(String);
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) {
		Error.captureStackTrace(this,js__$Boot_HaxeError);
	}
};
$hxClasses["js._Boot.HaxeError"] = js__$Boot_HaxeError;
js__$Boot_HaxeError.__name__ = ["js","_Boot","HaxeError"];
js__$Boot_HaxeError.wrap = function(val) {
	if((val instanceof Error)) {
		return val;
	} else {
		return new js__$Boot_HaxeError(val);
	}
};
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
$hxClasses["js.Boot"] = js_Boot;
js_Boot.__name__ = ["js","Boot"];
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + js_Boot.__string_rec(o[i],s);
					} else {
						str += js_Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0 ? "," : "") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var wquery_Application = $hx_exports["Application"] = function() { };
$hxClasses["wquery.Application"] = wquery_Application;
wquery_Application.__name__ = ["wquery","Application"];
wquery_Application.getTemplate = function(fullTag) {
	if(!Object.prototype.hasOwnProperty.call(wquery_Application.templates,fullTag)) {
		wquery_Application.templates[fullTag] = new wquery_Template(fullTag);
	}
	return Reflect.field(wquery_Application.templates,fullTag);
};
wquery_Application.run = function(selector,componentClass) {
	return Type.createInstance(componentClass,[null,$(selector),null,true]);
};
var wquery_Component = $hx_exports["Component"] = function(parent,_parentNode,params,replaceParentNode) {
	this.nextAnonimID = 0;
	this.children = { };
	this.id = "";
	this.parentNode = $(_parentNode);
	wquery_ComponentTools.loadFieldValues(this,params);
	this.parentNode = $(this.parentNode);
	if(this.id == null || this.id == "") {
		this.id = parent != null ? "wqc_" + ++parent.nextAnonimID : "";
	} else {
		var n = this.id.lastIndexOf("-");
		this.id = this.id.substring(n + 1);
	}
	this.page = parent != null ? parent.page : this;
	this.parent = parent;
	this.fullID = (parent != null ? parent.prefixID : "") + this.id;
	this.prefixID = this.fullID != "" ? this.fullID + "-" : "";
	if(parent != null) {
		if(Object.prototype.hasOwnProperty.call(parent.children,this.id)) {
			throw new Error("Component with same id = '" + this.id + "' already exist.");
		}
		parent.children[this.id] = this;
	}
	var klassName = Type.getClassName(js_Boot.getClass(this));
	var template = wquery_Application.getTemplate(klassName);
	wquery_ComponentTools.ensureStylesActive(klassName,template.css);
	var node = template.newDoc();
	wquery_ComponentTools.processSubstitutions(node,this);
	wquery_ComponentTools.expandDocElemIDs(this.prefixID,node);
	wquery_EventTools.attachComponentEventHandlers(this);
	this.nodes = $(node.childNodes);
	wquery_EventTools.attachHtmlEventHandlers(this,node,Reflect.fields(template.imports));
	wquery_ComponentTools.callMethodIfExists(this,"preInit");
	wquery_ComponentTools.createChildren(this,node,template.imports);
	wquery_ComponentTools.callMethodIfExists(this,"init");
	if(replaceParentNode) {
		this.parentNode[0].parentNode.replaceChild(node,this.parentNode[0]);
	} else {
		this.parentNode[0].appendChild(node);
	}
	wquery_ComponentTools.callMethodIfExists(this,"postInit");
};
$hxClasses["wquery.Component"] = wquery_Component;
wquery_Component.__name__ = ["wquery","Component"];
wquery_Component.prototype = {
	template: function() {
		return null;
	}
	,remove: function() {
		if(this.parent != null && this.parent.children != null) {
			var _g = 0;
			var _g1 = Reflect.fields(this.parent.children);
			while(_g < _g1.length) {
				var key = _g1[_g];
				++_g;
				if(Reflect.field(this.parent.children,key) == this) {
					Reflect.deleteField(this.parent.children,key);
				}
			}
		}
	}
	,q: function(arg,context) {
		var cssGlobalizer = new wquery_CssGlobalizer(Type.getClassName(js_Boot.getClass(this)));
		if(arg != null && arg != "" && typeof(arg) == "string") {
			arg = cssGlobalizer.selector(StringTools.replace(arg,"#","#" + this.prefixID));
		}
		return cssGlobalizer.fixJq(context == null ? $(arg,this.nodes).addBack(arg) : $(arg,context));
	}
	,__class__: wquery_Component
};
var wquery_ComponentList = $hx_exports["ComponentList"] = function(type,parentComponent,parentNode,paramsList) {
	this.components = [];
	this.type = type;
	this.parentComponent = parentComponent;
	this.parentNode = parentNode;
	this.emptyContent = parentNode.html();
	if(paramsList != null) {
		var _g = 0;
		while(_g < paramsList.length) {
			var params = paramsList[_g];
			++_g;
			this.create(params);
		}
	}
};
$hxClasses["wquery.ComponentList"] = wquery_ComponentList;
wquery_ComponentList.__name__ = ["wquery","ComponentList"];
wquery_ComponentList.prototype = {
	create: function(params) {
		var r = Type.createInstance(this.type,[this.parentComponent,this.parentNode,params]);
		this.components.push(r);
		return r;
	}
	,clear: function() {
		if(this.components.length == 0) {
			return;
		}
		var _g = 0;
		var _g1 = this.components;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			c.remove();
		}
		this.components.splice(0,this.components.length);
		this.parentNode.html(this.emptyContent);
	}
	,iterator: function() {
		return HxOverrides.iter(this.components);
	}
	,__class__: wquery_ComponentList
};
var wquery_ComponentTools = $hx_exports["ComponentTools"] = function() { };
$hxClasses["wquery.ComponentTools"] = wquery_ComponentTools;
wquery_ComponentTools.__name__ = ["wquery","ComponentTools"];
wquery_ComponentTools.processSubstitutions = function(baseNode,object) {
	var _g = 0;
	var _g1 = baseNode.childNodes;
	while(_g < _g1.length) {
		var node = _g1[_g];
		++_g;
		if(node.nodeType == 1) {
			var _g2 = 0;
			var _g3 = node.attributes;
			while(_g2 < _g3.length) {
				var attr = _g3[_g2];
				++_g2;
				attr.value = wquery_ComponentTools.processSubstitution(attr.value,object);
			}
			wquery_ComponentTools.processSubstitutions(node,object);
		} else if(node.nodeType == 3) {
			node.textContent = wquery_ComponentTools.processSubstitution(node.textContent,object);
		}
	}
};
wquery_ComponentTools.processSubstitution = function(s,object) {
	return new EReg("\\{([_a-zA-Z][_a-zA-Z0-9]*)\\}","g").map(s,function(re) {
		var name = re.matched(1);
		if(!Object.prototype.hasOwnProperty.call(object,name)) {
			throw new Error("Don't found field for substitution '" + name + "'.");
		}
		return Std.string(Reflect.field(object,name));
	});
};
wquery_ComponentTools.expandDocElemIDs = function(prefixID,baseNode) {
	var _g = 0;
	var _g1 = baseNode.children;
	while(_g < _g1.length) {
		var node = _g1[_g];
		++_g;
		var nodeID = node.getAttribute("id");
		if(nodeID != null && nodeID != "" && nodeID.indexOf(":") == -1) {
			node.setAttribute("id",prefixID + nodeID);
		}
		if(node.tagName == "LABEL") {
			var nodeFor = node.getAttribute("for");
			if(nodeFor != null && nodeFor != "") {
				node.setAttribute("for",prefixID + nodeFor);
			}
		}
		wquery_ComponentTools.expandDocElemIDs(prefixID,node);
	}
};
wquery_ComponentTools.htmlStringToDocumentFragment = function(html) {
	var r = window.document.createDocumentFragment();
	var div = window.document.createElement("div");
	div.innerHTML = html;
	while(div.firstChild) r.appendChild(div.firstChild);
	return r;
};
wquery_ComponentTools.createChildren = function(parent,node,imports) {
	var r = [];
	if(imports != null) {
		var tags = Reflect.fields(imports);
		if(tags.length > 0) {
			var nodes = node.querySelectorAll(tags.join(","));
			var _g = 0;
			while(_g < nodes.length) {
				var nodeToReplace = nodes[_g];
				++_g;
				var klass = Reflect.field(imports,nodeToReplace.nodeName.toLowerCase());
				r.push(Type.createInstance(klass,[parent,nodeToReplace,wquery_ComponentTools.getElementAttributesAsObject(nodeToReplace),true]));
			}
		}
	}
	return r;
};
wquery_ComponentTools.loadFieldValues = function(component,params) {
	if(params == null) {
		return;
	}
	var _g = 0;
	var _g1 = Reflect.fields(params);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var value = Reflect.field(params,field);
		if(Reflect.isFunction(Reflect.field(component,"set_" + field))) {
			if(!Reflect.isFunction(Reflect.field(component,"get_" + field))) {
				throw new Error("Load values: getter for '" + field + "' must be defined in class '" + Type.getClassName(component == null ? null : js_Boot.getClass(component)) + "'.");
			}
			var func = Reflect.field(component,"set_" + field);
			var args = [wquery_ComponentTools.convertValueType(value,Reflect.field(component,"get_" + field).apply(component,[]))];
			func.apply(component,args);
		} else if(Object.prototype.hasOwnProperty.call(component,field)) {
			component[field] = wquery_ComponentTools.convertValueType(value,Reflect.field(component,field));
		} else {
			throw new Error("Load values: class '" + Type.getClassName(component == null ? null : js_Boot.getClass(component)) + "' does not have field '" + field + "'.");
		}
	}
};
wquery_ComponentTools.convertValueType = function(rawValue,typedValue) {
	var v;
	var _g = Type["typeof"](typedValue);
	switch(_g[1]) {
	case 1:
		if(typeof(rawValue) == "number" && ((rawValue | 0) === rawValue)) {
			v = rawValue;
		} else {
			v = Std.parseInt(rawValue);
		}
		break;
	case 2:
		if(typeof(rawValue) == "number") {
			v = rawValue;
		} else {
			v = parseFloat(rawValue);
		}
		break;
	case 3:
		if(rawValue != true) {
			v = rawValue == "true";
		} else {
			v = true;
		}
		break;
	default:
		v = rawValue;
	}
	return v;
};
wquery_ComponentTools.getElementAttributesAsObject = function(element) {
	var r = { };
	var i = 0;
	while(i < element.attributes.length) {
		r[element.attributes[i].name] = element.attributes[i].value;
		++i;
	}
	return r;
};
wquery_ComponentTools.callMethodIfExists = function(obj,methodName,args) {
	var f = Reflect.field(obj,methodName);
	if(Reflect.isFunction(f)) {
		f.apply(obj,args);
	}
};
wquery_ComponentTools.ensureStylesActive = function(klassName,css) {
	css = StringTools.trim(css);
	if(css == "") {
		return;
	}
	var styleBlockID = "wqs_" + StringTools.replace(klassName,".","_");
	if(window.document.getElementById(styleBlockID) != null) {
		return;
	}
	var root = window.document.head || window.document.getElementsByTagName("head")[0] || window.document.body || window.document;
	root.appendChild(wquery_ComponentTools.createStyleElement(styleBlockID,css));
};
wquery_ComponentTools.createStyleElement = function(styleBlockID,css) {
	var style = window.document.createElement("style");
	if(styleBlockID != null) {
		style.id = styleBlockID;
	}
	style.type = "text/css";
	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(window.document.createTextNode(css));
	}
	return style;
};
var wquery_CssGlobalizer = $hx_exports["CssGlobalizer"] = function(klassName) {
	this.prefix = StringTools.replace(klassName.toLowerCase(),".","_") + "-";
};
$hxClasses["wquery.CssGlobalizer"] = wquery_CssGlobalizer;
wquery_CssGlobalizer.__name__ = ["wquery","CssGlobalizer"];
wquery_CssGlobalizer.prototype = {
	className: function(name) {
		var reClassName_r = new RegExp("[~]|\\bL-","g".split("u").join(""));
		if(typeof(name) != "string") {
			return name;
		}
		return name.replace(reClassName_r,this.prefix);
	}
	,selector: function(selector) {
		var reSelector_r = new RegExp("[.][~]|[.]L-","g".split("u").join(""));
		if(typeof(selector) != "string") {
			return selector;
		}
		return selector.replace(reSelector_r,"." + this.prefix);
	}
	,styles: function(text) {
		var re = new EReg("(?:[/][*](?:.|[\r\n])*?[*][/])|(?:[{](?:.|[\r\n])*?[}])|([^{]+)|(?:[{])","");
		var r = "";
		while(re.match(text)) {
			if(re.matched(1) != null) {
				r += this.selector(re.matched(0));
			} else {
				r += re.matched(0);
			}
			text = re.matchedRight();
		}
		return r;
	}
	,doc: function(baseNode) {
		var _g = 0;
		var _g1 = baseNode.children;
		while(_g < _g1.length) {
			var node = _g1[_g];
			++_g;
			if(node.hasAttribute("class")) {
				node.setAttribute("class",this.className(node.getAttribute("class")));
			}
			if(node.hasAttribute("cssClass")) {
				node.setAttribute("cssClass",this.className(node.getAttribute("cssClass")));
			}
			this.doc(node);
		}
	}
	,fixJq: function(jq) {
		var self = this;
		jq.addClass = function(arg) {
			var jQuery = jQuery.fn.addClass;
			var tmp = self.className(arg);
			var tmp1 = jQuery.call(jq,tmp);
			return self.fixJq(tmp1);
		};
		jq.removeClass = function(arg1) {
			var jQuery1 = jQuery.fn.removeClass;
			var tmp2 = self.className(arg1);
			var tmp3 = jQuery1.call(jq,tmp2);
			return self.fixJq(tmp3);
		};
		jq.toggleClass = function(arg2,b) {
			var jQuery2 = jQuery.fn.toggleClass;
			var tmp4 = self.className(arg2);
			var tmp5 = jQuery2.call(jq,tmp4,b);
			return self.fixJq(tmp5);
		};
		jq.hasClass = function(arg3) {
			var jQuery3 = jQuery.fn.hasClass;
			var tmp6 = self.className(arg3);
			return jQuery3.call(jq,tmp6);
		};
		jq.find = function(arg4) {
			var jQuery4 = jQuery.fn.find;
			var tmp7 = self.selector(arg4);
			var tmp8 = jQuery4.call(jq,tmp7);
			return self.fixJq(tmp8);
		};
		jq.filter = function(arg5) {
			var jQuery5 = jQuery.fn.filter;
			var tmp9 = self.selector(arg5);
			var tmp10 = jQuery5.call(jq,tmp9);
			return self.fixJq(tmp10);
		};
		jq.has = function(arg6) {
			var jQuery6 = jQuery.fn.has;
			var tmp11 = self.selector(arg6);
			return jQuery6.call(jq,tmp11);
		};
		jq["is"] = function(arg7) {
			var jQuery7 = jQuery.fn["is"];
			var tmp12 = self.selector(arg7);
			return jQuery7.call(jq,tmp12);
		};
		jq.not = function(arg8) {
			var jQuery8 = jQuery.fn.not;
			var tmp13 = self.selector(arg8);
			var tmp14 = jQuery8.call(jq,tmp13);
			return self.fixJq(tmp14);
		};
		jq.parent = function() {
			var tmp15 = jQuery.fn.parent.call(jq);
			return self.fixJq(tmp15);
		};
		return jq;
	}
	,__class__: wquery_CssGlobalizer
};
var wquery_Event = $hx_exports["Event"] = function() {
	this.handlers = [];
};
$hxClasses["wquery.Event"] = wquery_Event;
wquery_Event.__name__ = ["wquery","Event"];
wquery_Event.prototype = {
	on: function(handler) {
		this.handlers.push(handler);
	}
	,off: function(handler) {
		if(handler != null) {
			HxOverrides.remove(this.handlers,handler);
		} else {
			this.handlers = [];
		}
	}
	,emit: function(args) {
		var _g = 0;
		var _g1 = this.handlers;
		while(_g < _g1.length) {
			var handler = _g1[_g];
			++_g;
			handler(args);
		}
	}
	,__class__: wquery_Event
};
var wquery_EventTools = $hx_exports["EventTools"] = function() { };
$hxClasses["wquery.EventTools"] = wquery_EventTools;
wquery_EventTools.__name__ = ["wquery","EventTools"];
wquery_EventTools.attachHtmlEventHandlers = function(component,node,ignoreTags) {
	var _g = 0;
	var _g1 = node.querySelectorAll("[id]");
	while(_g < _g1.length) {
		var elem = _g1[_g];
		++_g;
		if(ignoreTags.indexOf(elem.tagName.toLowerCase()) < 0) {
			var n = elem.id.lastIndexOf("-");
			var elemID = n >= 0 ? elem.id.substring(n + 1) : elem.id;
			var _g2 = 0;
			var _g3 = wquery_EventTools.elemEventNames;
			while(_g2 < _g3.length) {
				var eventName = _g3[_g2];
				++_g2;
				var methodName = elemID + "_" + eventName;
				var method = [Reflect.field(component,methodName)];
				if(method[0] != null) {
					$(elem).on(eventName,null,(function(method1) {
						return function(e) {
							method1[0].apply(component,[e]);
						};
					})(method));
				}
			}
		}
	}
};
wquery_EventTools.attachComponentEventHandlers = function(component) {
	if(component.parent == null) {
		return;
	}
	var _g = 0;
	var _g1 = Reflect.fields(component);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		if(StringTools.startsWith(field,"event_")) {
			var event = Reflect.field(component,field);
			var eventName = field.substring("event_".length);
			var handlerName = component.id + "_" + eventName;
			var method = [Reflect.field(component.parent,handlerName)];
			if(method[0] != null) {
				event.on((function(method1) {
					return function(e) {
						method1[0].apply(component.parent,[e]);
					};
				})(method));
			}
		}
	}
};
var wquery_Template = $hx_exports["Template"] = function(klassName) {
	var klass = Type.resolveClass(klassName);
	if(klass == null) {
		throw new Error("Class '" + klassName + "' is not found.");
	}
	var superKlass = Type.getSuperClass(klass);
	this.extend = superKlass != null ? Type.getClassName(superKlass) : "";
	this.imports = wquery_Template.getImports(klass,superKlass);
	this.doc = wquery_Template.getDoc(klass,this.extend != "" ? wquery_Application.getTemplate(this.extend) : null);
	this.preparedDoc = this.doc.cloneNode(true);
	wquery_Template.resolvePlaceHolders(this.preparedDoc);
	this.css = wquery_Template.processStyles(klassName,this.preparedDoc);
};
$hxClasses["wquery.Template"] = wquery_Template;
wquery_Template.__name__ = ["wquery","Template"];
wquery_Template.getImports = function(klass,superKlass) {
	var r = { };
	if(superKlass != null) {
		var superImports = Reflect.field(superKlass,"imports");
		if(superImports) {
			var _g = 0;
			var _g1 = Reflect.fields(superImports);
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				r[field] = Reflect.field(superImports,field);
			}
		}
	}
	var imports = Reflect.field(klass,"imports");
	if(imports) {
		var _g2 = 0;
		var _g11 = Reflect.fields(imports);
		while(_g2 < _g11.length) {
			var field1 = _g11[_g2];
			++_g2;
			r[field1] = Reflect.field(imports,field1);
		}
	}
	return r;
};
wquery_Template.getDoc = function(klass,superTemplate) {
	var r = wquery_Template.getRawDoc(klass);
	if(superTemplate != null) {
		r.insertBefore(superTemplate.doc,r.firstChild);
	}
	return r;
};
wquery_Template.getRawDoc = function(klass) {
	var html = Reflect.field(klass,"rawHTML");
	if(html == null) {
		html = "";
	}
	var r;
	try {
		r = wquery_ComponentTools.htmlStringToDocumentFragment(html);
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		throw new Error(Type.getClassName(klass) + ":" + Std.string(e.line) + ": characters " + Std.string(e.column) + "-" + Std.string(e.column + e.length) + " : " + Std.string(e.message));
	}
	var css = Reflect.field(klass,"rawCSS");
	if(css != null && css != "") {
		r.insertBefore(wquery_ComponentTools.createStyleElement(null,css),r.firstChild);
	}
	return r;
};
wquery_Template.resolvePlaceHolders = function(doc) {
	var contents = wquery_Template.getImmediateChildren(doc,"WQ-CONTENT");
	contents.reverse();
	var ph;
	while(true) {
		ph = doc.querySelector("wq-placeholder");
		if(!(ph != null)) {
			break;
		}
		var id = [ph.getAttribute("id")];
		var content = Lambda.find(contents,(function(id1) {
			return function(c) {
				return c.getAttribute("for") == id1[0];
			};
		})(id));
		var newContent = wquery_Template.extractChildrenNodes(content != null ? content : ph);
		ph.parentNode.replaceChild(newContent,ph);
	}
	var _g = 0;
	while(_g < contents.length) {
		var c1 = contents[_g];
		++_g;
		c1.parentNode.removeChild(c1);
	}
};
wquery_Template.processStyles = function(klassName,doc) {
	var cssBlocks = [];
	var cssGlobalizer = new wquery_CssGlobalizer(klassName);
	var _g = 0;
	var _g1 = wquery_Template.getImmediateChildren(doc,"STYLE");
	while(_g < _g1.length) {
		var node = _g1[_g];
		++_g;
		if(!node.hasAttribute("id")) {
			cssBlocks.push(cssGlobalizer.styles(node.innerHTML));
			node.remove();
		}
	}
	cssGlobalizer.doc(doc);
	return cssBlocks.map(function(s) {
		return StringTools.trim(s);
	}).join("\n\n");
};
wquery_Template.extractChildrenNodes = function(base) {
	var r = window.document.createDocumentFragment();
	while(base.firstChild != null) r.appendChild(base.firstChild);
	return r;
};
wquery_Template.getImmediateChildren = function(base,tag) {
	var r = [];
	var _g = 0;
	var _g1 = base.children;
	while(_g < _g1.length) {
		var node = _g1[_g];
		++_g;
		if(node.tagName == tag) {
			r.push(node);
		}
	}
	return r;
};
wquery_Template.prototype = {
	newDoc: function() {
		return this.preparedDoc.cloneNode(true);
	}
	,__class__: wquery_Template
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
$hxClasses["Math"] = Math;
String.prototype.__class__ = $hxClasses["String"] = String;
String.__name__ = ["String"];
$hxClasses["Array"] = Array;
Array.__name__ = ["Array"];
js_Boot.__toStr = ({ }).toString;
wquery_Application.templates = { };
wquery_EventTools.elemEventNames = ["click","change","load","mousedown","mouseup","mousemove","mouseover","mouseout","mouseenter","mouseleave","keypress","keydown","keyup","focus","blur","focusin","focusout"];
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
