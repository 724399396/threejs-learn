import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { setupModel } from "./setupModel";

async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync("/assets/models/Parrot.glb"),
    loader.loadAsync("/assets/models/Flamingo.glb"),
    loader.loadAsync("/assets/models/Stork.glb"),
  ]);

  console.log("Squaaawk!", parrotData);

  const parrot = setupModel(parrotData);
  parrot.scale.set(0.1, 0.1, 0.1);
  parrot.position.set(0, 0, 2.5);

  const flamingo = setupModel(flamingoData);
  flamingo.scale.set(0.1, 0.1, 0.1);
  flamingo.position.set(7.5, 0, -10);

  const stork = setupModel(storkData);
  stork.scale.set(0.1, 0.1, 0.1);
  stork.position.set(0, -2.5, -10);

  return { parrot, flamingo, stork };
}

export { loadBirds };
