const table = document.querySelector("table");
const tableAttrs = table.attributes; // Node/Element interface
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

// Function to create a table row
function createRow(data, type = "td") {
    let row = document.createElement("tr");
    data.map((item) => {
        let cell = document.createElement(type);
        cell.innerHTML = item;
        row.appendChild(cell);
    });
    return row;
}

// Data for the table
let headings = ["Sr. No.", "Name", "Country"];
let rowsData = [
    ["1.", "Micheal Clark", "Australia"],
    ["2.", "James Clerk", "Australia"],
];

// Creating the first (header) row
let headerRow = createRow(headings, "th");
thead.appendChild(headerRow);

// Creating the second row
for (const row in rowsData) {
    let dataRow = createRow(row);
    tbody.appendChild(dataRow);
}

for (let i = 0; i < tableAttrs.length; i++) {
    // HTMLTableElement interface: border attribute
    if (tableAttrs[i].nodeName.toLowerCase() === "border") {
        table.border = "2";
    }
    table.summary = "note: increased border";
}
