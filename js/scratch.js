const a = {
    name: "a",
};

let b = {};
function setState(x) {
    console.log(x);
}

setState({ ...a, name: "prathamesh" });
console.log(`a is ${JSON.stringify(a)}`);

// Visualization of how array reference changes when we use slice, filter, map, etc.
function func(arr) {
    let arr2 = [3, 4, 5];
    console.log(arr);
    // arr = arr.slice(0, 2);
    arr = arr2;
    console.log("inside function");
    console.log(arr);
}

let arr = [1, 3, 45, 4, 67, 0];
func(arr);
console.log("outside function");
console.log(arr);
