
var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(
                     Math.sin( i * 0.2 ) * 10 + 20,
                     ( i - 5 ) * 3 ) );
}

var pataForma = new THREE.CylinderGeometry(1, 1, 1);
esferaForma.translate(0,-26,0);

var pataMalla = new THREE.Mesh(pataForma);
var arbolForma = new THREE.Geometry();
pForma.merge(pataMalla.geometry, pataMalla.matrix);
var material = new THREE.MeshNormalMaterial();
var pMalla = new THREE.Mesh(pForma, material);
var escena = new THREE.Scene();
escena.add(arbolMalla);

var forma = new THREE.LatheGeometry(puntos);

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6);
var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
