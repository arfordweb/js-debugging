Browser JavaScript Debugging
============================

# About Me
## Education
* Bachelor's in CS :: UGA 2013
* Master of Internet Technologies :: UGA's Terry College 2014

## Work Experience
* Full-time PHP Developer (2004-2007)
* Senior Web Dev @ Intuit Financial Services, aka Digital Insight (2007-2012)
* Currently UI Software Engineer @ Coraid

# About This Talk
* For Beginners
* Only in-browser debuggers used
* No Node.js

# Why JavaScript?
* *The* client-side language of the Web
* Efficient Event-Driven Style of Coding
* Great debugging tools (sort of)

# Coding Practices
* White-space **(Demo)**
* Wrap console.log **(Demo)**
* Enable / Disable Caching of Scripts
	* Timestamps **(Demo)**

# On to the tools…

## Firebug
<https://getfirebug.com/> - Download Firefox add-on here

January 2006 :: by Joe Hewitt, one of the creators of Firefox.

Has been superceded by Firefox's native Debugging Tools.

### Features
* DOM Inspector (HTML Tab) **(Demo)**
	* CSS Style Declarations w/ filename and line number
	* Computed Styles
	* Visually view *margins* and *padding*
	* DOM Breadcrumbs
* Console **(Demo)**
* Script debugger **(Demo)**
	* Breakpoints
	* Watch variables
	* Call Stack
* Global Namespace (DOM Tab) **(Demo)**
* Net Tab **(Demo)**
* Cookies **(Demo)**

Not bad!

## Firebug Lite
<https://getfirebug.com/firebuglite>

In-page JavaScript version of Firebug for use in all browsers.

Not very useful, as it is limited by the browser environment.

And now for some bad news…


## Firefox Developer Tools

January 31, 2012

Replacing Firebug?

Sucked at first.  Getting better. **(Demo)**


## IE Developer Toolbar

You probably need to support old versions of IE.  :'(

May 2007 :: Microsoft

* Internet Explorer's answer to Firebug
* The worst of the bunch; Even worse in IE8
* You can't escape from it

### Features

* Emulate old versions of IE **(Demo)**
* DOM Inspector **(Demo)**
	* Downside: Shows you the DOM as it was when the page loaded
* CSS view with checkboxes **(Demo)**
	* Can't manipulate styles
	* **Can** search for selectors
	* **Can** disable them
* Console **(Demo)**
	* Log an object, see "[Object]"
	* Leaving console.log in your code breaks IE (I think)
* Debugger **(Demo)**
	* Downside: In IE8, can't select scripts not in the initial HTML
* Profiler: Get a "Profile" of JS activity **(Demo)**
	* Identify sources of performance issues
	* Start recording, do stuff, stop recording, read results
	* \# of times each JS function is called
	* Time spent in each function
	* File and Line #
* Network Tab **(Demo)**
	* Actually works
	* Examine each HTTP Request & Response

Here's some better news…

## Chrome DevTools

<https://developers.google.com/chrome-developer-tools/>

Fun to use.  Functionality list never stops growing.

### Interesting Features

* Local Storage and Session Storage **(Demo)**
* Timeline **(Demo)**
* Audit **(Demo)**
	* Suggests ways to make your page run better
* Gear icon: Look in there! **(Demo)**
	* Page repainting
	* User Agent switching
	* Geolocation
	* Device Orientation

## Safari Web Inspector

Works with iOS Emulator! **(Demo)**

## Other Notable Tools

* Opera Dragonfly
* traceGL - <https://trace.gl/>
	* Real-time and history of execution
	* Web Proxy; Injects its own code into yours

## Thanks!