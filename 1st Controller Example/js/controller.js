var app= angular.module("MyApp",[]);
app.controller("mainCon",function($scope){
    
     $scope.phoneBook=[{contact:'Sebastian',marked:true},
                  {contact: 'Stefany',marked:false}];
    
    $scope.addcontact=function () {
        $scope.phoneBook.push({contact:$scope.newcontact,marked:false});
        $scope.contact='';
    }
});
