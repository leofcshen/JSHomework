function homework5() {
    //alert("施工中");
    var str = "<h2>Homework5</h2>";
    str += "<div class= 'h5_div'>";    
    str += "<label>年</label><select id ='idYear' name ='year'>";    
    for (let i = 2010; i < 2021; i++) {        
        str += `<option value=${i}>${i}</option>`;        
    }
    str += "</select > ";
    str += "<label>月</label><select  id ='idMonth' name ='month'>";    
    for (let i = 1; i < 13; i++) {
        str += `<option value=${i}>${i}</option>`;
    }
    str += "</select > ";
    str += "<label>日</label><select id ='idDay' name ='day'>";
    for (let i = 1; i < 32; i++) {
        str += `<option value=${i}>${i}</option>`;
    }    
    str += "</select > ";
    str += "<h2>請選擇日期</h2>";
    str += "<h2 id='idShow'>日期為：2010/1/1</h2>";
    str += "</div>";
    var ele = document.getElementById("IDsection");
    ele.innerHTML = str;
    //binding 年月日改變時功能
    document.getElementById('idYear').addEventListener("change", changeYear);
    document.getElementById('idMonth').addEventListener("change",changeMonth);
    document.getElementById('idDay').addEventListener("change", changeDay);

    var lastDay, dayNumberOld=31, dayNumberNew, year=2010, month=1, day=1;

    function changeYear() {//年改變
        year = document.getElementById('idYear').value;//取得年欄位
        lastDay = new Date(year, month, 0);//取得該年該月最後日期
        dayNumberNew = lastDay.getDate();//取得當月天數
        dayNumberChange();
        changeDay();
    }

    function changeMonth() {
        month = document.getElementById('idMonth').value;//取得月欄位
        lastDay = new Date(year, month, 0);//取得該年該月最後日期
        dayNumberNew = lastDay.getDate();//取得當月天數
        dayNumberChange();
        changeDay();
    }
    function changeDay() {
        day = document.getElementById('idDay').value;        
        document.getElementById('idShow').innerHTML = `日期為：${year}/${month}/${day}`;
    }

    function deleteDay() {//刪除多餘日期
        //document.getElementById('idDay').options.length=0;
        console.log("delete");
        for (let i = 1; i <= dayNumberOld - dayNumberNew; i++) {
            document.getElementById('idDay').options.remove(dayNumberNew);            
        }      
    }
    function addDay() {//新增缺少的日期        
        console.log("add");
        for (let i = dayNumberOld; i < dayNumberNew; i++) {
            console.log(i);
            document.getElementById('idDay').options.add(new Option(i+1));
        }
    }

    function dayNumberChange() {
        console.log(dayNumberNew + " " + dayNumberOld);
        if (dayNumberNew > dayNumberOld)
            addDay();
        else if (dayNumberNew < dayNumberOld)
            deleteDay();
        dayNumberOld = dayNumberNew;
    }
}