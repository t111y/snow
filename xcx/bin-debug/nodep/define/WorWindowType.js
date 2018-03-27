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
var WorWindowType = (function (_super) {
    __extends(WorWindowType, _super);
    function WorWindowType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorWindowType.ROCKER_LEFT = "ROCKER_LEFT"; //摇杆
    WorWindowType.TOP_TOOLBAR = "TOP_TOOLBAR"; //右上角导航
    WorWindowType.LOG_WINDOW = "LOG_WINDOW"; //日志任务记录界面
    WorWindowType.ROLE_WINDOW = "ROLE_WINDOW"; //左上角角色属性区
    WorWindowType.MAIN_LOADING = "MAIN_LOADING"; //游戏主加载界面
    return WorWindowType;
}(WindowType));
__reflect(WorWindowType.prototype, "WorWindowType");
//# sourceMappingURL=WorWindowType.js.map