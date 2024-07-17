class Platform {
    constructor(x, y, width, path) {
        this.x = x;
        this.y = y;
        this.w = width;
        
        let temp = new Node(this.x - this.w / 2, this.y + 25);
        this.leftSide = temp;
        for (let i = this.x - (this.w / 2) + 10; i <= this.x + (this.width / 2); i+= 10) {
            other = new Node(i, this.y + 25, i === this.x + this.w / 2 || i === this.x - this.w / 2);
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
}