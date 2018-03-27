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
var MapBackground = (function (_super) {
    __extends(MapBackground, _super);
    function MapBackground() {
        var _this = _super.call(this) || this;
        _this.bitmaps = {};
        for (var i = 0; i < GameConfig.WORD_W - 1; i += GameConfig.GRID_SIZE) {
            for (var j = 0; j < GameConfig.WORD_H - 1; j += GameConfig.GRID_SIZE) {
                _this.loadMapTile(i, j);
            }
        }
        return _this;
    }
    MapBackground.prototype.loadMapTile = function (dx, dy) {
        if (dx < 0 || dy < 0) {
            return;
        }
        var i = Math.floor(dx / GameConfig.GRID_SIZE);
        var j = Math.floor(dy / GameConfig.GRID_SIZE);
        var key = i + "_" + j;
        if (this.bitmaps[key] != null) {
            return;
        }
        var bitmap = new egret.Bitmap();
        this.addChild(bitmap);
        bitmap.x = i * GameConfig.GRID_SIZE;
        bitmap.y = j * GameConfig.GRID_SIZE;
        bitmap.scaleX = 2;
        bitmap.scaleY = 2;
        this.bitmaps[key] = bitmap;
        RES.getResByUrl('resource/assets/map/1/' + key + '.png', function (event) {
            var img = event;
            bitmap.texture = img;
        }, this, RES.ResourceItem.TYPE_IMAGE);
    };
    MapBackground.prototype.render = function (dx, dy) {
        // for(var i:number = dx - this.stage.stageWidth/2;i<dx + this.stage.stageWidth/2 ;i+=GameConfig.GRID_W)
        // {
        // 	for(var j:number = dy - this.stage.stageHeight/2;j<dy + this.stage.stageHeight/2 ;j+=GameConfig.GRID_W)
        // 	{
        // 		this.loadMapTile(i,j);
        // 	}
        // }
    };
    return MapBackground;
}(egret.DisplayObjectContainer));
__reflect(MapBackground.prototype, "MapBackground");
//# sourceMappingURL=MapBackground.js.map