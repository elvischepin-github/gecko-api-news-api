import React, { useRef, useEffect } from "react";

import * as THREE from "three";
import { OrbitControls } from "/node_modules/three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "/node_modules/three/examples/jsm/loaders/GLTFLoader.js";

function ThreeElement() {
  const containerRef = useRef(null); // Create a ref to attach Three.js renderer

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    let object;
    let controls;
    let objToRender = "Gecko coin 2";

    const loader = new GLTFLoader();
    loader.load(
      `../src/blender/${objToRender}.gltf`,
      function (gltf) {
        object = gltf.scene;
        object.scale.set(3, 3, 3);
        object.rotation.y = 1.55;

        object.traverse((node) => {
          if (node.isMesh && node.material) {
            node.material.metalness = 1;
            node.material.roughness = 0.2;
          }
        });

        scene.add(object);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        console.log(error);
      }
    );

    // Instantiate renderer and attach to DOM after mounting
    const renderer = new THREE.WebGLRenderer({ alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Set up camera position
    camera.position.z = 25;
    camera.position.y = 5;

    // Lights
    const topLight = new THREE.DirectionalLight(0xffffff, 10);
    topLight.position.set(0, 30, 100);
    topLight.castShadow = true;
    scene.add(topLight);

    // Render scene
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    // Handle window resize
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    animate();

    // Clean up on component unmount
    return () => {
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="container3D"
      style={{ width: "100%", height: "100vh" }}
    ></div>
  );
}

export default ThreeElement;
