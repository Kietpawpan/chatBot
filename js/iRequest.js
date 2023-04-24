/* 
Copyright © 2023 Monte Kietpawpan
v.1.0.0 | April 24, 2023
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
  var z = document.getElementById("orgName");
  var officer = z.value;
 
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



var opener = "ปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม";
var org = "สำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม";

   
  // Show the code in the window alert
  window.alert(document.getElementById("iRequest").innerHTML = 
            "เรียน " + opener + "\n\nข้าพเจ้า " + text + " หมายเลขบัตรประจำตัวประชาชน " + text2 + " มีความประสงค์ขอข้อมูลข่าวสารของ" + org + 
                        " ดังต่อไปนี้\n" +
            "1. " + info1 + 
            "\n2. " + info2 +
            "\n3. " + info3 +
                        "\nเพื่อนำไปใช้ในการ" + obj +
            "\n\nจึงเรียนมาเพื่อโปรดจัดหาข้อมูลข่าวสารดังกล่าวให้แก่ข้าพเจ้าด้วย จะขอบคุณยิ่ง" +
            "\n\nขอแสดงความนับถือ" + "\n" + text + "\nโทร. " + tel);
}

function copyForm() {
  const element = document.querySelector('#myForm');
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  window.alert("คุณได้คัดลอกร่างคำขอไว้บน clipboard สามารถวางในอีเมลต่อไป")
}

/*
<div>
  <button onclick="copyMyEmail()">Copy Email Address</button>
</div>
<br>
 <a href="http://9x9go.github.io/reviews"><b>Free Edition:</b><br>9 &#215 9 Go Reviews</a>
<script>
function copyMyEmail() {
  const element = document.querySelector('#myEmail');
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  window.alert("You have copied monteodawesti@gmail.com to clipboard.")
}
*/
