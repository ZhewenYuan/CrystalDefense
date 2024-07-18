class EnemySpawner 
{
    TimerEvent;

    totalEnemies
    
    
    constructor(delay,platform,enemies,scene,repeat, path, crystal) {
        
        this.TimerEvent = scene.time.addEvent({
            delay,
            callback: this.addEnemy, 
            args :[enemies, platform, crystal, path],
            callbackScope: scene,
            repeat});
        
    }
        
    addEnemy(enemies, platform, crystal, path) {
        
        if(totalEnemies>0) {
            var x = Phaser.Math.Between(1,platform.nodes.length - 2);

            enemies.push(new Enemy(this, platform.nodes[x].x, platform.y - 67,'enemy'));
            enemies[enemies.length - 1].setPath(path, Array.from(path.map.keys()).find(val => val.x === crystal.x && val.y === crystal.y));
            totalEnemies--;
            //console.log(totalEnemies)
        }
        
    }
    // add timer
    // lis
} 