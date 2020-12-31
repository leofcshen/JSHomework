function homework3() {
    //輸出 html
    var str = "<h2>Homework3</h2>";
    str += "<div class ='h3_div'>";
    str += "<img id='idimg1' src='images/star.gif' />";
    str += "<img id='idimg2' src='images/star.gif' />";
    str += "<img id='idimg3' src='images/star.gif' />";
    str += "<img id='idimg4' src='images/star.gif' />";
    str += "<img id='idimg5' src='images/star.gif' />";
    str += "<h2 id='idH2'>尚未評點</h2>";
    str += "<input id='idBtnReset'type ='button' value='重新評點' />";
    str += "</div>";    

    var ele = document.getElementById("IDsection");
    ele.innerHTML = str;
    bind();
    //for loop 開始
    //綁定 function
    function bind() {
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`idimg${i}`).addEventListener("mouseover", mouseover);
            document.getElementById(`idimg${i}`).addEventListener("mouseout", mouseout);
            document.getElementById(`idimg${i}`).addEventListener("click", click);
        }
        document.getElementById("idBtnReset").addEventListener("click", reset);
    }
    //滑鼠移入
    function mouseover() {
        for (let i = 1; i <= this.id.substr(5); i++) {
            document.getElementById(`idimg${i}`).src = "Images/chngstar.gif";
            document.getElementById("idH2").innerHTML = `評點分數：${this.id.substr(5)}`;
        }        
    }
    //滑鼠移出
    function mouseout() {
        for (let i = 1; i <= this.id.substr(5); i++) {
            document.getElementById(`idimg${i}`).src = "Images/star.gif";
        }
        document.getElementById("idH2").innerHTML = `尚未評點`;
    }
    //滑鼠點擊
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
    //重新評點按扭
    function reset() {
        bind();//重新綁定 function
        document.getElementById("idH2").innerHTML = "尚未評點";
        //圖片復原
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`idimg${i}`).src = "Images/star.gif";
        }
    }
    //for loop 結束
}