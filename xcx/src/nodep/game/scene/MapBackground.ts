class MapBackground extends egret.DisplayObjectContainer {
	public constructor() {
		super()
		for(var i:number = 0;i<GameConfig.WORD_W-1 ;i+=GameConfig.GRID_SIZE)
		{
			for(var j:number = 0;j<GameConfig.WORD_H-1 ;j+=GameConfig.GRID_SIZE)
			{
				this.loadMapTile(i,j);
			}
		}
	}
	private bitmaps:Object= {};
	public loadMapTile(dx,dy){
		if(dx<0 || dy <0){
			return;
		}
		var i:number = Math.floor(dx / GameConfig.GRID_SIZE);
		var j:number =  Math.floor(dy /GameConfig.GRID_SIZE);
		var key:string = i+"_"+j;
		if(this.bitmaps[key]!=null){
			return;
		}
		var bitmap: egret.Bitmap = new egret.Bitmap();
		this.addChild(bitmap);
        bitmap.x = i*GameConfig.GRID_SIZE;
        bitmap.y = j*GameConfig.GRID_SIZE;
		bitmap.scaleX = 2;
		bitmap.scaleY = 2;
		this.bitmaps[key]=bitmap;
		RES.getResByUrl('resource/assets/map/1/' + key + '.png',function(event: any) {
            var img: egret.Texture = <egret.Texture>event;
            bitmap.texture = img;
        },this,RES.ResourceItem.TYPE_IMAGE);
	}

	public render(dx,dy){
		// for(var i:number = dx - this.stage.stageWidth/2;i<dx + this.stage.stageWidth/2 ;i+=GameConfig.GRID_W)
		// {
		// 	for(var j:number = dy - this.stage.stageHeight/2;j<dy + this.stage.stageHeight/2 ;j+=GameConfig.GRID_W)
		// 	{
		// 		this.loadMapTile(i,j);
		// 	}
		// }
		
	}
}