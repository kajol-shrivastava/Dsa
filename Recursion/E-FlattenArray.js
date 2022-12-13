//flatten an array, capitalise first letter,reverse every word in a string
//n-queens ,rat in maze , and subset

const flatten=function(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res=res.concat(flatten(arr[i]))
        }
        else{
            res.push(arr[i])
        }
    }
    return res
}

//console.log(flatten([1,2,[3,[4]]]))


const capitalise=function(str){
    return  str[0].toUpperCase()+str.slice(1)
}

function cap(str,index){
    if(str.length===index){
        console.log(str)
        return ;
    }


    let x=str[index]
    str[index]=x[0].toUpperCase()+x.slice(1)
    cap(str,index+1)
    
}

//console.log(cap(["hello","world"],0))



