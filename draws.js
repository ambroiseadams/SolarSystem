            function drawEllipse(semiMajorAxis, semiMinorAxis, color) {
                const curve = new THREE.EllipseCurve(0, 0, semiMajorAxis, semiMinorAxis, 0, 2 * Math.PI, false, 0);
                const points = curve.getPoints(50);
                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                const material = new THREE.LineBasicMaterial({ color });
                const ellipse = new THREE.Line(geometry, material);
                ellipse.rotation.x = -Math.PI / 2; // On ajoute une rotation autour de l'axe x pour remettre l'ellipse dans le bon plan
                scene.add(ellipse);
            };
            
            function drawDisc(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength){
                const geometry = new THREE.RingGeometry( 3, 5, 32 );
                const material = new THREE.MeshBasicMaterial( { color: 0xaaaaaa, side: THREE.DoubleSide } );
                const mesh = new THREE.Mesh( geometry, material );
                mesh.rotation.x = 1.2;
                saturne.add(mesh);
            };
            function drawDiscs(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength){
                const geometry = new THREE.RingGeometry(32, 45, 32);
                const material = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide } );
                const mesh = new THREE.Mesh( geometry, material );
                mesh.rotation.x = 1.57;
                scene.add(mesh);
            };

export {drawDisc, drawDiscs, drawEllipse};