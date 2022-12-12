//Sorting the Sentence  leetcode
var sortSentence = function(s) {
    let sent=s.split(" ")
    let res=[]
    for(let i=0;i<sent.length;i++){
        let c=sent[i]
        let no=c.slice(-1)
        let rest=c.slice(0,c.length-1)
        res[no-1]=rest
       // console.log(no,rest,res)
    }

    return res.join(" ")
    
};

console.log(sortSentence("is2 sentence4 This1 a3"))