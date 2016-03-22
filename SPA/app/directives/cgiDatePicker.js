/**
 * Created by Administrator on 3/22/2016.
 */
/**
 * Created by Administrator on 3/22/2016.
 */
angular.module('cgi.directives')
    .directive('cgiDatePicker',[function(){
        var directiveObj={};
        directiveObj.restrict="A";
        directiveObj.link=function(scope,element,attrs){
            $(element).datepicker({
                minDate:attrs.mindate,
                maxDate:attrs.maxdate});
        };
        return directiveObj;
    }]);