function checkScientificNumber() {
    let input = document.getElementById("inputNumber").value;
    let regex = /^[-+]?\d+(\.\d+)?([eE][-+]?\d+)?$/;
    let resultElement = document.getElementById("result");

    if (regex.test(input)) {
        resultElement.innerText = "Yes, it is a number";
        resultElement.className = "valid"; // Tambah class untuk warna hijau
    } else {
        resultElement.innerText = "No, it is not a number";
        resultElement.className = "invalid"; // Tambah class untuk warna merah
    }
}

function copyText() {
    let input = document.getElementById("inputNumber");
    input.select();
    document.execCommand("copy");
}

function pasteText() {
    navigator.clipboard.readText().then(text => {
        document.getElementById("inputNumber").value = text;
    });
}

function saveFile() {
    let text = document.getElementById("inputNumber").value;
    let blob = new Blob([text], { type: "text/plain" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "scientific_number.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function saveAsFile() {
    let fileName = prompt("Enter file name:", "scientific_number.txt");
    if (fileName) {
        let text = document.getElementById("inputNumber").value;
        let blob = new Blob([text], { type: "text/plain" });
        let a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

function changeBackground(imagePath) {
    document.body.style.backgroundImage = `url('${imagePath}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}

// Set default background
changeBackground("images/unsratbagus.jpg");
