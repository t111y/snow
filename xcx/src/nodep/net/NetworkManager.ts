class NetworkManager extends egret.EventDispatcher {
	private socket:egret.WebSocket;
	private bytes:egret.ByteArray;
	public constructor() {
		super();
		this.bytes = new egret.ByteArray();
		this.socket = new egret.WebSocket();
		this.socket.connectByUrl("ws://121.43.192.128:8090/websocket");
		this.socket.addEventListener(egret.Event.CONNECT,function(e){
			console.log(e);
			this.dispatchEvent(e);
		},this);
		this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
	}
	private _len:number = -1;
	private _type:number;
	private _notShowMsgs:Array<number> = [12000,60000];
	private onReceiveMessage(e:egret.ProgressEvent):void{
		var m:string = this.socket.readUTF();
		var o:any;
		try {
			o = JSON.parse(m);
			if(this._notShowMsgs.indexOf(o.msgId)==-1){
				console.log("收到消息 "+m);
			}
			
			this.dispatchEvent(new egret.Event(o.msgId,false,false,MessageType.paserScMsg(o)));
		} catch (error) {
			console.log("消息处理错误 "+m);
			console.log(error);
		}
		
	}
	public send(s:any){
		this.socket.writeUTF(JSON.stringify(s));
	}
}