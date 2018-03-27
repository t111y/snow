var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RoleMesh = (function () {
    function RoleMesh() {
        this.points = new Array();
        this.x1 = 9999999;
        this.x2 = -9999999;
        this.y1 = 9999999;
        this.y2 = -9999999;
        this.rect = new egret.Rectangle();
        this.shape = new egret.Shape();
        WinsManager.getIns().gameStage().addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStageTouch, this);
    }
    RoleMesh.prototype.onStageTouch = function (e) {
        console.log(e.stageX, e.stageY);
        console.log("点中了吗 " + this.shape.hitTestPoint(e.stageX, e.stageY));
    };
    RoleMesh.prototype.hitTest = function (x, y) {
        if ((x < this.x1 && x > this.x2) || (y < this.y1 && y > this.y2)) {
            return false;
        }
        var s = this.shape.hitTestPoint(x, y, false);
        return s;
    };
    RoleMesh.prototype.addPoints = function (points) {
        for (var i = 0; i < points.length; i++) {
            var point = points[i];
            if (this.x1 > point.point.x) {
                this.x1 = point.point.x;
            }
            if (this.x2 < point.point.x) {
                this.x2 = point.point.x;
            }
            if (this.y1 > point.point.y) {
                this.y1 = point.point.y;
            }
            if (this.y2 < point.point.y) {
                this.y2 = point.point.y;
            }
            point.isUsed = true;
            this.time = egret.getTimer();
            this.points.push(point);
        }
    };
    RoleMesh.check = function (path) {
        var l = 5;
        if (path.length < 5) {
            return;
        }
        for (var i = 0; i < path.length; i++) {
            if (path[i].isUsed) {
                continue;
            }
            for (var j = i + l; j < path.length; j++) {
                if (!path[j].isUsed && egret.Point.distance(path[i].point, path[j].point) < 6) {
                    var roleMesh = new RoleMesh();
                    var points = path.slice(i, j);
                    roleMesh.addPoints(points);
                    return roleMesh;
                }
            }
        }
        return null;
    };
    //画面
    RoleMesh.prototype.drawMesh = function () {
        this.shape.graphics.clear();
        this.shape.graphics.beginFill(0x00ff00, 1 - (egret.getTimer() - this.time) / GameConfig.trapTime);
        var point = this.points[0].point;
        this.shape.graphics.moveTo(point.x, point.y);
        for (var i = 1; i < this.points.length; i++) {
            this.shape.graphics.lineTo(this.points[i].point.x, this.points[i].point.y);
        }
        this.shape.graphics.endFill();
    };
    RoleMesh.prototype.dispose = function () {
        if (this.shape.parent != null) {
            this.shape.parent.removeChild(this.shape);
        }
        WinsManager.getIns().gameStage().removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStageTouch, this);
    };
    return RoleMesh;
}());
__reflect(RoleMesh.prototype, "RoleMesh");
//# sourceMappingURL=RoleMesh.js.map