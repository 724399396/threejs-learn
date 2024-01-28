import {
  BoxGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from "three";

function createMaterial() {
  const textureLoader = new TextureLoader();

  const texture = textureLoader.load("/assets/textures/uv-test-bw.png");

  const materail = new MeshStandardMaterial({ map: texture });

  return materail;
}

function createCube() {
  // create a geometry
  const geometry = new BoxGeometry(2, 2, 2);

  const material = createMaterial();

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = (delta) => {
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
