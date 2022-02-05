import canvas from "center_page.js";
import ctx from "center_page.js";
import text from "center_page.js";

var sector_A = [
    {x:0, y:0},
    {x:200, y:0},
    {x:200, y:40},
    {x:150, y:40},
    {x:60, y:70},
    {x:60, y:150},
    {x:0, y:150},
    {x:0, y:0}
];

var sector_B = [
    {x:200, y:0},
    {x:500, y:0},
    {x:500, y:40},
    {x:450, y:40},
    {x:410, y:55},
    {x:350, y:55},
    {x:310, y:40},
    {x:200, y:40},
    {x:200, y:0},
];

function areaSimple(){
    ctx.beginPath();
    sector_A.forEach( (element_A,idx)=> {
        if(idx == 0){
            ctx.moveTo(element_A.x,element_A.y)
        } else {
            ctx.lineTo(element_A.x,element_A.y)
        }
    });
    ctx.fillStyle = "#75FFCA";
    ctx.fill();
    text.font = "20px Montserret";
    text.fillStyle = "#000000";
    text.fillText("Sector A", 15, 40);

    ctx.beginPath();
    sector_B.forEach( (element_B,idx)=> {
        if(idx == 0){
            ctx.moveTo(element_B.x,element_B.y)
        } else {
            ctx.lineTo(element_B.x,element_B.y)
        }
    });
    ctx.fillStyle = "#46FFFF";
    ctx.fill();
    text.font = "20px Montserret";
    text.fillStyle = "#000000";
    text.fillText("Sector B", 350, 30);
}

areaSimple()

canvas.addEventListener('click', function (event) {  //클릭 이벤트
    const clientRect = canvas.getBoundingClientRect();
    const relativeTop = clientRect.top;
    const relativeLeft = clientRect.left;
    var x1 = event.clientX - relativeLeft;
    var y1 = event.clientY - relativeTop;
    var result_A = isInside_A({x:x1, y:y1});
    var result_B = isInside_B({x:x1, y:y1});
    console.log(x1, y1, result_A, result_B);
    
    if (result_A) {
        var title_A = document.getElementsByClassName("sector_title")[0];
        //document.getElementById("sector_img").src = "./Users/jodaehyeon/Desktop/Sport_Climbing_App/image_file/Sector-A-image.png";
        title_A.innerText = "Sector A";
        document.getElementById("change_img").setAttribute("src", "/Users/jodaehyeon/Desktop/Sport_Climbing_App/image_file/Sector-A-image.png");
        document.getElementById("href_img").setAttribute("href", "/Users/jodaehyeon/Desktop/Sport_Climbing_App/javascript/sector_A_page.html");
    }

    if (result_B) {
        var title_B = document.getElementsByClassName("sector_title")[0];
        //document.getElementById("sector_img").src = "./Users/jodaehyeon/Desktop/Sport_Climbing_App/image_file/Sector-B-image.png";
        title_B.innerText = "Sector B";
        document.getElementById("change_img").setAttribute("src", "/Users/jodaehyeon/Desktop/Sport_Climbing_App/image_file/Sector-B-image.png");
    }
});

function isInside_A(event) {
    //crosses는 점과 오른쪽 반직선과 다각형과의 교점의 개수
    var cross = 0;
    for (var i = 0; i < sector_A.length; i++) {
        var pos = sector_A[i];
        var j = (i + 1) % sector_A.length;  //교점구할 j값, 1,2,3..순으로 인덱스가 증가하다 마지막은 초기값 0이 나와 비교를 함.
        var otherPos = sector_A[j];
        if ((pos.y > event.y) != (otherPos.y > event.y)) {  //점 event가 선분에 있는지 여부
            //visit는 점 event를 지나는 수평선과 선분(pos, otherPos)의 교점
            var visit = (otherPos.x - pos.x) * (event.y - pos.y) / (otherPos.y - pos.y) + pos.x; 
            //atX가 오른쪽 반직선과의 교점이 맞으면 교점의 개수를 증가시킨다.
            if (event.x < visit){
                cross++;
            }
        }
    }
    return cross % 2 > 0;  //홀짝 후 리턴
}

function isInside_B(event) {
    var cross = 0;
    for (var i = 0; i < sector_B.length; i++) {
        var pos = sector_B[i];
        var j = (i + 1) % sector_B.length;
        var otherPos = sector_B[j];
        if ((pos.y > event.y) != (otherPos.y > event.y)) {
            var visit = (otherPos.x - pos.x) * (event.y - pos.y) / (otherPos.y - pos.y) + pos.x; 
            if (event.x < visit){
                cross++;
            }
        }
    }
    return cross % 2 > 0;
}

// 페이지 이동 함수
// function goReplace(sector_page) {
//     location.replace(sector_page)
    //goReplace("https://www.naver.com/")
// }
