var lataForma = new THREE.CylinderGeometry(1, 1, 2);
var tapaForma = new THREE.CylinderGeometry(0.75, 1, 1);
var pie1 = new THREE.CylinderGeometry(0.25, 0.25, 0.75);
var pie2 = new THREE.CylinderGeometry(0.25, 0.25, 0.75);
tapaForma.translate(0,2,0);
pie1.translate(-1,-2,0);
pie2.translate(1,-2,0);

var lataMalla = new THREE.Mesh(lataForma);
var tapaMalla = new THREE.Mesh(tapaForma);
var pie1Malla = new THREE.Mesh(pie1);
var pie2Malla = new THREE.Mesh(pie2);

var rForma = new THREE.Geometry();
rForma.merge(lataMalla.geometry, lataMalla.matrix);
rForma.merge(tapaMalla.geometry, tapaMalla.matrix);
rForma.merge(pie1Malla.geometry, pie1Malla.matrix); 
rForma.merge(pie2Malla.geometry, pie2Malla.matrix);

var material = new THREE.MeshNormalMaterial();
var rMalla = new THREE.Mesh(rForma, material);
var escena = new THREE.Scene();
escena.add(rMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 20;
camara.position.y = 20;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
