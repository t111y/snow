var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Globals = (function () {
    function Globals() {
        this.net = new NetworkManager();
        this.killNum = 0;
    }
    Globals.i = function () {
        if (Globals._i == null) {
            Globals._i = new Globals();
        }
        return Globals._i;
    };
    return Globals;
}());
__reflect(Globals.prototype, "Globals");
//# sourceMappingURL=Globals.js.map