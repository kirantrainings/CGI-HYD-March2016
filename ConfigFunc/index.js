/**
 * Created by Administrator on 3/22/2016.
 */
angular.module('component',[])
    .config([function(){
        console.log("component function");
    }]);

angular.module('configDemo',['component'])
       .config([function(){
        console.log("Main function");
    }]);