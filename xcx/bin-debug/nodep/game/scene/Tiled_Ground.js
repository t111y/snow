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
 * 平铺世界的基础容器
 */
var Tiled_Ground = (function (_super) {
    __extends(Tiled_Ground, _super);
    function Tiled_Ground() {
        var _this = _super.call(this) || this;
        _this.scaleX = WinsManager.scaleX;
        _this.scaleY = WinsManager.scaleY;
        return _this;
    }
    //世界只有一个
    Tiled_Ground.getIns = function () {
        if (null == Tiled_Ground._ins)
            Tiled_Ground._ins = new Tiled_Ground();
        return Tiled_Ground._ins;
    };
    /**刷新函数 */
    Tiled_Ground.prototype.renderUpdate = function (interval) {
        this.groud.synPositionTo(this._focus.x, this._focus.y);
    };
    /**设置当前焦点对象 */
    Tiled_Ground.prototype.setFocus = function (roleId) {
        if (this._focus != null)
            this._focus.__isFocus = false;
        this._focus = this.roleMap[roleId];
        this._focus.__isFocus = true;
    };
    /**添加一个焦点显示对象 */
    Tiled_Ground.prototype.addFocusRole = function (role) {
        this.roleMap[role.id] = role;
        this.groud.addRole(role);
        role.addToWorld();
    };
    //初始化地图
    Tiled_Ground.prototype.initWorld = function () {
        this.roleMap = {};
        this.groud = new GroundLayer(GameConfig.WORD_W, GameConfig.WORD_H);
        this.addChild(this.groud);
        this.createSelf();
        this.monsterManager = new MonsterManager();
        RenderManager.getIns().registRender(this);
        RenderManager.getIns().registRender(this.monsterManager);
    };
    /**将自己添加到场景*/
    Tiled_Ground.prototype.createSelf = function () {
        this._self = new PlayerRole();
        this._self.x = 1000; // GameData.playerData.posX * this.cf_X;
        this._self.y = 1000; //GameData.playerData.posY * this.cf_Y;
        this.addFocusRole(this._self);
        this.setFocus(this._self.id);
    };
    return Tiled_Ground;
}(egret.DisplayObjectContainer));
__reflect(Tiled_Ground.prototype, "Tiled_Ground", ["IRender"]);
//# sourceMappingURL=Tiled_Ground.js.map