'use strict'
import '../sass/index.scss'
import * as THREE from 'three'

function main() {
    const sceneElement = document.getElementById('scene')

    const aspect = window.innerWidth / window.innerHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 5)
    let rendered = new THREE.WebGL1Renderer()

    const axes = new THREE.AxesHelper(20)

    scene.add(axes)
    camera.position.z = 3


    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({
        color: '#44aa88',
        wireframe: true
    })

    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    const sphereGeometry = new THREE.SphereGeometry(7, 12, 8)
    const sphereMaterial = new THREE.MeshLambertMaterial({
        color: "#31081F",
        wireframe: true
    })

    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.position.set(10, 2.5, 0)
    scene.add(sphere)

    rendered.setSize(window.innerWidth, window.innerHeight)

    sceneElement.appendChild(rendered.domElement)

    rendered.render(scene, camera)

    function render(time) {
        time *= 0.0005;  // convert time to seconds

        cube.rotation.x = time;
        cube.rotation.y = time;

        rendered.render(scene, camera);

        requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
}

main()




