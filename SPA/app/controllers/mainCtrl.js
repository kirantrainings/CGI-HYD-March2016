/**
 * Created by Administrator on 3/21/2016.
 */

(function(){
    angular.module('CGI.Shopper')
        .controller('mainCtrl',
        ['$scope',function($scope){

            $scope.headerUrl="app/views/header.tpl.html";
            $scope.footerUrl="app/views/footer.tpl.html";
            $scope.loadPage= function(tab){
                if(tab==='home')
                $scope.contentTemplate='app/views/home.tpl.html';
                if(tab==='profile'){
                    $scope.contentTemplate='app/views/profile.tpl.html';
                }
            }
        }]);
})()