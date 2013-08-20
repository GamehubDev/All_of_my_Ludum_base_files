var supportedNetworkLevels : String[] = [ "Mobile Game" ];
var disconnectedLevel : String = "loader";
private var lastLevelPrefix = 0;

function Awake ()
{
    // Network level loading is done in a separate channel.
    DontDestroyOnLoad(this);
    networkView.group = 1;
    Application.LoadLevel(disconnectedLevel);
}

function OnGUI ()
{
	if (Network.peerType != NetworkPeerType.Disconnected)
	{
		GUILayout.BeginArea(Rect(0, Screen.height - 30, Screen.width, 30));
		GUILayout.BeginHorizontal();

		for (var level in supportedNetworkLevels)
		{
			if (GUILayout.Button(level))
			{
				Network.RemoveRPCsInGroup(0);
				Network.RemoveRPCsInGroup(1);
				networkView.RPC( "LoadLevel", RPCMode.AllBuffered, level, lastLevelPrefix + 1);
			}
		}
		GUILayout.FlexibleSpace();
		GUILayout.EndHorizontal();
		GUILayout.EndArea();
	}
}
