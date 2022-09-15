let str="naman";

let bag1="";

let bag2="";

for(i=0;i<str.length;i++){
bag1+=str[i];
}

for(j=str.length-1;j>=0;j--){
bag2+=str[j];
}

if(bag1==bag2){
console.log("Yes");
}
else{
console.log("No");
}