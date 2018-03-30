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
	private onReceiveMessage(e:egret.ProgressEvent):void{
		var m:string = this.socket.readUTF();
		var o:any;
		try {
			o = JSON.parse(m);
			console.log("收到消息 "+o);
			this.dispatchEvent(new egret.Event(o.msgId,false,false,MessageType.paserScMsg(o)));
		} catch (error) {
			console.log("收到消息 "+m);
			
		}
		
	}
	public send(s:any){
		var str = JSON.stringify(s);
		this.socket.writeUTF(s);
	}
}