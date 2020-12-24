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

        let re = /^[\u4e00-\u9fa5]{2,}$/; //[中文]{至少兩位}
        if (re.test(nameValue))
            ele.innerHTML = "<img class=\"imgBool\" src=\"images/true.jpg\">驗證成功";
        else
            ele.innerHTML = "<img class=\"imgBool\" src=\"images/false.jpg\">驗證失敗：不可空白且至少兩個字元，只能中文。";
    }

    function chkPwd() {
        let pwdValue = document.getElementById("idPwd").value;
        var ele = document.getElementById("idPwdChk");

        let re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/; //(?=有英文)(?=有數字)(?=有特殊符號)所有字皆可{至少六位}
        if (re.test(pwdValue))
            ele.innerHTML = "<img class=\"imgBool\" src=\"images/true.jpg\">驗證成功";
        else
            ele.innerHTML = "<img class=\"imgBool\" src=\"images/false.jpg\">驗證失敗：不可空白，至少6個字元且必須包含英文字母、數字、特殊字元[!@#$%^&*]。";
    }
    function chkDate() {
        let dateValueDay = document.getElementById("idDate").value;  //用來存輸入値的日期值
        let dateValue = document.getElementById("idDate").value; //用來存輸入値
        let dateValueOldTime = new Date(document.getElementById("idDate").value); //用來存系統Date()値
        let dateV = dateValue.split("/"); //用來存array年月日        
        let dateValueGetDate = new Date(document.getElementById("idDate").value).getDate(); //用來存getDate()值 處理跳日問題
        var ele = document.getElementById("idDateChk");

        dateValueDay = dateValueDay.substr(dateValueDay.lastIndexOf("/") + 1); //取得輸入值 yyyy/mm/dd 的 dd值，用來跟getDate()值比對

        let re = /^[\d]{4}\/[\d]{1,2}\/[\d]{1,2}$/; // [0-9]{4位}/[0-9]{1-2位}/[0-9]{1-2位}

        dateV[1] = (dateV[1].length > 1) ? dateV[1] : "0" + dateV[1]; //月份補0輸出用
        dateV[2] = (dateV[2].length > 1) ? dateV[2] : "0" + dateV[2]; //日期補0輸出用

        if (re.test(dateValue)) { //先判斷輸入格式
            if (dateValueOldTime != "Invalid Date" && dateValueGetDate == dateValueDay)  //再判斷日期是否合法且沒跳日
                ele.innerHTML = "<img class=\"imgBool\" src=\"images/true.jpg\">驗證成功 " + dateV[0] + "年" + dateV[1] + "月" + dateV[2] + "號";
            else
                ele.innerHTML = "<img class=\"imgBool\" src=\"images/false.jpg\">驗證失敗：該日期需存在，不可空白，西元年/月/日，yyyy/MM/dd。";
        }
        else
            ele.innerHTML = "<img class=\"imgBool\" src=\"images/false.jpg\">驗證失敗：輸入格式不正確，不可空白，西元年/月/日，yyyy/MM/dd。";
    }
}