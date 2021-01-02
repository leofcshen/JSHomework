function homework5() {    
    var str = "<h2>Homework5</h2>";
    str += "<div class= 'h5_div'>"; 
    str += "<label>年</label><select id='idYear' name='year'>";
    for (let i = 2010; i < 2021; i++) {
        str += `<option>${i}</option>`;
    }
    str += "</select>";
    str += "<label>月</label><select id='idMonth' name='month'>";
    for (let i = 1; i < 13; i++) {
        str += `<option>${i}</option>`;
    }
    str += "</select>";
    str += "<label>日</label><select id='idDay' name='day'>";
    for (let i = 1; i < 32; i++) {
        str += `<option>${i}</option>`;
    }
    str += "</select>";
    str += "<h2>請選擇日期</h2>";
    str += "<h2 id='idShow'>日期為：2010/1/1</h2>";
    str += "</div>";
    
    var ele = document.getElementById("IDsection");
    ele.innerHTML = str;
    //binding 年月日欄位改變時的 function
    document.getElementById("idYear").addEventListener("change", changeYear);
    document.getElementById("idMonth").addEventListener("change", changeMonth);
    document.getElementById("idDay").addEventListener("change", changeDay);

    var year = 2010, month = 1, day = 1;
    var lastDate;//存放當月最後一天的完整日期格式
    var dayNumberNew;//存放新的月總天數
    var dayNumberOld = 31;//存放舊的月總天數
    //年欄位改變時
    function changeYear() {
        year = document.getElementById("idYear").value;//取得年欄位
        lastDate = new Date(year, month, 0);//取得該年該月最後一天的完整日期格式
        dayNumberNew = lastDate.getDate(); //取得當月天數        
        dayNumberChange();//新增刪減日的總天數
        show();//show 出所選定的日期
    }
    //月欄位改變時
    function changeMonth() {
        month = document.getElementById("idMonth").value;//取得月欄位
        lastDate = new Date(year, month, 0);//取得該年該月最後日期
        dayNumberNew = lastDate.getDate(); //取得當月天數        
        dayNumberChange();//新增刪減日的總天數
        show();//show 出所選定的日期
    }
    //日欄位改變時
    function changeDay() {
        day = document.getElementById("idDay").value;//取得日欄位
        show();
    }
    //show 出所選定的日期
    function show() {
        document.getElementById("idShow").innerHTML = `日期為：${year}/${month}/${day}`;
    }    
    //當月的總天數改變時，判斷日欄位要新增還是刪減
    function dayNumberChange() {        
        if (dayNumberNew > dayNumberOld)
            addDay();
        else if (dayNumberNew < dayNumberOld)
            deleteDay();        
        dayNumberOld = dayNumberNew;//把舊的總天數用新的總天數取代掉用做下一次判斷
    }    
    //新增 select 的日期
    function addDay() {
        //for (let i = 1; i <= dayNumberNew; i++) {
        //    document.getElementById("idDay").options.add(new Option(i));
        //}
        for (let i = dayNumberOld; i < dayNumberNew; i++)//舊的比新的多幾天就加幾次
            document.getElementById("idDay").options.add(new Option(i + 1));
    }
    //刪減 select 的日期
    function deleteDay() {
        //document.getElementById("idDay").options.length = 0;//刪除全部 select option
        for (let i = 1; i <= dayNumberOld - dayNumberNew; i++)//新的比舊的多幾天就刪幾次
            document.getElementById("idDay").options.remove(dayNumberNew);
    }
}