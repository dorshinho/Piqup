;
(function(exports) {
    "use strict";

    function scrollBodyTo(to, duration, callback) {
        var start = window.scrollY,
            change = to - start,
            currentTime = 0,
            increment = 20;

        var animateScroll = function() {
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            window.scrollTo(0, val);
            if (currentTime <= duration) {
                requestAnimationFrame(animateScroll);
            } else {
                callback && callback();
            }
        };
        requestAnimationFrame(animateScroll);
    }

    //t = current time
    //b = start value
    //c = change in value
    //d = duration
    Math.easeInOutQuad = function(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };


    Backbone.PiqupRouter = Backbone.Router.extend({

        initialize: function() {

            this.model = new Backbone.Session();
            this.view = new Backbone.HomeView({
                model: this.model
            });

            this.signupView = new Backbone.SignUpView();
            this.dashboardView = new Backbone.DashBoardView();


            this.GamesView = new Backbone.GamesView({
                collection: this.trips
            });


            Backbone.history.start();
        },

        routes: {
            "signup": "signup",
            "dashboard": "dashboard",
            "trips": "trips",
            "*default": "home"
        },
        signup: function() {
            this.signupView.render()
        },
        dashboard: function() {
            this.dashboardView.render();
        },
        games: function() {
            var self = this;
            this.games.fetch();
        },
        home: function() {
            this.view.render();
        }
    })

    Backbone.Session = Backbone.Model.extend({
        defaults: {
            "signup": "false",
            "login": "not logged in",
            "addfieldtrip": "false"
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
                login: this.el.querySelector("input[name='user']").value
            }
            this.model.add(x, {
                validate: true
            });

        }
    })

    Backbone.GamesView = Backbone.TemplateView.extend({
        el: ".container",
        view: "Gamesview",
        events: {
            "click #games": "games",
            "submit form.login": "games"
        },
        trips: function(event) {
            event.preventDefault();
            var data = {
                fieldtrips: this.el.querySelector("button[name='Yo']").value
            }
            this.collection.add(data, {
                validate: true
            });
            console.log(data);
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




})(typeof module === "object" ? module.exports : window)