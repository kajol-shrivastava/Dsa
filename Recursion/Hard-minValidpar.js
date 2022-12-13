/**
 * @param {string} s
 * @return {string[]}
 */
//Remove Invalid Parentheses======leetcode hard
 var removeInvalidParentheses = function(s) {

    //to get min no of removals
    var getMin=function (s){
        let stack=[]
        for(let i=0;i<s.length;i++){
            if(s[i]==="("){
                stack.push(s[i])
            }
            else if (s[i]==")"){
                if(s[i]===")"&&stack[stack.length-1]==="("){
                    stack.pop()
                }
                else{
                    stack.push(s[i])
                }
            }
            else{
                continue
            }
        }
            return stack.length;

    }

    const isValid=function(s){
        let count=0
        for(let i=0;i<s.length;i++){
            if(s[i]=="("){
                count++
            }
            else if(s[i]===")"){
                count--
                if(count<0)
                return false
            }
            else{
                continue;
            }
        }
        return count==0
    }

    let res=[]
    const getResult=function(s,min){
        if(isValid(s)===true){
            if(res.indexOf(s)==-1)
            res.push(s)
            return;
        }

        if(min==0){
            return ;
        }
        for(let i=0;i<s.length;i++){
            let left=s.slice(0,i)
            let right=s.slice(i+1)
            getResult(left+right,min-1)
        }
      }

      getResult(s,getMin(s))
      return res
};

console.log(removeInvalidParentheses("(a)())()"))