/*
 * Simple console logging
 *
 * - Can be turned off by setting app.debug_logging_enabled === false
 * - Will not throw errors in IE when IE Dev Toolbar is not present
 * - Converts objects to JSON in IE
 */
var cl = function(){
	var thing = arguments;
	if (typeof app.debug_logging_enabled !== "undefined" &&
		app.debug_logging_enabled &&
		typeof console !== "undefined" &&
		typeof console.log !== "undefined") {
		if (arguments.length === 1) {
			thing = arguments[0];
		}
		if (typeof thing !== "string" && app.lt_ie10 || app.ie10) {
			// because IE Dev Toolbar doesn't let you expand objects given to .log()
			thing = JSON.stringify(arguments);
		}
		console.log(thing);
	}
};

/*
 * Add item to debug stack; log id and item
 *
 * Call again with debug stack position to get a reference to that object
 */
var ds = function(element){
	if (!app.debug_logging_enabled) {
		return;
	}
	if (!app.debug_stack) {
		app.debug_stack = new Array();
	}
	if (typeof element === "number") return app.debug_stack[element];
	app.debug_stack.push(element);
	cl("Debug stack position: " + (app.debug_stack.length-1), element);
};

/*
 * Clears debug stack
 */
var cds = function(){
	app.debug_stack = new Array();
};

/*
 * Alerts "X"; shortcut for debugging
 *
 * Handy to use if you're not sure whether a chunk of code is even running
 */
var ax = function(){
	alert("X");
	return "X";
};