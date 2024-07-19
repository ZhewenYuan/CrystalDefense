class EnemySpawner 
{
    TimerEvent;

    totalEnemies
    
    
    constructor(delay,platform,enemies,scene,repeat, path, crystal) {
        this.delay = delay;
        this.timesRun = 0;
        this.enemies = enemies;
        this.scene = scene;
        this.TimerEvent = scene.time.addEvent({
            delay,
            callback: () => this.addEnemy(scene, platform, crystal, path), 
            callbackScope: scene,
            repeat});
        
    }
        
    addEnemy(scene, platform, crystal, path) {
        this.timesRun += 1;
        
        if(totalEnemies>0 && gameState) {
            var x = Phaser.Math.Between(1,platform.nodes.length - 2);

            this.enemies.push(new Enemy(scene, platform.nodes[x].x, platform.y - 67,'enemy', this));
            this.enemies[this.enemies.length - 1].setPath(path, Array.from(path.map.keys()).find(val => val.x === crystal.x && val.y === crystal.targetY));
            totalEnemies--;
            //console.log(totalEnemies)
        }
        
    }
 
    // add timer
    // lis
} 