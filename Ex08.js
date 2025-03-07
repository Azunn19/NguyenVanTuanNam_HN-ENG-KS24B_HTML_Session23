let n = +prompt("Nhập số phần tử của mảng");
let arr = [];
if (isNaN(n) || n <= 0){
    console.log("Số phần tử không hợp lệ");
}else {
    let flag = 0;
    for (let i = 0; i < n; i++){
        let num = +prompt("Nhập số thứ " + (i + 1));
        arr.push(num);
    }
    for (let i = 0; i < n - 1; i++){
        if (arr[i] + arr[i + 1] === arr[i + 2]){
            flag++;
        }
    }
    if (flag === n - 2){
        console.log("Mảng là một dãy số Fibonacci");
    }else {
        console.log("Mảng không phải là dãy số Fibonacci")
    }
}