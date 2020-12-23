function homework1() {
    var str = "";
    str += "<table>";
    for (var x = 1; x <= 9; x++) {
        str += "<tr>";
        for (var y = 1; y <= 9; y++) {
            if (y * x < 10)
                str += "<td>" + y + "&nbsp;x&nbsp;" + x + "&nbsp;=&nbsp;&nbsp;" + y * x + "</td>";
            else
                str += "<td>" + y + "&nbsp;x&nbsp;" + x + "&nbsp;=&nbsp;" + y * x + "</td>";
        }
        str += "</tr>";
    }
    str += "</table>";
    str = "<h2>Homework1</h2>" + str;

    var ele = document.getElementById("IDsection");
    ele.innerHTML = str;    
}

function homework2() {    
    var str = "<h2>Homework2</h2>";
    str += "<form action=\"#\" method=\"get\" enctype=\"multipart / form - data\">";
    str += "<fieldset><legend>表單</legend>";
    str += "<div><label for=\"account1\" class=\"t1\">姓名</label><input type=\"text\" id=\"account1\" name=\"account\" placeholder=\"王建民\" size=\"10\" autocomplete=\"off\" /></div>";
    str += "<div><label class=\"t1\" id=\"id1\">姓名驗証</label></div></br>";
    str += "<div><label for=\"pwd1\" class=\"t1\">密碼</label><input type=\"password\" Id=\"pwd1\" name=\"pwd\" placeholder=\"請輸入密碼\" maxlength=\"6\" /></div>";
    str += "<div><label for=\"date1\" class=\"t1\">日期</label><input type=\"text\" id=\"date1\" name=\"date\" placeholder=\"2020 / 12 / 22\" autocomplete=\"off\" /></div>";
    str += "<div><input type=\"submit\" id=\"IDsubmit1\" value=\"binding\"  /></div>";
    str += "<div><input type=\"submit\" id=\"IDsubmit2\" value=\"onclick\" onclick=\"chkName(); return false;\"/></div>";
    str += "</fieldset></form>";    

    var ele = document.getElementById("IDsection");
    ele.innerHTML = str;

    document.getElementById("IDsubmit1").addEventListener("click", chkName, false);

    function chk() {
        let nameValue = document.getElementById("account1").value;
        var ele = document.getElementById("id1");

        console.log(nameValue);
        let re = /^.{2,}$/;
        if (re.test(nameValue))
            ele.innerHTML = "超過2個字";
        //window.alert("successful");
        else
            ele.innerHTML = "不滿2個字";
        //window.alert("failure");
    }
}

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
        document.getElementById("idH2").innerHTML =`評點分數：${this.id.substr(5)}`;
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

function homework4() {
    window.alert("施工中");
    var str = "<h2>Homework4</h2>";
    str += "<img src=\"images/work.gif\" />";
    var ele = document.getElementById("IDsection");
    ele.innerHTML = str;
}

function homework5() {
    window.alert("施工中");
    var str = "<h2>Homework5</h2>";
    str += "<img src=\"images/work.gif\" />";
    var ele = document.getElementById("IDsection");
    ele.innerHTML = str;
}

function chkName() {
    let nameValue = document.getElementById("account1").value;
    var ele = document.getElementById("id1");
    
    console.log(nameValue);
    let re = /^.{2,}$/;
    if (re.test(nameValue))
        ele.innerHTML = "OK";
        //window.alert("successful");
    else
        ele.innerHTML = "No";
        //window.alert("failure");
}