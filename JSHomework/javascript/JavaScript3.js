function homework3() {
    var str = "<h2>Homework3</h2>";
    str += "<img id=\"idimg1\" src=\"images/star.gif\" />";
    str += "<img id=\"idimg2\" src=\"images/star.gif\" />";
    str += "<img id=\"idimg3\" src=\"images/star.gif\" />";
    str += "<img id=\"idimg4\" src=\"images/star.gif\" />";
    str += "<img id=\"idimg5\" src=\"images/star.gif\" />";
    str += "<h2 id=\"idH2\">尚未評點</h2>";
    str += "<div><input id=\"idSubmit\"type =\"submit\" value=\"重新評點\" /></div>";

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
        document.getElementById("idSubmit").addEventListener("click", reset);
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
}