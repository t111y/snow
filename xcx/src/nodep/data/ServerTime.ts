class ServerTime {
	private loginLocalTime:number;
	private loginServerTime:number;
	
	public constructor() {
	}
	public init(serverTime:number){
		this.loginServerTime = serverTime;
		this.loginLocalTime = egret.getTimer();
	}
	public getServerTime():number{
		return this.loginServerTime + (egret.getTimer() -  this.loginLocalTime)/1000;
	}
}