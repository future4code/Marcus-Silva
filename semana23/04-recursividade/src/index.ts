// 1
// letra q

const printNumbers = (n: number) => {
    if (n >= 0) {
        printNumbers(n - 1);
        console.log(n);
    }
};

// letra b

const printNumbersToo = (n: number) => {
    if (n >= 0) {
        console.log(n);
        printNumbersToo(n - 1);
    }
};
