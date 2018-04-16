"use strict";

var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
var camera = new THREE.OrthographicCamera(-10, 10, -10, 10, -10, 10);

var colors = [0x295863, 0xFEFF8A, 0x8FFAF7, 0xFCA1A1];
renderer.setClearColor(colors[0]);
document.body.appendChild(renderer.domElement);

var material = new THREE.MeshBasicMaterial({ color: colors[1] });
material.wireframe = true;
var width = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
renderer.setSize(width, width);

var vertices = [-1, -1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1].map(function (n, i) {
    if (i % 3 === 1) {
        return n + 1.5;
    } else {
        return n - 0.5;
    }
});

var indices = [0, 1, 2, 0, 1, 3, 0, 2, 3, 1, 2, 3];
// var vertices = [
//     -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
//     -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
// ];

// var indices = [
//     2,1,0,    0,3,2,
//     0,4,7,    7,3,0,
//     0,1,5,    5,4,0,
// ];
var box = new THREE.PolyhedronGeometry(vertices, indices, 8);

var cube = new THREE.Mesh(box, material);
scene.add(cube);

box.rotateX(-0.1);

function render() {
    box.rotateY(0.02);
    // box.rotateZ(0.01);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

render();
