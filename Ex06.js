let arr = ["", false, 0, 5, 10, NaN, undefined, null, "Hello"];
for (let i = 0; i < arr.length; i++){
    if (arr[i] === false || arr[i] === 0 || arr[i] === "" || isNaN(arr[i]) || arr[i] === undefined || arr[i] === null){
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);