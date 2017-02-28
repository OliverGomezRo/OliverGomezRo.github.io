var lataForma = new THREE.CylinderGeometry(5, 5, 20);
var tapaForma = new THREE.CylinderGeometry(4, 5, 2);
tapaForma.translate(0,10,0);

var geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var cylinder = new THREE.Mesh( geometry, material );


var lataMalla = new THREE.Mesh(lataForma);
var tapaMalla = new THREE.Mesh(tapaForma);
var rForma = new THREE.Geometry();
rForma.merge(lataMalla.geometry, lataMalla.matrix);
rForma.merge(tapaMalla.geometry, tapaMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var rMalla = new THREE.Mesh(rForma, material);
var escena = new THREE.Scene();
escena.add(rMalla);
camara.position.z = 40;
var camara = new THREE.PerspectiveCamera();


renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
