class Platform {
    constructor(x, y, width, path) {
        this.x = x;
        this.y = y;
        this.w = width;
        
        let temp = new Node(this.x - this.w / 2, this.y - 69, true);
        this.leftSide = temp;
        
        for (let i = this.x - (this.w / 2) + 10; i <= this.x + (this.w / 2); i+= 10) {
            
            let other = new Node(i, this.y - 69, i === this.x + this.w / 2 || i === this.x - this.w / 2);
            path.add(temp, other);
            temp = other;
        }
        this.rightSide = temp;
    }
    
    connectLeft(other, path) {
        path.add(other, this.leftSide);
    }
    
    connectRight(other, path) {
        path.add(other, this.rightSide);
    }
    
    oneWayRight(destination, path) {
        path.addDirectional(this.rightSide, destination);
    }
    
    oneWayLeft(destination, path) {
        path.addDirectional(this.leftSide, destination);
    }
}