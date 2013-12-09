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
        , publicD =  path.join(__dirname, 'public');


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
function Splash(sn, version){
	this.sn = sn;
	this.vsion = version;
	this.title = "Splash Design #" + this.sn + " Version " + this.vsion;
	this.id = "d" + this.sn + "_v" + this.vsion;
	this.url = "#" + this.id;
	this.template = "splash_" + this.id;
}
function Btn(action, cls, id, type, text){
	this.action = action;
	this.class = cls;
	this.id = id;
	this.type = type;
	this.text = text;
}
var d2v1 = new Splash("2", "1")
,   d2av1 = new Splash("2A", "1")
,   d7v1 = new Splash("7", "1");

var genericButton = new Btn("none", "subsection_button", "test", "button", "Action Button");
var generic_subsection = {
	id : "generic"
	,   headline: "Additional Sub-Headline <strong>Text</strong>"
	,   figure: {
		src : ""
		,   alt : "figure alt"
		,   caption : "figure caption"
	}
	,   text: "<p> Copy explaining the program. Lorem ipsum dolor sit amet, consectetur adipderp elite, sed do derp a derp incidid unt ut, derpa swaga derp et dolore magna carta jay z.</p>"
	,   button: [genericButton]
}
d7v1.page = {
	id : "d7v1"
,   headline : "Headline <strong>Text</strong>"
,   top_banner : {
		src : "images/splash_d7_v1.png"
	,   figcaption : "This is assuming the banner relates to the article and is not an ad."
	}
,   subsections : [generic_subsection, generic_subsection, generic_subsection, generic_subsection]
}

var splashes = [d7v1];


app.get('/', function (req, res) {
	console.log(splashes[0].page);
	    res.render(defaultF, splashes[0].page);
});
    new Server(app);
	//var server = livereload.createServer();
	//server.watch(__dirname + "/");









