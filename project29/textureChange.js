// First, let's create the button and add it to the page
const button = document.createElement('button');
button.textContent = 'Change Texture';
document.body.appendChild(button);

// Next, let's create a function to change the texture of the model
function changeTexture(mesh) {
  // Create the new texture
  const newTexture = new THREE.TextureLoader().load('models/terrarium_bot_rebuildgltf/textures/mesh_0_baseColor.jpeg');

  // Update the 'map' property of the material
  mesh.material.map = newTexture;

  // Don't forget to call needsUpdate to tell Three.js that the material has changed and needs to be re-rendered
  mesh.material.needsUpdate = true;
}

// Now let's set up the scene and load the model
const scene = new THREE.Scene();

const gltfLoader = new THREE.GLTFLoader();
gltfLoader.load('models/terrarium_bot_rebuildgltf/scene.gltf', (gltf) => {
  // Add the model to the scene
  scene.add(gltf.scene);

  // Get the mesh from the model
  const mesh = gltf.scenes[0].children[0];

  // Add an event listener to the button to change the texture when it is clicked
  button.addEventListener('click', () => {
    changeTexture(mesh);
  });
});

