/**
 * Created by Administrator on 3/22/2016.
 */
angular.module('cgi.directives')
       .directive('cgiNumberOnly',[function(){
        var directiveObj={};
        directiveObj.restrict="A";
        directiveObj.link=function(scope,element,attrs){
            console.log(scope);
            console.log(element);
            console.log(attrs);
            function handleKeyPress(e){
                if(e.keyCode>=48 && e.keyCode<=57){

                }
                else{
                    e.preventDefault();
                }
            };

            $(element).bind('keypress',handleKeyPress);


        };
        return directiveObj;
    }]);