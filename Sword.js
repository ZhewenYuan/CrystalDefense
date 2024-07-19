class Sword extends Phaser.Physics.Arcade.Sprite 
{

    constructor (scene, x ,y) {
        super(scene, x, y, 'sword');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(0.15);
        //this.setCollideWorldBounds(true);
        //this.setGravityY(3000);
        //this.flipX = true;
    }
    
    
}