//Final Value of Variable After Performing Operations leetcode

var finalValueAfterOperations = function(operations) {
    let x=0
    let res=0
    for(let i=0;i<operations.length;i++){
        if(operations[i]==="++X"||operations[i]==="X++"){
            res=res+1
        }
        else{
            res=res-1
        }
    }
    return res
};

console.log(finalValueAfterOperations(["--X","X++","X++"]))