function homework3() {
    var str = "<h2>Homework3</h2>";
    str += "<div class ='h3_div'>";
    str += "<img id=\"idimg1\" src=\"images/star.gif\" />";
    str += "<img id=\"idimg2\" src=\"images/star.gif\" />";
    str += "<img id=\"idimg3\" src=\"images/star.gif\" />";
    str += "<img id=\"idimg4\" src=\"images/star.gif\" />";
    str += "<img id=\"idimg5\" src=\"images/star.gif\" />";
    str += "<h2 id=\"idH2\">尚未評點</h2>";
    str += "<input id=\"idBtnReset\"type =\"button\" value=\"重新評點\" />";
    str += "</div>";
    str += "<div class ='h3_div'>";
    str += "<figure class='h3_figure'>";
    str += "<img class ='bubble' id=\"idimg11\" src=\"images/star.gif\" />";
    str += "<figure class='h3_figure'>";
    str += "<img class ='bubble' id=\"idimg12\" src=\"images/star.gif\" />";
    str += "<figure class='h3_figure'>";
    str += "<img class ='bubble' id=\"idimg13\" src=\"images/star.gif\" />";
    str += "<figure class='h3_figure'>";
    str += "<img class ='bubble' id=\"idimg14\" src=\"images/star.gif\" />";
    str += "<figure class='h3_figure'>";
    str += "<img class ='bubble' id=\"idimg15\" src=\"images/star.gif\" />";
    str += "</figure>";
    str += "</figure>";
    str += "</figure>";
    str += "</figure>";
    str += "</figure>";
    str += "<h2 id=\"idH22\">尚未評點</h2>";
    str += "<input id=\"idBtnReset2\"type =\"button\" value=\"重新評點\" />";
    
    str += "</div>";

    var ele = document.getElementById("IDsection");
    ele.innerHTML = str;

    bind();

    //binding event
    function bind() {
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`idimg${i}`).addEventListener("mouseover", mouseover);
            document.getElementById(`idimg${i}`).addEventListener("mouseout", mouseout);
            document.getElementById(`idimg${i}`).addEventListener("click", click);
        }
        document.getElementById("idBtnReset").addEventListener("click", reset);
    }

    function mouseover() {
        for (let i = 1; i <= this.id.substr(5); i++) {
            document.getElementById(`idimg${i}`).src = "Images/chngstar.gif";
        }
        console.log(this.id);
    }

    function mouseout() {
        for (let i = 1; i <= this.id.substr(5); i++) {
            document.getElementById(`idimg${i}`).src = "Images/star.gif";
        }
        console.log(this.id);
    }

    function click() {
        document.getElementById("idH2").innerHTML = `評點分數：${this.id.substr(5)}`;
        for (let i = 1; i <= this.id.substr(5); i++) {
            document.getElementById(`idimg${i}`).src = "Images/chngstar.gif";
        }
        //把 binding 的功能註銷
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`idimg${i}`).removeEventListener("mouseover", mouseover);
            document.getElementById(`idimg${i}`).removeEventListener("mouseout", mouseout);
            document.getElementById(`idimg${i}`).removeEventListener("click", click);
        }
    }

    function reset() {
        bind();
        document.getElementById("idH2").innerHTML = "尚未評點";
        //圖片復原
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`idimg${i}`).src = "Images/star.gif";
        }
    }

    let bubble = document.querySelectorAll(".bubble");
    let bubbleLen = bubble.length;
    console.log(bubble);
    console.log(bubbleLen);
    

    document.addEventListener("DOMContentLoaded", function () {
        for (let i = 0; i < bubbleLen; i++) {
            bubble[i].addEventListener("mouseover", mouseover2);
            bubble[i].addEventListener("mouseout", mouseout2);
            bubble[i].addEventListener("click", click2);
        }
    });
    
    function mouseover2() {
        this.src = "Images/chngstar.gif";
    }

    function mouseout2() {
        this.src = "Images/star.gif";
    }

    function click2() {

    }
}