/**
 * Created by SebasG on 9/05/16.
 */
var miApp = angular.module('miApp',[]);
miApp.controller("AlumnosController",function ($scope) {
    $scope.alumnos = [
        {nombre: "Sebastián Guevara", telefono: "3106198756", curso: "Angular Básico 1"},
        {nombre: "Ligia Guevara", telefono: "3103317685", curso: "HTML & CSS3"},
        {nombre: "Paola Guevara", telefono: "3189876689", curso: "Diseño Adaptable"},
        {nombre: "Stefany Mojica", telefono: "3134567321", curso: "Manejo Básico de JavaScript"}
    ]
})
