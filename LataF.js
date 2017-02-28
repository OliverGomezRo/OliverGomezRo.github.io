var LataForma = new THREE.CylinderGeometry(5, 5, 10);
var TapaForma = new THREE.CylinderGeometry(4,5,2);
var Tapa2Forma = new THREE.CylinderGeometry(5,4,2);
TapaForma.translate(0,6,0);
Tapa2Forma.translate(0,-6,0);

var LataMalla = new THREE.Mesh(LataForma);
var TapaMalla = new THREE.Mesh(TapaForma);
var Tapa2Malla = new THREE.Mesh(Tapa2Forma);

var LataFForma = new THREE.Geometry();
LataFForma.merge(LataMalla.geometry, LataMalla.matrix);
LataFForma.merge(TapaMalla.geometry, TapaMalla.matrix);
LataFForma.merge(Tapa2Malla.geometry, Tapa2Malla.matrix);

var material = new THREE.MeshNormalMaterial();
var LataMalla = new THREE.Mesh(LataFForma, material);
var escena = new THREE.Scene();
escena.add(LataMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;
camara.position.y = 10;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
