class MessageType {
	public constructor() {
	}

	/*
	登录
	c2s => {"msgId": 10000, "name": "test1"}
    s2c => {"msgId":10000,"playerId":429501024567297}
	*/
	public static sc_login:number = 10000;
	/*
	进入场景
	c2s => {"msgId": 12000}
    s2c => {"msgId":12000,"sceneId":6537229662358143976}
	*/
	public static sc_enterScene:number = 12000;
	
	/*
	同步路径(返回只发给其他玩家)
	c2s => {"msgId": 12000}
    s2c => {"msgId":12000,"sceneId":6537229662358143976}
	*/
	public static sc_move:number = 12001;

	/** 
	 * 别的玩家进入场景
	 * s2c => {"msgId": 12002, "players": [玩家id]}
	 * */
	public static sc_userEnter:number = 12002;

	/** 
	 * 生成封闭区域
    c2s => {"msgId": 12004, "circlePath": [[2,3], [23, 23]....], "time": 1522296176}
    s2c => {"msgId": 12004, "playerId": 429501024567297, "time": 1522296176, "circlePath": [[2,3], [23, 23]]}
	 * */
	public static sc_circlePath:number = 12004;
	public static sc_drop:number = 12007;

	public static sc_npcEnter:number = 12008;

	/**
	 * {"msgId": 60000, "time": 1522296176}
	 */
	public static sc_tick:number = 60000;


	public static playerId:string = "";

	public static createLogin(name:String):Object{
		return {"msgId": 10000,"name":name};
	}
	public static createEnterScene():Object{
		return {"msgId": 12000};
	}
	public static createMove(path:Array<RolePathPoint>):Object{
		return {"msgId": 12001, "path": MessageType.pathToArray(path)};
	}
	public static createCirclePath(mesh:RoleMesh):Object{
		return {"msgId": 12004, "circlePath": MessageType.pathToArray(mesh.points),"time":mesh.time};
	}
	/**
	 * 掉进坑里
	 * {"msgId": 12007, "circleId": 1, "dropPlayerId": 429501024567298, "time": 1522296176}
	 */
	public static createDrop(circleId:number,dropPlayerId:string,time:number){
		return {"msgId": 12007,"dropPlayerId":dropPlayerId,"circleId":circleId,"time":time};
	}
	public static parseDrop(o:any):ScDrop{
		let msg:ScDrop = new ScDrop();
		msg.dropPlayerId = o.dropPlayerId;
		return msg;
	}
	private static pathToArray(path:Array<RolePathPoint>){
		let arr:Array<Array<number>> = new Array<Array<number>>();
		for(let i:number = 0;i<path.length;i++){
			let p:RolePathPoint = path[i];
			arr.push([Math.round(p.point.x),Math.round(p.point.y),p.time]);
		}
		return arr;
	}
	private static arrayToPath(arr:Array<Array<number>>):Array<RolePathPoint>{
		let path:Array<RolePathPoint> = new Array<RolePathPoint>();
		for(let i:number = 0;i<arr.length;i++){
			let p:RolePathPoint = new RolePathPoint(new egret.Point(arr[i][0],arr[i][1]));
			p.time = arr[i][2];
			path.push(p);
		}
		return path;
	}
	public static createTick(){
		return {"msgId": 60000};
	}

	private static parseLogin(o:any):ScLogin{
		var msg:ScLogin = new ScLogin();
		msg.playerId = o.playerId;
		return msg;
	}
	private static parseEnterScene(o:any):ScEnterScene{
		var msg:ScEnterScene = new ScEnterScene();
		msg.sceneId = o.sceneId;
		return msg;
	}
	private static parseNpcEnter(o:any):ScNpcEnter{
		var msg:ScNpcEnter = new ScNpcEnter();
		msg.tiles = [];
		o.tiles.forEach(element => {
			let npc:Npc = new Npc();
			msg.tiles[msg.tiles.length] = npc;
		});
		return msg;
	}
	private static parseUserEnter(o:any):ScUserEnter{
		var msg:ScUserEnter = new ScUserEnter();
		msg.players = o.players;
		return msg;
	}
	private static parseMove(o:any):ScMove{
		var msg:ScMove = new ScMove();
		msg.playerId = o.playerId;
		msg.path = MessageType.arrayToPath(o.path);;
		return msg;
	}
	private static parseCirclePath(o:any):ScCirclePath{
		var msg:ScCirclePath = new ScCirclePath();
		msg.playerId = o.playerId;
		msg.circlePath = MessageType.arrayToPath(o.circlePath);
		msg.time = o.time;
		return msg;
	}
	private static parseTick(o:any):ScTick{
		let msg:ScTick = new ScTick();
		msg.time = o.time;
		return msg;
	}

	public static paserScMsg(o:any):any{
		switch(o.msgId){
			case MessageType.sc_login:
			return MessageType.parseLogin(o);
			case MessageType.sc_move:
			return MessageType.parseMove(o);
			case MessageType.sc_userEnter:
			return MessageType.parseUserEnter(o);
			case MessageType.sc_circlePath:
			return MessageType.parseCirclePath(o);
			case MessageType.sc_enterScene:
			return MessageType.parseEnterScene(o);
			case MessageType.sc_tick:
			return MessageType.parseTick(o);
			case MessageType.sc_npcEnter:
			return MessageType.parseNpcEnter(o);
			case MessageType.sc_drop:
			return MessageType.parseDrop(o);
		}
	}
}
class ScDrop{
	public dropPlayerId:number;
}
class ScTick{
	public time:number;
}

class ScLogin{
	public playerId:string;
}


class ScEnterScene{
	public sceneId:string;
	public pos:Array<number>;
}
class ScUserEnter{
	public players:Array<User>;

}
class ScNpcEnter{
	public tiles:Array<Npc>;
}
class ScMove{
	public playerId:string;
	public path:Array<RolePathPoint>;
}
class ScCirclePath{
	public playerId:string;
	public circlePath:Array<RolePathPoint>;
	public time:number;
}