var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MsgEvent = (function () {
    function MsgEvent() {
    }
    MsgEvent.sc_login = "10000";
    MsgEvent.sc_move = "10001";
    return MsgEvent;
}());
__reflect(MsgEvent.prototype, "MsgEvent");
//# sourceMappingURL=MsgEvent.js.map