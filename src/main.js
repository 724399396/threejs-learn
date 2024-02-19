import { World } from "./World/World.js";

async function main() {
  // Get a reference to the container element
  const container = document.querySelector("#scene-container");

  // 1. Create an instance of the World app
  const world = new World(container);

  // complete async tasks
  await world.init();

  // 2. Render the scene
  world.start();
  // world.render();
}

main().catch((err) => {
  console.error(err);
});
