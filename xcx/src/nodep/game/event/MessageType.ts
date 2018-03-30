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

	public static playerId:string = "";

	public static createLogin(name:String):Object{
		return {"msgId": 10000,"name":name};
	}
	public static createEnterScene():Object{
		return {"msgId": 12000};
	}
	public static createMove(path:Array<RolePathPoint>):Object{
		return {"msgId": 12001, "path": [[1,2]]};
	}
	public static createCirclePath(mesh:RoleMesh):Object{
		return {"msgId": 12004, "circlePath": [[1,2]]};
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
	private static parseUserEnter(o:any):ScUserEnter{
		var msg:ScUserEnter = new ScUserEnter();
		msg.sceneId = o.sceneId;
		return msg;
	}
	private static parseMove(o:any):ScMove{
		var msg:ScMove = new ScMove();
		msg.playerId = o.playerId;
		msg.path = new Array<RolePathPoint>();
		return msg;
	}
	private static parseCirclePath(o:any):ScCirclePath{
		var msg:ScCirclePath = new ScCirclePath();
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
		}
	}
}

class ScLogin{
	public playerId:string;
}


class ScEnterScene{
	public sceneId:string;

}
class ScUserEnter{
	public sceneId:string;

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