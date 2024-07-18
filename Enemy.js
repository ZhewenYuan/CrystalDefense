class Enemy extends Phaser.Physics.Arcade.Sprite 
{

    constructor (scene, x ,y, Sprite) {
        super(scene, x, y, Sprite);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(0.175);
        this.setCollideWorldBounds(false);   

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
    
    moveEnemy(crystal)
    {
        if (this.x < crystal.x)
        {
            this.setVelocityX(400);
            this.flipX = true;
        }
        else if (this.x > crystal.x)
        {
            this.setVelocityX(-400);
            this.flipX = false;
        }
    }
    
    
    
}