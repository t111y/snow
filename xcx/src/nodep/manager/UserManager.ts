class UserManager {
	public constructor() {
		Globals.i().net.addEventListener(MessageType.sc_userEnter+"",this.onUserEnter,this);
		Globals.i().net.addEventListener(MessageType.sc_circlePath+"",this.onCirclePath,this);
		Globals.i().net.addEventListener(MessageType.sc_move+"",this.onMove,this);
		Globals.i().net.addEventListener(MessageType.sc_updateUserProperty+"",this.onUpdateUserProperty,this);
	}

	private onUpdateUserProperty(e:egret.Event){
		let msg:ScUpdateUserProperty = e.data;
		let role:UserRole = Tiled_Ground.getIns().getUserRole(msg.playerId);
		role.updateProperty(msg.attrs);
	}
	private onUserEnter(e:egret.Event){
		let msg:ScUserEnter = e.data;
		for(let i:number = 0;i<msg.players.length;i++){
			let role:UserRole = Tiled_Ground.getIns().getUserRole(msg.players[i].id);
			if(role ==null){
				role = new UserRole();
				role.name = msg.players[i].id;
				role.x = msg.players[i].pos[0];
				role.x = msg.players[i].pos[1];
				Tiled_Ground.getIns().addFocusRole(role);
			}
		}
	}
	private onCirclePath(e:egret.Event){
		let msg:ScCirclePath = e.data;
		let role:UserRole = Tiled_Ground.getIns().getUserRole(msg.playerId);

		let mesh:RoleMesh = new RoleMesh();
		mesh.existTime = role.pointExistTime;
		mesh.addPoints(msg.circlePath);
		mesh.time = msg.time;
		role.roleMeshs.push(mesh);
	}
	private onMove(e:egret.Event){
		let msg:ScMove = e.data;
		let role:UserRole = Tiled_Ground.getIns().getUserRole(msg.playerId);
		role.path = role.path.concat(msg.path);
		role.moveTo(role.path[role.path.length-1].point.x,role.path[role.path.length-1].point.y);
	}
}