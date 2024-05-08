const input = document.querySelector("#input");
const output = document.querySelector(".result");
const button = document.querySelector(".button");


const toReverse = (string) => {
    let array = Array.from(string);
    array.reverse();
    return array;
};

const isPalindrome = (string) => {
    string = Array.from(string);
    let revString = toReverse(string);
    let flag = true;
    for (let i = 0; i < string.length; i++)
        if (string[i] != revString[i]) flag = false;
    return flag;
};

const isEmpty = (string) => {
    if (string === "") return true;
    return false;
};


button.addEventListener("click", e => {
    e.preventDefault();
    if (isEmpty(input.value)) {
        output.textContent = `Enter the string`;
        return;
    }
    if (isPalindrome(input.value))
        output.textContent = `${input.value} is palindrome string`;
    else output.textContent = `${input.value} is not palindrome string`;
});
