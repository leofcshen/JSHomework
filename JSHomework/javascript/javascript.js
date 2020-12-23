window.onload(homework1());
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
    str += "<div><label for=\"account1\" class=\"t1\">姓名</label><input type=\"text\" id=\"idName\" name=\"name\" placeholder=\"王建民\" size=\"10\" autocomplete=\"off\" /></div>";
    str += "<div><label class=\"t2\" id=\"idNameChk\">不可空白且至少兩個字元，只能中文。</label></div>";
    str += "<div><label for=\"pwd1\" class=\"t1\">密碼</label><input type=\"text\" Id=\"idPwd\" name=\"pwd\" placeholder=\"請輸入密碼\" /></div>";
    str += "<div><label class=\"t2\" id=\"idPwdChk\">不可空白，至少6個字元且必須包含英文字母、數字、特殊字元[!@#$%^&*]。</label></div>";
    str += "<div><label for=\"date1\" class=\"t1\">日期</label><input type=\"text\" id=\"idDate\" name=\"date\" placeholder=\"2020 / 12 / 22\" autocomplete=\"off\" /></div>";    
    str += "<div><label class=\"t2\" id=\"idDateChk\">不可空白，西元年/月/日，yyyy/MM/dd。</label></div>";
    str += "</fieldset></form>";    

    var ele = document.getElementById("IDsection");
    ele.innerHTML = str;
    
    document.getElementById("idName").addEventListener("blur", chkName, false);
    document.getElementById("idPwd").addEventListener("blur", chkPwd, false);
    document.getElementById("idDate").addEventListener("blur", chkDate, false);

    function chkName() {
        let nameValue = document.getElementById("idName").value;
        var ele = document.getElementById("idNameChk");
                
        let re = /^[\u4e00-\u9fa5]{2,}$/;
        if (re.test(nameValue))
            ele.innerHTML = "<img class=\"imgBool\" src=\"images/true.jpg\">驗證成功"; 
        else
            ele.innerHTML = "<img class=\"imgBool\" src=\"images/false.jpg\">驗證失敗：不可空白且至少兩個字元，只能中文。";        
    }

    function chkPwd() {
        let pwdValue = document.getElementById("idPwd").value;
        var ele = document.getElementById("idPwdChk");

        let re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,}$/;
        if (re.test(pwdValue))
            ele.innerHTML = "<img class=\"imgBool\" src=\"images/true.jpg\">驗證成功";
        else
            ele.innerHTML = "<img class=\"imgBool\" src=\"images/false.jpg\">驗證失敗：不可空白，至少6個字元且必須包含英文字母、數字、特殊字元[!@#$%^&*]。"; 
    }
    function chkDate() {
        let dateValueDay = document.getElementById("idDate").value; //用來存日期值
        let dateValue = document.getElementById("idDate").value;
        let dateValueTime = new Date(document.getElementById("idDate").value);
        var ele = document.getElementById("idDateChk");
        let dateValueGetDate = new Date(document.getElementById("idDate").value).getDate(); //用來存getDate()值 處理跳日問題
        dateValueDay = dateValueDay.substr(dateValueDay.lastIndexOf("/") + 1); //取得存 yyyy/mm/dd 的 dd值

        let re = /^[\d]{1,}\/[\d]{1,2}\/[\d]{1,2}$/;

        if (re.test(dateValue)) { //先判斷格式
            if (dateValueTime != "Invalid Date" && dateValueGetDate == dateValueDay) //再判斷日期
                ele.innerHTML = "<img class=\"imgBool\" src=\"images/true.jpg\">驗證成功 " + dateValueTime;
            else
                ele.innerHTML = "<img class=\"imgBool\" src=\"images/false.jpg\">驗證失敗：不可空白，西元年/月/日，yyyy/MM/dd，該日期需存在。"; 
        }
        else
            ele.innerHTML = "<img class=\"imgBool\" src=\"images/false.jpg\">驗證失敗：格式不正確，不可空白，西元年/月/日，yyyy/MM/dd。"; 
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