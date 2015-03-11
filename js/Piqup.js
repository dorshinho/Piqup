;(function(){

    "use strict";

    Backbone.PiqupRouter = Backbone.Router.extend({

        initialize: function() {

            this.model = new Backbone.Session();
            this.view = new Backbone.HomeView({
                model: this.model
            });

            this.signupView = new Backbone.SignUpView();
            this.dashboardView = new Backbone.DashBoardView();

            this.addGameView = new Backbone.addGameView();

            Backbone.history.start();
        },

        routes: {
            "signup": "signup",
            "dashboard": "dashboard",
            "games": "games",
            "*default": "home"
        },
        signup: function() {
            this.signupView.render()
        },
        dashboard: function() {
            this.dashboardView.render();
        },
        games: function() {
            this.games.render();
        },
        addfieldtrip: function() {
            this.addtripView.render();
        },
        home: function() {
            this.view.render();
        }
    })

    Backbone.Session = Backbone.Model.extend({
        defaults: {
            "signup": "false",
            "login": "not logged in",
            "addgame": "false"
        }
    })

    Backbone.HomeView = Backbone.TemplateView.extend({
        el: ".container",
        view: "home"
    })

    Backbone.SignUpView = Backbone.TemplateView.extend({
        el: ".container",
        view: "login",
        events: {
            "click #login": "login"
        },
        login: function(event) {
            event.preventDefault();
            // debugger;
            var x = {
                login: this.el.querySelector("input[name='player']").value
            }
            this.model.add(x, {
                validate: true
            });
        }
    })

    Backbone.AddGameView = Backbone.TemplateView.extend({
        el: ".container",
        view: "game",
        events: {
            "click #game": "game"
        },
        addatrip: function(event) {
            event.preventDefault();
            var x = {
                addgame: this.querySelector("a[name= 'addgamebutton']").value
            }
        }
    })

    Backbone.DashBoardView = Backbone.TemplateView.extend({
        el: ".container",
        view: "dashboard",
        events: {
            "click #dashboard": "dashboard"
        },
        dashboardex: function(event) {
            event.preventDefault();
        }
    })


})(typeof module === "object" ? module.exports : window);