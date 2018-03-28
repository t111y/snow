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
/**
 * 玩家控制的角色
 * @author nodep
 * @version 1.0
 */
var PlayerRole = (function (_super) {
    __extends(PlayerRole, _super);
    function PlayerRole() {
        var _this = _super.call(this) || this;
        PlayerRole.self = _this;
        _this.type = RoleType.ROLE_PLAYER;
        return _this;
    }
    //角色的移动处理,这里的移动优化应该还可以继续优化
    PlayerRole.prototype.renderUpdate = function (interval) {
        if (RockBarContorller.offset == 0)
            return;
        //在这里检查某个点是否可以到达
        var tox = this.x + RockBarContorller.multX * this.speedX;
        var toy = this.y + RockBarContorller.multY * this.speedY;
        var standType = StandType.LAND;
        var canMove = false;
        if (standType == StandType.LAND) {
            if (!Tiled_Ground.getIns().groud.hitTestRole(tox, toy)) {
                canMove = true;
            }
            else {
                tox = this.x;
                toy = this.y + RockBarContorller.multY * this.speedY;
                if (!Tiled_Ground.getIns().groud.hitTestRole(tox, toy)) {
                    canMove = true;
                }
                else {
                    tox = this.x + RockBarContorller.multX * this.speedX;
                    toy = this.y;
                    if (!Tiled_Ground.getIns().groud.hitTestRole(tox, toy)) {
                        canMove = true;
                    }
                }
            }
            if (canMove) {
                this.synWay(tox, toy);
                this.x = tox;
                this.y = toy;
                var point = new RolePathPoint(new egret.Point(tox, toy));
                this.path.push(point);
                var mesh = RoleMesh.check(this.path);
                if (mesh != null) {
                    this.roleMeshs.push(mesh);
                }
                Globals.i().net.send({ x: Math.round(tox), y: Math.round(toy) });
            }
        }
    };
    return PlayerRole;
}(UserRole));
__reflect(PlayerRole.prototype, "PlayerRole");
//# sourceMappingURL=PlayerRole.js.map