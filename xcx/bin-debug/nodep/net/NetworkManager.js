var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var NetworkManager = (function (_super) {
    __extends(NetworkManager, _super);
    function NetworkManager() {
        var _this = _super.call(this) || this;
        _this._len = -1;
        _this.bytes = new egret.ByteArray();
        _this.socket = new egret.WebSocket();
        _this.socket.connectByUrl("ws://121.43.192.128:8090/websocket");
        _this.socket.addEventListener(egret.Event.CONNECT, function (e) {
            console.log(e);
            this.dispatchEvent(e);
        }, _this);
        _this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, _this.onReceiveMessage, _this);
        return _this;
    }
    NetworkManager.prototype.onReceiveMessage = function (e) {
        var m = this.socket.readUTF();
        m = m.replace("That's what she said!", "");
        var o;
        try {
            o = JSON.parse(m);
            console.log("收到消息 " + o);
            this.dispatchEvent(new egret.Event(o.msgId, false, false, MessageType.paserScMsg(o)));
        }
        catch (error) {
            console.log("收到消息 " + m);
        }
    };
    NetworkManager.prototype.send = function (s) {
        this.socket.writeUTF(JSON.stringify(s));
    };
    return NetworkManager;
}(egret.EventDispatcher));
__reflect(NetworkManager.prototype, "NetworkManager");
//# sourceMappingURL=NetworkManager.js.map