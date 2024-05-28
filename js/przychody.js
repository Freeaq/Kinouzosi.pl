function calculateAndDraw() {

    const ticketsSold = parseInt(document.getElementById('ticketsSold').value, 10);
    const averageTicketPrice = parseFloat(document.getElementById('averageTicketPrice').value);
    const percent3DTickets = parseFloat(document.getElementById('percent3DTickets').value);
    const snacksSold = parseInt(document.getElementById('snacksSold').value, 10);
    const averageSnackPrice = parseFloat(document.getElementById('averageSnackPrice').value);


    const incomeFromTickets = ticketsSold * averageTicketPrice;
    const incomeFrom3DTickets = (ticketsSold * (percent3DTickets / 100)) * (averageTicketPrice * 1.5); 
    const incomeFromSnacks = snacksSold * averageSnackPrice;
    const totalIncome = incomeFromTickets + incomeFrom3DTickets + incomeFromSnacks;


    const canvas = document.getElementById('incomeChart');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); 


    function drawBar(x, height, color, label) {
        const y = canvas.height - height - 40; 
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 50, height);
        ctx.fillStyle = '#000';
        ctx.fillText(label, x, canvas.height - 10);
    }


    const maxIncome = Math.max(incomeFromTickets, incomeFrom3DTickets, incomeFromSnacks, totalIncome);
    const scale = 300 / maxIncome; 


    drawBar(100, incomeFromTickets * scale, 'blue', 'Bilety');
    drawBar(200, incomeFrom3DTickets * scale, 'green', 'Bilety za 3D');
    drawBar(300, incomeFromSnacks * scale, 'red', 'Przekąski');
    drawBar(400, totalIncome * scale, 'purple', 'Całkowity');


    ctx.fillText('Rodzaje przychodów', canvas.width / 2 - 30, canvas.height);
    ctx.save();
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillText('Przychody ($)', -canvas.height / 2, 20);
    ctx.restore();
}