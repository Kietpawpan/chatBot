/* Copyright (c) 2023 Monte Kietpawpan
 * All rights reserved.
 * appointment.js v1.0.0 | May 8, 2023
 */

function appointment(){
 	var name = document.getElementById("userName").value;
	var code = document.getElementById("requestCode").value;
        var date = document.getElementById('datepicker1').value;
        var thTime = document.getElementById('yourTime').value;
        var sDate = date.toString();
        var datearray = sDate.split("/");
        var newdatef = datearray[1] + '/' + datearray[0] + '/' + datearray[2];
        var newDatef = newdatef.replace("/","-");
        var newDate2 = newDatef.replace("/","-");
        var fDate = new Date(newDate2);
        var tDay = fDate.getDay();
        var tMonth = fDate.getMonth();
        var thYear = fDate.getFullYear()+543;
        const dayName = ["อาทิตย์", "จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"];
        const monthName = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ตุลาคม"];
        var thDate = fDate.getDate();
        var thDay = dayName[tDay];
        var thMonth = monthName[tMonth]
  document.getElementById("myDate").innerHTML = 
		"เรียน ผู้อำนวยการศูนย์บริการร่วม ทส." + "\n\nข้าพเจ้า " + name + " มีความประสงค์จะเดินทางมารับข้อมูลข่าวสาร ตามรหัสคำขอ " + code + " ในวัน" +  thDay + "ที่ "  +  thDate + " " + thMonth + " " + thYear + " เวลา " + thTime + " ณ ศูนย์บริการร่วม กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม\n\nจึงเรียนมาเพื่อดำเนินการให้ตามความประสงค์ของข้าพเจ้าด้วย จะขอบคุณมาก\n\nขอแสดงความนับถือ\n" + "\n\n(" + name + ")"

}

function copyForm() {
  const element = document.querySelector('#myDate');
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  window.alert("คุณได้คัดลอกร่างคำขอไว้บน clipboard แล้ว สามารถวางในอีเมล เพื่อส่งต่อไปได้เลยค่ะ");
}

function sendMail() {
 window.open("mailto:servicelinkcenter@mnre.go.th?subject=ขอนัดหมายวันรับข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

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