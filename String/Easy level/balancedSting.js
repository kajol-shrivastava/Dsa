var balancedStringSplit = function(s) {
    let rc=0
    let lc=0
    let res=0
    for(let i=0;i<s.length;i++){
        if(s[i]=="R"){
            rc++
        }
        else{
            lc++
        }
         if(rc==lc)
         res++
    }
    return res
};

console.log(balancedStringSplit("RLRLRL"))