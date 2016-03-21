/**
 * Created by Administrator on 3/21/2016.
 */
angular.module("cgiApp")
       .controller("registerCtrl",function($scope){
            $scope.register={
                firstName:"",
                lastName:"",
                age:"",
                gender:"",
                country:"",
                terms:""
            }   ;

          $scope.genderList=[
              {key:"Male",value:"M"},
              {key:"Female",value:"F"}
          ];
         $scope.countryList=[
             {text:"India",value:"IN"},
             {text:"United State",value:"US"},
             {text:"Canada",value:"CA"}
         ];

        $scope.registerUser=function(){
            console.log($scope.register);
        }
    });