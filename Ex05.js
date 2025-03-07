let n = +prompt("Nhập số phần tử của mảng");
let arr = [];
let S = 0;
if (isNaN(n) || n <= 0){
    console.log("Số phần tử không hợp lệ");
}else {
    for (let i = 0; i < n; i++){
        let num = +prompt("Nhập số thứ " + (i + 1));
        arr.push(num);
    }
    for (let i = 0; i < arr.length; i++){
        if (!isNaN(arr[i])){
            S += arr[i];
        }
    }
    if (S === 0){
        console.log("Mảng không có phần tử là số");
    }else {
        console.log("Tổng các phần tử là số:" + S);
    }
}