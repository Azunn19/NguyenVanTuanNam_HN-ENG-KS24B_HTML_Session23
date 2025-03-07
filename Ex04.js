let n = +prompt("Nhập số phần tử của mảng");
let arr1 = [];
let arr2 = [];
for (let i = 0; i < n; i++){
    let num = prompt("Nhập số thứ " + (i + 1));
    arr1.push(num);
}
for (let i = 0; i < arr1.length; i++){
    if (!isNaN(arr1[i])){
        arr2.push(arr1[i]);
    }
}
if (arr2.length === 0){
    console.log("Mảng không có phần tử là số");
}else {
    console.log("Các phần tử là số:" + arr2);
}