let arr = [];
let choice;
let n = 0;
console.log("MENU");
console.log("1.Nhập số phần tử và giá trị các phần tử");
console.log("2.In ra giá trị các phần tử đang quản lý");
console.log("3.In ra giá trị các phần tử chẵn và tính tổng");
console.log("4.In ra giá trị lớn nhất và nhỏ nhất trong mảng");
console.log("5.In ra các phần tử là số nguyên tố và tính tổng");
console.log("6.Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó");
console.log("7.Thêm một phần từ vào vị trí chỉ định");
console.log("8.Thoát");
do {
    choice = +prompt("Nhập lựa chọn của bạn");
    switch (choice) {
        case 1: {
            n = +prompt("Nhập số phần tử của mảng");
            if (isNaN(n) || n <= 0) {
                console.log("Số phần tử không hợp lệ");
            }else {
                for (let i = 0; i < n; i++) {
                    let num = +prompt("Nhập số thứ " + (i + 1));
                    arr.push(num);
                }
            }
            break;
        }
        case 2: {
            if (n === 0){
                console.log("Mảng không có phần tử");
            }else {
                console.log(arr);
            }
            break;
        }
        case 3: {
            if (n === 0){
                console.log("Mảng không có phần tử");
            }else {
                let evenNumbers = [];
                let S = 0;
                for (let i = 0; i < n; i++){
                    if (arr[i] % 2 === 0){
                        evenNumbers.push(arr[i]);
                        S += arr[i];
                    }
                }
                console.log("Các phần tử chẵn trong mảng là:" + evenNumbers);
                console.log("Tổng các phần tử chẵn trong mảng là: " + S);
            }
            break;
        }
        case 4: {
            if (n === 0){
                console.log("Mảng không có phần tử");
            }else {
                let Min = arr[0];
                let Max = arr[0];
                for (let i = 0; i < n; i++){
                    if (arr[i] > Max){
                        Max = arr[i];
                    }else if (arr[i] < Min){
                     Min = arr[i];
                    }
                }
                console.log("Số lớn nhất trong mảng là: " + Max);
                console.log("Số nhỏ nhất trong mảng là: " + Min);
            }
            break;
        }
        case 5: {
            if (n === 0){
                console.log("Mảng không có phần tử");
            }else {
                let primeNumbers = [];
                let S = 0;
                for (let i = 0; i < n; i++){
                    let count = 0;
                    for (let j = 1; j <= arr[i]; j++){
                        if (arr[i] % j === 0){
                            count++;
                        }
                    }
                    if (count === 2){
                        S += arr[i];
                        primeNumbers.push(arr[i]);
                    }
                }
                console.log("Các số nguyên tố trong mảng là: " + primeNumbers);
                console.log("Tổng các số nguyên tố trong mảng là: " + S);
            }
            break;
        }
        case 6: {
            if (n === 0){
                console.log("Mảng không có phần tử");
            }else {
                let search = +prompt("Nhập số cần tìm");
                let count = 0;
                for (let i = 0; i < n; i++){
                    if (arr[i] === search){
                        count++;
                    }
                }
                console.log("Số " + search + " xuất hiện " + count + " lần trong mảng");
            }
            break;
        }
        case 7: {
            let index = +prompt("Nhập vị trí cần thêm");
            let value = +prompt("Nhập giá trị cần thêm");
            arr.splice(index - 1, 0, value);
            n++;
            break;
        }
        case 8: {
            console.log("Thoát chương trình");
            break;
        }
        default: {
            console.log("Lựa chọn không hợp lệ");
        }
    }
}while (choice !== 8);