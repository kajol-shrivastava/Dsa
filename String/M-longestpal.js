var longestPalindrome = function(s) {
    function expand(low,high,str){
        
        while(low>=0&&high<str.length&&str[low]===str[high]){
            low--
            high++
        }
        return str.slice(low+1,high)
    }


    let max=-Infinity,res=""
    for(let i=0;i<s.length;i++){
     let curr=expand(i,i,s)
     //console.log(curr)
     let curr_len=curr.length
     if(max<curr_len){//odd
         max=curr_len
         res=curr
     }
     curr=expand(i,i+1,s)//even
     //console.log(curr)
     curr_len=curr.length
     if(max<curr_len){
         max=curr_len
         res=curr
     }
    }
    return res
};

console.log(longestPalindrome("nnbananabt"))