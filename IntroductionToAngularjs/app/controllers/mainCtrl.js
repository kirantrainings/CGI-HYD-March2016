/**
 * Created by Administrator on 3/21/2016.
 */


angular.module('cgiApp')
       .controller('mainCtrl',function($scope) {
        $scope.name="kiran";
        $scope.handleButton=function(){
            console.log($scope.firstName);

        }
    });