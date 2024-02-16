const a = {
    name: "a",
};

let b = {};
function setState(x) {
    console.log(x);
}

setState({ ...a, name: "prathamesh" });
console.log(`a is ${JSON.stringify(a)}`);
