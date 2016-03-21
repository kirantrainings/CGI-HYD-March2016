/**
 * Created by Administrator on 3/21/2016.
 */
angular.module('cgi.common')
       .filter("phoneFormat",function(){

        return function(input,criteria){

            var formattedData=input;

            if(input && input.length==10){

                if(criteria==="US"){
                    return input.substring(0,3)+"-"+input.substring(3,6)+"-"+input.substring(6,10);
                }
                if(criteria=="IN"){
                    return input.substring(0,5)+"-"+input.substring(5,10);
                }
                return  input;
            }

            return formattedData;
        };
    });