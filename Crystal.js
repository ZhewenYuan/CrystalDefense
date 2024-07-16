class Crystal extends Phaser.Physics.Arcade.Sprite
{
    crystalHP = 10;
    constructor(scene,x,y)
    {
        super(scene,x,y,'crystal')
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(0.1);
        this.setCollideWorldBounds(true);
        this.body.setImmovable(true);
    }
    
    loseHP(Enemy)
    {
        if (this.scene.physics.overlap(this, Enemy)) // Check for overlap with bad guy 
        {
            this.crystalHP--;
            console.log(this.crystalHP);
            if (this.crystalHP <= 0) 
            {
                this.gameOver();
            }
        }
        
    }
}