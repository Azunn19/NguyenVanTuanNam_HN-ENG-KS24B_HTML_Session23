let arr1 = [];
let arr2 = [];
let flag = 0;
for (let i = 0; i < 10; i++){
    let n = +prompt("Nhập số thứ " + (i + 1));
    arr1.push(n);
}
for (let i = 0; i < arr1.length; i++){
    if (isNaN(arr1[i])){
        flag++;
    }
}
if (flag === 0) {
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] >= 10){
            arr2.push(arr1[i]);
        }
    }
    if (arr2.length === 0){
        console.log("Không có phần tử nào lớn hơn 10 trong mảng");
    }else {
        console.log("Các phần tử lớn hơn hoặc bằng 10 trong mảng: " + arr2);
    }
}else {
    console.log("Tất cả các phần tử của mảng phải là số");
}