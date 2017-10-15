import * as Cookies from "js-cookie";

export const userModel = {
    credentials: {},

    setRouter(router) {
        //console.log("Setting router", router);
    },

    status: () => {
        console.log("Getting status from userModel");
        return new Promise(function(resolve, reject){
            resolve();
            //reject();
//            resolve(false);
/*
            resolve({
                user: "Mads",
                loggedin: true
            });
*/
        });
    },

/*
    logout: () => {
        console.log("logging out");
    }
*/

    getCurrentUser: function() {
        return this.getAccessToken();
    },

    getAccessToken: function() {
        if (credentials.access_token === undefined) {
            return null;
        }

        if ((credentials.expires_in + credentials.timestamp) < (Date.now() / 1000)) {
            return null;
        }

        return credentials.access_token;
    },

    setCurrentUser: function(userId) {
        user = userId;
        return true;
    },

    login: function(username, password, component) {

/*
        webix.extend(component, webix.ProgressBar);
        component.disable();
        component.showProgress();
*/
        // Create a basic auth
        /*var //oauth = oauthUrl,
            //auth = btoa(oauth.clientId + ":" + oauth.clientSecret)
        ;
        *//*
                    webix.ajax().headers({
                        "Content-Type": "application/json",
                        "Authorization": "Basic " + auth
                    }).post(oauth.url, JSON.stringify({
                        "grant_type": "password",
                        "username": username,
                        "password": password
                    }), function(text, data) {

                        credentials = data.json();
                        credentials.timestamp = Date.now() / 1000 | 0;

                        Cookies.set("appCookie", credentials/!*, {expires: 2 }*!/);

                        require(["app"], function(app){
                            app.router(app.config.start);
                        });

                    }).then(null, function() {
                        // If error
                        component.enable();
                        component.hideProgress();
                    });*/

        if (username == "test" && password == "test") {
            this.credentials = {
                "access_token": "9c5742da1edc3531da2009fb35bb843c49e2e680",
                "expires_in": 3600,
                "token_type": "Bearer",
                "scope": null,
                "refresh_token": "1a8ceb5b59dac24f532b852e544ec3b834cea53c"
            };
            this.credentials.timestamp = Date.now() / 1000 | 0;

            Cookies.set("appCookie", this.credentials);
            console.log("Credentials are set, now to redirect");

            return new Promise((resolve, reject) => {
                console.log("In promise");
                console.log(this.credentials);
                resolve(this.credentials);
            });
            //return this.credentials;
/*
            require(["app"], function(app){
                app.router(app.config.start);
            });
*/
        } else {
            return new Promise((resolve, reject) => {
                resolve(null);
            });

            console.log("Waiting two seconds");
/*            setTimeout(function() {
                component.enable();
                component.hideProgress();
            }, 2000);*/
        }
    },

    logout: function() {
        this.credentials = {};
        Cookies.remove("appCookie");
    },

    refresh: function() {
        // Use the refresh-token to get a new bearer-token

    },

    session: {
        status: function() {
            return new Promise(function (resolve, reject) {
                console.log("Getting user-status");
                resolve(true);

            });

        }
    }

};
