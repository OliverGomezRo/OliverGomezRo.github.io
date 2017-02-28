var lataForma = new THREE.CylinderGeometry(3, 3, 10);
var tapaForma = new THREE.CylinderGeometry(2, 3, 0.5);
tapaForma.translate(0,10,0);

var lataMalla = new THREE.Mesh(lataForma);
var tapaMalla = new THREE.Mesh(tapaForma);
var rForma = new THREE.Geometry();
rForma.merge(lataMalla.geometry, lataMalla.matrix);
rForma.merge(tapaMalla.geometry, tapaMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var rMalla = new THREE.Mesh(rForma, material);
var escena = new THREE.Scene();
escena.add(rMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 40;
camara.position.y = 20;
camara.position.x = 30;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
