class Enemy extends Phaser.Physics.Arcade.Sprite 
{

    constructor (scene, x ,y, Sprite) {
        super(scene, x, y, Sprite);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(4);
        this.setCollideWorldBounds(true);
        this.setGravityY(3000);
        this.flipX = true;
        this.path = null;
    }
/*  
    enemyWalk(event){
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('enemyAnim', {
                start: 0,
                end: 5,
                zeroPad: 2,
                prefix: 'lavaMonster_walking',
                suffix: '.png'
            }),
            frameRate: 8,
            repeat: 1
        });
    
    }
*/
    
    setPath(path, end) {
        this.path = path.shortestPath(path.map.keys().find(vert => vert.x === this.x && vert.y === this.y)
    }
    
    moveEnemy(crystal)
    {
        
    }
    
    
    
}