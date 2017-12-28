
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
	"bin-debug/nodep/data/type/WindowType.js",
	"bin-debug/nodep/view/container/GameWindow.js",
	"bin-debug/nodep/world/scene/core/FocusRole.js",
	"bin-debug/nodep/view/layer/GameLayer.js",
	"bin-debug/nodep/data/type/AlignType.js",
	"bin-debug/nodep/data/type/LayerType.js",
	"bin-debug/nodep/data/type/NodepErrorType.js",
	"bin-debug/nodep/data/type/RoleType.js",
	"bin-debug/nodep/data/type/StandType.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/nodep/manager/IRender.js",
	"bin-debug/nodep/manager/LogTrace.js",
	"bin-debug/nodep/manager/RenderManager.js",
	"bin-debug/nodep/manager/WinsManager.js",
	"bin-debug/nodep/utils/DelayCall.js",
	"bin-debug/nodep/utils/ObjectUtil.js",
	"bin-debug/nodep/utils/TimeUtil.js",
	"bin-debug/nodep/view/container/AlertWindow.js",
	"bin-debug/Main.js",
	"bin-debug/nodep/view/container/HBox.js",
	"bin-debug/nodep/view/container/VBox.js",
	"bin-debug/nodep/view/display/ProgressBar.js",
	"bin-debug/nodep/view/display/RockBarContorller.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/nodep/view/layer/GameLayerInterface.js",
	"bin-debug/nodep/world/data/GameConfig.js",
	"bin-debug/nodep/world/data/type/UpdateType.js",
	"bin-debug/nodep/world/data/type/WorWindowType.js",
	"bin-debug/nodep/world/manager/GameManager.js",
	"bin-debug/nodep/world/manager/MonsterManager.js",
	"bin-debug/nodep/world/role/Monster.js",
	"bin-debug/nodep/world/role/PlayerRole.js",
	"bin-debug/nodep/world/scene/GroundLayer.js",
	"bin-debug/nodep/world/scene/MapBackground.js",
	"bin-debug/nodep/world/scene/RoleMesh.js",
	"bin-debug/nodep/world/scene/RolePath.js",
	"bin-debug/nodep/world/scene/RolePathPoint.js",
	"bin-debug/nodep/world/scene/StageLayer.js",
	"bin-debug/nodep/world/scene/Tiled_Ground.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/nodep/world/scene/core/IFocus.js",
	"bin-debug/nodep/world/scene/core/IRole.js",
	"bin-debug/nodep/world/view/component/RockerBar.js",
	"bin-debug/nodep/world/view/window/GameMainLoaderWindow.js",
	"bin-debug/nodep/world/view/window/LogWindow.js",
	"bin-debug/nodep/world/view/window/TopToolBar.js",
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