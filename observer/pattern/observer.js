/**
 * Created by linglong;
 * Email: linglong@navinfo.com;
 * Date 2017/3/13;
 * Time 16:04
 */
var ObserverController = function(){
    var instance;

    var ObserverController = function(){};

    return function(){
        if(!instance){
            instance = new ObserverController();
        }
        return instance;
    }
}();