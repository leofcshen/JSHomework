function homework2() {
    //取得今天日期預設輸出到日期欄位
    let dateNow = new Date();
    let dateNowY = dateNow.getFullYear();
    let dateNowM = dateNow.getMonth()+1;//月份是0-11，要加1。
    let dateNowD = dateNow.getDate();
    let dateStr = dateNowY + "/" + dateNowM + "/" + dateNowD + "(今天日期)";//yyyy/mm/dd(今天日期)
    //輸出 html
    var str = "<h2>Homework2</h2>";
    str += "<form action=\"#\" method=\"get\" enctype=\"multipart / form - data\">";
    str += "<fieldset><legend>表單</legend>";
    str += "<div><label for=\"account1\" class=\"t1\">姓名</label><input type=\"text\" id=\"idName\" name=\"name\" placeholder=\"王建民\" size=\"10\" autocomplete=\"off\" /></div>";
    str += "<div><label class=\"t2\" class='h2_NameF' id=\"idNameChk1\"><ul><dl>不可空白</dl><dl>至少兩個字元</dl><dl>只能中文<dl></ul></label></div>";
    str += "<div><label class=\"t2\" class='h2_NameF' id=\"idNameChk\"></label></div>";
    str += "<div><label for=\"pwd1\" class=\"t1\">密碼</label><input type=\"text\" Id=\"idPwd\" name=\"pwd\" placeholder=\"請輸入密碼\" /></div>";
    str += "<div><label class=\"t2\" id=\"idPwdChk1\"><ul><dl>不可空白</dl><dl>至少6個字元</dl><dl>必須包含英文字母、數字、特殊字元[!@#$%^&*]<dl></ul></label></div>";
    str += "<div><label class=\"t2\" id=\"idPwdChk\"></label></div>";
    str += "<div><label for=\"date1\" class=\"t1\">日期</label><input type=\"text\" id=\"idDate\" name=\"date\" placeholder=" + dateStr + " autocomplete=\"off\" /></div>";
    str += "<div><label class=\"t2\" id=\"idDateChk1\"><ul><dl>不可空白</dl><dl>西元年/月/日，yyyy/MM/dd</dl></label></div>";
    str += "<div><label class=\"t2\" id=\"idDateChk\"></label></div>";
    str += "</fieldset></form>";
    var ele = document.getElementById("IDsection");
    ele.innerHTML = str;
    //綁定 function
    document.getElementById("idName").addEventListener("blur", chkName, false);
    document.getElementById("idPwd").addEventListener("blur", chkPwd, false);
    document.getElementById("idDate").addEventListener("blur", chkDate, false);
    //驗證姓名
    function chkName() {
        let nameValue = document.getElementById("idName").value;//取得姓名欄位值
        var ele = document.getElementById("idNameChk");//取得姓名驗證資訊提示欄
        //比對 RegExp
        let re = /^[\u4e00-\u9fa5]{2,}$/; //[中文]{至少兩位}        
        if (re.test(nameValue)) {
            let a = document.getElementById("idNameChk1")
            let b = document.getElementById("idNameChk")
            a.className = "t2 h2_chkT";
            b.className = "t2 h2_chkT";
            ele.innerHTML = "<img class=\"imgBool\" src=\"images/true.jpg\">驗證成功";
        }
        else {
            let a = document.getElementById("idNameChk1")
            let b = document.getElementById("idNameChk")
            a.className = "t2 h2_chkF";
            b.className = "t2 h2_chkF";
            ele.innerHTML = "<img class=\"imgBool\" src=\"images/false.jpg\">驗證失敗：請確認輸入值符合規則。";
        }
    }
    //驗證密碼
    function chkPwd() {
        let pwdValue = document.getElementById("idPwd").value;//取得密碼欄位值
        var ele = document.getElementById("idPwdChk");//取得密碼驗證資訊提示欄
        //比對 RegExp
        let re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;//(?=有英文)(?=有數字)(?=有特殊符號)所有字皆可{至少六位}
        let a = document.getElementById("idPwdChk1")
        let b = document.getElementById("idPwdChk")
        if (re.test(pwdValue)) {            
            a.className = "t2 h2_chkT";
            b.className = "t2 h2_chkT";
            ele.innerHTML = "<img class=\"imgBool\" src=\"images/true.jpg\">驗證成功";
        }
        else {            
            a.className = "t2 h2_chkF";
            b.className = "t2 h2_chkF";
            ele.innerHTML = "<img class=\"imgBool\" src=\"images/false.jpg\">驗證失敗：請確認輸入值符合規則。";
        }            
    }
    //驗證日期
    function chkDate() {
        let dateValueDay = document.getElementById("idDate").value;//取得日期欄位值
        let dateValue = document.getElementById("idDate").value;//存放輸入値
        let dateValueOldTime = new Date(document.getElementById("idDate").value);//用來存 Date() 値
        let dateV = dateValue.split("/");//用來存array年月日做輸出用，dateV[0]：yyyy、dateV[1]：mm、dateV[2]：dd
        let dateValueGetDate = new Date(document.getElementById("idDate").value).getDate();//用來存getDate()值測試是否有潤年跳日
        var ele = document.getElementById("idDateChk");//取得日期驗證資訊提示欄
        //console.log("dateV[2]=" + dateV[2] + ",dateValueGetDate=" + dateValueGetDate);
        //驗證日期資料
        let re = /^[\d]{4}\/[\d]{1,2}\/[\d]{1,2}$/;//[0-9]{4位}/[0-9]{1-2位}/[0-9]{1-2位}
        let a = document.getElementById("idDateChk1")
        let b = document.getElementById("idDateChk")
        if (re.test(dateValue)) {//先判斷輸入格式
            if (dateValueOldTime != "Invalid Date" && dateValueGetDate == dateV[2]) {//再測試日期是否合法且getDate() 沒有潤年跳日
                dateV[1] = (dateV[1].length > 1) ? dateV[1] : "0" + dateV[1];//mm補齊2位做輸出用
                dateV[2] = (dateV[2].length > 1) ? dateV[2] : "0" + dateV[2];//dd補齊2位做輸出用
                a.className = "t2 h2_chkT";
                b.className = "t2 h2_chkT";
                ele.innerHTML = "<img class=\"imgBool\" src=\"images/true.jpg\">驗證成功 " + dateV[0] + "年" + dateV[1] + "月" + dateV[2] + "號";
            }
            else {//日期錯誤
                a.className = "t2 h2_chkF";
                b.className = "t2 h2_chkF";
                ele.innerHTML = "<img class=\"imgBool\" src=\"images/false.jpg\">驗證失敗：該日期不存在。";
            }
        }
        else {//格式錯誤            
            a.className = "t2 h2_chkF";
            b.className = "t2 h2_chkF";
            ele.innerHTML = "<img class=\"imgBool\" src=\"images/false.jpg\">驗證失敗：輸入格式不正確，請確認輸入值符合規則。";
        }            
    }
}