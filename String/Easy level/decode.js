let a = "computer"  
let b =[1, 3, 5 , 6 , 7, 4, 2, 8] 
//and output = c1r8o3e2m5t4p6u7

let lp=0,rp=a.length-1
let res=""
while(lp<rp){
    res+=a[lp]+b[lp]
    res+=a[rp]+b[rp]
    lp++
    rp--
}
console.log(res)