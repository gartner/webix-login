My App!
================

Based on [Webix UI](http://webix.com)

Install
=======

Run 'bower install' to install dependencies for this app to run.

Run
===

When starting the app, a login-box is shown. Username and password is 'test'.
If this is entered, you are logged in to the app. Anything else, and you will keep seeing the login-box.

In the login-box, if 'Remember credentials' is checked, both username and password will be saved in a cookie in your browser. This is not the smartest thing to do, you should alter the code to only save username.

See the method login() in the file models/user.js to make a real login.
My use is to login using Oauth2 username/password against an [Apigility server](http://apigility.org), but it should be quite easy to see how to alter the code to fit other scenarios.

