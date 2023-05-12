/* Copyright (c) 2023 Monte Kietpawpan
 * All rights reserved.
 * complaint.js v1.0.0 | May 12, 2023
 */

function complaint(){
 	   var name = document.getElementById("userName").value;
	   var code = document.getElementById("NID").value;
        var date = document.getElementById('datepicker').value;
        var thTime = document.getElementById('yourTime').value;
        var cText =  document.getElementById('complaint').value;
        var sDate = date.toString();
        var datearray = sDate.split("/");
        var newdatef = datearray[2] + '/' + datearray[0] + '/' + datearray[1];
        var newDate1 = newdatef.replace("/","-");
        var newDate2 = newDate1.replace("/","-");
        var fDate = new Date(newDate2);
        var tDay = fDate.getDay();
        var tMonth = fDate.getMonth();
        var thYear = fDate.getFullYear()+543;
        const dayName = ["อาทิตย์", "จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"];
        const monthName = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ตุลาคม"];
        var thDate = fDate.getDate();
        var thDay = dayName[tDay];
        var thMonth = monthName[tMonth]
	if(code=="" || name=="" || date=="" || thTime==""){
		window.alert("กรุณากรอกข้อมูลให้ครบถ้วนก่อนค่ะ");}
         else{document.getElementById("myDate").innerHTML = 
		"เรียน ปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม" + "\n\nข้าพเจ้า ขอร้องเรียนการให้บริการของศูนย์ราชการสะดวก สป.ทส. เมื่อวัน" +  thDay + "ที่ "  +  thDate + " " + thMonth + " " + thYear + " เวลา " + thTime + cText + "\n\nจึงเรียนมาเพื่อโปรดทราบ\n\nขอแสดงความนับถือ" + "\n\n" + name+" ผู้ร้อง\nหมายเลขบัตรประชาชน\n" + code;}
  

}

function copyForm() {
  const element = document.querySelector('#myDate');
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  window.alert("คุณได้คัดลอกร่างคำขอไว้บน clipboard แล้ว สามารถวางในอีเมล เพื่อส่งต่อไปได้เลยค่ะ");  
}


function copyEmail() {
  const element = document.querySelector('#orgEmail');
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  window.alert("คุณได้คัดลอกอีเมล servicelinkcenter@mnre.go.th ไว้บน clipboard แล้ว สามารถวางในอีเมล เพื่อส่งต่อไปได้เลยค่ะ");
}

function clearText(){
  document.getElementById('myDate').value = "";
}
