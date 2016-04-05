var app=angular.module('myApp',[ngRoute]);

app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
    .when('/home',{
        templateUrl:'inicio.html'
    })
    .when('/contact',{
        templateUrl:'contacto.html'
    })
    .otherwise({
        redirectTo:'inicio.html'
    });
}]);