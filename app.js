/*
	App configuration
*/

define([
	"libs/webix-jet-core/core",
	"libs/webix-jet-core/plugins/menu",
	"plugins/user"
], function(
	core, menu, user
){

	//configuration
	var app = core.create({
		id:			"My-App", //change this line!
		name:		"My App!",
		version:	"0.1.0",
		debug:		true,
		start:		"/top/start"
	});

	app.use(menu);

	// This enables user-control (login)
	app.use(user);


	return app;
});
