class Player extends Phaser.Physics.Arcade.Sprite
{
    jumpCount = 0;

    constructor(scene, x, y)
    {
        super(scene, x, y, 'player');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(0.175);
        this.setCollideWorldBounds(true);
        this.setGravityY(3000); //We will set gravity *per object* rather than for the scene!
    }
    jump(event)
    {
        //console.log(player.jumpCou    nt)
        if (player.body.touching.down || player.jumpCount<1)
        {
            player.setVelocityY(-1200);
            player.jumpCount+=1;
            crystal.loseHP();
        }
    }
    /*
    attack(event)
    {
        let sword = 
        
    }
    */
}