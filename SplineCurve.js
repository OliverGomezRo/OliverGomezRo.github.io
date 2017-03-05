var curve = new THREE.SplineCurve( [
	new THREE.Vector2( -10, 0 ),
	new THREE.Vector2( -5, 5 ),
	new THREE.Vector2( 0, 0 ),
	new THREE.Vector2( 5, -5 ),
	new THREE.Vector2( 10, 0 )
] );

var path = new THREE.Path( curve.getPoints( 50 ) );

var geometry = path.createPointsGeometry( 50 );
var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );

// Create the final object to add to the scene
var splineObject = new THREE.Line( geometry, material );

var escena = new THREE.Scene();
escena.add(splineObject);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 20;
camara.position.y = 3;
renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
