class MapBackground extends egret.DisplayObjectContainer {
	public constructor() {
		super()
	}
	private bitmaps:Map<String,egret.Bitmap>= new Map<String,egret.Bitmap>();
	public loadMapTile(dx,dy){
		if(dx<0 || dy <0){
			return;
		}
		var i:number = Math.floor(dx / GameConfig.GRID_W);
		var j:number =  Math.floor(dy /GameConfig.GRID_W);
		var key:String = i+"_"+j;
		if(this.bitmaps.has(key)){
			return;
		}
		var bitmap: egret.Bitmap = new egret.Bitmap();
		this.addChild(bitmap);
        bitmap.x = i*GameConfig.GRID_W;
        bitmap.y = j*GameConfig.GRID_W;
		this.bitmaps.set(key,bitmap);
		RES.getResByUrl('resource/assets/map/1/' + key + '.png',function(event: any) {
            var img: egret.Texture = <egret.Texture>event;
            bitmap.texture = img;
        },this,RES.ResourceItem.TYPE_IMAGE);
	}

	public render(dx,dy){
		for(var i:number = dx - this.stage.stageWidth/2;i<dx + this.stage.stageWidth/2 ;i+=GameConfig.GRID_W)
		{
			for(var j:number = dy - this.stage.stageHeight/2;j<dy + this.stage.stageHeight/2 ;j+=GameConfig.GRID_W)
			{
				this.loadMapTile(i,j);
			}
		}
		
	}
}