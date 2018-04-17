class MonsterManager implements IRender {
	private monsters:Array<Monster>;
	public constructor() {
		this.monsters = new Array<Monster>();
		Globals.i().net.addEventListener(MessageType.sc_move+"",this.onAddNpc,this);
	}
	public onAddNpc(e:egret.Event){
		let npcs:Array<Npc> = e.data;

		for(var i:number = 0;i < npcs.length; i++){
			let npc:Npc = npcs[i];
			var m:Monster = new Monster();
			m.name = npc.id+"";
			this.monsters.push(m);
			m.x = npc.pos[0];
			m.y = npc.pos[0];
			Tiled_Ground.getIns().addFocusRole(m);
		}
	}
	public renderUpdate(interval:number){
		this.monsters.forEach(element => {
			if(!element.isDead && PlayerRole.self.roleMeshs.length>0){
				for(var i:number = 0;i<PlayerRole.self.roleMeshs.length;i++){
					var roleMeshs:RoleMesh = PlayerRole.self.roleMeshs[i];
					var point:egret.Point = element.localToGlobal();
					var isHit:boolean = roleMeshs.hitTest(point.x,point.y);
					element.setDead(isHit);
					return;
				}
			}
		});
	}
}