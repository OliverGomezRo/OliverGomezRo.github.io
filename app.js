function setup(){
THREE.ImageUtils.crossOrigin = '';
var textura = new THREE.ImageUtils.loadTexture('https://olivergomezro.github.io/concrete.png');
var material = new THREE.MeshLambertMaterial( {map: textura} );
var forma = new THREE.BoxGeometry(1,0.1,1);

escena = new THREE.Scene();

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
