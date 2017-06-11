var entorno, camara, renderer;
var meshFloor,luzambiente, luz;
var keyboard = {};
var player = { height:0.5, speed:0.2, turnSpeed:Math.PI*0.02 };

function Agent(x=0, y=0, z=0){
THREE.Object3D.call(this);
this.position.x = x;
this.position.y = y;
this.position.z= z;
}

Agent.prototype = new THREE.Object3D();

Agent.prototype.sense = function(environment) {};
Agent.prototype.plan = function(environment) {};
Agent.prototype.act = function(environment) {};

function Environment(){
THREE.Scene.call(this);
}

Environment.prototype = new THREE.Scene();

Environment.prototype.sense = function() {
for ( var i = 0; i<this.children.length; i++ ){
if (this.children[i].sense !== undefined)
this.children[i].sense(this);
 }
}

Environment.prototype.plan = function(){
for (var i = 0; i < this.children.length; i++ ){
if (this.children[i].plan !== undefined)
this.children[i].plan(this);
 }
}

Environment.prototype.act = function(){
for (var i = 0; i < this.children.length; i++){
if (this.children[i].act !== undefined)
this.children[i].act(this);
 }
}


function Pelota(r, x=0, y=0,z=0){
Agent.call(this,x,y);
this.add(new THREE.Mesh(new THREE.SphereGeometry(r), new THREE.MeshPhongMaterial({color:0xff0000})));
this.step=0.1;
this.colision=0;
this.radius=r;
this.sensor = new THREE.Raycaster(this.position, new THREE.Vector3(1,0,0));
this.position.x = x;
this.position.y = y;
this.position.z = z;
this.receiveShadow=true;
this.castShadow=true;
}

Pelota.prototype = new Agent();

Pelota.prototype.sense = function(environment){
this.sensor.set(this.position, new THREE.Vector3(1,0,1));
var obstaculo1 = this.sensor.intersectObjects(environment.children, true);

this.sensor.set(this.position, new THREE.Vector3(-1,0,-1));
var obstaculo2 = this.sensor.intersectObjects(environment.children, true);

if ((obstaculo1.length>0 && (obstaculo1[0].distance<= this.radius)) || (obstaculo2.length > 0 && (obstaculo2[0].distance <= this.radius)))
this.colision = 1;
else
this.colision = 0;
};
Pelota.prototype.act = function(environment){
if (this.colision === 1) 	
this.step = -this.step;
//this.position.x += this.step;
//this.position.z += this.step;
};

function Pared(sizex,sizey,sizez, x=0, y=0,z=0){
THREE.Object3D.call(this,x,y);

var textura = new THREE.ImageUtils.loadTexture('https://olivergomezro.github.io/crate.gif');
this.add(new THREE.Mesh(new THREE.BoxGeometry(sizex,sizey,sizez), new THREE.MeshPhongMaterial({map:textura})));
this.sizex = sizex;
this.sizey = sizey;
this.sizez = sizez;
this.position.x = x;
this.position.y = y;
this.position.z = z;
}



Pared.prototype = new THREE.Object3D();

function setup(){
THREE.ImageUtils.crossOrigin = '';
 entorno = new Environment();

camara = new THREE.PerspectiveCamera(90,1200/720,0.1,1000);
camara.position.set(0,player.height,-30);
camara.lookAt(new THREE.Vector3(0,player.height,0));

entorno.add( new Pared(1,1,80,40,0,0) );
entorno.add( new Pared(1,1,80,-40,0,0) );
entorno.add( new Pared(80,1,1,0,0,40) );
entorno.add( new Pared(80,1,1,0,0,-40) );
entorno.add( new Pelota(0.5,0,0.5,0));

var textura2 = new THREE.ImageUtils.loadTexture('https://olivergomezro.github.io/concrete.png');
meshFloor = new THREE.Mesh(new THREE.PlaneGeometry(80,80,80), new THREE.MeshPhongMaterial({map:textura2}));
entorno.add( camara );
camara.position.y=3;

Pelota.receiveShadow=true;
Pelota.castShadow=true;	

meshFloor.rotation.x -= Math.PI / 2; // Rotate the floor 90 degrees
entorno.add(meshFloor);

	meshFloor.receiveShadow = true;
	entorno.add(meshFloor);
	luzambiente = new THREE.AmbientLight(0xffffff, 0.1);
	entorno.add(luzambiente);
	
	luz = new THREE.PointLight(0xffffff, 1, 50);
	luz.castShadow = true;
	
	luz.shadow.camera.near = 0.1;
	luz.shadow.camera.far = 100;
	entorno.add(luz);
	luz.position.set(0,10,1);

pelota = new THREE.Mesh(new THREE.SphereGeometry(0.5),new THREE.MeshLambertMaterial({color:0x00cc00}));
entorno.add(pelota);

pelota.receiveShadow=true;
pelota.castShadow=true;	
	

camara.position.set(0, player.height, -5);
camara.lookAt(new THREE.Vector3(0,player.height,0));

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(1280, 720);
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.BasicShadowMap;	
	document.body.appendChild(renderer.domElement);

step = 0.1;
animar();
}

function animar(){
requestAnimationFrame(animar);

entorno.sense();
entorno.plan();
entorno.act();

	
if(keyboard[87]){ // w
		camara.position.x -= Math.sin(camara.rotation.y) * player.speed;
		camara.position.z -= -Math.cos(camara.rotation.y) * player.speed;
	}
	if(keyboard[83]){ // s
		camara.position.x += Math.sin(camara.rotation.y) * player.speed;
		camara.position.z += -Math.cos(camara.rotation.y) * player.speed;
	}
	if(keyboard[81]){ //a 
		camara.position.x += Math.sin(camara.rotation.y + Math.PI/2) * player.speed;
		camara.position.z += -Math.cos(camara.rotation.y + Math.PI/2) * player.speed;
	}
	if(keyboard[69]){ // d
		camara.position.x += Math.sin(camara.rotation.y - Math.PI/2) * player.speed;
		camara.position.z += -Math.cos(camara.rotation.y - Math.PI/2) * player.speed;
	}

	if(keyboard[65]){ // izquierda
		camara.rotation.y -= player.turnSpeed;
	}
	if(keyboard[68]){ // derecha
		camara.rotation.y += player.turnSpeed;
	}
	pelota.position.set(camara.position.x - Math.sin(camara.rotation.y),
			camara.position.y,
			camara.position.z + Math.cos(camara.rotation.y));
	

 	
	renderer.render(entorno,camara);
}

function keyDown(event){
	keyboard[event.keyCode] = true;
}

function keyUp(event){
	keyboard[event.keyCode] = false;
}
window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

var raycaster1, raycaster2, step;
var obstaculo1, obstaculo2;
window.onload = setup;
