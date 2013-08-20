//JavaScript

function OnGUI () {
 GUI.Box (Rect (10,30,140,420), "Level Menu");
 
  

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (20,60,80,20), "Fps Test")) {
		Application.LoadLevel (0);
	}
	//Level 1
	if (GUI.Button (Rect (20,90,90,20), "Terrain Test")) {
	Application.LoadLevel (1);
	}
	// Make the second button.
	if (GUI.Button (Rect (20,120,100,20), "Pathfinding Test")) {
		Application.LoadLevel (2);
	}
	
	}
/*	
	// Make the third button
	if (GUI.Button (Rect (20,150,80,20), "Scene 3")) {
	Application.LoadLevel (3);
}
    //Make the 4th button
    if (GUI.Button (Rect (20,180,80,20),"Scene 4")){
    Application.LoadLevel (4);

}
   //Make the fifth button
   if (GUI.Button (Rect (20,210,80,20), "Snow map")){
   Application.LoadLevel (5);

}
   //Make the 6th button
   if (GUI.Button (Rect (20,240,90,20), "Strange map")){
   Application.LoadLevel (6);
}
 //Make the 7th button
   if (GUI.Button (Rect (20,270,120,20), "Just another map")){
   Application.LoadLevel (7);
   }
   //Make the 8th button
   if (GUI.Button (Rect (20,300,80,20), "Nope")){
   Application.LoadLevel (8);
   }
   if (GUI.Button (Rect (20,330,80,20), "Nope")){
   Application.LoadLevel (9);
   }
    if (GUI.Button (Rect (20,360,80,20), "Nope")){
   Application.LoadLevel (10);
   }
     if (GUI.Button (Rect (20,390,80,20), "Nope")){
   Application.LoadLevel (11);
   }
      if (GUI.Button (Rect (20,420,80,20), "Nope")){
     Application.LoadLevel (12);
   }
   }
   
  
   
  //    if (GUI.Button (Rect (20,450,80,20), "Level 13")){
  // Application.LoadLevel (13);
   
   //   if (GUI.Button (Rect (20,480,80,20), "Level 14")){
   //Application.LoadLevel (14);
   
   //   if (GUI.Button (Rect (20,510,80,20), "Level 15")){
  // Application.LoadLevel (15);
   
   //   if (GUI.Button (Rect (20,540,80,20), "Level 16")){
  // Application.LoadLevel (16);
   
   //   if (GUI.Button (Rect (20,570,80,20), "Level 17")){
  // Application.LoadLevel (17);
   
   //   if (GUI.Button (Rect (20,600,80,20), "Level 18")){
   //Application.LoadLevel (18);
   
    //  if (GUI.Button (Rect (20,630,80,20), "Level 19")){
   //Application.LoadLevel (19);
   
   //   if (GUI.Button (Rect (20,660,80,20), "Level 20")){
   //Application.LoadLevel (20);
   
   
   */