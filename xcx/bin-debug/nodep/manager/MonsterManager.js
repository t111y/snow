var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MonsterManager = (function () {
    function MonsterManager() {
        this.monsters = new Array();
        this.createMonster();
    }
    MonsterManager.prototype.renderUpdate = function (interval) {
        this.monsters.forEach(function (element) {
            if (!element.isDead && PlayerRole.self.roleMeshs.length > 0) {
                for (var i = 0; i < PlayerRole.self.roleMeshs.length; i++) {
                    var roleMeshs = PlayerRole.self.roleMeshs[i];
                    var point = element.localToGlobal();
                    var isHit = roleMeshs.hitTest(point.x, point.y);
                    element.setDead(isHit);
                }
            }
        });
    };
    MonsterManager.prototype.createMonster = function () {
        for (var i = 0; i < GameConfig.Monster_NUM; i++) {
            var m = new Monster();
            this.monsters.push(m);
            m.x = Math.abs(Math.random() * GameConfig.WORD_W);
            m.y = Math.abs(Math.random() * GameConfig.WORD_H);
            // m.x = 300;
            // m.y = 300;
            Tiled_Ground.getIns().addFocusRole(m);
        }
    };
    return MonsterManager;
}());
__reflect(MonsterManager.prototype, "MonsterManager", ["IRender"]);
//# sourceMappingURL=MonsterManager.js.map