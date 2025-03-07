let arr = [];
let flag = 0;
for (let i = 0; i < 10; i++){
    let n = +prompt("Nhập số thứ " + (i + 1));
    arr.push(n);
}
for (let i = 0; i < arr.length; i++){
    if (isNaN(arr[i])){
        flag++;
    }
}
if (flag === 0) {
    let max = arr[0];
    let maxIndex = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
            maxIndex = i + 1;
        }
    }
    console.log("Phần tử lớn nhất trong mảng là " + max + " ở vị trí " + maxIndex);
}else {
    console.log("Tất cả các phần tử của mảng phải là số");
}