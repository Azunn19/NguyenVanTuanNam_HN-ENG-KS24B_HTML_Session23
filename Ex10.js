let n = 0;
let arr = [];
let choice;
console.log("MENU");
console.log("1. Nhập số phần tử cần nhập và giá trị các phần tử ");
console.log("2. In ra giá trị các phần tử đang quản lý ");
console.log("3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần");
console.log("4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng ");
console.log("5. In ra các số nguyên tố trong mảng và tính tổng ");
console.log("6. Nhập một số và đếm số lần xuất hiện trong mảng ");
console.log("7. Thêm một phần tử vào vị trí chỉ định ");
console.log("8. Xóa một phần tử theo giá trị ");
console.log("9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần ");
console.log("0. Thoát ");
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
        case 8:{
            if (n === 0){
                console.log("Mảng không có phần tử");
            }else {
                let deleteValue = +prompt("Nhập giá trị cần xóa");
                let flag = 0;
                for (let i = 0; i < n; i++){
                    if (arr[i] === deleteValue){
                        arr.splice(i, 1);
                        flag++;
                        n--;
                        break;
                    }
                }
                if (flag === 0){
                    console.log("Không tìm thấy giá trị cần xóa");
                }else {
                    console.log("Xóa thành công");
                }
            }
            break;
        }
        case 9: {
            if (n === 0){
                console.log("Mảng không có phần tử");
            }else {
                let sortChoice = +prompt("1. Sắp xếp tăng dần\n2. Sắp xếp giảm dần");
                if (sortChoice === 1){
                    for (let i = 0; i < n - 1; i++){
                        for (let j = i + 1; j < n; j++){
                            if (arr[i] > arr[j]){
                                let temp = arr[i];
                                arr[i] = arr[j];
                                arr[j] = temp;
                            }
                        }
                    }
                    console.log("Mảng sau khi sắp xếp tăng dần: " + arr);
                }else if (sortChoice === 2){
                    for (let i = 0; i < n - 1; i++){
                        for (let j = i + 1; j < n; j++){
                            if (arr[i] < arr[j]){
                                let temp = arr[i];
                                arr[i] = arr[j];
                                arr[j] = temp;
                            }
                        }
                    }
                    console.log("Mảng sau khi sắp xếp giảm dần: " + arr);
                }
            }
            break;
        }
        case 0: {
            console.log("Thoát chương trình");
            break;
        }
        default: {
            console.log("Lựa chọn không hợp lệ");
        }
    }
}while (choice !== 0);