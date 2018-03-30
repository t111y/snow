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
 * 焦点目标,一旦被设置为场景焦点后可以控制场景摄像机位置
 * @author nodep
 * @version 1.0
 */
var FocusRole = (function (_super) {
    __extends(FocusRole, _super);
    function FocusRole() {
        var _this = _super.call(this) || this;
        _this.__isFocus = false;
        _this.id = 0;
        _this.isDead = false;
        _this._way = -1;
        FocusRole._addId++;
        _this.id = FocusRole._addId;
        var s = new egret.Shape();
        _this.addChild(s);
        s.graphics.beginFill(0x0000ff);
        s.graphics.drawCircle(0, 0, 10);
        _this.mc = new egret.MovieClip();
        _this.addChild(_this.mc);
        _this.mc.x = -430;
        _this.mc.y = -400;
        _this.setWay(0);
        return _this;
    }
    FocusRole.prototype.setDead = function (isDead) {
        this.isDead = isDead;
        if (isDead) {
            Globals.i().killNum++;
            WinsManager.getIns().showFloatText(Globals.i().killNum + "击");
            if (this.filters == null) {
                var f = new Array();
                f.push(new egret.GlowFilter(0xffff00, 1, 10, 10, 100));
                this.filters = f;
            }
        }
        else {
            this.filters = null;
        }
    };
    FocusRole.prototype.setWay = function (way) {
        if (way == this._way) {
            return;
        }
        this._way = way;
        if (way < 0) {
            way = Math.abs(way);
            this.scaleX = -1;
        }
        else {
            this.scaleX = 1;
        }
        var mcFactory;
        if (!this.mcData) {
            RES.getResByUrl("resource/assets/hero/Person/1003_walk_2840d952.json", function (e) {
                this.mcData = JSON.parse(e);
            }, this, RES.ResourceItem.TYPE_TEXT);
        }
        var m = this.mc;
        var t;
        RES.getResByUrl("resource/assets/hero/Person/1003_walk_4a5945e3.png", function (e) {
            t = e;
            mcFactory = new egret.MovieClipDataFactory(this.mcData, t);
            m.movieClipData = mcFactory.generateMovieClipData("0_3_walk_" + way);
            m.play(-1);
        }, this, RES.ResourceItem.TYPE_IMAGE);
    };
    FocusRole.prototype.synWay = function (tx, ty) {
        var r = Math.atan2(tx - this.x, ty - this.y);
        r = (r * 180 / Math.PI + 360);
        var f = (8 - Math.round(r / 45)) % 8;
        this.setWay(f);
    };
    FocusRole.prototype.renderUpdate = function (interval) {
    };
    /**增加到世界 */
    FocusRole.prototype.addToWorld = function () {
        RenderManager.getIns().registRender(this);
    };
    /**设置当前焦点 */
    FocusRole.prototype.setFocus = function (flag) {
        this.__isFocus = flag;
        return this;
    };
    FocusRole.prototype.setAreaKey = function (ak) {
        this._ak = ak;
    };
    FocusRole.prototype.getAreaKey = function () {
        return this._ak;
    };
    FocusRole.prototype.removed = function () {
    };
    FocusRole.prototype.added = function () {
    };
    FocusRole.prototype.tryOption = function (px, py) {
        return 0;
    };
    FocusRole.prototype.hitTestArea = function (px, py) {
        return false;
    };
    FocusRole.prototype.getOptType = function () {
        return this.type;
    };
    FocusRole._addId = 0;
    return FocusRole;
}(egret.DisplayObjectContainer));
__reflect(FocusRole.prototype, "FocusRole", ["IFocus", "IRender", "IRole"]);
//# sourceMappingURL=FocusRole.js.map