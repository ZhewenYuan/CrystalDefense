class EnemySpawner 
{
    TimerEvent;
    totalEnemies
    constructor(delay,xLow,xHigh,y,enemies,scene,repeat)
    {
        this.TimerEvent = scene.time.addEvent({
            delay,
            callback: this.addEnemy, 
            args :[xLow, xHigh,y,enemies],
            callbackScope: scene,
            repeat});
    }
        
    addEnemy(lowerRange,upperRange, y,enemies)
    {
        if(totalEnemies>0)
        {
            var x = Phaser.Math.Between(lowerRange,upperRange);

            enemies.push(new Enemy(this, x, y,'enemy'));
            totalEnemies--;
            //console.log(totalEnemies)
        }
        
    }
    // add timer
    // lis
} 