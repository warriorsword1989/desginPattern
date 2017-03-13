/**
 * Created by linglong;
 * Email: linglong@navinfo.com;
 * Date 2017/3/13;
 * Time 16:24
 */
;(function(window){
    var instance;
    function ObserverController(){
        this.events = {};
    }
    ObserverController.prototype.regist = function (type, callback) {
        if(!this.events[type]){
            this.events[type] = [];
        }
        this.events[type].push(callback);
    };
    ObserverController.prototype.fire = function (type, data) {
        if (!this.events[type]) return;
        var event = {
            type: type,
            data: data
        }
        for (var i = 0; i < this.events[type].length; i++) {
            this.events[type][i].call(this, event)
        }
    };
    ObserverController.prototype.removeAll = function () {

    };
    ObserverController.prototype.remove = function () {

    }
    // 提升为全局对象;
    window.ObserverController = ObserverController;

    return function(){
        if(!instance){
            instance = new ObserverController();
        }
        return instance;
    }
}(window));