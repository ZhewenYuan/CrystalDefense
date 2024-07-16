class Enemy extends Phaser.Physics.Arcade.Sprite 
{

    constructor (scene, x ,y) {
        super(scene, x, y, 'enemyAnim');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(0.2);
        this.setCollideWorldBounds(true);
        this.setGravityY(3000);
        this.flipX = true;
    }
    
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
    
}