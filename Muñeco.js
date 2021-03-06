var cabezaForma = new THREE.SphereGeometry(4);
var CuerpoForma = new THREE.CylinderGeometry(4,4,10);
cabezaForma.translate(0,5,0);

var cabezaMalla = new THREE.Mesh(cabezaForma);
var cuerpoMalla = new THREE.Mesh(CuerpoForma);
var muñecoForma = new THREE.Geometry();


muñecoForma.merge(cabezaMalla.geometry, cabezaMalla.matrix);
muñecoForma.merge(cuerpoMalla.geometry, cuerpoMalla.matrix);
var material = new THREE.MeshBasicMaterial({color: 0x0f6ad4});
var muñecoMalla = new THREE.Mesh(muñecoForma, material);
var escena = new THREE.Scene();
escena.add(muñecoMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 30;
camara.position.y = 3;
renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
