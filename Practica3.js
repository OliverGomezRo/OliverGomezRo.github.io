var campoVision = 45;
var relacionAspecto = window.innerWidth/ window.innerHeight;
var planoCercano = 1;
var planoLejano = 1000;
var mesh ;
var i=0;
var j=0;

THREE.ImageUtils.crossOrigin = '';
var textura = new THREE.ImageUtils.loadTexture('https://olivergomezro.github.io/board_empty.gif');
var material = new THREE.MeshBasicMaterial( {map: textura} );
var forma = new THREE.BoxGeometry(1,1,1);


var camara= new THREE.PerspectiveCamera(campoVision, relacionAspecto, planoCercano, planoLejano);
camara.position.z = 25;
camara.position.y = 5;
camara.position.x = 3.5;

var escena= new THREE.Scene();

for (i=0;i<8;i++)
{
	for(j=0;j<8;j++)
	{
	mesh = new THREE.Mesh(forma,material);
	mesh.position.x=i;
	mesh.position.z=j;	
	//mesh.rotateX(Math.PI/6);
	escena.add(mesh);
	}
}

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
