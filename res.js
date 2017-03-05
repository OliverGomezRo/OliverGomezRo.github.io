var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(
                     Math.sin( i * 0.2 ) * 10 + 20,
                     ( i - 5 ) * 3 ) );
}
var esferaForma = new THREE.SphereGeometry(.65);
esferaForma.translate(0,1,0);

var troncoMalla = new THREE.Mesh(troncoForma);
var arbolForma = new THREE.Geometry();
arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);

var arbolMalla = new THREE.Mesh(arbolForma, material);

var forma = new THREE.LatheGeometry(puntos);

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateY( Math.PI/6);
var escena = new THREE.Scene();
escena.add(malla);
escena.add(arbolMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
