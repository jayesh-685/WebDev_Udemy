function capitalize (str) {
    let res = str[0];
    res = res.toUpperCase();
    res += str.slice(1);
    return res;
}

console.log(capitalize("jayesh"));