class Planets {
    constructor(nom, referentiel, masse, volume, vitesse, distanceSoleil, color){
        this.nom = nom;
        this.referentiel = referentiel;
        this.masse = masse;
        this.volume = volume;
        this.ratioTaille = (this.volume*0.1);
        this.vitesse = vitesse;
        this.distanceSoleil = distanceSoleil;
        this.posx = Math.cos(Date.now() * this.vitesse) * distanceSoleil;
        this.posz = Math.sin(Date.now() * this.vitesse) * distanceSoleil;
        this.color = color;
        this.mesh = new THREE.Mesh(new THREE.SphereGeometry(this.ratioTaille, 32, 32), new THREE.MeshBasicMaterial({ color: this.color }));
        this.mesh.position.set(this.posx, 0, this.posz);
    }
    Draw(){referentiel.add(this.mesh);}
}

const planetes=[];
planetes.push(new Planets("Terre", sun, 30, 13, 5, 15, 0x0000));
planetes.push(new Planets("Lune", Terre, 2, 5, 10 ,15 , 0x0000));

export {planetes};