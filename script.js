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

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Without vertices, an automaton has no foundation; without edges, it has no movement. - Benny Pinontoan",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Vertices are where we start, but edges are the reason we keep moving forward. - Benny Pinontoan",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll"
];

let currentIndex = 0; // Index awal

function changeQuote() {
    const quoteElement = document.getElementById("quote");

    // Fade out (menghilang)
    quoteElement.style.opacity = 0;

    setTimeout(() => {
        quoteElement.innerText = quotes[currentIndex]; // Ganti quote
        quoteElement.style.opacity = 1; // Fade in (muncul kembali)

        // Update index ke quote berikutnya, kembali ke awal jika sudah di akhir
        currentIndex = (currentIndex + 1) % quotes.length;
    }, 500); // Delay 0.5 detik sebelum fade in
}

// Jalankan pertama kali dan atur interval setiap 3 detik
setInterval(changeQuote, 5000);
window.onload = changeQuote; // Tampilkan quote pertama saat halaman dimuat
