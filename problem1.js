let num=13;
let factor=0;

for(i=0;i<=num;i++){
if(num%i==0){
factor++;
}
}
if(factor==2){
console.log("prime");
}
else{
console.log("Not prime");
}