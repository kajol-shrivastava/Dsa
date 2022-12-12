//
var repeatedCharacter = function(s) {
    let map=new Map()
    let res
    for(let i=0;i<s.length;i++){
        console.log(map)
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1)
            if(map.get(s[i])==2){
                console.log("lk,",s[i])
                res= s[i]
                break;
            }
        }
        else{
            map.set(s[i],1)
        }
    }
    return res
};