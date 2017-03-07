var camara= new THREE.OrthographicCamera();

camara.left = window.innerWidth / -2;
camara.right = window.innerWidth / 2;
camara.top = window.innerHegiht / 2;
camara.bottom = window.innerHegiht / -2;
camara.near = 0.1;
camara.far  = 1000;
camara.updateProjectionMatrix();

camara.position.z = 100;
