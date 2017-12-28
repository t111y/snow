class MonsterManager implements IRender {
	private monsters:Array<Monster>;
	public constructor() {
		this.monsters = new Array<Monster>();
		this.createMonster();
	}
	public renderUpdate(interval:number){
		this.monsters.forEach(element => {
			for(var i:number = 0;i<PlayerRole.self.roleMeshs.length;i++){
				var roleMeshs:RoleMesh = PlayerRole.self.roleMeshs[i];
				var point:egret.Point = element.localToGlobal(element.x,element.y);
				if(roleMeshs.shape.hitTestPoint(element.x,element.y,true)){
					if(element.filters.length){
						element.filters.push(new egret.GlowFilter(0x00ff00,1,10,10,100));
					}
				}
			}
		});
		
	}
	private createMonster(){
		for(var i:number = 0;i < GameConfig.Monster_NUM; i++){
			var m:Monster = new Monster();
			this.monsters.push(m);
			m.x = Math.abs(Math.random() * GameConfig.WORD_W );
			m.y = Math.abs(Math.random() * GameConfig.WORD_H);
			Tiled_Ground.getIns().addFocusRole(m);
		}
	}
}