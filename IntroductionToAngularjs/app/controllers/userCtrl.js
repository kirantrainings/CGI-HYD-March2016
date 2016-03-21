/**
 * Created by Administrator on 3/21/2016.
 */
angular.module('cgiApp')
       .controller('userCtrl',function($scope,$filter,userFact){
        $scope.changeCountry =function(){
          var output=  $filter("phoneFormat")("1234567890",$scope.selectedCountry.value);
            console.log(output);
        };

        userFact.getUserInfo()
            .then(function(response){
                console.log(response);
                $scope.users=response.data.users;
            })
            .catch(function(response){
                console.log(response);
            })
            .finally(function(){

            });

        $scope.countryList= userFact.getUserCountries();


    });