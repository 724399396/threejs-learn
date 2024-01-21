import { createCamera } from "./components/camera";
import { createCube } from "./components/cube";
import { createScene } from "./components/scene";
import { createRenderer } from "./system/render";
import { Resizer } from "./system/Resizer";

let camera = createCamera();
let scene = createScene();
let renderer = createRenderer();

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = createCube();
    scene.add(cube);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    renderer.render(scene, camera);
  }
}

export { World };
