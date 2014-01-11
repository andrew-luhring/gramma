"use strict";
        var express = require('express')
        , hbs = require('express-hbs')
        , app = express()
        , path = require('path')
        , Backbone = require('backbone')
        , Server = require('./app')
        , viewsD = __dirname + '/views/'
        , partialsD = viewsD + 'partials/'
        , defaultF = viewsD + 'default.hbs'
        , portN = 5000
        , livereload = require('livereload')
        , publicD =  path.join(__dirname, 'public')
        , gallery = require('./models/gallery.json');


    app.use(express.static(publicD))
          .use(express.bodyParser())
          .use(express.logger('dev'))
          .use(express.methodOverride());
        app.use(require('browserify')({
            require: [ 'jquery-browserify', 'jquery-mousewheel' ]
        }));
    app.set('view engine', 'hbs')
           .set('port', process.env.PORT || portN)
           .set('cache', false)
           .set('views', viewsD);
    app.engine('hbs', hbs.express3({
        partialsDir: partialsD,
        defaultLayout: defaultF
    }));
    //Dynamically include routes
function Page(route, info){
	this.route = route;
	this.info = info;
}
function Btn(action, cls, id, type, text){
	this.action = action;
	this.class = cls;
	this.id = id;
	this.type = type;
	this.text = text;
}


var landing = new Page('/', gallery);


app.get( landing.route , function (req, res) {
		console.log(landing.info);
	    res.render(defaultF, landing.info);
});
    new Server(app);