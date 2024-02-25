let ans = 0;
let n1 = 0;
let n2 = 0;

let add = false;
let mod = false;
let divi = false;
let mul = false;
let min = false;

function display(val) {
    document.getElementById('result').value += val;
    return val;
}

let btnMod = document.getElementById("%");
let btnDivi = document.getElementById("/");
let btnMul = document.getElementById("x");
let btnAddi = document.getElementById("+");
let btnMines = document.getElementById("-");

btnMod.addEventListener("click", e => {
    txt = document.getElementById('result').value;
    if (/^-?\d+(\.\d+)?$/.test(txt)) {
        n1 = parseFloat(txt);

    } else {
        // Extract the last numbers after the '=' sign
        n1 = parseFloat(txt.split('=')[1].trim());
    }

    ans += n1;
    document.getElementById('result').value = '';
    mod = true;
});

btnAddi.addEventListener("click", e => {
    txt = document.getElementById('result').value;
    if (/^-?\d+(\.\d+)?$/.test(txt)) {
        n1 = parseFloat(txt);

    } else {
        // Extract the last numbers after the '=' sign
        n1 = parseFloat(txt.split('=')[1].trim());
    }

    ans += n1;
    document.getElementById('result').value = '';
    add = true;
});

btnMines.addEventListener("click", e => {
    txt = document.getElementById('result').value;
    if (/^-?\d+(\.\d+)?$/.test(txt)) {
        n1 = parseFloat(txt);

    } else {
        // Extract the last numbers after the '=' sign
        n1 = parseFloat(txt.split('=')[1].trim());
    }

    ans += n1;
    document.getElementById('result').value = '';
    min = true;
});

btnDivi.addEventListener("click", e => {
    txt = document.getElementById('result').value;
    if (/^-?\d+(\.\d+)?$/.test(txt)) {
        n1 = parseFloat(txt);

    } else {
        // Extract the last numbers after the '=' sign
        n1 = parseFloat(txt.split('=')[1].trim());
    }

    ans += n1;
    document.getElementById('result').value = '';
    divi = true;
});

btnMul.addEventListener("click", e => {
    txt = document.getElementById('result').value;
    if (/^-?\d+(\.\d+)?$/.test(txt)) {
        n1 = parseFloat(txt);

    } else {
        // Extract the last numbers after the '=' sign
        n1 = parseFloat(txt.split('=')[1].trim());
    }

    ans += n1;
    document.getElementById('result').value = '';
    mul = true;
});

function solve() {
    if (add) {
        let txt = document.getElementById('result').value;
        n2 = parseFloat(txt);
        ans += n2;
        let text = n1 + " + " + n2 + " = " + ans;
        document.getElementById('result').value = text;
        ans = 0;
        add = false;
    }
    else if (min) {
        let txt = document.getElementById('result').value;
        n2 = parseFloat(txt);
        ans -= n2;
        let text = n1 + " - " + n2 + " = " + ans;
        document.getElementById('result').value = text;
        ans = 0;
        min = false;
    }
    else if (divi) {
        let txt = document.getElementById('result').value;
        n2 = parseFloat(txt);
        ans /= n2;
        let text = n1 + " / " + n2 + " = " + ans;
        document.getElementById('result').value = text;
        ans = 0;
        divi = false;
    }
    else if (mul) {
        let txt = document.getElementById('result').value;
        n2 = parseFloat(txt);
        ans *= n2;
        let text = n1 + " x " + n2 + " = " + ans;
        document.getElementById('result').value = text;
        ans = 0;
        mul = false;
    }
    else if (mod) {
        let txt = document.getElementById('result').value;
        n2 = parseFloat(txt);
        ans %= n2;
        let text = n1 + " % " + n2 + " = " + ans;
        document.getElementById('result').value = text;
        ans = 0;
        mul = false;
    }

}

function clearsc() {
    console.log("DDD")
    document.getElementById('result').value = '';
    ans = 0;
    n1 = 0;
    n2 = 0;
    add = false;
    mod = false;
    divi = false;
    mul = false;
    min = false;
    mod = false;

}

function back() {
    let txt = document.getElementById('result');
    txt.value = txt.value.substr(0, txt.value.length - 1);
}