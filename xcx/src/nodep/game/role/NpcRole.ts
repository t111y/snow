class NpcRole extends FocusRole{
	public npcType:number = 1;
	public constructor() {
		super();
		this.type = RoleType.NPC;
	}
}