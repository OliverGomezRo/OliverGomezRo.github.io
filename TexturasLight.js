function setup(){
THREE.ImageUtils.crossOrigin = '';
var textura = new THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/crate.gif');
var material = new THREE.MeshBasicMaterial( {map: textura} );
var forma = new THREE.BoxGeometry(1,4,9);
malla = new THREE.Mesh(forma,material);

var luzPuntual = new THREE.PointLight(0xFFFFFF);
camara.luzPuntual.x=10;
camara.luzPuntual.y=10;
camara.luzPuntual.z=10;

escena = new THREE.Scene();
escena.add(malla);

camara = new THREE.PerspectiveCamera();
camara.position.z=10;

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);
malla.rotation.x += 0.01;
malla.rotation.y += 0.01;

renderer.render(escena,camara);
}
var camara, escena, renderer, malla;
setup();
loop();