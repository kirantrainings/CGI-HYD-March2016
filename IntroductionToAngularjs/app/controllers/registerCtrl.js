/**
 * Created by Administrator on 3/21/2016.
 */
angular.module("cgiApp")
       .controller("registerCtrl",function($scope,userFact){
         $scope.register={};
         $scope.countryList= userFact.getUserCountries();
         $scope.registerUser=function(){
            console.log($scope.register);
        }
    });