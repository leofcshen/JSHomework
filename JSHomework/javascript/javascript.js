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
    window.alert("施工中");
    var str = "<h2>Homework2</h2>";
    str += "<form action=\"#\" method=\"get\" enctype=\"multipart / form - data\">";
    str += "<fieldset><legend>表單</legend>";
    str += "<div><label for=\"account1\" class=\"t1\">姓名</label><input type=\"text\" id=\"account1\" name=\"account\" placeholder=\"王建民\" size=\"10\" autocomplete=\"off\" /></div>";
    str += "<div><label for=\"pwd1\" class=\"t1\">密碼</label><input type=\"password\" Id=\"pwd1\" name=\"pwd\" placeholder=\"請輸入密碼\" maxlength=\"6\" /></div>";
    str += "<div><label for=\"date1\" class=\"t1\">日期</label><input type=\"text\" id=\"date1\" name=\"date\" placeholder=\"2020 / 12 / 22\" autocomplete=\"off\" /></div>";
    str += "<div><input type=\"submit\" value=\"送出\" /></div>";
    str += "</fieldset></form>";
    str += "<img style= \"img1\" src=\"images/work.gif\" />";
    var ele = document.getElementById("IDsection");
    ele.innerHTML = str;
}

function homework3() {
    window.alert("施工中");
    var str = "<h2>Homework3</h2>";
    str += "<img src=\"images/work.gif\" />";
    var ele = document.getElementById("IDsection");
    ele.innerHTML = str;
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