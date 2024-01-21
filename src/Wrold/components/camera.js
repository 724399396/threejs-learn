import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio
    0.1, // nearr clipping plane
    100, // far clipping plane
  );

  camera.position.set(0, 0, 10);

  return camera;
}

export { createCamera };
