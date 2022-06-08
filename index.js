function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    var fn;
    fn=()=>{}
     return fn
}
function returnsAnAnonymousFunction(){ 
    return (function() {
        return ''
    })}