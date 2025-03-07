let arr = ["", false, 0, 5, 10, NaN, undefined, null, "Hello"];
for (let i = 0; i < arr.length; i++){
    if (!arr[i]){
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);
