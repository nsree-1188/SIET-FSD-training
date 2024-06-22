//Q1

function anagram() {
    var a = prompt().toLowerCase().split("").sort().join("");
    var b = prompt().toLowerCase().split("").sort().join("");
    if (a === b && a.length == b.length) {
        console.log("Anagram")
    } else {
        console.log("Anagram")

    }
}
anagram();


//Q2
function rotate() {
    var n = Number(prompt("Enter N"));
    var b = prompt("Enter List");
    var k = Number(prompt("Enter k"));
    var arr = b.split(",")
    k -= 1;
    k = k % n;
    for (i = 0; i < n; i++) {
        if (i < k)
            console.log(arr[n + i - k]);
        else
            console.log(arr[i - k]);
    }
}
rotate();

//Q3
function eve() {
    var n = Number(prompt("Enter N"));
    var b = prompt("Enter the L");
    var arr = b.split(",")
    for (i = 0; i < n; i++) {
        if (arr[i].length % 2 == 0)
            console.log(arr[i]);
    }
}
eve();


//Q4
function rev() {
    var a = (prompt("Enter Number"));
    var re = a.split("").reverse().join("");
    console.log(re);
}
rev();


//Q5
function combi() {
    var a = (prompt("Enter Word:"));
    for (i = 0; i < a.length; i++) {
        for (j = i + 1; j < a.length + 1; j++) {
            console.log(a.slice(i, j));
        }
    }

}
combi();


//Q6
