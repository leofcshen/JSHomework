function homework1() {
    //輸出 html
    var str = "<h2>Homework1</h2>";
    str += "<table class='h1_table'>";
    for (var x = 1; x <= 9; x++) {
        str += "<tr>";
        for (var y = 1; y <= 9; y++) {
            if (y * x < 10)//補齊2位
                str += "<td class='h1_td1'>" + y + "&nbsp;x&nbsp;" + x + "&nbsp;=&nbsp;&nbsp;" + y * x + "</td>";
            else
                str += "<td class='h1_td1'>" + y + "&nbsp;x&nbsp;" + x + "&nbsp;=&nbsp;" + y * x + "</td>";
        }
        str += "</tr>";
    }
    str += "</table>";
    str += "<a class='h1_a' id='focus'>放大鏡</a>";
    var ele = document.getElementById("IDsection");
    ele.innerHTML = str;
    //綁定 function
    let td = document.querySelectorAll("td");
    let tdLen = td.length;
    for (let i = 0; i < tdLen; i++) {
        td[i].addEventListener("mouseover", mouseOver);
        td[i].addEventListener("mouseout", mouseOut);
    }
    //滑鼠移入，修改 td 的 class，輸出資料到放大區
    function mouseOver() {        
        this.className = "h1_td2";
        let a = document.getElementById("focus");
        a.innerText = this.innerText.trim();
    }
    //滑鼠移出，回復 td 的 class，回復放大區的資料
    function mouseOut() {
        this.className = "h1_td1";
        let a = document.getElementById("focus");
        a.innerText = "放大鏡";
    }    
}