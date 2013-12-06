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
        , publicD =  path.join(__dirname, 'public');

		function Splash(sn, version){
			this.sn = sn;
			this.vsion = version;
			this.title = "Splash Design #" + this.sn + " Version " + this.vsion;
			this.id = "d" + this.sn + "v" + this.vsion;
			this.url = "#" + this.id;
		}

		var d2v1 = new Splash("2", "1")
			,   d2av1 = new Splash("2a", "1")
			,   d7v1 = new Splash("7", "1");


	var splashes = {
		splash : [d2v1, d2av1, d7v1]
	};


    //whatever happens, this file needs to call Server.
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
    app.get('/', function (req, res) {
	    console.log(splashes);
	    res.render(defaultF, splashes );
    });
    new Server(app);




