import React, { useEffect, useRef } from "react";

import "./threeBlock.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

function ThreeBlock() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();

    // Environment setup using RGBELoader
    const rgbeLoader = new RGBELoader();
    rgbeLoader.load("../src/blender/360view.hdr", function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
      scene.background = texture;
    });

    // Camera setup
    const camera = new THREE.PerspectiveCamera(40, 16 / 9, 0.2, 1000);
    camera.position.set(-12, -6, 20);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // OrbitControls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load(
      `../src/blender/Gecko coin 2.gltf`,
      function (gltf) {
        const object = gltf.scene;
        object.scale.set(3, 3, 3);
        object.rotation.y = 1.5;

        object.traverse((node) => {
          if (node.isMesh && node.material) {
            node.material.metalness = 1;
            node.material.roughness = 0.2;
          }
        });

        scene.add(object);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    // Lights
    const topLight = new THREE.DirectionalLight(0xffffff, 10);
    topLight.position.set(0, 30, 100);
    topLight.castShadow = true;
    scene.add(topLight);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    // Cleanup function
    return () => {
      // Remove canvas and dispose of renderer
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return (
    <div className="containerTV" id="top">
      <div className="TV">
        <div ref={containerRef} id="container3D"></div>
      </div>
    </div>
  );
}

export default ThreeBlock;
