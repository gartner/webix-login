import "./styles/app.css";
import {JetApp, plugins} from "webix-jet";
import {authModel} from "models/authModel";
import {auth} from "plugins/auth";

webix.ready(() => {
	var app = new JetApp({
		id:			APPNAME,
		version:	VERSION,
		start:		"/top/start"
	});

    app.render();

    app.use(auth, {model: new authModel()});

    app.attachEvent("app:error:resolve", function(name, error){
		window.console.error(error);
	});
});
