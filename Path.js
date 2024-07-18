class Path {
    constructor() {
        this.map = new Map();
        this.answer = null;
    }
    
    add(v1, v2) {
        if (!this.map.has(v1)) {
            this.map.set(v1, []);
        }
        this.map.get(v1).push(v2);
        
        if (!this.map.has(v2)) {
            this.map.set(v2, []);
        }
        this.map.get(v2).push(v1);
    }
    
    addDirectional(v1, v2) {
        if (!this.map.has(v1)) {
            this.map.set(v1, []);
        }
        this.map.get(v1).push(v2);
    }
    
    shortestPath(start, end) {
        let explored = [];
        let path = [];
        
        explored.push(start);
        path.push(start);
        this.answer = null;
        
        this.map.get(start).forEach((next) => {
            if (!explored.includes(next)) {
                this.finder(next, end, path, explored);
            }
        });
        
        return this.answer;
    }
    
    finder(current, end, path, explored) {
        explored.push(current);
        let tempPath = [...path];
        tempPath.push(current);
        
        if (this.answer != null) {
            return;
        }
        
        if (current === end) {
            this.answer = tempPath;
            return;
        }
        
        this.map.get(current).forEach((next) => {
            if (!explored.includes(next)) {
                this.finder(next, end, tempPath, explored);
            }
        });
    }
}