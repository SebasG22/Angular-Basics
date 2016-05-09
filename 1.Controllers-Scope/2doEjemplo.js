/**
 * Created by SebasG on 9/05/16.
 */
var miApp= angular.module('miApp',[]);
miApp.controller("AlumnoController",function ($scope) {
    $scope.alumno={
        nombre:"Sebastián Guevara",
        curso:"Angular Básico 1"
    }
})