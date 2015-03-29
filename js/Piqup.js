;
(function(exports) {
    "use strict";


    Backbone.PiqupRouter = Backbone.Router.extend({

        initialize: function() {

            this.view = new Backbone.HomeView({
                model: this.model
            });

            this.signupView = new Backbone.SignUpView();
            this.dashboardView = new Backbone.DashBoardView();
            this.detailsView = new Backbone.DetailsView();
            this.gamesView = new Backbone.GamesView();


            autocompleteEvents(); // listen to geocomplete form ONCE and only once

            Backbone.history.start();
        },

        routes: {
            "signup": "signup",
            "dashboard": "dashboard",
            "details": "details",
            "games": "games",
            "*default": "home"
        },
        signup: function() {
            this.signupView.render().then(function() {
                initSideMenu();
                initAutoCompleteWithMap();
                 initTopMenu();
                new WOW().init();

                function success(pos) {

                    pos.coords.latitude;

                    this.map2 = new GMaps({
                        el: "#map2",
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude
                    })

                    this.map2.addMarker({
                        lat: 29.637975,
                        lng: -95.395283,
                        title: 'Houston Sports Complex',

                        click: function(e) {
                            alert('You clicked in this marker');
                        }
                    });

                    this.map2.addMarker({
                        lat: 29.748395,
                        lng: -95.353005,
                        title: 'Houston Street Soccer',

                        click: function(e) {
                            this.map2 = GMaps.createPanorama({
                                el: '#map2',
                                lat: 29.748395,
                                lng: -95.353005,
                            });
                        }
                    });
                    this.map2.addMarker({
                        lat: 30.075296,
                        lng: -95.214665,
                        title: 'Northpark Soccer Fields',

                        click: function(e) {
                            this.map2 = GMaps.createPanorama({
                                el: '#map',
                                lat: 30.075296,
                                lng: -95.214665,
                            });
                        }
                    });

                }

                function error(err) {
                    console.log(err.code);
                }

                navigator.geolocation.getCurrentPosition(success.bind(this), error);

            });
        },

        dashboard: function() {
            this.dashboardView.render().then(function() {
                initSideMenu();
                initTopMenu();
            });
        },
        games: function() {
            this.gamesView.render().then(function() {
                initSideMenu();
                initTopMenu();
            });
        },

         details: function() {
            this.detailsView.render().then(function() {
                initSideMenu();
                initTopMenu();
            });
        },

        home: function() {
            this.view.render().then(function() {
                initSideMenu();
                 initTopMenu();
                initAutoComplete();
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

  Backbone.DetailsView = Backbone.TemplateView.extend({
        el: ".yo",
        view: "details",
        events: {
            "click #details": "details"
        },
        details: function(event) {
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
