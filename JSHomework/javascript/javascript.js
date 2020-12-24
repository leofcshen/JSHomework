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
        
        dateV[1] = (dateV[1].length>1) ? dateV[1] : "0" + dateV[1]; //月份補0輸出用
        dateV[2] = (dateV[2].length > 1) ? dateV[2] : "0" + dateV[2]; //日期補0輸出用
                
        if (re.test(dateValue)) { //先判斷輸入格式
            if (dateValueOldTime != "Invalid Date" && dateValueGetDate == dateValueDay)  //再判斷日期是否合法且沒跳日
                ele.innerHTML = "<img class=\"imgBool\" src=\"images/true.jpg\">驗證成功 " + dateV[0] + "年" + dateV[1] + "月" + dateV[2]+ "號";
            else
                ele.innerHTML = "<img class=\"imgBool\" src=\"images/false.jpg\">驗證失敗：該日期需存在，不可空白，西元年/月/日，yyyy/MM/dd。"; 
        }
        else
            ele.innerHTML = "<img class=\"imgBool\" src=\"images/false.jpg\">驗證失敗：輸入格式不正確，不可空白，西元年/月/日，yyyy/MM/dd。"; 
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
    //window.alert("施工中");
    var str = "<h2>Homework4</h2>";
    //str += "<img src=\"images/work.gif\" />";
    str += "<div class=\"galleryContainer\">";
    str += "<div class=\"silderShowContainer\">";
    str += "<div id=\"playPauseBtn\"></div>";
    str += "<div class=\"leftArrow\"><span class=\"arrow arrowLeft\"></span></div>";
    str += "<div class=\"rightArrow\"><span class=\"arrow arrowRight\"></span></div>";
    str += "<div class=\"captionTextHolder\">";
    str += "<p class=\"captionText\"></p>";
    str += "</div>";
    str += "<div class=\"imgHolder\">";
    str += "<img src=\"images/1_ValleyBall.jpg\" alt=\"\">";
    str += "<p class=\"captionText\">不會殺人の排球の少年</p>";
    str += "</div>";
    str += "<div class=\"imgHolder\">";
    str += "<img src=\"images/2.jpg\" alt=\"\">";
    str += "<p class=\"captionText\">會殺人の網球の王子</p>";
    str += "</div>";
    str += "<div class=\"imgHolder\">";
    str += "<a href='https://zh.wikipedia.org/wiki/%E5%90%8D%E5%81%B5%E6%8E%A2%E6%9F%AF%E5%8D%97' title=\"測試超連結\"><img src=\"images/3.jpg\" alt=\"\"></a>";
    str += "<p class=\"captionText\">名偵探兼兇手柯南</p>";
    str += "</div>";
    str += "<div class=\"imgHolder\">";
    str += "<img src=\" images/4_kei.jpg\" alt=\"\">";
    str += "<p class=\"captionText\">鬼滅の刃</p>";
    str += "</div>";
    str += "<div class=\"imgHolder\">";
    str += "<img src=\"images/5_Grand_Blue.jpg\" alt=\"\">";
    str += "<p class=\"captionText\">碧藍の海</p>";
    str += "</div>";
    str += "</div>";
    str += "<div id=\"dotsContainer\"></div>";
    str += "</div>";

    
    var ele = document.getElementById("IDsection");
    ele.innerHTML = str;

    var slideIndex; // 儲存當下顯示圖片
    var sildes; //儲存所有圖片
    var dots;
    var captionText;
    var rightArrow = document.querySelector(".rightArrow");
    var leftArrow = document.querySelector(".leftArrow");
    var playPauseBtn = document.getElementById("playPauseBtn");
       

    function initGallery() {

        slideIndex = 0;

        slides = document.getElementsByClassName("imgHolder");
        slides[slideIndex].style.opacity = 1;
        captionText = document.querySelector(".captionTextHolder .captionText");
        captionText.innerHTML = slides[slideIndex].querySelector(
            ".captionText"
        ).innerHTML;
        dots = [];
        dotsContainer = document.getElementById("dotsContainer");
        for (var i = 0; i < slides.length; i++) {
            var dot = document.createElement("span");
            dot.classList.add("dots");
            dot.setAttribute("onclick", "moveSlide(" + i + ")");
            dotsContainer.appendChild(dot);
            dots.push(dot);
        }
        dots[slideIndex].classList.add("active");
    }
    initGallery();

    rightArrow.addEventListener("click", function plusSlides(n) {
        moveSlide(slideIndex + 1);
    });

    leftArrow.addEventListener("click", function plusSlides(n) {
        moveSlide(slideIndex - 1);
    });

    function moveSlide(n) {
        var i, current, next;
        var moveSlideAnimClass = {
            forCurrent: "",
            forNext: ""
        };
        var slideTextAnimClass;
        if (n > slideIndex) {
            //往前
            if (n >= slides.length) {
                //6.7...=0
                n = 0;
            }
            moveSlideAnimClass.forCurrent = "moveLeftCurrentSlide";
            moveSlideAnimClass.forNext = "moveLeftNextSlide";
            slideTextAnimClass = "slideTextFromTop";
        } else if (n < slideIndex) {
            // 上一張
            if (n < 0) {
                //如果小於第一張
                n = slides.length - 1; //n = 5-1 [0,1,2,3,4]

            }
            moveSlideAnimClass.forCurrent = "moveRightCurrentSlide";
            moveSlideAnimClass.forNext = "moveRightNextSlide";
            slideTextAnimClass = "slideTextFromBottom";
        }
        if (n != slideIndex) {
            next = slides[n];
            current = slides[slideIndex];
            for (i = 0; i < slides.length; i++) {
                slides[i].className = "imgHolder";
                slides[i].style.opacity = 0;
                dots[i].classList.remove("active");
            }
            current.classList.add(moveSlideAnimClass.forCurrent);
            next.classList.add(moveSlideAnimClass.forNext);
            dots[n].classList.add("active");
            slideIndex = n;
            captionText.style.display = "none";
            captionText.className = "captionText " + slideTextAnimClass;
            captionText.innerText = slides[n].querySelector(".captionText").innerText;
            captionText.style.display = "block";
        }
    }
    var timer = null;

    function setTimer() {
        timer = setInterval(function () {
            function plusSlides(n) {
                moveSlide(slideIndex + 1);
            }
            plusSlides();
        }, 5000);
    }
    setTimer();

    playPauseBtn.addEventListener("click", function playPauseSlides() {
        var playPauseBtn = document.getElementById("playPauseBtn");
        if (timer == null) {
            setTimer();
            playPauseBtn.style.backgroundPositionY = "0px";
        } else {
            clearInterval(timer);
            timer = null;
            playPauseBtn.style.backgroundPositionY = "-33px";
        }
    });
}

function homework5() {
    alert("施工中");
    var str = "<h2>Homework5</h2>";
    //str += "<div><input type=\"text\" id=\"idName\" name=\"name\" placeholder=\"\" size=\"10\" autocomplete=\"off\" />年</div>";
    str += "<img src=\"images/work.gif\">";
    var ele = document.getElementById("IDsection");
    ele.innerHTML = str;
}