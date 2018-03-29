var __reflect=this&&this.__reflect||function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n},__extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);n.prototype=t.prototype,e.prototype=new n},__awaiter=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function a(e){try{h(i.next(e))}catch(t){o(t)}}function s(e){try{h(i["throw"](e))}catch(t){o(t)}}function h(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,s)}h((i=i.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return i([e,t])}}function i(n){if(r)throw new TypeError("Generator is already executing.");for(;h;)try{if(r=1,o&&(a=o[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(o,n[1])).done)return a;switch(o=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return h.label++,{value:n[1],done:!1};case 5:h.label++,o=n[1],n=[0];continue;case 7:n=h.ops.pop(),h.trys.pop();continue;default:if(a=h.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){h=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){h.label=n[1];break}if(6===n[0]&&h.label<a[1]){h.label=a[1],a=n;break}if(a&&h.label<a[2]){h.label=a[2],h.ops.push(n);break}a[2]&&h.ops.pop(),h.trys.pop();continue}n=t.call(e,h)}catch(i){n=[6,i],o=0}finally{r=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,o,a,s,h={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},WindowType=function(){function e(){}return e.ALERT_WIN="ALERT_WIN",e}();__reflect(WindowType.prototype,"WindowType");var FocusRole=function(e){function t(){var n=e.call(this)||this;n.__isFocus=!1,n.id=0,n.isDead=!1,n._way=-1,t._addId++,n.id=t._addId;var i=new egret.Shape;return n.addChild(i),i.graphics.beginFill(255),i.graphics.drawCircle(0,0,10),n.mc=new egret.MovieClip,n.addChild(n.mc),n.mc.x=-430,n.mc.y=-400,n.setWay(0),n}return __extends(t,e),t.prototype.setDead=function(e){if(this.isDead=e,e){if(Globals.i().killNum++,WinsManager.getIns().showFloatText(Globals.i().killNum+"击"),null==this.filters){var t=new Array;t.push(new egret.GlowFilter(16776960,1,10,10,100)),this.filters=t}}else this.filters=null},t.prototype.setWay=function(e){if(e!=this._way){this._way=e,0>e?(e=Math.abs(e),this.scaleX=-1):this.scaleX=1;var t;this.mcData||RES.getResByUrl("resource/assets/hero/Person/1003_walk_2840d952.json",function(e){this.mcData=JSON.parse(e)},this,RES.ResourceItem.TYPE_TEXT);var n,i=this.mc;RES.getResByUrl("resource/assets/hero/Person/1003_walk_4a5945e3.png",function(r){n=r,t=new egret.MovieClipDataFactory(this.mcData,n),i.movieClipData=t.generateMovieClipData("0_3_walk_"+e),i.play(-1)},this,RES.ResourceItem.TYPE_IMAGE)}},t.prototype.synWay=function(e,t){var n=Math.atan2(e-this.x,t-this.y);n=180*n/Math.PI+360;var i=(8-Math.round(n/45))%8;console.log(i),this.setWay(i)},t.prototype.renderUpdate=function(e){},t.prototype.addToWorld=function(){RenderManager.getIns().registRender(this)},t.prototype.setFocus=function(e){return this.__isFocus=e,this},t.prototype.setAreaKey=function(e){this._ak=e},t.prototype.getAreaKey=function(){return this._ak},t.prototype.removed=function(){},t.prototype.added=function(){},t.prototype.tryOption=function(e,t){return 0},t.prototype.hitTestArea=function(e,t){return!1},t.prototype.getOptType=function(){return this.type},t._addId=0,t}(egret.DisplayObjectContainer);__reflect(FocusRole.prototype,"FocusRole",["IFocus","IRender","IRole"]);var GameWindow=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.layerType="",t.__inited=!1,t.__align="NONE",t.__offsetX=0,t.__offsetY=0,t.pop=!1,t}return __extends(t,e),t.prototype.partAdded=function(t,n){n.name=t,e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.visible=!0,this.resize()},t.prototype.reOpen=function(){this.visible=!0},t.prototype.update=function(e,t){},t.prototype.beforeClose=function(){return!0},t.prototype.resize=function(){switch(this.__align){case AlignType.TOP_LEFT:this.x=this.__offsetX,this.y=this.__offsetY;break;case AlignType.TOP_CENTER:this.x=(WinsManager.stageWidth-this.width*this.scaleX)/2+this.__offsetX,this.y=this.__offsetY;break;case AlignType.TOP_RIGHT:this.x=WinsManager.stageWidth-this.width*this.scaleX+this.__offsetX,this.y=this.__offsetY;break;case AlignType.CENTER:this.x=(WinsManager.stageWidth-this.width*this.scaleX)/2+this.__offsetX,this.y=(WinsManager.stageHeight-this.height*this.scaleY)/2+this.__offsetY;break;case AlignType.BOTTOM_LEFT:this.x=this.__offsetX,this.y=WinsManager.stageHeight-this.height*this.scaleY+this.__offsetY;break;case AlignType.BOTTOM_CENTER:this.x=this.x=(WinsManager.stageWidth-this.width*this.scaleX)/2+this.__offsetX,this.y=WinsManager.stageHeight-this.height*this.scaleY+this.__offsetY;break;case AlignType.BOTTOM_RIGHT:this.x=WinsManager.stageWidth-this.width*this.scaleX+this.__offsetX,this.y=WinsManager.stageHeight-this.height*this.scaleY+this.__offsetY}},t.prototype.align=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=0),this.__align=e,this.__offsetX=t*this.scaleX,this.__offsetY=n*this.scaleY,null!=this.stage&&this.resize()},t.prototype.addEventTap=function(e){switch(typeof e){case"string":this.getChildByName(e).addEventListener(egret.TouchEvent.TOUCH_TAP,this.eventTapHandler,this);break;case"object":var t;for(t in e)this.getChildByName(e[t]).addEventListener(egret.TouchEvent.TOUCH_TAP,this.eventTapHandler,this);break;default:throw new Error(NodepErrorType.PARAM_TYPE_ERROR)}},t.prototype.tapCallback=function(e){},t.prototype.eventTapHandler=function(e){this.tapCallback(e.currentTarget.name)},t}(eui.Component);__reflect(GameWindow.prototype,"GameWindow");var StageLayer=function(e){function t(){var n=e.call(this)||this;return n._startX=-1e5,n._startY=-1e5,n._gridX_from=-1,n._gridX_to=-1,n._gridY_from=-1,n._gridY_to=-1,t.self=n,n}return __extends(t,e),t.prototype.addRole=function(e){this.addChild(e)},t.prototype.hitTestRole=function(e,t){return 0>e||0>t||e>GameConfig.WORD_W||t>GameConfig.WORD_H},t.prototype.trySynArea=function(e,t){},t}(egret.DisplayObjectContainer);__reflect(StageLayer.prototype,"StageLayer");var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,n,i){function r(e){t.call(i,e)}function o(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),n.call(i))}"undefined"!=typeof generateEUI?egret.callLater(function(){t.call(i,generateEUI)},this):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_TEXT))},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var Globals=function(){function e(){this.net=new NetworkManager,this.killNum=0}return e.i=function(){return null==e._i&&(e._i=new e),e._i},e}();__reflect(Globals.prototype,"Globals");var AlignType=function(){function e(){}return e.TOP_LEFT="TOP_LEFT",e.TOP_CENTER="TOP_CENTER",e.TOP_RIGHT="TOP_RIGHT",e.CENTER="CENTER",e.BOTTOM_LEFT="BOTTOM_LEFT",e.BOTTOM_CENTER="BOTTOM_CENTER",e.BOTTOM_RIGHT="BOTTOM_RIGHT",e.NONE="NONE",e}();__reflect(AlignType.prototype,"AlignType");var GameConfig=function(){function e(){}return e.rocker_bar_sensitivity=120,e.GRID_SIZE=512,e.WORD_W=2560,e.WORD_H=2560,e.pointOvertime=5e3,e.trapTime=5e3,e.game_time_t_my=10,e.Monster_NUM=20,e}();__reflect(GameConfig.prototype,"GameConfig");var LayerType=function(){function e(){}return e.LAYER_GROUND="LAYER_GROUND",e.LAYER_MENU="LAYER_MENU",e.LAYER_UI="LAYER_UI",e.LAYER_POP="LAYER_POP",e}();__reflect(LayerType.prototype,"LayerType");var NodepErrorType=function(){function e(){}return e.LAYER_NO_EXISTENT="LAYER_NO_EXISTENT",e.PARAM_TYPE_ERROR="PARAM_TYPE_ERROR",e.ERROR_CODE="ERROR_CODE",e}();__reflect(NodepErrorType.prototype,"NodepErrorType");var RoleType=function(){function e(){}return e.ROLE_PLAYER="ROLE_PLAYER",e.ROLE_NPC="ROLE_NPC",e.ROLE_ANIMAL="ROLE_ANIMAL",e.ROLE_WILD="ROLE_WILD",e.POLE_PLANT="POLE_PLANT",e.PLANT_TREE="TREE",e.PLANT_COLL="COLL",e.GROUND_ITEM="GROUND_ITEM",e.ORE="ORE",e.TRAP="TRAP",e}();__reflect(RoleType.prototype,"RoleType");var StandType=function(){function e(){}return e.SEA=1,e.LAND=2,e.LAKE=3,e}();__reflect(StandType.prototype,"StandType");var UpdateType=function(){function e(){}return e.USER_HISTORY_BACLL=10001,e.MAP_SELF_MOVE=20001,e.MAP_OPT_CHANGE=20002,e.MAIN_LOADING_SET=9990001,e}();__reflect(UpdateType.prototype,"UpdateType");var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function i(i){t.call(n,i,e)}if(RES.hasRes(e)){var r=RES.getRes(e);r?i(r):RES.getResAsync(e,i,this)}else RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var WorWindowType=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.ROCKER_LEFT="ROCKER_LEFT",t.TOP_TOOLBAR="TOP_TOOLBAR",t.LOG_WINDOW="LOG_WINDOW",t.ROLE_WINDOW="ROLE_WINDOW",t.MAIN_LOADING="MAIN_LOADING",t}(WindowType);__reflect(WorWindowType.prototype,"WorWindowType");var CommonEvent=function(){function e(){}return e.sc_login="10000",e}();__reflect(CommonEvent.prototype,"CommonEvent");var GameLayer=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._wins=[],t._popCount=0,t}return __extends(t,e),t.prototype.addWindow=function(e){e.visible=!1,this.addChild(e),this._wins.push(e),e.pop&&this._popCount++,this.updateModel(),e.__inited&&e.reOpen(),e.__inited=!0},t.prototype.removeWindow=function(e){e.pop&&this._popCount--,this.updateModel(),this.removeChild(e),this._wins.splice(this._wins.indexOf(e),1)},t.prototype.updateModel=function(){!(this._popCount>0)||this._popShape&&this._popShape.parent?this._popCount<=0&&this._popShape&&this._popShape.parent&&(this.removeChild(this._popShape),this._popShape.graphics.clear(),this._popShape=null):(this._popShape||(this._popShape=new egret.Shape),this._popShape.graphics.clear(),this._popShape.graphics.beginFill(0,.7),this._popShape.graphics.drawRect(0,0,WinsManager.stageWidth,WinsManager.stageHeight),this._popShape.graphics.endFill,this._popShape.touchEnabled=!0,this.addChildAt(this._popShape,0))},t.prototype.resize=function(){var e;for(e in this._wins)this._wins[e].resize()},t}(egret.DisplayObjectContainer);__reflect(GameLayer.prototype,"GameLayer",["GameLayerInterface"]);var Monster=function(e){function t(){return e.call(this)||this}return __extends(t,e),t}(FocusRole);__reflect(Monster.prototype,"Monster");var PlayerRole=function(e){function t(){var n=e.call(this)||this;return t.self=n,n.type=RoleType.ROLE_PLAYER,n.speedX=8,n.speedY=4,n.path=new Array,n.roleMeshs=new Array,n}return __extends(t,e),t.prototype.renderUpdate=function(e){if(0!=RockBarContorller.offset){var t=this.x+RockBarContorller.multX*this.speedX,n=this.y+RockBarContorller.multY*this.speedY,i=StandType.LAND,r=!1;if(i==StandType.LAND&&(Tiled_Ground.getIns().groud.hitTestRole(t,n)?(t=this.x,n=this.y+RockBarContorller.multY*this.speedY,Tiled_Ground.getIns().groud.hitTestRole(t,n)?(t=this.x+RockBarContorller.multX*this.speedX,n=this.y,Tiled_Ground.getIns().groud.hitTestRole(t,n)||(r=!0)):r=!0):r=!0,r)){this.synWay(t,n),this.x=t,this.y=n;var o=new RolePathPoint(new egret.Point(t,n));this.path.push(o);var a=RoleMesh.check(this.path);null!=a&&this.roleMeshs.push(a),Globals.i().net.send({x:Math.round(t),y:Math.round(n)})}}},t}(FocusRole);__reflect(PlayerRole.prototype,"PlayerRole");var GroundLayer=function(e){function t(t,n){var i=e.call(this)||this;return i.mapW=t,i.mapH=n,i._mapBackground=new MapBackground,i._rolePath=new RolePath,i.addChild(i._mapBackground),i.addChild(i._rolePath),RenderManager.getIns().registRender(i._rolePath),i}return __extends(t,e),t.prototype.hitTestRole=function(e,t){return 0>e||0>t||e>GameConfig.WORD_W||t>GameConfig.WORD_H},t.prototype.synPositionTo=function(e,t){var n=this.stage.stageWidth/2,i=this.stage.stageHeight/2;n>e?this.x=0:this.mapW-e<n?this.x=-(this.mapW-this.stage.stageWidth):this.x=n-e,i>t?this.y=0:this.mapH-t<i?this.y=-(this.mapH-this.stage.stageHeight):this.y=i-t,this._mapBackground.render(e,t)},t.prototype.addRole=function(e){this.addChild(e)},t}(egret.DisplayObjectContainer);__reflect(GroundLayer.prototype,"GroundLayer");var MapBackground=function(e){function t(){var t=e.call(this)||this;t.bitmaps={};for(var n=0;n<GameConfig.WORD_W-1;n+=GameConfig.GRID_SIZE)for(var i=0;i<GameConfig.WORD_H-1;i+=GameConfig.GRID_SIZE)t.loadMapTile(n,i);return t}return __extends(t,e),t.prototype.loadMapTile=function(e,t){if(!(0>e||0>t)){var n=Math.floor(e/GameConfig.GRID_SIZE),i=Math.floor(t/GameConfig.GRID_SIZE),r=n+"_"+i;if(null==this.bitmaps[r]){var o=new egret.Bitmap;this.addChild(o),o.x=n*GameConfig.GRID_SIZE,o.y=i*GameConfig.GRID_SIZE,o.scaleX=2,o.scaleY=2,this.bitmaps[r]=o,RES.getResByUrl("resource/assets/map/1/"+r+".png",function(e){var t=e;o.texture=t},this,RES.ResourceItem.TYPE_IMAGE)}}},t.prototype.render=function(e,t){},t}(egret.DisplayObjectContainer);__reflect(MapBackground.prototype,"MapBackground");var RoleMesh=function(){function e(){this.points=new Array,this.x1=9999999,this.x2=-9999999,this.y1=9999999,this.y2=-9999999,this.rect=new egret.Rectangle,this.shape=new egret.Shape,WinsManager.getIns().gameStage().addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onStageTouch,this)}return e.prototype.onStageTouch=function(e){console.log(e.stageX,e.stageY),console.log("点中了吗 "+this.shape.hitTestPoint(e.stageX,e.stageY))},e.prototype.hitTest=function(e,t){if(e<this.x1&&e>this.x2||t<this.y1&&t>this.y2)return!1;var n=this.shape.hitTestPoint(e,t,!1);return n},e.prototype.addPoints=function(e){for(var t=0;t<e.length;t++){var n=e[t];this.x1>n.point.x&&(this.x1=n.point.x),this.x2<n.point.x&&(this.x2=n.point.x),this.y1>n.point.y&&(this.y1=n.point.y),this.y2<n.point.y&&(this.y2=n.point.y),n.isUsed=!0,this.time=egret.getTimer(),this.points.push(n)}},e.check=function(t){var n=5;if(!(t.length<5)){for(var i=0;i<t.length;i++)if(!t[i].isUsed)for(var r=i+n;r<t.length;r++)if(!t[r].isUsed&&egret.Point.distance(t[i].point,t[r].point)<6){var o=new e,a=t.slice(i,r);return o.addPoints(a),o}return null}},e.prototype.drawMesh=function(){this.shape.graphics.clear(),this.shape.graphics.beginFill(65280,1-(egret.getTimer()-this.time)/GameConfig.trapTime);var e=this.points[0].point;this.shape.graphics.moveTo(e.x,e.y);for(var t=1;t<this.points.length;t++)this.shape.graphics.lineTo(this.points[t].point.x,this.points[t].point.y);this.shape.graphics.endFill()},e.prototype.dispose=function(){null!=this.shape.parent&&this.shape.parent.removeChild(this.shape),WinsManager.getIns().gameStage().removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onStageTouch,this)},e}();__reflect(RoleMesh.prototype,"RoleMesh");var RolePath=function(e){function t(){var t=e.call(this)||this;return t._shape=new egret.Shape,t.addChild(t._shape),t}return __extends(t,e),t.prototype.renderUpdate=function(e){this.drawPath(PlayerRole.self.path),this.removeOvertimePoint(PlayerRole.self.path);for(var t=PlayerRole.self.roleMeshs.length-1;t>=0;t--){var n=PlayerRole.self.roleMeshs[t];if(!(egret.getTimer()-n.time<GameConfig.trapTime)){n.dispose(),PlayerRole.self.roleMeshs.splice(t,1);break}null==n.shape.parent&&this.addChild(n.shape),n.drawMesh()}},t.prototype.drawPath=function(e){if(e&&!(e.length<2)){this._shape.graphics.clear(),this._shape.graphics.lineStyle(2,16711680);var t=e[0].point;this._shape.graphics.moveTo(t.x,t.y);for(var n=1;n<e.length;n++)this._shape.graphics.lineTo(e[n].point.x,e[n].point.y);this._shape.graphics.endFill()}},t.prototype.removeOvertimePoint=function(e){e.length>0&&egret.getTimer()-e[0].time>GameConfig.pointOvertime&&e.shift()},t}(egret.DisplayObjectContainer);__reflect(RolePath.prototype,"RolePath",["IRender"]);var RolePathPoint=function(){function e(e){this.isUsed=!1,this.time=egret.getTimer(),this.point=e}return e}();__reflect(RolePathPoint.prototype,"RolePathPoint");var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Tiled_Ground=function(e){function t(){var t=e.call(this)||this;return t.scaleX=WinsManager.scaleX,t.scaleY=WinsManager.scaleY,t}return __extends(t,e),t.getIns=function(){return null==t._ins&&(t._ins=new t),t._ins},t.prototype.renderUpdate=function(e){this.groud.synPositionTo(this._focus.x,this._focus.y)},t.prototype.setFocus=function(e){null!=this._focus&&(this._focus.__isFocus=!1),this._focus=this.roleMap[e],this._focus.__isFocus=!0},t.prototype.addFocusRole=function(e){this.roleMap[e.id]=e,this.groud.addRole(e),e.addToWorld()},t.prototype.initWorld=function(){this.roleMap={},this.groud=new GroundLayer(GameConfig.WORD_W,GameConfig.WORD_H),this.addChild(this.groud),this.createSelf(),this.monsterManager=new MonsterManager,RenderManager.getIns().registRender(this),RenderManager.getIns().registRender(this.monsterManager)},t.prototype.createSelf=function(){this._self=new PlayerRole,this._self.x=1e3,this._self.y=1e3,this.addFocusRole(this._self),this.setFocus(this._self.id)},t}(egret.DisplayObjectContainer);__reflect(Tiled_Ground.prototype,"Tiled_Ground",["IRender"]);var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),this.stage.$scaleMode=egret.StageScaleMode.FIXED_WIDTH,egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return[4,this.loadResource()];case 1:return n.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return e=n.sent(),[4,platform.login()];case 3:return n.sent(),[4,platform.getUserInfo()];case 4:return t=n.sent(),console.log(t),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return n.sent(),this.stage.removeChild(e),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var i=new eui.Theme("resource/default.thm.json",e.stage);i.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){this.stage.scaleMode=egret.StageScaleMode.NO_SCALE,LogTrace.log("application loadcompleted..."),WinsManager.getIns().initGame(this),RenderManager.getIns().startRender(this.stage),WinsManager.getIns().addLayer(LayerType.LAYER_GROUND,new GameLayer),WinsManager.getIns().addLayer(LayerType.LAYER_MENU,new GameLayer),WinsManager.getIns().addLayer(LayerType.LAYER_UI,new GameLayer),WinsManager.getIns().addLayer(LayerType.LAYER_POP,new GameLayer),this.startGame()},t.prototype.startGame=function(){Globals.i(),Globals.i().net.addEventListener("msg",this.onMsg,this),Globals.i().net.send({msgId:1e4,name:"test1"})},t.prototype.onMsg=function(e){},t.prototype.delayStart=function(){GameManager.getIns().startNewGame()},t}(eui.UILayer);__reflect(Main.prototype,"Main");var AlertWindow=function(e){function t(){var t=e.call(this)||this;return t.layerType=LayerType.LAYER_POP,t.typeName=WindowType.ALERT_WIN,t.pop=!0,t.align(AlignType.CENTER,0,0),t}return __extends(t,e),t.alertShow=function(e,n,i,r){void 0===r&&(r=null),t._message=e,t._callBack=n,t._thisObject=i,t._labels=r,WinsManager.getIns().openWindow(t)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.getChildByName("okBtn").addEventListener(egret.TouchEvent.TOUCH_TAP,this.handler,this),this.getChildByName("cancelBtn").addEventListener(egret.TouchEvent.TOUCH_TAP,this.handler,this),this.reOpen()},t.prototype.handler=function(e){null!=t._callBack&&t._callBack.apply(t._thisObject,["okBtn"==e.currentTarget.name]),WinsManager.getIns().closeWin(this)},t.prototype.reOpen=function(){e.prototype.reOpen.call(this),this.getChildByName("infoTxt").text=t._message},t}(GameWindow);__reflect(AlertWindow.prototype,"AlertWindow",["eui.UIComponent","egret.DisplayObject"]);var GameMainLoaderWindow=function(e){function t(){var t=e.call(this)||this;return t.layerType=LayerType.LAYER_POP,t.typeName=WorWindowType.MAIN_LOADING,t.align(AlignType.TOP_LEFT),t}return __extends(t,e),t.prototype.childrenCreated=function(){this._bgShape=new egret.Shape,this._bgShape.graphics.beginFill(0,1),this._bgShape.graphics.drawRect(0,0,1,1),this._bgShape.graphics.endFill(),this.addChildAt(this._bgShape,0),this._infoLabel=this.getChildByName("message"),this._infoLabel.text="",e.prototype.childrenCreated.call(this)},t.prototype.resize=function(){e.prototype.resize.call(this),null!=this._bgShape&&(this._bgShape.scaleX=WinsManager.stageWidth,this._bgShape.scaleY=WinsManager.stageHeight,this._infoLabel.x=(WinsManager.stageWidth-this._infoLabel.width)/2,this._infoLabel.y=(WinsManager.stageHeight-this._infoLabel.height)/2)},t.prototype.update=function(e,t){switch(e){case UpdateType.MAIN_LOADING_SET:this._infoLabel.text=t}},t}(GameWindow);__reflect(GameMainLoaderWindow.prototype,"GameMainLoaderWindow",["eui.UIComponent","egret.DisplayObject"]);var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var HBox=function(){function e(){}return e}();__reflect(HBox.prototype,"HBox");var LogWindow=function(e){function t(){var t=e.call(this)||this;return t.layerType=LayerType.LAYER_UI,t.typeName=WorWindowType.LOG_WINDOW,t.pop=!0,t}return __extends(t,e),t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},t}(GameWindow);__reflect(LogWindow.prototype,"LogWindow",["eui.UIComponent","egret.DisplayObject"]);var ProgressBar=function(){function e(e){this._maxWidth=0,this._maxHeight=0,this._cur=-1,this._total=-1,this._maskShape=new egret.Shape,e.mask=this._maskShape,this._maskShape.x=e.x,this._maskShape.y=e.y,e.parent.addChild(this._maskShape),this._maxWidth=e.width,this._maxHeight=e.height}return e.prototype.setProgress=function(e,t){this._maskShape.graphics.clear(),this._maskShape.graphics.beginFill(0,1),this._maskShape.graphics.drawRect(0,0,Math.round(this._maxWidth*e/t),this._maxHeight),this._maskShape.graphics.endFill()},e}();__reflect(ProgressBar.prototype,"ProgressBar");var RockBarContorller=function(){function e(e,t,n){this._movePoint=new egret.Point,this._px=t,this._py=n,this._barBtn=e,this._restPoint=new egret.Point(this._barBtn.x,this._barBtn.y),this._barBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBeginHandler,this)}return e.prototype.touchBeginHandler=function(e){null==this._startPoint&&(this._startPoint=new egret.Point),this._startPoint.x=e.stageX,this._startPoint.y=e.stageY,this._barBtn.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMoveHandler,this),this._barBtn.stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL,this.cancelHandler,this),this._barBtn.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.cancelHandler,this)},e.prototype.touchMoveHandler=function(t){this._movePoint.x=t.stageX,this._movePoint.y=t.stageY;var n=egret.Point.distance(this._startPoint,this._movePoint);if(n<=GameConfig.rocker_bar_sensitivity)this._barBtn.x=this._restPoint.x+this._movePoint.x-this._startPoint.x,this._barBtn.y=this._restPoint.y+this._movePoint.y-this._startPoint.y;else{var i=egret.Point.interpolate(this._movePoint,this._startPoint,GameConfig.rocker_bar_sensitivity/n);this._barBtn.x=i.x-this._px,this._barBtn.y=i.y-this._py}e.multX=(this._movePoint.x-this._startPoint.x)/n,e.multY=(this._movePoint.y-this._startPoint.y)/n,e.offset=n/GameConfig.rocker_bar_sensitivity},e.prototype.cancelHandler=function(t){this._barBtn.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMoveHandler,this),this._barBtn.stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL,this.cancelHandler,this),this._barBtn.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.cancelHandler,this),egret.Tween.removeTweens(this._barBtn),egret.Tween.get(this._barBtn).to({x:this._restPoint.x,y:this._restPoint.y},50,egret.Ease.backOut),e.multX=0,e.multY=0,e.offset=0},e.multX=0,e.multY=0,e.offset=0,e}();__reflect(RockBarContorller.prototype,"RockBarContorller");var RockerBar=function(e){function t(){var t=e.call(this)||this;return t.layerType=LayerType.LAYER_UI,t.typeName=WorWindowType.ROCKER_LEFT,t.align(AlignType.BOTTOM_LEFT,150,-150),t}return __extends(t,e),t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this._contorller=new RockBarContorller(this.getChildByName("barBtn"),this.x,this.y),this.drawC()},t.prototype.drawC=function(){this._bgShape||(this._bgShape=new egret.Shape,this.addChildAt(this._bgShape,0),this._bgShape.touchEnabled=!1),this._bgShape.graphics.clear(),this._bgShape.graphics.beginFill(16777215,.5),this._bgShape.graphics.drawCircle(this.getChildByName("barBtn").anchorOffsetX,this.getChildByName("barBtn").anchorOffsetY,GameConfig.rocker_bar_sensitivity),this._bgShape.graphics.endFill()},t}(GameWindow);__reflect(RockerBar.prototype,"RockerBar",["eui.UIComponent","egret.DisplayObject"]);var TopToolBar=function(e){function t(){var t=e.call(this)||this;return t._btnNames=["logBtn"],t.typeName=WorWindowType.TOP_TOOLBAR,t.layerType=LayerType.LAYER_MENU,t.align(AlignType.TOP_RIGHT,0,20),t}return __extends(t,e),t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.addEventTap(this._btnNames)},t.prototype.tapCallback=function(e){switch(e){case"logBtn":GameManager.getIns().openGameUI(LogWindow);break;default:LogTrace.log("未处理的子对象")}},t}(GameWindow);__reflect(TopToolBar.prototype,"TopToolBar",["eui.UIComponent","egret.DisplayObject"]);var VBox=function(){function e(){}return e}();__reflect(VBox.prototype,"VBox");var GameManager=function(){function e(){this.isNewGame=!1}return e.getIns=function(){return null==e._ins&&(e._ins=new e),e._ins},e.prototype.startNewGame=function(){WinsManager.getIns().openWindow(GameMainLoaderWindow),DelayCall.call(100,this.buildEnter,this)},e.prototype.buildEnter=function(){this.enterGame()},e.prototype.enterGame=function(){WinsManager.getIns().gameStage().addChildAt(Tiled_Ground.getIns(),0),Tiled_Ground.getIns().initWorld(),WinsManager.getIns().openWindow(RockerBar),WinsManager.getIns().openWindow(TopToolBar),WinsManager.getIns().gameStage().addEventListener(egret.Event.DEACTIVATE,this.deactivateHandler,this),WinsManager.getIns().gameStage().addEventListener(egret.Event.ACTIVATE,this.activateHandler,this),WinsManager.getIns().closeWin(GameMainLoaderWindow)},e.prototype.deactivateHandler=function(){LogTrace.log("暂停游戏")},e.prototype.activateHandler=function(){LogTrace.log("继续游戏->继续")},e.prototype.openGameUI=function(e){WinsManager.getIns().openWindow(e)},e.prototype.setMainLoadingInfo=function(e){WinsManager.getIns().updateWin(UpdateType.MAIN_LOADING_SET,[WorWindowType.MAIN_LOADING],e)},e}();__reflect(GameManager.prototype,"GameManager");var LogTrace=function(){function e(){}return e.log=function(e){console.log(e)},e}();__reflect(LogTrace.prototype,"LogTrace");var MonsterManager=function(){function e(){this.monsters=new Array,this.createMonster()}return e.prototype.renderUpdate=function(e){this.monsters.forEach(function(e){if(!e.isDead&&PlayerRole.self.roleMeshs.length>0)for(var t=0;t<PlayerRole.self.roleMeshs.length;t++){var n=PlayerRole.self.roleMeshs[t],i=e.localToGlobal(),r=n.hitTest(i.x,i.y);e.setDead(r)}})},e.prototype.createMonster=function(){for(var e=0;e<GameConfig.Monster_NUM;e++){var t=new Monster;this.monsters.push(t),t.x=Math.abs(Math.random()*GameConfig.WORD_W),t.y=Math.abs(Math.random()*GameConfig.WORD_H),Tiled_Ground.getIns().addFocusRole(t)}},e}();__reflect(MonsterManager.prototype,"MonsterManager",["IRender"]);var RenderManager=function(){function e(){this._lastTime=0,this._renderList=new Array}return e.getIns=function(){return this._ins||(this._ins=new e),this._ins},e.prototype.startRender=function(e){this._stage=e,this._lastTime=egret.getTimer(),this._stage.addEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this)},e.prototype.enterFrameHandler=function(e){var t,n=egret.getTimer(),i=n-this._lastTime;this._lastTime=n;for(t in this._renderList)this._renderList[t].renderUpdate(i)},e.prototype.registRender=function(e){this._renderList.push(e)},e.prototype.unregistRender=function(e){var t=this._renderList.indexOf(e);t>=0&&this._renderList.splice(t,1)},e.frameRate=30,e}();__reflect(RenderManager.prototype,"RenderManager");var WinsManager=function(){function e(){if(null!=e._ins)throw new Error("单例");this._layerMap={},this._windowMap={},LogTrace.log("create WinsManager!")}return e.prototype.initScale=function(){LogTrace.log(e.stageWidth+"_"+e.stageHeight),e.scaleX=e.stageWidth/1254,e.scaleY=e.scaleX},e.getIns=function(){return e._ins||(e._ins=new e),e._ins},e.prototype.initGame=function(t){this._baseUi=t,this._baseUi.stage.addEventListener(egret.Event.RESIZE,this.stageResizeHandler,this),e.stageWidth=this._baseUi.stage.stageWidth,e.stageHeight=this._baseUi.stage.stageHeight,this.initScale()},e.prototype.addLayer=function(e,t){this._layerMap[e]=t,this._baseUi.addChild(t),LogTrace.log("add layer:"+e)},e.prototype.switchWin=function(e){null==this._windowMap[e]&&(this._windowMap[e]=new e);var t=this._windowMap[e];null==t.stage?this.openWindow(e):this.closeWin(e)},e.prototype.openWindow=function(e){null==this._windowMap[e]&&(this._windowMap[e]=new e);var t=this._windowMap[e];if(!t.stage){if(!this._layerMap[t.layerType])throw new Error(NodepErrorType.LAYER_NO_EXISTENT);this._layerMap[t.layerType].addWindow(t),LogTrace.log("openWindow->"+t.typeName)}},e.prototype.openWindowToLayer=function(e,t){this._windowMap[e]||(this._windowMap[e]=new e);var n=this._windowMap[e];if(!n.stage){if(!this._layerMap[t])throw new Error(NodepErrorType.LAYER_NO_EXISTENT);this._layerMap[t].addWindow(n),LogTrace.log("openWindow->"+n.typeName)}},e.prototype.closeWin=function(e){if(e){var t=null;switch(typeof e){case"object":t=e;break;case"string":break;case"function":t=this._windowMap[e]}t&&t.parent&&t.beforeClose()&&t.parent.removeWindow(t)}},e.prototype.updateWin=function(e,t,n){void 0===n&&(n=null);for(var i in this._windowMap){var r=this._windowMap[i];t.indexOf(r.typeName)>=0&&null!=r.stage&&r.update(e,n)}},e.prototype.globalUpdate=function(e,t){for(var n in this._windowMap){var i=this._windowMap[n];null!=i.stage&&i.update(e,t)}},e.prototype.stageResizeHandler=function(t){e.stageWidth=this._baseUi.stage.stageWidth,e.stageHeight=this._baseUi.stage.stageHeight,this.initScale(),LogTrace.log("stageReszie!");for(var n in this._layerMap){var i=this._layerMap[n];
i.resize()}},e.prototype.gcWindow=function(e){},e.prototype.gcWindowAll=function(){},e.prototype.showFloatText=function(t){function n(){i.parent.removeChild(i)}var i=new egret.TextField;i.text=t,i.width=500,i.size=40,i.textColor=16724736,i.x=e.stageWidth/2-i.width/2,i.y=e.stageHeight/2,this.gameStage().addChild(i),egret.Tween.get(i).to({y:i.y-200},1500).call(n,this)},e.prototype.gameStage=function(){return null!=this._baseUi?this._baseUi.stage:null},e.stageWidth=0,e.stageHeight=0,e.scaleX=1,e.scaleY=1,e}();__reflect(WinsManager.prototype,"WinsManager");var NetworkManager=function(e){function t(){var t=e.call(this)||this;return t._len=-1,t.bytes=new egret.ByteArray,t.socket=new egret.WebSocket,t.socket.connectByUrl("ws://121.43.192.128:8090/websocket"),t.socket.addEventListener(egret.Event.CONNECT,function(e){console.log(e)},t),t.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA,t.onReceiveMessage,t),t}return __extends(t,e),t.prototype.onReceiveMessage=function(e){var t,n=this.socket.readUTF();try{t=JSON.parse(n),console.log("收到消息 "+t),this.dispatchEvent(new egret.Event(t.msgId,!1,!1,t))}catch(i){console.log("收到消息 "+n)}},t.prototype.send=function(e){this.socket.writeUTF(JSON.stringify(e))},t}(egret.EventDispatcher);__reflect(NetworkManager.prototype,"NetworkManager");var DelayCall=function(){function e(e,t,n){void 0===n&&(n=null),this.delayTime=0,this.repeatCount=0,this._costTime=0,this._callBack=e,this._thisObject=t,this._args=n}return e.call=function(t,n,i,r,o){void 0===r&&(r=null),void 0===o&&(o=1);var a=new e(n,i,r);return a.delayTime=t,a.repeatCount=o,RenderManager.getIns().registRender(a),a},e.prototype.renderUpdate=function(e){this._costTime+=e,this._costTime>=this.delayTime&&(this.repeatCount>0?(this.repeatCount-=1,this.repeatCount<=0&&(RenderManager.getIns().unregistRender(this),null!=this._callBack&&this._callBack.apply(this._thisObject,this._args)),this._callBack=null,this._thisObject=null,this._args=null):(this._costTime=this._costTime-this.delayTime,null!=this._callBack&&this._callBack.apply(this._thisObject,this._args)))},e}();__reflect(DelayCall.prototype,"DelayCall",["IRender"]);var ObjectUtil=function(){function e(){}return e.copyTo=function(e,t){var n;for(n in e)t[n]=e[n]},e}();__reflect(ObjectUtil.prototype,"ObjectUtil");var TimeUtil=function(){function e(){}return e.getTimeStrByHM=function(e,t){var n="";return n+=e>=10?e+":":"0"+e+":",n+=t>=10?t:"0"+t},e}();__reflect(TimeUtil.prototype,"TimeUtil");