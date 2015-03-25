;
(function(exports) {
    "use strict";


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
            "games": "games",
            "*default": "home"
        },
        signup: function()  {
            this.signupView.render().then(function(){
                initSideMenu();
                initTopMenu();
                new WOW().init();

                function success(pos) {
                    // pos.coords.latitude;
                    this.map = new GMaps ({
                        el: "#map",
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude
                    })

                    this.map.addMarker({
                    lat: 29.637975,
                    lng: -95.395283,
                    title: 'Houston',

                    click: function(e) {
                        alert('You clicked in this marker');
                    }
                });

                      this.map.addMarker({
                    lat: 29.637975,
                    lng: -95.395283,
                    title: 'Houston Dynmao',

                    click: function(e) {
                        alert('You clicked in this marker');
                    }
                });
                }
                function error(err) {
                    console.log(err.code);
                }

                navigator.geolocation.getCurrentPosition(success, error);

            });
        },
        dashboard: function() {
          this.dashboardView.render().then(function(){
                initAddMenu();
                initTopMenu();
                new WOW().init();
            });
        },
         games: function() {
        this.gamesView.render().then(function(){
                initSideMenu();
                initTopMenu();
                new WOW().init();
            });
        },
        home: function() {
            this.view.render().then(function(){
                initSideMenu();
                initTopMenu();
                new WOW().init();

        //         function success(pos) {
        //             // pos.coords.latitude;
        //             this.map = new GMaps ({
        //                 el: "#map",
        //                 lat: pos.coords.latitude,
        //                 lng: pos.coords.longitude
        //             })

        //             this.map.addMarker({
        //             lat: 29.637975,
        //             lng: -95.395283,
        //             title: 'Houston',

        //             click: function(e) {
        //                 alert('You clicked in this marker');
        //             }
        //         });

        //               this.map.addMarker({
        //             lat: 29.637975,
        //             lng: -95.395283,
        //             title: 'Houston Dynmao',

        //             click: function(e) {
        //                 alert('You clicked in this marker');
        //             }
        //         });
        //         }
        //         function error(err) {
        //             console.log(err.code);
        //         }

        //         navigator.geolocation.getCurrentPosition(success, error);

             });

         }
    })

    Backbone.Session = Backbone.Model.extend({
        defaults: {
            "signup": "false",
            "login": "not logged in",

        }
    })

    Backbone.HomeView = Backbone.TemplateView.extend({
        el: ".yo",
        view: "home"
    })


    Backbone.SignUpView = Backbone.TemplateView.extend({
        el: ".yo",
        view: "login",
        events: {
            "click #login": "login"
        },
        // login: function(event) {
        //     event.preventDefault();
        //     // debugger;
        //     var x = {
        //         login: this.el.querySelector("input[name='user']").value
        //     }
        //     this.model.add(x, {
        //         validate: true
        //     });

        // }
    })

    Backbone.GamesView = Backbone.TemplateView.extend({
        el: ".yo",
        view: "games",
        events: {
            "click #games": "games"
        },
        games: function(event) {
            event.preventDefault();
        }
    })


    Backbone.DashBoardView = Backbone.TemplateView.extend({
        el: ".yo",
        view: "dashboard",
        events: {
            "click #dashboard": "dashboard"
        },
        dashboard: function(event) {
            event.preventDefault();
        }
    })

})(typeof module === "object" ? module.exports : window)
