/**
 * Created by Administrator on 3/21/2016.
 */
angular.module('cgiApp')
       .controller('userCtrl',function($scope,$filter){
        $scope.changeCountry =function(){
          var output=  $filter("phoneFormat")("1234567890",$scope.selectedCountry.value);
            console.log(output);
        };
        $scope.countryList=[
            {text:"India",value:"IN"},
            {text:"United State",value:"US"},
            {text:"Canada",value:"CA"}
        ];
        $scope.users=[
           { firstName:"kiran",lastName:"PVS",email:"kiran@gmail.com",dob:new Date().getDate(),phone:"2132314567"},
           { firstName:"sunil",lastName:"abc",email:"sunil@gmail.com",dob:new Date().getDate(),phone:"1234567890"},
           { firstName:"nag",lastName:"def",email:"nag@gmail.com",dob:new Date().getDate(),phone:"2345678901"}]
    });