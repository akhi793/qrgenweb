const generateBtn = document.getElementById('generateBtn');
const inputData = document.getElementById('inputData');
const qrcodeContainer = document.getElementById('qrcode');

generateBtn.addEventListener('click', () => {
    const data = inputData.value;

    if (data === '') {
        alert('Please enter text or URL.');
        return;
    }

    // Clear previous QR code if any
    qrcodeContainer.innerHTML = '';

    // Generate QR code
    const qr = new QRCode(qrcodeContainer, {
        text: data,
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
});
