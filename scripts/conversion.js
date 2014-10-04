window.addEventListener( "keydown", function( input ) {
	var platform = navigator.platform.match( /(Win)|(Mac)/ )[ 0 ];
	var response = document.getElementById( 'response' );
	var keyCode = ( input.which ) ? input.which : input.keyCode;
	var keyCodes = {
		8 : "Backspace",
		9 : "Tab",
		13 : "Enter",
		16 : "Shift",
		17 : "Control",
		18 : ( platform == "Win" ) ? "Alt" : "Option",
		19 : ( platform == "Win" ) ? "Pause" : "Break",
		20 : "Caps Lock",
		27 : "Escape",
		32 : "Space",
		33 : "Page Up",
		34 : "Page Down",
		35 : "End",
		36 : "Home",
		37 : "&larr;",
		38 : "&uarr;",
		39 : "&rarr;",
		40 : "&darr;",
		45 : "Insert",
		46 : "Delete",
		91 : ( platform == "Win" ) ? "Left Windows" : "Left Command",
		92 : "Right Windows",
		93 : "Right Command",
		106 : "Multiply",
		107 : "Add",
		109 : "Subtract",
		110 : "Decimal Point",
		111 : "Divide",
		144 : "Num Lock",
		145 : "Scroll Lock",
		186 : ";",
		187 : "=",
		188 : ",",
		189 : "-",
		190 : ".",
		191 : "/",
		192 : "`",
		219 : "[",
		220 : "\\",
		221 : "]",
		222 : "'"
	};
	
	for( var i = 48; i <= 57; i++ )
	{
		keyCodes[i] = i - 48;
	}
	
	for( var i = 65; i <= 90; i++ )
	{
		var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		keyCodes[i] = chars[i - 65];
	}
	
	for( var i = 96; i <= 105; i++ )
	{
		keyCodes[i] = "Numpad " + ( i - 96 );
	}
	
	for( var i = 112; i <= 123; i++ )
	{
		keyCodes[i] = "F" + ( i - 111 );
	}
	
	response.innerHTML = "Key: " + keyCodes[keyCode] + "<br />"
	                   + "Code: " + keyCode;
} );