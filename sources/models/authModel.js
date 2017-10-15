import * as Cookies from "js-cookie";

export class authModel {

    status() {
        return new Promise(function(resolve, reject) {
            resolve(this.credentials);
        });
    };

    getCurrentUser() {
        return this.getAccessToken();
    };

    getAccessToken() {
        if (this.credentials.access_token === undefined) {
            return null;
        }

        if ((this.credentials.expires_in + this.credentials.timestamp) < (Date.now() / 1000)) {
            return null;
        }

        return this.credentials.access_token;
    };

    setCurrentUser(userId) {
        this.user = userId;
    };

    login(username, password) {

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

            return new Promise((resolve, reject) => {
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
                setTimeout(() => {
                    resolve(null);
                }, 2000);
            });
        }
    };

    logout() {
        this.credentials = {};
        Cookies.remove("appCookie");
    };

    refresh() {
        // Use the refresh-token to get a new bearer-token

    };
}
