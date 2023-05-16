function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // Ici on paramètre la fenêtre de rendu en fonction de la caméra
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    camera.position.copy(cameraPosition);
    camera.lookAt(cameraTarget);
    window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    sun = new THREE.Mesh(new THREE.SphereGeometry(2.785368, 32, 32), 
     new THREE.MeshBasicMaterial({ color: 0xffff00 })); // On paramètre la taille et la couleur du Soleil
    scene.add(sun); // Et on l'ajoute à la scène
}

function animate() {   // Ici c'est la fonction qui va permettre de faire tourner les planètes et donc de les animer
    requestAnimationFrame(animate);   
    // on bouge la caméra vers la position cible
    camera.position.lerp(cameraTarget.clone().add(cameraPosition), cameraSpeed);
    camera.lookAt(cameraTarget);
    renderer.render(scene, camera);
}

export {init, animate};