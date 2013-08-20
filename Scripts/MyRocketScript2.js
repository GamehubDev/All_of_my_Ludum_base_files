//JavaScript

// Require the rocket to be a rigidbody.
// This way we the user can not assign a prefab without rigidbody
var rocket : Rigidbody;
var speed = 10.0;

function FireRocket () {
    var rocketClone : Rigidbody = Instantiate(rocket, transform.position, transform.rotation);
    rocketClone.velocity = transform.forward * speed;
    // You can also acccess other components / scripts of the clone
    rocketClone.GetComponent(MyRocketScript2).DoSomething();
}

// Calls the fire method when holding down ctrl or mouse
function Update () {
    if (Input.GetButtonDown("Fire2")) {
        FireRocket();
    }
}