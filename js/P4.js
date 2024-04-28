/* Copyright (c) 2023 Monte Kietpawpan
 * All rights reserved.
 * studyP3R1.js v1.0.1 | May 14, 2023
 */

    
function studyP3R1(){
	var startSemesterDate = new Date("2023-05-18");
   	var date = document.getElementById('datepicker').value;
    	var sDate = date.toString();
    	var datearray = sDate.split("/");
    	var newdatef = datearray[2] + '/' + datearray[0] + '/' + datearray[1];
    	var newDate1 = newdatef.replace("/","-");
    	var newDate2 = newDate1.replace("/","-");
    	var fDate = new Date(newDate2);
	var subjects = "";
	var mathIE = "หนังสือ Math (Unit 10 p.97-144) + สมุด Math สีขาว\n\n";
	var mathTH = "สมุดคณิตศาสตร์สีขาว + แบบฝึกหัดการวัดความยาว + บทที่ 12 เงินและบันทึกรับจ่าย\n\n";    	
	var thaiPrinciples1 = "สมุดภาษาไทยสีขาว (เล่ม 3) + ภาษาพาที + ลำนำ\n\n";
	var thaiPrinciples2 = "สมุดภาษาไทยสีขาว (เล่ม 3) + อ่านคิดเขียน + พาที\n\n";
	var thaiPrinciples3 = "สมุดภาษาไทยสีขาว (เล่ม 3) + (ศุกร์) วรรณคดีลำนำ + ชีท\n\n";
	var thaiWriting = "สมุดภาษาไทยสีชมพู + ส่งแบบฝึกหัดคัดไทย\n\n";
	var scienceTH = "หนังสือวิทย์ เล่ม 2 + แบบฝึกหัดวิทย์ เล่ม 2\n\n";
	var scienceIE = "สมุด ScienceIE สีขาว + My World of Science\n\n";
	var socialTH = "สมุดสังคมสีขาว (เล่ม 2) + หนังสือสังคม-ประวัติศาสตร์\n\n";
	var socialIE = "หนังสือ My World of Social Studies\n\n";
	var funEng = "หนังสือ Power Up + ส่งหนังสือ Handwriting + Worksheet\n\n";
	var devEng = "หนังสือ Power Up\n\n";
    	var health = "สมุดสุขศึกษาสีชมพู + หนังสือสุขศึกษา\n\n";
	var chinese = "สมุดภาษาจีนสีชมพู (เล่ม 9) + หนังสือภาษาจีน + สอบเก็บคะแนน\n\n";
	var art = "สมุดวาดเขียน + สี แปรง ใส่กระเป๋าเล็ก\n\n"
    	var everyday = "สมุดจดการบ้าน + สมุดคัดศัพท์ (เล่ม 10) + สมุดสำรอง (เล่ม 0) + หนังสือ Reading Aloud + หนังสือ My World of Vocabulary + สีไม้\n\n";
    	var health = "สมุดสุขศึกษาสีชมพู + หนังสือสุขศึกษา อาหาร 5 หมู่\n\n";
	var socialTH = "สมุดสังคมสีขาว + หนังสือสังคม\n\n";
	var computer = "สมุดวิทยาการคำนวณ\n\n";
	var history = "หนังสือประวัติศาสตร์ + สมุดสังคม ประวัติศาสตร์\n\n";
	var club = "ชมรมจีน\n\n";
         var scout ="30 มิย ใส่ชุดลูกเสือ เลขกอง 31 ดาว 3 ดวง อกซ้าย\n\n";
	var sport = "ว่ายน้ำ ชุดว่ายน้ำ\n\n";
	var music = "ดนตรีไทย ดินสอ ยางลบ เล่นอังกะลุง\n\n";
	var SGL = "ศุกร์ 30 ลูกเสือ SGL\n\n";
	var engLab ="หนังสือ Power Up + หนังสือ Journal + สมุด Lab Eng สีชมพู\n\n";
	var period8 = "คาบ 8 (เลิก 16.40 น.)";
     
    	var tDay = fDate.getDay();
    	var tMonth = fDate.getMonth();
    	var thYear = fDate.getFullYear()+543;
    	const dayName = ["อาทิตย์", "จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"];
    	const monthName = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ตุลาคม"];
    	var thDate = fDate.getDate();
    	var thDay = dayName[tDay];
    	var thMonth = monthName[tMonth];
	if(fDate < startSemesterDate){subjects ="ปิดเทอม";}
	else if(new Date(sd1)==fDate){subjects=stop1;}
	else if(thDay=="จันทร์" && fDate>=new Date("2023-05-22")){subjects = everyday + computer + engLab + thaiPrinciples1 + chinese + mathIE + socialTH + period8;}
	else if(thDay=="อังคาร" && fDate>=new Date("2023-05-22")){subjects = everyday + devEng + mathTH + funEng + health + scienceTH + thaiPrinciples2 + club + period8;}
	else if(thDay=="พุธ" && fDate>=new Date("2023-05-22")){subjects = everyday + thaiPrinciples2 + scout + scienceIE + mathTH + history + thaiWriting + scienceTH + period8;}
	else if(thDay=="พฤหัสบดี" && fDate>=new Date("2023-05-22")){subjects = everyday + socialIE + sport + devEng + mathTH + scienceTH + scienceIE + thaiPrinciples2 + period8;} 
	else if(thDay=="จันทร์"){subjects = everyday + computer + engLab + thaiPrinciples1 + chinese + mathIE + socialTH;}
	else if(thDay=="อังคาร"){subjects = everyday + devEng + mathTH + funEng + health + scienceTH + thaiPrinciples2 + club;}
	else if(thDay=="พุธ"){subjects = everyday + thaiPrinciples2 + scout + scienceIE + mathTH + history + thaiWriting + scienceTH;}
	else if(thDay=="พฤหัสบดี"){subjects = everyday + socialIE + sport + devEng + mathTH + scienceTH + scienceIE + thaiPrinciples2;}
	else if(thDay=="ศุกร์"){subjects = everyday + thaiPrinciples3 + funEng + mathIE + art + socialIE + mathTH + SGL;}
	else{subjects="หยุดเรียน";}

    document.getElementById("myDate").innerHTML ="วัน" +  thDay + "ที่ "  +  thDate + " " + thMonth + " " + thYear + ":\n==================\n\n"   
+ subjects + "\n\n======\n";
}
 
