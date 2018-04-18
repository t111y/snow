class Globals {
	private static _i:Globals;
	public net:NetworkManager = new NetworkManager();
	public serverTime:ServerTime = new ServerTime();
	public enterScene:ScEnterScene;
	public playerId:string;
	public static i():Globals{
		if(Globals._i == null){
			Globals._i = new Globals();
		}
		return Globals._i;
	}
	public killNum:number = 0;
	public constructor() {

	}
}