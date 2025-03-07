let n = +prompt("Nhập số phần tử của mảng");
let arr1 = [];
let arr2 = [];
if (isNaN(n) || n <= 0){
    console.log("Số phần tử không hợp lệ");
}else {
    let max;
    for (let i = 0; i < n; i++){
        let num = prompt("Nhập số thứ " + (i + 1));
        arr1.push(num);
    }
    for (let i = 0; i < n; i++){
        if (!isNaN(arr1[i])){
            max = arr1[i];
            break;
        }
    }
    arr2.push(max);
    for (let i = 0; i < n; i++){
        if (!isNaN(arr1[i])){
            if (arr1[i] > max){
                max = arr1[i];
            }
        }
    }
    arr2.push(max);
    for (let i = 0; i < n; i++){
        if (!isNaN(arr1[i]) && arr1[i] >= arr2[0] && arr1[i] < max){
            arr2.splice(0, 1, arr1[i]);
        }
    }
    console.log("Số lớn thứ 2 trong mảng là: " + arr2[0]);
}