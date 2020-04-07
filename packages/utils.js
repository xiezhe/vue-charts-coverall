class PubSubscribe{
    constructor(){
        this.subscribers = {}
    }
    bindSubscribe(key, fn){
        if (!Object.prototype.hasOwnProperty.call(this.subscribers, key)){
            this.subscribers[key] = [];
        }
        this.subscribers[type].push(fn);
    }
    unBindSubscribe(key, fn){

    }
    publish(){

    }
}
export judgeTypeByObject = (value)=>{
    Object.prototype.toString(value)
}
