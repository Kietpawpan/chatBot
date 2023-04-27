/* 
Copyright © 2023 Monte Kietpawpan
v.1.0.0 | April 27, 2023
MIT License 
*/


// Get data from Form 1
function myFunction() {
  var x = document.getElementById("frm1");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value;
  }
  

  // Get data from Form 3
  var z = document.getElementById("frm3");
  var text3 = "";
  var j1;
  for (j1 = 0; j1 < z.length ;j1++) {
    text3 += z.elements[j1].value;
  }


var eMail ="โปรดระบุอีเมล";
if(text3=="สำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม"){eMail = "servicelinkcenter@mnre.go.th";}
else if(text3=="องค์การสวนสัตว์แห่งประเทศไทย"){eMail = "saraban@zoothailand.org";}
else if(text3=="กรมอุทยานแห่งชาติ สัตว์ป่าและพันธุ์พืช"){eMail = "saraban@dnp.go.th";}
else if(text3=="กรมควบคุมมลพิษ"){eMail = "saraban@pcd.go.th";}
else if(text3=="กรมส่งเสริมคุณภาพสิ่งแวดล้อม"){eMail = "saraban@deqp.mail.go.th";}
else if(text3=="สำนักงานโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม"){eMail = "saraban@onep.go.th";}
else if(text3=="กรมป่าไม้"){eMail = "saraban@forest.go.th";}
else if(text3=="กรมทรัพยากรทางทะเลและชายฝั่ง"){eMail = "saraban@dmcr.mail.go.th";}
else if(text3=="กรมทรัพยากรธรณี"){eMail = "saraban@dmr.mail.go.th";}
else if(text3=="กรมทรัพยากรน้ำ"){eMail = "saraban@dwr.mail.go.th";}
else if(text3=="กรมทรัพยากรน้ำบาดาล"){eMail = "saraban@dgr.mail.go.th";}
else if(text3=="องค์การอุตสาหกรรมป่าไม้"){eMail = "saraban@fio.co.th";}
else if(text3=="องค์การบริหารจัดการก๊าซเรือนกระจก"){eMail = "saraban_tgo@tgo.or.th";}
else if(text3=="สำนักงานพัฒนาเศรษฐกิจจากฐานชีวภาพ"){eMail = "saraban@bedo.or.th";}
else{eMail = "";}

var orgTel ="";
if(text3=="สำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม"){orgTel = "1310";}
else if(text3=="องค์การสวนสัตว์แห่งประเทศไทย"){orgTel = "0 2163 4955";}
else if(text3=="กรมอุทยานแห่งชาติ สัตว์ป่าและพันธุ์พืช"){orgTel = "0 2579 6666 ต่อ 1123 และ 1124";}
else if(text3=="กรมควบคุมมลพิษ"){orgTel = "0 2298 2000";}
else if(text3=="กรมส่งเสริมคุณภาพสิ่งแวดล้อม"){orgTel = "0 2298 5607";}
else if(text3=="สำนักงานโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม"){orgTel = "0 2265 6515 และ 0 2265 6653";}
else if(text3=="กรมป่าไม้"){orgTel = "0 2561 4292";}
else if(text3=="กรมทรัพยากรทางทะเลและชายฝั่ง"){orgTel = "0 2141 1246 - 7";}
else if(text3=="กรมทรัพยากรธรณี"){orgTel = "0 2621 9500";}
else if(text3=="กรมทรัพยากรน้ำ"){orgTel = "0 2271 6000 และ 0 2271 6003";}
else if(text3=="กรมทรัพยากรน้ำบาดาล"){orgTel = "0 2666 7056 - 8";}
else if(text3=="องค์การอุตสาหกรรมป่าไม้"){orgTel = "0 2282 3243 - 7";}
else if(text3=="องค์การบริหารจัดการก๊าซเรือนกระจก"){orgTel = "0 2141 9790";}
else if(text3=="สำนักงานพัฒนาเศรษฐกิจจากฐานชีวภาพ"){orgTel = "0 2141 7800";}
else{orgTel = "";}

var serviceTime ="";
if(text3=="สำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม"){serviceTime = "08.00 น. ถึง 17.00 น. ไม่พักกลางวัน";}
else if(text3=="องค์การสวนสัตว์แห่งประเทศไทย"){serviceTime = "08.30 น. ถึง 16.30 น.";}
else if(text3=="กรมอุทยานแห่งชาติ สัตว์ป่าและพันธุ์พืช"){serviceTime = "08.30 น. ถึง 16.30 น.";}
else if(text3=="กรมควบคุมมลพิษ"){serviceTime = "08.30 น. ถึง 16.30 น.";}
else if(text3=="กรมส่งเสริมคุณภาพสิ่งแวดล้อม"){serviceTime = "08.30 น. ถึง 16.30 น.";}
else if(text3=="สำนักงานโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม"){serviceTime = "08.30 น. ถึง 16.30 น.";}
else if(text3=="กรมป่าไม้"){serviceTime = "08.30 น. ถึง 16.30 น.";}
else if(text3=="กรมทรัพยากรทางทะเลและชายฝั่ง"){serviceTime = "08.30 น. ถึง 16.30 น.";}
else if(text3=="กรมทรัพยากรธรณี"){serviceTime = "08.30 น. ถึง 16.30 น.";}
else if(text3=="กรมทรัพยากรน้ำ"){serviceTime = "08.30 น. ถึง 16.30 น.";}
else if(text3=="กรมทรัพยากรน้ำบาดาล"){serviceTime = "08.30 น. ถึง 16.30 น.";}
else if(text3=="องค์การอุตสาหกรรมป่าไม้"){serviceTime = "08.30 น. ถึง 16.30 น.";}
else if(text3=="องค์การบริหารจัดการก๊าซเรือนกระจก"){serviceTime = "08.30 น. ถึง 16.30 น.";}
else if(text3=="สำนักงานพัฒนาเศรษฐกิจจากฐานชีวภาพ"){serviceTime = "08.30 น. ถึง 16.30 น.";}
else{serviceTime = "";}
   
  // Report the progress, according to the submission ID
	if(text=="AA123456"){window.alert("รหัสคำขอนี้ เป็นเพียงตัวอย่าง ไม่มีข้อมูลความคืบหน้าค่ะ");}

	else if(text=="SH124424"){ 
		window.alert(document.getElementById("iRequest").innerHTML = 
            		"รหัสคำขอ " + text + " \n\n7 เมษายน 2566 กรมบัญชีกลางได้สอบถาม สป.ทส. ว่า ผู้ขอยังต้องการขอข้อมูลข่าวสารของกรมบัญชีกลางหรือไม่ \n\n18 เมษายน 2566 สป.ทส. แจ้งกรมบัญชีกลางว่า ผู้ขอยังมีความประสงค์ขอข้อมูลข่าวสารดังกล่าว \n\nปัจจุบัน รอผลการพิจารณาของกรมบัญชีกลาง");
       		document.getElementById("orgEmail").innerHTML = 
            		"สอบถามเพิ่มเติม: <br>" + text3 + " <br>อีเมล "+ eMail + "<br>โทร. " + orgTel + "<br>ในวันทำการ ตั้งแต่เวลา " + serviceTime;
       		document.getElementById("emailForCopy").innerHTML = eMail;}

	else if(text=="รหัส"){ 
		window.alert(document.getElementById("iRequest").innerHTML = 
            		"รหัสคำขอ " + text + " \n\n7 เมษายน 2566 \n\n18 เมษายน 2566 \n\nปัจจุบัน");
       		document.getElementById("orgEmail").innerHTML = 
            		"สอบถามเพิ่มเติม: <br>" + text3 + " <br>อีเมล "+ eMail + "<br>โทร. " + orgTel + "<br>ในวันทำการ ตั้งแต่เวลา " + serviceTime;
       		document.getElementById("emailForCopy").innerHTML = eMail;}


	else if (text==""){
 		window.alert("โปรดกรอกรหัสคำขอก่อนค่ะ");
      		document.getElementById("orgEmail").innerHTML = 
            		"สอบถามเพิ่มเติม: <br>" + text3 + " <br>อีเมล "+ eMail + "<br>โทร. " + orgTel + "<br>ในวันทำการ ตั้งแต่เวลา " + serviceTime;
       		document.getElementById("emailForCopy").innerHTML = eMail;}

	else {
 		window.alert("รหัสคำขอไม่ถูกต้องค่ะ โปรดตรวจสอบและกรอกรหัสคำขออีกครั้ง");
      		document.getElementById("orgEmail").innerHTML = 
            		"สอบถามเพิ่มเติม: <br>" + text3 + " <br>อีเมล "+ eMail + "<br>โทร. " + orgTel + "<br>ในวันทำการ ตั้งแต่เวลา " + serviceTime;
       		document.getElementById("emailForCopy").innerHTML = eMail;}
}

function copyEmail() {
  const element = document.querySelector('#emailForCopy');
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  window.alert("คุณได้คัดลอก Email Address ไว้บน clipboard แล้ว สามารถวางในอีเมล เพื่อส่งต่อไปได้เลยค่ะ");
}

function sendGmail() {
// Get data from Form 3
  var z = document.getElementById("frm3");
  var text3 = "";
  var j1;
  for (j1 = 0; j1 < z.length ;j1++) {
    text3 += z.elements[j1].value;
  }
// Send by Gmail
   if(text3=="สำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม"){
   window.open("https://mail.google.com/mail/?view=cm&fs=1&to=servicelinkcenter@mnre.go.th&cc=&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

   if(text3=="กรมควบคุมมลพิษ"){
   window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@pcd.go.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

  if(text3=="กรมส่งเสริมคุณภาพสิ่งแวดล้อม"){
   window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@deqp.mail.go.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

if(text3=="สำนักงานโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม"){
   window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@onep.go.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}


  else if(text3=="องค์การสวนสัตว์แห่งประเทศไทย"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@zoothailand.org&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

  else if(text3=="กรมอุทยานแห่งชาติ สัตว์ป่าและพันธุ์พืช"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@dnp.go.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

 else if(text3=="กรมป่าไม้"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@forest.go.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

else if(text3=="กรมทรัพยากรทางทะเลและชายฝั่ง"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@dmcr.mail.go.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

else if(text3=="กรมทรัพยากรธรณี"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@dmr.mail.go.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

else if(text3=="กรมทรัพยากรน้ำ"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@dwr.mail.go.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

else if(text3=="กรมทรัพยากรน้ำบาดาล"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@dgr.mail.go.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

else if(text3=="องค์การอุตสาหกรรมป่าไม้"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@fio.co.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

else if(text3=="องค์การบริหารจัดการก๊าซเรือนกระจก"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban_tgo@tgo.or.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

else if(text3=="สำนักงานพัฒนาเศรษฐกิจจากฐานชีวภาพ"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@bedo.or.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

  else{
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=&cc=&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}
}


function sendiMail() {
// Get data from Form 3
  var z = document.getElementById("frm3");
  var text3 = "";
  var j1;
  for (j1 = 0; j1 < z.length ;j1++) {
    text3 += z.elements[j1].value;
  }
// Send by iPhone
   if(text3=="สำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม"){
   window.open("mailto:servicelinkcenter@mnre.go.th?subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

 else if(text3=="สำนักงานโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม"){
   window.open("mailto:saraban@onep.go.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

  else if(text3=="กรมควบคุมมลพิษ"){
   window.open("mailto:saraban@pcd.go.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

  else if(text3=="กรมส่งเสริมคุณภาพสิ่งแวดล้อม"){
   window.open("mailto:saraban@deqp.mail.go.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

else if(text3=="องค์การสวนสัตว์แห่งประเทศไทย"){
   window.open("mailto:saraban@zoothailand.org?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

  else if(text3=="กรมอุทยานแห่งชาติ สัตว์ป่าและพันธุ์พืช"){
   window.open("mailto:saraban@dnp.go.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

  else if(text3=="กรมป่าไม้"){
   window.open("mailto:saraban@forest.go.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

  else if(text3=="กรมทรัพยากรทางทะเลและชายฝั่ง"){
   window.open("mailto:saraban@dmcr.mail.go.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}


  else if(text3=="กรมทรัพยากรธรณี"){
   window.open("mailto:saraban@dmr.mail.go.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

  else if(text3=="กรมทรัพยากรน้ำ"){
   window.open("mailto:saraban@dwr.mail.go.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

 else if(text3=="กรมทรัพยากรน้ำบาดาล"){
   window.open("mailto:saraban@dgr.mail.go.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

 else if(text3=="องค์การอุตสาหกรรมป่าไม้"){
   window.open("mailto:saraban@fio.co.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

 else if(text3=="องค์การบริหารจัดการก๊าซเรือนกระจก"){
   window.open("mailto:saraban_tgo@tgo.or.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

 else if(text3=="สำนักงานพัฒนาเศรษฐกิจจากฐานชีวภาพ"){
   window.open("mailto:saraban@bedo.or.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

  else{
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=&cc=&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}
}