class Platform {
    constructor(x, y, width, path) {
        this.x = x;
        this.y = y;
        this.w = width;
        this.nodes = [];
        let temp = new Node(this.x - this.w / 2, this.y - 67, true);
        this.leftSide = temp;
        this.nodes.push(temp);
        for (let i = this.x - (this.w / 2) + 10; i <= this.x + (this.w / 2); i+= 10) {
            
            let other = new Node(i, this.y - 67, i === this.x + this.w / 2 || i === this.x - this.w / 2);
            path.add(temp, other);
            temp = other;
            this.nodes.push(temp);
        }
        this.rightSide = temp;
        this.nodes.push(temp);
        
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