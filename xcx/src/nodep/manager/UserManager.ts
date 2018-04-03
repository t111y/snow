class UserManager {
	public constructor() {
		Globals.i().net.addEventListener(MessageType.sc_userEnter+"",this.onUserEnter,this);
		Globals.i().net.addEventListener(MessageType.sc_circlePath+"",this.onCirclePath,this);
		Globals.i().net.addEventListener(MessageType.sc_move+"",this.onMove,this);
	}
	private onUserEnter(e:egret.Event){
		let msg:ScUserEnter = e.data;
		for(let i:number = 0;i<msg.players.length;i++){
			let role:UserRole = new UserRole();
			role.name = msg.players[i];
			Tiled_Ground.getIns().addFocusRole(role);
		}
	}
	private onCirclePath(e:egret.Event){
		let msg:ScCirclePath = e.data;
		let role:UserRole = Tiled_Ground.getIns().getUserRole(msg.playerId);

		let mesh:RoleMesh = new RoleMesh();
		mesh.addPoints(msg.circlePath);
		mesh.time = msg.time;
		role.roleMeshs.push(mesh);
	}
	private onMove(e:egret.Event){
		let msg:ScMove = e.data;
		let role:UserRole = Tiled_Ground.getIns().getUserRole(msg.playerId);
		role.path = msg.path;
	}
}