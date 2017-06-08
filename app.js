function setup(){
	
THREE.ImageUtils.crossOrigin = '';
	
var textura = new THREE.ImageUtils.loadTexture('https://olivergomezro.github.io/concrete.png');
var material = new THREE.MeshPhongMaterial( {map: textura} );
var forma = new THREE.BoxGeometry(1,0.1,1);
var texturaPelota = new THREE.ImageUtils.loadTexture('https://olivergomezro.github.io/Pelota.png');	
var pelota= new THREE.Mesh(new THREE.SphereGeometry(1),new THREE.MeshPhongMaterial({map: texturaPelota}));
	
escena = new THREE.Scene();
	
pelota.position.x=4;
pelota.position.y=1;
pelota.position.z=4;
	
var light= new THREE.PointLight(0xffffff);
light.position.set(4, 10, 4);
escena.add(light);
	
for (i=0;i<8;i++)
{
	for(j=0;j<8;j++)
	{
	malla = new THREE.Mesh(forma,material);
	malla.position.x=i;
	malla.position.z=j;	
	escena.add(malla);
	}
}
//60, window.innerWidth/ window.innerHeight, 1, 1000
var camara= new THREE.PerspectiveCamera();
camara.position.z=4;
camara.position.y=6;
camara.position.x=4;
	
escena.add(pelota);
camara.lookAt(pelota.position);
	
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
var camara, escena, renderer, malla, pelota;
setup();
loop();
