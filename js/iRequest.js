/* 
Copyright © 2023 Monte Kietpawpan
v.1.0.5 | April 25, 2023
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
  
  // Get data from Form 2
  var y = document.getElementById("frm2");
  var text2 = "";
  var j;
  for (j = 0; j < y.length ;j++) {
    text2 += y.elements[j].value;
  }
  

  // Get data from Form 3
  var z = document.getElementById("frm3");
  var text3 = "";
  var j1;
  for (j1 = 0; j1 < z.length ;j1++) {
    text3 += z.elements[j1].value;
  }


var d = document.getElementById("frm4");
  var obj = "";
  var k;
  for (k = 0; k < d.length ;k++) {
    obj += d.elements[k].value;
  }
  
var e = document.getElementById("frm5");
  var info1 = "";
  var l;
  for (l = 0; l < e.length ;l++) {
    info1 += e.elements[l].value;
  }

var e2 = document.getElementById("frm52");
  var info2 = "";
  var l2;
  for (l2 = 0; l2 < e2.length ;l2++) {
    info2 += e2.elements[l2].value;
  }

var e3 = document.getElementById("frm53");
  var info3 = "";
  var l3;
  for (l3 = 0; l3 < e3.length ;l3++) {
    info3 += e3.elements[l3].value;
  }

var e4 = document.getElementById("frm54");
  var tel = "";
  var l4;
  for (l4 = 0; l4 < e4.length ;l4++) {
    tel += e4.elements[l4].value;
  }

var a1 = document.getElementById("frm7");
  var house = "";
  var h1;
  for (h1 = 0; h1 < a1.length ;h1++) {
    house += a1.elements[h1].value;
  }

var a2 = document.getElementById("frm6");
  var checkType = "";
  var h2;
  for (h2 = 0; h2 < a2.length ;h2++) {
    checkType += a2.elements[h2].value;
  }

var opener = "โปรดระบุชื่อผู้รับ";
if(text3=="สำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม"){opener = "ปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม";}
else if(text3=="องค์การสวนสัตว์แห่งประเทศไทย"){opener = "ผู้อำนวยการองค์การสวนสัตว์";}
else if(text3=="กรมอุทยานแห่งชาติ สัตว์ป่าและพันธุ์พืช"){opener = "อธิบดีกรมอุทยานแห่งชาติสัตว์ป่า และพันธุ์พืช";}
else{opener = "มนตรี";}

var eMail ="โปรดระบุอีเมล";
if(text3=="สำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม"){eMail = "servicelinkcenter@mnre.go.th";}
else if(text3=="องค์การสวนสัตว์แห่งประเทศไทย"){eMail = "saraban@sepo.go.th";}
else if(text3=="กรมอุทยานแห่งชาติ สัตว์ป่าและพันธุ์พืช"){eMail = "saraban@dnp.go.th";}
else{eMail = "";}
   
  // Show the code in the window alert
  window.alert(document.getElementById("iRequest").innerHTML = 
            "เรื่อง ขอข้อมูลข่าวสารของราชการ\n\nเรียน " + opener + "\n\nข้าพเจ้า " + text + " หมายเลขบัตรประจำตัวประชาชน " + text2 + " อยู่" + house + " มีความประสงค์ขอข้อมูลข่าวสารของ" + text3 + 
                        " ดังต่อไปนี้\n" +
            "1. " + info1 + 
            "\n2. " + info2 +
            "\n3. " + info3 +
                        "\nโดย" + checkType + " เพื่อนำไปใช้ในการ" + obj +
            "\n\nจึงเรียนมาเพื่อดำเนินการให้ตามความประสงค์ของข้าพเจ้าต่อไปด้วย จักขอบคุณมาก" +
            "\n\nขอแสดงความนับถือ" + "\n" + text + " ผู้ขอ\nโทร. " + tel);
       document.getElementById("orgEmail").innerHTML = 
            "โปรดกดปุ่มคัดลอกข้อความ ส่งไปยัง" + text3 + " ทางอีเมล "+ eMail + " ได้เลยค่ะ";
       document.getElementById("emailForCopy").innerHTML = eMail;
}

function copyForm() {
  const element = document.querySelector('#iRequest');
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  window.alert("คุณได้คัดลอกร่างคำขอไว้บน clipboard แล้ว สามารถวางในอีเมล เพื่อส่งต่อไปได้เลยค่ะ");
}

function copyEmail() {
  const element = document.querySelector('#emailForCopy');
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  window.alert("คุณได้คัดลอก Email Address ไว้บน clipboard แล้ว สามารถวางในอีเมล เพื่อส่งต่อไปได้เลยค่ะ");
}

