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
        this.currentNode = null;
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
        this.path = path.shortestPath(Array.from(path.map.keys()).find(vert => vert.x === this.x && vert.y === this.y), end);
        this.currentNode = 0;
        this.nextNode = 1;
    }
    
    moveEnemy()
    {
        
        if (Math.abs(this.x - this.path[this.currentNode].x) >= Math.abs(this.path[this.nextNode].x - this.path[this.currentNode].x)) {
            
            
            
            if (this.y != this.path[this.nextNode].y) {
                
                this.setVelocityX(0);
                return;
            }
            
            if (this.nextNode != this.path.length - 1) {
                
                this.currentNode++;
                this.nextNode++;
                
                
                if (this.path[this.currentNode].jump && (Math.abs(this.path[this.nextNode].x - this.path[this.currentNode].x) > 10 || this.y < this.path[this.nextNode.y])) {
                    this.setVelocityY(-1200);
                }
            } else {
                
                this.setVelocityX(0);
                return;
            }
        }
        
        
            if (this.x < this.path[this.nextNode].x) {
                
            this.setVelocityX(400);
            } else {
                this.setVelocityX(-400);
            }
        
        

    

    }
    
    
    
}