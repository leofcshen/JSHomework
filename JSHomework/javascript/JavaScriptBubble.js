function homework6() {
    var str = "<h2>HomeworkBubble</h2>";
    str += "<div class='h6_div'>";    
    str += "<img id='idimg1' src='images/star.gif' />";
    str += "<div class='h6_div'>";
    str += "<img id='idimg2' src='images/star.gif' />";
    str += "<div class='h6_div'>";
    str += "<img id='idimg3' src='images/star.gif' />";
    str += "<div class='h6_div'>";
    str += "<img id='idimg4' src='images/star.gif' />";
    str += "<div class='h6_div'>";
    str += "<img id='idimg5' src='images/star.gif' />";
    str += "</div>";
    str += "</div>";
    str += "</div>";
    str += "</div>";
    str += "<h2 id='idH2'>尚未評點</h2>";
    str += "<input id='idBtnReset'type ='button' value='重新評點' />";
    str += "</div>";

    var ele = document.getElementById("IDsection");
    ele.innerHTML = str;
}