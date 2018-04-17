class MonsterManager implements IRender {
	private monsters:Array<Monster>;
	public constructor() {
		this.monsters = new Array<Monster>();
		Globals.i().net.addEventListener(MessageType.sc_npcEnter+"",this.onAddNpc,this);
	}
	public onAddNpc(e:egret.Event){
		let msg:ScNpcEnter = e.data;

		for(var i:number = 0;i < msg.tiles.length; i++){
			let npc:Npc =  msg.tiles[i];
			var m:Monster = new Monster();
			m.name = npc.id;
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
			if(!element.isDead && PlayerRole.self.roleMeshs.length>0){
				this.p1.x = element.x;
				this.p1.y = element.y;
				this.p2.x = PlayerRole.self.x;
				this.p2.y = PlayerRole.self.y;
				if(egret.Point.distance(this.p1,this.p2)<50){
					element.setDead(true);
					MessageType.sendHitNpc(element.name)
				}
			}
		});
	}
}