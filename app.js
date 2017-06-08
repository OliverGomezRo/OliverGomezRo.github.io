function setup(){
THREE.ImageUtils.crossOrigin = '';
var textura = new THREE.ImageUtils.loadTexture('https://olivergomezro.github.io/concrete.png');
var material = new THREE.MeshBasicMaterial( {map: textura} );
var forma = new THREE.BoxGeometry(1,0.1,1);
var texturaPelota = new THREE.ImageUtils.loadTexture('https://olivergomezro.github.io/Pelota.png');	
var pelota= THREE.Mesh(new THREE.SphereGeometry(1),new THREE.MeshPhongMaterial({map: texturaPelota}));
escena = new THREE.Scene();

light= new THREE.PointLight(0xffffff);
light.position.set(1, 1, 1.3);
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

camara = new THREE.PerspectiveCamera();
camara.position.z=25;
camara.position.y=5;
camara.position.x=2;

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
	
escena.add(pelota);
	
camara.lookAt(pelota.position);
}

function loop(){
requestAnimationFrame(loop);
//malla.rotation.x += 0.01;
//malla.rotation.y += 0.01;

renderer.render(escena,camara);
}
var camara, escena, renderer, malla;
setup();
loop();
