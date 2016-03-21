/**
 * Created by Administrator on 3/21/2016.
 */
angular.module('cgiApp')
       .factory('userFact',function($http){

       return {
          getUserInfo:function(){
              return $http.get('app/data/users.json');
          } ,
           getUserCountries:function(){
               var countryList=[
                   {text:"India",value:"IN"},
                   {text:"United State",value:"US"},
                   {text:"Canada",value:"CA"}
               ];
               return countryList;
           }
       } ;
    });