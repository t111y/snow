var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 全局配置文件
 */
var GameConfig = (function () {
    function GameConfig() {
    }
    /**摇杆半径*/
    GameConfig.rocker_bar_sensitivity = 120;
    /**单元格宽度 */
    GameConfig.GRID_SIZE = 512;
    /**世界的高度 */
    GameConfig.WORD_W = 2560;
    /**世界的宽度 */
    GameConfig.WORD_H = 2560;
    GameConfig.pointOvertime = 5000;
    GameConfig.trapTime = 5000;
    GameConfig.game_time_t_my = 10;
    GameConfig.Monster_NUM = 20;
    return GameConfig;
}());
__reflect(GameConfig.prototype, "GameConfig");
//# sourceMappingURL=GameConfig.js.map