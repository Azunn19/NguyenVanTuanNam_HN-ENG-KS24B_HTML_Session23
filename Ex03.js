let n = +prompt("Nhập số phần tử của mảng");
if (isNaN(n) || n <= 0){
    console.log("Số phần tử không hợp lệ");
}else {
    let arr = [];
    let flag = 0;
    for (let i = 0; i < n; i++){
        let num = +prompt("Nhập số thứ " + (i + 1));
        arr.push(num);
    }
    for (let i = 0; i < arr.length; i++){
        if (isNaN(arr[i])){
            flag++;
        }
    }
    if (flag === 0) {
        let a = 0;
        for (let i = 0; i < arr.length; i++){
            if (arr[i] < 0){
                a++;
            }
        }
        console.log("Số phần tử âm trong mảng là: " + a);
    }else {
        console.log("Mảng không hợp lệ");
    }
}