/* Copyright (c) 2023 Monte Kietpawpan
 * All rights reserved.
 * studyP3R1.js v1.0.1 | May 14, 2023
 */

    
function studyP3R1(){
   	var date = document.getElementById('datepicker').value;
    	var sDate = date.toString();
    	var datearray = sDate.split("/");
    	var newdatef = datearray[2] + '/' + datearray[0] + '/' + datearray[1];
    	var newDate1 = newdatef.replace("/","-");
    	var newDate2 = newDate1.replace("/","-");
    	var fDate = new Date(newDate2);

     	var hw1 = "";
	var dd1 = "2023-05-30";

     	var hw2 = "";
	var dd2 = "2023-06-30";

     	var hw3 = "";
	var dd3 = "";

     	var hw4 = "";
	var dd4 = "";

 	if(new Date(dd1) > fDate){hw1="คัดไทย";}
 	else{hw1="ครบกำหนดส่งคัดไทยแล้ว!!";}

	if(new Date(dd2) > fDate){hw2="ท่องอาขยาน";}
 	else{hw2=&#9888; + "ครบกำหนดท่องอาขยาน";}
   
     var toDo = "* " + dd1 + " " + hw1 + "\n" + 
"* " + dd2 + " " + hw2 + "\n" +
dd3 + " " + hw3 + "\n" +
dd4 + " " + hw4 + "\n"; 	


 
    	var tDay = fDate.getDay();
    	var tMonth = fDate.getMonth();
    	var thYear = fDate.getFullYear()+543;
    	const dayName = ["อาทิตย์", "จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"];
    	const monthName = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ตุลาคม"];
    	var thDate = fDate.getDate();
    	var thDay = dayName[tDay];
    	var thMonth = monthName[tMonth];
	var mathIE = "หนังสือ Targeting Mathematics Workbook 3A + สมุด Math IE สีขาว\n\n";
	var mathTH = "สมุดคณิตศาสตร์สีขาว (เล่ม 1) + แบบฝึกหัดคณิตฯ เล่ม 1 (รับเปิดเทอม)\n\n";    	
	var thaiPrinciples = "สมุดภาษาไทยสีขาว (เล่ม 3) + ดรุณศึกษา + วรรณคดีลำนำ + ภาษาพาที\n\n";
	var thaiWriting = "สมุดภาษาไทยสีชมพู (เล่ม 4) + อ่าน คิด เขียน + แบบฝึกหัดคัดไทย + สมุดคัดศัพท์ (เล่ม 10)\n\n";
	var scienceTH = "หนังสือวิทย์ เล่ม 1 + แบบฝึกหัดวิทย์ เล่ม 1\n\n";
	var scienceIE = "สมุด ScienceIE สีชมพู (เล่ม 6) + My World of Science\n\n";
	var socialTH = "สมุดสังคมสีขาว (เล่ม 2) + หนังสือสังคม-ประวัติศาสตร์\n\n";
	var socialIE = "My World of Social\n\n";
	var funEng = "Power Up + สมุด Fun Eng สีชมพู (เล่ม 7 เผื่อใช้)\n\n";
	var devEng = "Value Education + Reading Aloud\n\n";
    	var health = "สมุดสุขศึกษาสีชมพู + หนังสือสุขศึกษา\n\n";
	var chinese = "สมุดภาษาจีนสีชมพู (เล่ม 9) + หนังสือภาษาจีน\n\n";
	var art = "สมุดวาดเขียน + สี แปรง\n\n"
    	var everyday = "สมุดจดการบ้าน + สมุดสำรอง (เล่ม 0)\n\n";
    	var health = "สมุดสุขศึกษาสีชมพู + หนังสือสุขศึกษา\n\n";
	var socialTH = "สมุดสังคมสีขาว (เล่ม 2) + หนังสือสังคม\n\n";
	var computer = "สมุดวิทยาการคำนวณ (เล่ม 8)\n\n";
	var history = "หนังสือประวัติศาสตร์ + สมุดสังคม ประวัติศาสตร์ (เล่ม 2)\n\n";
	var subjects = "";
	if(thDay=="จันทร์"){subjects = everyday + mathIE + socialTH;}
	else if(thDay=="อังคาร"){subjects = everyday + socialIE + socialTH;}
	else if(thDay=="พุธ"){subjects = everyday + funEng + devEng;}
	else if(thDay=="พฤหัสบดี"){subjects = everyday + health + chinese;}
	else if(thDay=="ศุกร์"){subjects = everyday + art + computer;}
	else{subjects="หยุดเรียน";}

    document.getElementById("myDate").innerHTML = 
	"วัน" +  thDay + "ที่ "  +  thDate + " " + thMonth + " " + thYear + ":\n\n" 
+ subjects + "\n\n======\n" + toDo;
}
 
