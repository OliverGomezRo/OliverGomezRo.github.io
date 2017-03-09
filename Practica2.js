var campoVision = 45;
var relacionAspecto = window.innerWidth/ window.innerHeight;
var planoCercano = 1;
var planoLejano = 1000;

var camara= new THREE.PerspectiveCamera(campoVision, relacionAspecto, planoCercano, planoLejano);
camara.position.z = 15;
camara.position.y = 15;
var cubo = new THREE.BoxGeometry(2,2,2);
var cilindro = new THREE.BoxGeometry(1,1,2);
var mallaCubo = new THREE.Mesh(cubo);
var mallaCilindro = new THREE.Mesh(cilindro);

var pers = new THREE.Geometry();
pers.merge(mallaCubo.geometry, mallaCubo.matrix);
pers.merge(mallaCilindro.geometry, mallaCilindro.matrix);

var material = new THREE.MeshNormalMaterial();
var mallaPers= new THREE.Mesh(pers, material);

var escena= new THREE.Scene();
escena.add(mallaPers);

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);

