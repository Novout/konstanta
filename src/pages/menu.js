import * as THREE from 'three';
import GSAP, { Expo } from 'gsap';
import { MenuOptions, MenuPackage } from './components/menu';

export default () => {
  let scene;
  let camera;
  let renderer;
  let geometry;
  let geometry_minify;
  let loader;
  let cloud;
  let _cloud;
  let _cloudMaterial;
  let mouse;
  let raycaster;
  let canvasVar;
  let colour;
  let material;
  let intersects;
  let tl;
  const _cloudParticles = [];
  const meshArray = [];

  const mounted = () => {
    const cameraCreate = () => {
      camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 1;
      camera.rotation.x = 1.16;
      camera.rotation.y = -0.12;
      camera.rotation.z = 0.57;
    };

    const rendererCreate = () => {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: document.getElementById('canvas')
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      scene.fog = new THREE.FogExp2(0x000000, 0.001);
      renderer.setClearColor(scene.fog.color);
      document.getElementById('base').appendChild(renderer.domElement);
    };

    const loaderSmoke = () => {
      loader = new THREE.TextureLoader();
      loader.load('three/smoke.png', (texture) => {
        _cloud = new THREE.PlaneBufferGeometry(800, 800);
        _cloudMaterial = new THREE.MeshLambertMaterial({
          map: texture,
          transparent: true
        });
        for (let i = 0; i < 60; i++) {
          cloud = new THREE.Mesh(_cloud, _cloudMaterial);
          cloud.position.set(
            Math.random() * 1700 - 500,
            Math.random() * 1000 - 200,
            Math.random() * 1000 - 1000
          );
          cloud.rotation.x = 1.16;
          cloud.rotation.y = -0.12;
          cloud.rotation.z = Math.random() * 360;
          cloud.material.opacity = 0.1;
          _cloudParticles.push(cloud);
          scene.add(cloud);
        }
      });
    };

    const contextResize = () => {
      window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      });
    };

    const createNodes = () => {
      for (let i = -2000; i < 2000; i += 10) {
        material = new THREE.MeshPhysicalMaterial({
          color: 0xcccccc,
          roughness: 1,
          reflectivity: 1,
          clearcoat: 1
        });
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = Math.random() * 1000 - 500;
        mesh.position.y = Math.random() * 1000 - 500;
        mesh.position.z = i;
        meshArray.push(mesh);
        scene.add(mesh);
      }

      for (let i = -2000; i < 2000; i += 10) {
        material = new THREE.MeshPhysicalMaterial({
          color: 0x66bd99,
          roughness: 0,
          reflectivity: 1,
          clearcoat: 1
        });
        let mesh = new THREE.Mesh(geometry_minify, material);
        mesh.position.x = Math.random() * 1000 - 500;
        mesh.position.y = Math.random() * 1000 - 500;
        mesh.position.z = i;
        const _scale = Math.random() * 2 + 0.5;
        mesh.scale.x = _scale;
        mesh.scale.y = _scale;
        mesh.scale.z = _scale;
        meshArray.push(mesh);
        scene.add(mesh);
      }
    };

    const createLight = () => {
      const light = new THREE.AmbientLight(0xffffff);
      light.position.set(0, 0, 0);
      scene.add(light);
      const light2 = new THREE.PointLight(0xdc6a46, 50, 2.0);
      light2.castShadow = true;
      light2.position.set(0, 0, 0);
      light2.shadow.camera.near = 1;
      light2.shadow.camera.far = 60;
      light2.shadow.bias = -0.005;
      scene.add(light2);
      const light3 = new THREE.DirectionalLight(0xffeedd);
      light3.position.set(0, 0, 1);
      scene.add(light3);
      const light4 = new THREE.PointLight(0xff0000, 10, 100, 1.7);
      light4.position.set(200, 300, 200);
      scene.add(light4);
    };

    const onMouseDown = (event) => {
      event.preventDefault();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      intersects = raycaster.intersectObjects(scene.children, true);
      for (let i = 0; i < intersects?.length; i++) {
        if (
          intersects[i].object.geometry.type === 'SphereGeometry' ||
          intersects[i].object.geometry.type === 'IcosahedronGeometry'
        ) {
          tl = new GSAP.timeline({ delay: 0.05 });
          tl.to(intersects[i].object.scale, 1, {
            x: 10,
            y: 10,
            z: 10,
            ease: Expo.easeOut
          });
        }
      }
    };

    const mouseListener = () => {
      window.addEventListener('mousedown', onMouseDown);
    };

    const render = () => {
      _cloudParticles.forEach((p) => {
        p.rotation.z -= 0.002;
      });
      requestAnimationFrame(render);
      renderer.render(scene, camera);
      for (let i = 0; i < meshArray.length; i++) {
        const particle = meshArray[i];
        particle.position.z += 0.5;
        particle.rotation.x += 0.01;
        particle.rotation.y += 0.01;
        if (particle.position.z > 1000) {
          particle.position.z -= 2000;
        }
      }
    };

    const createContext = () => {
      const container = document.createElement('main');
      container.id = 'base';
      container.style.width = '100%';
      container.style.height = '100vh';

      const canvas = document.createElement('canvas');
      canvas.id = 'canvas';

      container.appendChild(canvas);
      document.body.appendChild(container);

      MenuOptions(unmounted);
      MenuPackage();
    };
    createContext();
    scene = new THREE.Scene();
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    canvasVar = document.getElementById('canvas');
    geometry = new THREE.SphereGeometry(0.5, 60, 60);
    geometry_minify = new THREE.IcosahedronGeometry(1, 0);
    cameraCreate();
    rendererCreate();
    loaderSmoke();
    contextResize();
    createNodes();
    createLight();
    mouseListener();
    render();
  };

  const unmounted = () => {
    scene.remove.apply(scene, scene.children);
    document.querySelector('#canvas').remove();
    document.querySelector('#base').remove();
  };

  return [mounted, unmounted];
};
