package wquery;

@:enum
abstract AttachMode(String) from String to String
{
	var append = "append";
	var prepend = "prepend";
	var replace = "replace";
}