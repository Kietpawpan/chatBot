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
	var mathIE = "หนังสือ Targeting Mathematics Workbook 3A (แยกเป็นบท ๆ) + สมุด Math IE สีขาว ส่งครู\n\n";
	var mathTH = "สมุดคณิตศาสตร์สีขาว (เล่ม 1) + แบบฝึกหัดคณิตฯ เล่ม 1 (แยกเป็นบท ๆ)\n\n";    	
	var thaiPrinciples1 = "สมุดภาษาไทยสีขาว (เล่ม 3) + ภาษาพาที + ชีทไตรยางศ์ (ส่งครู)\n\n";
	var thaiPrinciples2 = "สมุดภาษาไทยสีขาว (เล่ม 3) + ชีท\n\n";
	var thaiPrinciples3 = "สมุดภาษาไทยสีขาว (เล่ม 3) + วรรณคดีลำนำ + ชีท\n\n";
	var thaiWriting = "สมุดภาษาไทยสีชมพู (เล่ม 4) + อ่าน คิด เขียน + แบบฝึกหัดคัดไทย + หนังสือดรุณศึกษา\n\n";
	var scienceTH = "หนังสือวิทย์ เล่ม 1 + แบบฝึกหัดวิทย์ เล่ม 1\n\n";
	var scienceIE = "สมุด ScienceIE สีขาว (เล่ม 6) + My World of Science (รอแจก)\n\n";
	var socialTH = "สมุดสังคมสีขาว (เล่ม 2) + หนังสือสังคม-ประวัติศาสตร์\n\n";
	var socialIE = "หนังสือ My World of Social Studies (รอแจก)\n\n";
	var funEng = "หนังสือ Power Up + หนังสือ Fear at the Festival + หนังสือ Handwriting + Worksheet\n\n";
	var devEng = "หนังสือ Value Education (รอแจก)+ หนังสือ	Power Up\n\n";
    	var health = "สมุดสุขศึกษาสีชมพู + หนังสือสุขศึกษา\n\n";
	var chinese = "สมุดภาษาจีนสีชมพู (เล่ม 9) + หนังสือภาษาจีน\n\n";
	var art = "สมุดวาดเขียน + สี แปรง\n\n"
    	var everyday = "สมุดจดการบ้าน + สมุดคัดศัพท์ (เล่ม 10) + สมุดสำรอง (เล่ม 0) + หนังสือ Reading Aloud + หนังสือ My World of Vocabulary + สีไม้\n\n";
    	var health = "สมุดสุขศึกษาสีชมพู + หนังสือสุขศึกษา\n\n";
	var socialTH = "สมุดสังคมสีขาว (เล่ม 2) + หนังสือสังคม\n\n";
	var computer = "สมุดวิทยาการคำนวณ (เล่ม 8)\n\n";
	var history = "หนังสือประวัติศาสตร์ + สมุดสังคม ประวัติศาสตร์ (เล่ม 2)\n\n";
	var club = "ชมรม\n\n";
     var scout ="ชุดลูกเสือ\n\n";
	var sport = "พละบก รองเท้าผ้าใบ\n\n";
	var music = "ดนตรี เมโลเดียน ร้องเพลง\n\n";
	var SGL = "SGL\n\n";
	var engLab ="หนังสือ Power Up + หนังสือ Journal + สมุด Lab Eng สีชมพู\n\n";
	var period8 = "คาบ 8 (เลิก 16.40 น.)";
    
	var hw1 = "";
	var dd1 = "2023-08-18";
 	if(new Date(dd1) > fDate){hw1="* 18 ส.ค. 66 สอบ Reading Aloud บทที่ 1-5 (สุ่ม 1 เรื่อง)\n\n";}
 	else{hw1="&#9888; " + "พ้นสอบ Reading Aloud\n\n";}
	
	var hw2 = ""; 
	var dd2 = "2023-06-30";
	if(new Date(dd2) > fDate){hw2="* สอบท่องอาขยาน 2 บท ท่องสูตรคูณ ภายใน มิ.ย. 66\n\n";}
 	else{hw2="&#9888; " + "ครบกำหนดท่องอาขยาน สูตรคูณ\n\n";}

    	var hw3 = "";
	var dd3 = "2023-06-09";
	if(new Date(dd3) > fDate){hw3="* 9 มิ.ย. 66 ส่ง Handwriting P.1-15\n\n";}
 	else{hw3="&#9888; " + "ครบกำหนดส่ง Handwriting P.1-15\n\n";}

    	var hw4 = "";
	var dd4 = "2023-06-02";
	if(new Date(dd4) > fDate){hw4="* ส่งคัดไทย (ห้ามคัดที่บ้าน) หน้า 1-20 ภายใน มิ.ย. 66\n\n";}
 	else{hw4="&#9888; " + "ครบกำหนดส่ง ส่งคัดไทย หน้า 1-20\n\n";}
	
	var hw5 = "";
	var dd5 = "2023-06-23";
	if(new Date(dd5) > fDate){hw5="* 23 มิ.ย. 66 ส่งใบงาน irregular verbs + ประเมินตนเอง\n\n";}
 	else{hw5="&#9888; " + "ครบกำหนดส่งใบงาน irregular verbs\n\n";}
	
        var hw6 = "";
	var dd6 = "2023-05-24";
	if(new Date(dd6) > fDate){hw6 ="* 24 พ.ค. 66 ใส่บาตรเช้า\n\n";}
 	else{hw6 ="&#9888; " + "ครบใส่บาตร\n\n";}
 	   
     var toDo = hw6 + hw2 + hw4 + hw3 + hw5 + hw1;
 
    	var tDay = fDate.getDay();
    	var tMonth = fDate.getMonth();
    	var thYear = fDate.getFullYear()+543;
    	const dayName = ["อาทิตย์", "จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"];
    	const monthName = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ตุลาคม"];
    	var thDate = fDate.getDate();
    	var thDay = dayName[tDay];
    	var thMonth = monthName[tMonth];
	if(fDate < startSemesterDate){subjects ="ปิดเทอม";}
	else if(thDay=="จันทร์" && fDate>=new Date("2023-05-22")){subjects = everyday + computer + engLab + thaiPrinciples1 + chinese + mathIE + socialTH + period8;}
	else if(thDay=="อังคาร" && fDate>=new Date("2023-05-22")){subjects = everyday + devEng + mathTH + funEng + health + scienceTH + thaiPrinciples2 + club + period8;}
	else if(thDay=="พุธ" && fDate>=new Date("2023-05-22")){subjects = everyday + thaiPrinciples2 + scout + scienceIE + mathTH + history + thaiWriting + scienceTH + period8;}
	else if(thDay=="พฤหัสบดี" && fDate>=new Date("2023-05-22")){subjects = everyday + socialIE + sport + devEng + mathTH + scienceTH + scienceIE + thaiPrinciples2 + period8;} 
	else if(thDay=="จันทร์"){subjects = everyday + computer + engLab + thaiPrinciples1 + chinese + mathIE + socialTH;}
	else if(thDay=="อังคาร"){subjects = everyday + devEng + mathTH + funEng + health + scienceTH + thaiPrinciples2 + club;}
	else if(thDay=="พุธ"){subjects = everyday + thaiPrinciples2 + scout + scienceIE + mathTH + history + thaiWriting + scienceTH;}
	else if(thDay=="พฤหัสบดี"){subjects = everyday + socialIE + sport + devEng + mathTH + scienceTH + scienceIE + thaiPrinciples2;}
	else if(thDay=="ศุกร์"){subjects = everyday + thaiPrinciples3 + funEng + mathIE + music + socialIE + mathTH + SGL;}
	else{subjects="หยุดเรียน";}

    document.getElementById("myDate").innerHTML ="วัน" +  thDay + "ที่ "  +  thDate + " " + thMonth + " " + thYear + ":\n==================\n\n"   
+ subjects + "\n\n======\n" + toDo;
}
 
