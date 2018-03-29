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
var UserRole = (function (_super) {
    __extends(UserRole, _super);
    function UserRole() {
        var _this = _super.call(this) || this;
        _this.type = RoleType.USER_PLAYER;
        _this.rolePath = new RolePath();
        _this.rolePath.role = _this;
        _this.speedX = 8;
        _this.speedY = 4;
        _this.path = new Array();
        _this.roleMeshs = new Array();
        return _this;
    }
    return UserRole;
}(FocusRole));
__reflect(UserRole.prototype, "UserRole");
//# sourceMappingURL=UserRole.js.map