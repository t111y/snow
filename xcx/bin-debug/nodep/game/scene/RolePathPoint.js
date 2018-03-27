var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RolePathPoint = (function () {
    function RolePathPoint(point) {
        this.isUsed = false;
        this.time = egret.getTimer();
        this.point = point;
    }
    return RolePathPoint;
}());
__reflect(RolePathPoint.prototype, "RolePathPoint");
//# sourceMappingURL=RolePathPoint.js.map