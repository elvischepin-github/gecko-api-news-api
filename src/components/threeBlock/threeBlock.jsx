import React, { useEffect, useRef } from "react";
import "./threeBlock.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

function ThreeBlock() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scena
    const scene = new THREE.Scene();

    // Loaderis
    const rgbeLoader = new RGBELoader();
    rgbeLoader.load("../src/blender/360view.hdr", function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
      scene.background = texture;
    });

    // Kamera
    const camera = new THREE.PerspectiveCamera(40, 16 / 9, 0.2, 1000);
    camera.position.set(-12, 0, 20);

    // Renderis
    const renderer = new THREE.WebGLRenderer({
      alpha: false,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);

    // Blomas
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.4, // str
      0.4, // rad
      0.8 // thrs
    );

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Perkrovimas po efektu
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
            node.material.envMapIntensity = 1.1;
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });
        scene.add(object);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    // Sviesa
    const topLight = new THREE.DirectionalLight(0xffffff, 10);
    topLight.position.set(0, 30, 20);
    topLight.castShadow = true;
    scene.add(topLight);

    // Ambientas
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      composer.render();
    }
    animate();

    // Cleanupas
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      composer.dispose();
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
