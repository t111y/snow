var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var NetworkManager = (function () {
    function NetworkManager() {
        this._len = -1;
        this.bytes = new egret.ByteArray();
        this.socket = new egret.WebSocket();
        this.socket.connectByUrl("ws://localhost:8080/websocket");
        this.socket.addEventListener(egret.Event.CONNECT, function (e) {
            console.log(e);
        }, this);
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
    }
    NetworkManager.prototype.onReceiveMessage = function (e) {
        var m = this.socket.readUTF();
        var o;
        try {
            o = JSON.parse(m);
            console.log("收到消息 " + o);
        }
        catch (error) {
            console.log("收到消息 " + m);
        }
    };
    NetworkManager.prototype.send = function (s) {
        this.socket.writeUTF(JSON.stringify(s));
    };
    return NetworkManager;
}());
__reflect(NetworkManager.prototype, "NetworkManager");
//# sourceMappingURL=NetworkManager.js.map