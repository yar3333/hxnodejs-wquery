package wquery;

#if macro

import haxe.macro.Context;
import haxe.macro.Expr;
import haxe.macro.ExprTools;
import haxe.macro.PositionTools;
using Lambda;
using StringTools;

class Macro
{
	public static function buildComponent() : Array<Field>
	{
		var fields = Context.getBuildFields();
		
		var dir = haxe.io.Path.directory(Context.resolvePath(Context.getLocalModule().replace(".", "/") + ".hx")) + "/";
		
		if (sys.FileSystem.exists(dir + "template.html") && !fields.exists(function(f) return f.name == "rawHTML"))
		{
			fields.push(makeStaticVar("rawHTML", macro : String, macro $v{sys.io.File.getContent(dir + "template.html")}));
		}
		
		if (sys.FileSystem.exists(dir + "template.css") && !fields.exists(function(f) return f.name == "rawCSS"))
		{
			fields.push(makeStaticVar("rawCSS", macro : String, macro $v{sys.io.File.getContent(dir + "template.css")}));
		}
		
		if (sys.FileSystem.exists(dir + "Template.hx") && !fields.exists(function(f) return f.name == "template"))
		{
			fields.push(makeOverridenMethod("template", [], macro : Template, macro return new Template(this)));
		}
		
		return fields;
	}
	
	
	static function makeStaticVar(name:String, type:ComplexType, ?expr:Expr) : Field
	{
		return
		{
			  name : name
			, access : [ Access.AStatic ]
			, kind : FieldType.FVar(type, expr)
			, pos : expr != null ? expr.pos : Context.currentPos()
		};
	}
	
	static function makeOverridenMethod(name:String, args:Array<FunctionArg>, ret:Null<ComplexType>, expr:Expr) : Field
	{
		return
		{
			  name : name
			, access : [ Access.AOverride ]
			, kind : FieldType.FFun
					 ({
						  args : args
						, ret : ret
						, expr : expr
						, params : []
					 })
			, pos : expr.pos
		};
	}
}

#end
