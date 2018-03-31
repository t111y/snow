class MonsterManager implements IRender {
	private monsters:Array<Monster>;
	public constructor() {
		this.monsters = new Array<Monster>();
		this.createMonster();
	}
	public renderUpdate(interval:number){
		this.monsters.forEach(element => {
			if(!element.isDead && PlayerRole.self.roleMeshs.length>0){
				for(var i:number = 0;i<PlayerRole.self.roleMeshs.length;i++){
					var roleMeshs:RoleMesh = PlayerRole.self.roleMeshs[i];
					var point:egret.Point = element.localToGlobal();
					var isHit:boolean = roleMeshs.hitTest(point.x,point.y);
					element.setDead(isHit);
				}
			}
		});
		
	}
	private createMonster(){
		for(var i:number = 0;i < GameConfig.Monster_NUM; i++){
			var m:Monster = new Monster();
			m.name = "m"+ i;
			this.monsters.push(m);
			m.x = Math.abs(Math.random() * GameConfig.WORD_W );
			m.y = Math.abs(Math.random() * GameConfig.WORD_H);
			// m.x = 300;
			// m.y = 300;
			Tiled_Ground.getIns().addFocusRole(m);
		}
	}
}