
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"libs/modules/experimental/experimental.js",
	"libs/modules/tween/tween.js",
	"libs/modules/socket/socket.js",
	"libs/modules/dragonBones/dragonBones.js",
	"promise/promise.js",
	"bin-debug/nodep/define/WindowType.js",
	"bin-debug/nodep/game/window/GameWindow.js",
	"bin-debug/nodep/game/scene/core/FocusRole.js",
	"bin-debug/nodep/game/scene/StageLayer.js",
	"bin-debug/nodep/data/Globals.js",
	"bin-debug/nodep/define/AlignType.js",
	"bin-debug/nodep/define/GameConfig.js",
	"bin-debug/nodep/define/LayerType.js",
	"bin-debug/nodep/define/NodepErrorType.js",
	"bin-debug/nodep/define/RoleType.js",
	"bin-debug/nodep/define/StandType.js",
	"bin-debug/nodep/define/UpdateType.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/nodep/define/WorWindowType.js",
	"bin-debug/nodep/game/layer/GameLayer.js",
	"bin-debug/nodep/game/layer/GameLayerInterface.js",
	"bin-debug/nodep/game/role/Monster.js",
	"bin-debug/nodep/game/role/PlayerRole.js",
	"bin-debug/nodep/game/scene/GroundLayer.js",
	"bin-debug/nodep/game/scene/MapBackground.js",
	"bin-debug/nodep/game/scene/RoleMesh.js",
	"bin-debug/nodep/game/scene/RolePath.js",
	"bin-debug/nodep/game/scene/RolePathPoint.js",
	"bin-debug/nodep/utils/TimeUtil.js",
	"bin-debug/nodep/game/scene/Tiled_Ground.js",
	"bin-debug/Main.js",
	"bin-debug/nodep/game/scene/core/IFocus.js",
	"bin-debug/nodep/game/scene/core/IRole.js",
	"bin-debug/nodep/game/window/AlertWindow.js",
	"bin-debug/nodep/game/window/GameMainLoaderWindow.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/nodep/game/window/HBox.js",
	"bin-debug/nodep/game/window/LogWindow.js",
	"bin-debug/nodep/game/window/ProgressBar.js",
	"bin-debug/nodep/game/window/RockBarContorller.js",
	"bin-debug/nodep/game/window/RockerBar.js",
	"bin-debug/nodep/game/window/TopToolBar.js",
	"bin-debug/nodep/game/window/VBox.js",
	"bin-debug/nodep/manager/GameManager.js",
	"bin-debug/nodep/manager/IRender.js",
	"bin-debug/nodep/manager/LogTrace.js",
	"bin-debug/nodep/manager/MonsterManager.js",
	"bin-debug/nodep/manager/RenderManager.js",
	"bin-debug/nodep/manager/WinsManager.js",
	"bin-debug/nodep/utils/DelayCall.js",
	"bin-debug/nodep/utils/ObjectUtil.js",
	"bin-debug/LoadingUI.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "NO_BORDER",
		contentWidth: 1136,
		contentHeight: 640,
		showPaintRect: false,
		showFPS: true,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.3",
		showLog: true,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};