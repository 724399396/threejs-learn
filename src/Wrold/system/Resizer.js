class Resizer {
  constructor(container, camera, renderer) {
    camera.aspect = container.clientWidth / container.clientHeight;

    renderer.setSize(container.clientWidth, container.clientHeight);

    renderer.setPixelRatio(window.devicePixelRatio);
  }
}

export { Resizer };
