var app = angular.module("Demo", ["ngRoute"])
                .config(function($routeProvider){
                    $routeProvider
                    .when("/login",{
                        templateUrl:"login.html",
                        controller:"loginButton"
                    })
                    .when("/register",{
                        templateUrl:"register.html",
                        controller:"registerButton"
                    })
                })
          //  .controller("loginButton", function())