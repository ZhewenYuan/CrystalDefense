class Crystal extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene,x,y,sprite)
    {
        super(scene,x,y,sprite)
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(2);
        this.setCollideWorldBounds(true);
        this.body.setImmovable(true);
        this.crystalHP = 10;
        this.sprite = sprite;
    }
    
    loseHP()
    {
        this.crystalHP--;
        console.log(this.crystalHP);
        if (this.crystalHP <= 0) 
        {
            console.log("GAME OVER")
            //this.gameOver();
        }
        
    }   
}