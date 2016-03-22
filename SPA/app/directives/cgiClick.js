/**
 * Created by Administrator on 3/22/2016.
 */
/**
 * Created by Administrator on 3/22/2016.
 */
angular.module('cgi.directives')
    .directive('cgiClick',[function(){
        var directiveObj={};
        directiveObj.restrict="A";
        directiveObj.link=function(scope,element,attrs){
            $(element).bind('click',function(){
                scope.$apply(function(){
                    scope.$eval(attrs.cgiClick);
                });
            });
        };
        return directiveObj;
    }]);