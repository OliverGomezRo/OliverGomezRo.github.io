var cabezaForma = new THREE.SphereGeometry(2);
cabezaForma.translate(0,1,0);

var cabezaMalla = new THREE.Mesh(cabezaForma);
var muñecoForma = new THREE.Geometry();

muñecoForma.merge(cabezaMalla.geometry, cabezaMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var muñecoMalla = new THREE.Mesh(muñecoForma, material);
var escena = new THREE.Scene();
escena.add(muñecoMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 20;
camara.position.y = 10;
renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
