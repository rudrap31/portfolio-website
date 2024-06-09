import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//typing animation

var typed = new Typed(".typing",{
    strings : ["Software Engineer", "ubc student", "travel enthusiast"],
    typeSpeed : 150,
    backSpeed : 125,
    loop : true,
});  


//threejs
var container = document.getElementById('container');
var renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const ambientLight = new THREE.AmbientLight(0xffffff, 7);
scene.add(ambientLight);




const loader = new GLTFLoader();

loader.load( 'space-3dmodel/scene.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {
	console.error( error );

} );
scene.rotation.y = -1.1;
camera.position.z = 3.2;
camera.position.y = 0.3;




function animate() {

	requestAnimationFrame( animate );
    scene.rotation.y += 0.0025;
	renderer.render( scene, camera );
}

animate();

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}); 