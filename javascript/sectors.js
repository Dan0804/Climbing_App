const canvas = document.getElementById('sectors');
const sector_A = canvas.getContext('2d');
const sector_A_text = canvas.getContext('2d');
const sector_B = canvas.getContext('2d');
const sector_B_text = canvas.getContext('2d');
const sector_C = canvas.getContext('2d');
const sector_C_text = canvas.getContext('2d');

function draw(){

    // sector_A.fillStyle = "rgb(200, 0, 0)";
    // sector_A.fillRect(10, 10, 50, 50);
    // sector_A.fillStyle = "rgb(0, 0, 200, 0.5)";
    // sector_A.fillRect(30, 30, 50, 50);
    // sector_A.clearRect(35, 35, 20, 20);

    sector_A.fillStyle= "rgb(200, 5, 5, 0.3)"
    sector_A.beginPath();
    sector_A.moveTo(150, 0);
    sector_A.lineTo(150, 50);
    sector_A.lineTo(100, 50);
    sector_A.lineTo(50, 100);
    sector_A.lineTo(50, 150);
    sector_A.lineTo(0, 150);
    sector_A.lineTo(0, 0);
    sector_A.fill();

    sector_A_text.font = "16px Montserret";
    sector_A_text.fillStyle = "black";
    sector_A_text.textAlign = "center";
    sector_A_text.fillText("Sector A", 50, 50);

    sector_B.fillStyle= "rgb(5, 150, 5, 0.3)"
    sector_B.beginPath();
    sector_B.moveTo(450, 0);
    sector_B.lineTo(450, 100);
    sector_B.lineTo(500, 250);
    sector_B.lineTo(700, 250);
    sector_B.lineTo(700, 0);
    sector_B.fill();

    sector_B_text.font = "16px Montserret";
    sector_B_text.fillStyle = "black";
    sector_B_text.textAlign = "center";
    sector_B_text.fillText("Sector B", 600, 100);

    sector_C.fillStyle= "rgb(5, 5, 200, 0.3)";
    sector_C.beginPath();
    sector_C.lineTo(100, 400);
    sector_C.lineTo(100, 300);
    sector_C.lineTo(450, 300);
    sector_C.lineTo(450, 400);
    sector_C.fill();

    sector_C_text.font = "16px Montserret";
    sector_C_text.fillStyle = "black";
    sector_C_text.textAlign = "center";
    sector_C_text.fillText("Sector B", 275, 350);
}

canvas.addEventListener("click", function (evnet) {
    console.log(Event);
});