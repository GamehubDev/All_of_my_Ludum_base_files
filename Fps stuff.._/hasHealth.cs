﻿using UnityEngine;
using System.Collections;

public class hasHealth : MonoBehaviour {
	
	public float hitPoints = 100f;
public void RecieveDamage(float amt ) {
		hitPoints -= amt;
		if (hitPoints <= 0) {
			Die();
		}
	}
	void Die() {
	Destroy(gameObject);
		
}
}

