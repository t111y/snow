//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
//egret publish --target wxgame 
class Main extends egret.DisplayObjectContainer {
public constructor() {
        super();
        

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            // egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            // egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }
    private loadingView:LoadingUI;
    private async loadResource() {
        try {
            this.loadingView = new LoadingUI();
            this.stage.addChild(this.loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, this.loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }


    private textfield: egret.TextField;
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        this.stage.removeChild(this.loadingView);
        this.initFairyGui();
        LogTrace.log("application loadcompleted...");
        WinsManager.getIns().initGame(this);
        //启动主Render
        RenderManager.getIns().startRender(this.stage);
        //初始化层级
        WinsManager.getIns().addLayer(LayerType.LAYER_GROUND, new GameLayer());
        
        this.startGame();
    }
    private initFairyGui(){
        fairygui.UIPackage.addPackage("basics");
        fairygui.UIPackage.addPackage("panel");
        fairygui.UIPackage.addPackage("joystick");
        panel.panelBinder.bindAll();
        basics.basicsBinder.bindAll();
        joystick.joystickBinder.bindAll();
        
        this.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;

        fairygui.UIConfig.defaultFont = "SimSun";
        fairygui.UIConfig.verticalScrollBar = "ui://basic/ScrollBar_VT";
        fairygui.UIConfig.horizontalScrollBar = "ui://basic/ScrollBar_HZ";
        fairygui.UIConfig.popupMenu = "ui://basic/PopupMenu";
        fairygui.UIConfig.buttonSound = "ui://basic/click";

        this.stage.addChild(fairygui.GRoot.inst.displayObject);
    }
    //正式进入游戏
    private startGame():void
    {
        Globals.i().net.addEventListener(egret.Event.CONNECT,this.onConnect,this);
        
        // DelayCall.call(200,this.delayStart,this);
    }
    private userManager:UserManager;
    private onConnect(e:egret.Event){
        Globals.i().net.removeEventListener(egret.Event.CONNECT,this.onConnect,this);        

        Globals.i().net.addEventListener(MessageType.sc_login+"",this.onScLogin,this);
        Globals.i().net.addEventListener(MessageType.sc_tick+"",this.onScTick,this);
        Globals.i().net.addEventListener(MessageType.sc_enterScene+"",this.onEnterScene,this)
        let timer:egret.Timer = new egret.Timer(10000);
        timer.addEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
        timer.start();
        this.onTimer(null);
        this.userManager = new UserManager()

        WinsManager.getIns().openWindow(LoginWin);
    }

    private onTimer(e:egret.TimerEvent){
        Globals.i().net.send(MessageType.createTick());
    }
    private onScTick(e:egret.Event):void{
        let msg:ScTick = e.data;
        Globals.i().serverTime.init(msg.time);
    }
    private onScLogin(e:egret.Event):void{
        var msg:ScLogin = e.data;
        Globals.i().playerId = msg.playerId;
        Globals.i().net.send(MessageType.createEnterScene());
    }
    private onEnterScene(e:egret.Event){
        var msg:ScEnterScene = e.data;
        Globals.i().enterScene = msg;
        GameManager.getIns().startNewGame();
    }
    //延迟进入游戏
    private delayStart():void
    {
        GameManager.getIns().startNewGame();
    }

}
