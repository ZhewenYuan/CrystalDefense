class Crystal extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene,x,y,sprite)
    {
        super(scene,x,y,sprite);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(0.225);
        this.setCollideWorldBounds(true);
        this.body.setImmovable(true);
        this.crystalHP = 10;
        this.sprite = sprite;
        this.targetY = y + 33;
    }
    
    loseHP()
    {
        this.crystalHP--;
        console.log(this.crystalHP);
        if (this.crystalHP <= 0 ) 
        {
            this.crystalHP = 0;
            gameOver.setText('Game Over');
            console.log("GAME OVER");
            
            game.destroy();
        }
    }
    addTween(scene, xDist, yDist, time) 
        {
            scene.tweens.add({ targets: this, x: xDist, y: yDist, duration: time, ease: 'Sine.easeInOut', repeat: -1, yoyo: true });
        }
    
    
}