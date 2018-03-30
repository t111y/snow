var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MessageType = (function () {
    function MessageType() {
    }
    MessageType.createLogin = function (name) {
        return { "msgId": 10000, "name": name };
    };
    MessageType.createEnterScene = function () {
        return { "msgId": 12000 };
    };
    MessageType.createMove = function (path) {
        return { "msgId": 12001, "path": [[1, 2]] };
    };
    MessageType.createCirclePath = function (mesh) {
        return { "msgId": 12004, "circlePath": [[1, 2]] };
    };
    MessageType.parseLogin = function (o) {
        var msg = new ScLogin();
        msg.playerId = o.playerId;
        return msg;
    };
    MessageType.parseEnterScene = function (o) {
        var msg = new ScEnterScene();
        msg.sceneId = o.sceneId;
        return msg;
    };
    MessageType.parseUserEnter = function (o) {
        var msg = new ScUserEnter();
        msg.sceneId = o.sceneId;
        return msg;
    };
    MessageType.parseMove = function (o) {
        var msg = new ScMove();
        msg.playerId = o.playerId;
        msg.path = new Array();
        return msg;
    };
    MessageType.parseCirclePath = function (o) {
        var msg = new ScCirclePath();
        return msg;
    };
    MessageType.paserScMsg = function (o) {
        switch (o.msgId) {
            case MessageType.sc_login:
                return MessageType.parseLogin(o);
            case MessageType.sc_move:
                return MessageType.parseMove(o);
            case MessageType.sc_userEnter:
                return MessageType.parseUserEnter(o);
            case MessageType.sc_circlePath:
                return MessageType.parseCirclePath(o);
            case MessageType.sc_enterScene:
                return MessageType.parseEnterScene(o);
        }
    };
    /*
    登录
    c2s => {"msgId": 10000, "name": "test1"}
    s2c => {"msgId":10000,"playerId":429501024567297}
    */
    MessageType.sc_login = 10000;
    /*
    进入场景
    c2s => {"msgId": 12000}
    s2c => {"msgId":12000,"sceneId":6537229662358143976}
    */
    MessageType.sc_enterScene = 12000;
    /*
    同步路径(返回只发给其他玩家)
    c2s => {"msgId": 12000}
    s2c => {"msgId":12000,"sceneId":6537229662358143976}
    */
    MessageType.sc_move = 12001;
    /**
     * 别的玩家进入场景
     * s2c => {"msgId": 12002, "players": [玩家id]}
     * */
    MessageType.sc_userEnter = 12002;
    /**
     * 生成封闭区域
    c2s => {"msgId": 12004, "circlePath": [[2,3], [23, 23]....], "time": 1522296176}
    s2c => {"msgId": 12004, "playerId": 429501024567297, "time": 1522296176, "circlePath": [[2,3], [23, 23]]}
     * */
    MessageType.sc_circlePath = 12004;
    MessageType.playerId = "";
    return MessageType;
}());
__reflect(MessageType.prototype, "MessageType");
var ScLogin = (function () {
    function ScLogin() {
    }
    return ScLogin;
}());
__reflect(ScLogin.prototype, "ScLogin");
var ScEnterScene = (function () {
    function ScEnterScene() {
    }
    return ScEnterScene;
}());
__reflect(ScEnterScene.prototype, "ScEnterScene");
var ScUserEnter = (function () {
    function ScUserEnter() {
    }
    return ScUserEnter;
}());
__reflect(ScUserEnter.prototype, "ScUserEnter");
var ScMove = (function () {
    function ScMove() {
    }
    return ScMove;
}());
__reflect(ScMove.prototype, "ScMove");
var ScCirclePath = (function () {
    function ScCirclePath() {
    }
    return ScCirclePath;
}());
__reflect(ScCirclePath.prototype, "ScCirclePath");
//# sourceMappingURL=MessageType.js.map