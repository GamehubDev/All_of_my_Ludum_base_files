function OnGUI() {
	if (GUILayout.Button ("Start Server"))
	{
		// Use NAT punchthrough if no public IP present
		Network.InitializeServer(32, 25002, !Network.HavePublicAddress());
		MasterServer.RegisterHost("Mobile Game", "Mrjose342", "Gamehub");
	}
}