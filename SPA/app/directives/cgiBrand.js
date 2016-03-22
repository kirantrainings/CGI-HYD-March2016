/**
 * Created by Administrator on 3/22/2016.
 */
angular.module('cgi.directives')
       .directive('cgiLogo',[function(){
        var directiveObj = {};
         directiveObj.restrict="A";
         directiveObj.template="<image src='images/logo.png'/>";

        return directiveObj;
    }]);


angular.module('cgi.directives')
    .directive('cgiFooter',[function(){
        var directiveObj = {};
        directiveObj.restrict="EAC";
        //directiveObj.template="<div class='glyphicon-copyright-mark'>Copy Right 2016</div>";
        directiveObj.templateUrl="app/views/footer.tpl.html";
        return directiveObj;
}]);

