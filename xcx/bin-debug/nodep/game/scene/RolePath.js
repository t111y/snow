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
var RolePath = (function (_super) {
    __extends(RolePath, _super);
    function RolePath() {
        var _this = _super.call(this) || this;
        _this._shape = new egret.Shape();
        _this.addChild(_this._shape);
        return _this;
    }
    RolePath.prototype.renderUpdate = function (interval) {
        this.drawPath(this.role.path);
        this.removeOvertimePoint(this.role.path);
        for (var i = this.role.roleMeshs.length - 1; i >= 0; i--) {
            var roleMesh = this.role.roleMeshs[i];
            if (egret.getTimer() - roleMesh.time < GameConfig.trapTime) {
                if (roleMesh.shape.parent == null) {
                    this.addChild(roleMesh.shape);
                }
                roleMesh.drawMesh();
            }
            else {
                roleMesh.dispose();
                this.role.roleMeshs.splice(i, 1);
                break;
            }
        }
    };
    //画线
    RolePath.prototype.drawPath = function (path) {
        if (!path || path.length < 2) {
            return;
        }
        this._shape.graphics.clear();
        this._shape.graphics.lineStyle(2, 0xff0000);
        var point = path[0].point;
        this._shape.graphics.moveTo(point.x, point.y);
        for (var i = 1; i < path.length; i++) {
            this._shape.graphics.lineTo(path[i].point.x, path[i].point.y);
        }
        this._shape.graphics.endFill();
    };
    //删除超时的点
    RolePath.prototype.removeOvertimePoint = function (path) {
        if (path.length > 0 && egret.getTimer() - path[0].time > GameConfig.pointOvertime) {
            path.shift();
        }
    };
    return RolePath;
}(egret.DisplayObjectContainer));
__reflect(RolePath.prototype, "RolePath", ["IRender"]);
//# sourceMappingURL=RolePath.js.map