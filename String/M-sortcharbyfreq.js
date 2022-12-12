// https://leetcode.com/probl
// https://leetcode.com/problems/string-to-integer-
// https://leetcode.com/problems/longest-palindromic-substring/
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
// https://leetcode.com/problems/count-and-say/



// //hard
// https://leetcode.com/problems/longest-valid-parentheses/
// https://leetcode.com/problems/valid-number/
// https://leetcode.com/problems/word-break-ii/
//https://leetcode.com/problems/minimum-window-substring/


var frequencySort = function(s) {
    let map=new Map()
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1)
        }
        else{
            map.set(s[i],1)
        }
    }
    //console.log(map)
    map=new Map ([...map.entries()].sort((a,b)=>b[1]-a[1]))
   // console.log(map)
    let ans=""
    for(let [key,value] of map){
       for(let i=0;i<value;i++){
           ans=ans+key
       }
    }
    return ans
};

console.log(frequencySort("tree"))