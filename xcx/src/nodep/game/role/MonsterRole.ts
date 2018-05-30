class MonsterRole extends FocusRole{
	public speed:number;
	public constructor() {
		super();
		this.type = RoleType.MONSTER;
	}
	public updateProperty(attr:Array<Array<any>>){
		attr.forEach(o=>{
			switch(o[0]){
				case PropertyType.speed:
					this.speed = o[1];
				break;
				case PropertyType.endPos:
					let p:Array<number> = o[1];
					this.move(p);
				break;
			}
		})
	}
	public move(target:Array<number>){
		egret.Tween.get(this).to({x:target[0],y:target[1]},Math.sqrt(Math.pow(target[0]-this.x,2) + Math.pow(target[1]-this.y,2))/this.speed * 1000);
	}
}