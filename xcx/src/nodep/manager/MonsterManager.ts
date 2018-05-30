class MonsterManager implements IRender {
	private monsters:Array<NpcRole>;
	public constructor() {
		this.monsters = new Array<NpcRole>();
		Globals.i().net.addEventListener(MessageType.sc_npcEnter+"",this.onAddNpc,this);
		Globals.i().net.addEventListener(MessageType.sc_monsterEnter+"",this.onMonsterEnter,this);
		Globals.i().net.addEventListener(MessageType.sc_monsterExit+"",this.onMonsterExit,this);
		Globals.i().net.addEventListener(MessageType.sc_npcExit+"",this.onNpcExit,this);
	}
	
	public onMonsterExit(e:egret.Event){
		let msg:ScMonsterExit = e.data;
		for(let i:number = 0;i<msg.monsters.length;i++){
			Tiled_Ground.getIns().removeRole(msg.monsters[i]);
		}
	}
	public onNpcExit(e:egret.Event){
		let msg:ScNpcExit = e.data;
		for(let i:number = 0;i<msg.tiles.length;i++){
			Tiled_Ground.getIns().removeRole(msg.tiles[i]);
		}
	}
	public onMonsterEnter(e:egret.Event){
		let msg:ScMonsterEnter = e.data;
		for(var i:number = 0;i < msg.monsters.length; i++){
			let npc:Monster =  msg.monsters[i];
			var m:MonsterRole = new MonsterRole();
			m.name = npc.id;
			m.x = npc.pos[0];
			m.y = npc.pos[1];
			m.speed = npc.speed;
			m.move(npc.endPos);
			m.setModel("monster1");
			Tiled_Ground.getIns().addFocusRole(m);
		}
	}
	public onAddNpc(e:egret.Event){
		let msg:ScNpcEnter = e.data;

		for(var i:number = 0;i < msg.tiles.length; i++){
			let npc:Npc =  msg.tiles[i];
			var m:NpcRole = new NpcRole();
			m.name = npc.id;
			m.npcType = npc.type;
			m.setModel("candy");
			this.monsters.push(m);
			m.x = npc.pos[0];
			m.y = npc.pos[1];
			Tiled_Ground.getIns().addFocusRole(m);
		}
	}
	private p1:egret.Point = new egret.Point();
	private p2:egret.Point = new egret.Point();
	public renderUpdate(interval:number){
		this.monsters.forEach(element => {
			if(!element.isDead && element.npcType != NpcType.MAGIC_BUILDERE){
				this.p1.x = element.x;
				this.p1.y = element.y;
				this.p2.x = PlayerRole.self.x;
				this.p2.y = PlayerRole.self.y;
				if(egret.Point.distance(this.p1,this.p2)<GameConfig.killNpc_distance){
					element.setDead(true);
					MessageType.sendHitNpc(element.name)
				}
			}
		});
	}
}