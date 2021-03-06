var player={height:1};
var camara, escena, renderer;
function setup(){
THREE.ImageUtils.crossOrigin = '';
var textura = new THREE.ImageUtils.loadTexture('https://olivergomezro.github.io/concrete.png');
var material = new THREE.MeshLambertMaterial( {map: textura} );
var forma = new THREE.BoxGeometry(1,0.1,1);
var textura1 = new THREE.ImageUtils.loadTexture('https://olivergomezro.github.io/Pelota.png');
var pelota = new THREE.Mesh(new THREE.SphereGeometry(0.2), new THREE.MeshLambertMaterial({map:textura1}));
	
	var luzPuntual = new THREE.PointLight(0xffffff);
	luzPuntual.position.x=10;
	luzPuntual.position.y=10;
	luzPuntual.position.z=10;
	
escena = new THREE.Scene();
escena.add(luzPuntual);
escena.add(pelota);
	
for (i=0;i<60;i++)
{
	for(j=0;j<60;j++)
	{
	malla = new THREE.Mesh(forma,material);
	malla.position.x=i;
	malla.position.z=j;	
	escena.add(malla);
	}
}
	
pelota.position.x=10;
pelota.position.z=10;
pelota.position.y=0.5;	
	
camara = new THREE.PerspectiveCamera();
camara.position.z=-5;
camara.position.y=player.height;
camara.position.x=0;
camara.lookAt( new THREE.Vector3(0,player.height,0));
	
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);
//malla.rotation.x += 0.01;
//malla.rotation.y += 0.01;

renderer.render(escena,camara);
}

setup();
loop();
var malla;
