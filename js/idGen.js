/* 
Copyright © 2023 Monte Kietpawpan
I wrote this code on Sunday,
April 23, 2023, published with
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
  var z = document.getElementById("ourNameID");
  var officer = z.value;
  
  // Set variables to generate ID from name surname year month date and hour
  var part1 = text.split("");
  var part2 = text2.split("");
  var today = new Date();
  var min = today.getMinutes();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear()+543;
  var yyyz = yyyy - 54;
  var yy = yyyy.toString().substr(-2);
  var hh = today.getHours();
  var hhh = hh.toString().substr(-1);
   var hz = hhh;
  var dz = dd + 15;
  var h = hh.toString().substr(-1);
  if(dd<10){ dd='0'+dd;}
  if(hh<10){ hh='0'+hh;}
    if(min<10){ min='0'+min;}
    if(mm<10){ mm='0'+mm;}
  var yz = yyyz.toString().substr(-2);
  var mz = mm.toString().substr(-1);
  var mx = mm.toString();
  
  // Change month numbers to month names in Thai
  if(mx=="01"){mx="มกราคม";}
  else if(mx=="02"){mx="กุมภาพันธ์";}
  else if(mx=="03"){mx="มีนาคม";}
  else if(mx=="04"){mx="เมษายน";}
  else if(mx=="05"){mx="พฤษภาคม";}
  else if(mx=="06"){mx="มิถุนายน";}
  else if(mx=="07"){mx="กรกฎาคม";}
  else if(mx=="08"){mx="สิงหาคม";}
  else if(mx=="09"){mx="กันยายน";}
  else if(mx=="10"){mx="ตุลาคม";}
  else if(mx=="11"){mx="พฤศจิกายน";}
  else{mx="ธันวาคม";}
  
  // Convert the first character of variable f (name) into ID codes
  var f = part1[0]
  if(f=="ก"){ f="A";} 
  else if(f=="ข"){ f="B";} 
  else if(f=="ค"){ f="C";} 
  else if(f=="ฆ"){ f="D";} 
  else if(f=="ง"){ f="E";} 
  else if(f=="จ"){ f="F";} 
  else if(f=="ฉ"){ f="G";} 
  else if(f=="ช"){ f="H";} 
  else if(f=="ซ"){ f="J";} 
  else if(f=="ฌ"){ f="K";} 
  else if(f=="ญ"){ f="L";} 
  else if(f=="ฎ"){ f="M";} 
  else if(f=="ฏ"){ f="N";} 
  else if(f=="ฐ"){ f="Z";} 
  else if(f=="ฑ"){ f="P";} 
  else if(f=="ฒ"){ f="Q";} 
  else if(f=="ณ"){ f="R";} 
  else if(f=="ด"){ f="S";} 
  else if(f=="ต"){ f="T";} 
  else if(f=="ท"){ f="U";} 
  else if(f=="ธ"){ f="V";} 
  else if(f=="น"){ f="W";} 
  else if(f=="บ"){ f="X";} 
  else if(f=="ป"){ f="Y";} 
  else if(f=="ผ"){ f="Z";} 
  else if(f=="ฝ"){ f="A";} 
  else if(f=="พ"){ f="B";} 
  else if(f=="ฟ"){ f="C";} 
  else if(f=="ภ"){ f="D";} 
  else if(f=="ม"){ f="E";} 
  else if(f=="ย"){ f="F";} 
  else if(f=="ร"){ f="G";} 
  else if(f=="ล"){ f="H";} 
  else if(f=="ว"){ f="J";} 
  else if(f=="ศ"){ f="K";} 
  else if(f=="ษ"){ f="L";} 
  else if(f=="ส"){ f="M";} 
  else if(f=="ห"){ f="N";} 
  else if(f=="ฬ"){ f="P";} 
  else if(f=="อ"){ f="Q";} 
  else if(f=="ฮ"){ f="R";} 
  else if(f=="โ"){ f="S";} 
  else if(f=="ใ"){ f="T";} 
  else if(f=="ไ"){ f="U";} 
  else if(f=="ฤ"){ f="V";} 
  else if(f=="เ"){ f="X";}
  else if(f=="แ"){ f="Z";}
  else if(f=="A"){ f="E";}
  else if(f=="B"){ f="F";}
  else if(f=="C"){ f="G";}
  else if(f=="D"){ f="H";}
  else if(f=="E"){ f="J";}
  else if(f=="F"){ f="K";}
  else if(f=="G"){ f="L";}
  else if(f=="H"){ f="M";}
  else if(f=="I"){ f="N";}
  else if(f=="J"){ f="P";}
  else if(f=="K"){ f="P";}
  else if(f=="L"){ f="Q";}
  else if(f=="M"){ f="R";}
  else if(f=="N"){ f="S";}
  else if(f=="O"){ f="T";}
  else if(f=="P"){ f="U";}
  else if(f=="Q"){ f="V";}
  else if(f=="R"){ f="W";}
  else if(f=="S"){ f="X";}
  else if(f=="T"){ f="Y";}
  else if(f=="U"){ f="Z";}
  else if(f=="V"){ f="A";}
  else if(f=="W"){ f="B";}
  else if(f=="X"){ f="C";}
  else if(f=="Y"){ f="D";}
  else if(f=="a"){ f="E";}
  else if(f=="b"){ f="F";}
  else if(f=="c"){ f="G";}
  else if(f=="d"){ f="H";}
  else if(f=="e"){ f="J";}
  else if(f=="f"){ f="K";}
  else if(f=="g"){ f="L";}
  else if(f=="h"){ f="M";}
  else if(f=="i"){ f="N";}
  else if(f=="j"){ f="P";}
  else if(f=="k"){ f="Q";}
  else if(f=="l"){ f="R";}
  else if(f=="m"){ f="S";}
  else if(f=="n"){ f="T";}
  else if(f=="o"){ f="U";}
  else if(f=="p"){ f="V";}
  else if(f=="q"){ f="W";}
  else if(f=="r"){ f="X";}
  else if(f=="s"){ f="Y";}
  else if(f=="t"){ f="Z";}
  else if(f=="u"){ f="A";}
  else if(f=="v"){ f="B";}
  else if(f=="w"){ f="C";}
  else if(f=="x"){ f="D";}
  else if(f=="y"){ f="E";}
  else {f="Z";} 
  
  // Convert the first character of variable s (surname) in ID codes
  var s = part2[0]
  if(s=="ก"){ s="C";} 
  else if(s=="ข"){ s="D";} 
  else if(s=="ค"){ s="E";} 
  else if(s=="ฆ"){ s="F";} 
  else if(s=="ง"){ s="G";} 
  else if(s=="จ"){ s="H";} 
  else if(s=="ฉ"){ s="J";} 
  else if(s=="ช"){ s="K";} 
  else if(s=="ซ"){ s="L";} 
  else if(s=="ฌ"){ s="M";} 
  else if(s=="ญ"){ s="N";} 
  else if(s=="ฎ"){ s="P";} 
  else if(s=="ฏ"){ s="Q";} 
  else if(s=="ฐ"){ s="R";} 
  else if(s=="ฑ"){ s="S";} 
  else if(s=="ฒ"){ s="T";} 
  else if(s=="ณ"){ s="U";} 
  else if(s=="ด"){ s="V";} 
  else if(s=="ต"){ s="W";} 
  else if(s=="ท"){ s="X";} 
  else if(s=="ธ"){ s="Y";} 
  else if(s=="น"){ s="Z";} 
  else if(s=="บ"){ s="A";} 
  else if(s=="ป"){ s="B";} 
  else if(s=="ผ"){ s="C";} 
  else if(s=="ฝ"){ s="E";} 
  else if(s=="พ"){ s="D";} 
  else if(s=="ฟ"){ s="F";} 
  else if(s=="ภ"){ s="G";} 
  else if(s=="ม"){ s="H";} 
  else if(s=="ย"){ s="J";} 
  else if(s=="ร"){ s="K";} 
  else if(s=="ล"){ s="L";} 
  else if(s=="ว"){ s="M";} 
  else if(s=="ศ"){ s="N";} 
  else if(s=="ษ"){ s="P";} 
  else if(s=="ส"){ s="Q";} 
  else if(s=="ห"){ s="R";} 
  else if(s=="ฬ"){ s="S";} 
  else if(s=="อ"){ s="T";} 
  else if(s=="ฮ"){ s="U";} 
  else if(s=="โ"){ s="V";} 
  else if(s=="ใ"){ s="W";} 
  else if(s=="ไ"){ s="X";} 
  else if(s=="ฤ"){ s="Y";} 
  else if(s=="เ"){ s="Z";}
  else if(s=="แ"){ s="A";}
  else if(s=="A"){ s="B";}
  else if(s=="B"){ s="C";}
  else if(s=="C"){ s="D";}
  else if(s=="D"){ s="E";}
  else if(s=="E"){ s="F";}
  else if(s=="F"){ s="G";}
  else if(s=="G"){ s="H";}
  else if(s=="H"){ s="J";}
  else if(s=="I"){ s="K";}
  else if(s=="J"){ s="L";}
  else if(s=="K"){ s="M";}
  else if(s=="L"){ s="N";}
  else if(s=="M"){ s="P";}
  else if(s=="N"){ s="Q";}
  else if(s=="O"){ s="R";}
  else if(s=="P"){ s="S";}
  else if(s=="Q"){ s="T";}
  else if(s=="R"){ s="U";}
  else if(s=="S"){ s="V";}
  else if(s=="T"){ s="W";}
  else if(s=="U"){ s="X";}
  else if(s=="V"){ s="Y";}
  else if(s=="W"){ s="Z";}
  else if(s=="X"){ s="A";}
  else if(s=="Y"){ s="B";}
  else if(s=="a"){ s="C";}
  else if(s=="b"){ s="D";}
  else if(s=="c"){ s="E";}
  else if(s=="d"){ s="F";}
  else if(s=="e"){ s="G";}
  else if(s=="f"){ s="H";}
  else if(s=="g"){ s="J";}
  else if(s=="h"){ s="K";}
  else if(s=="i"){ s="L";}
  else if(s=="j"){ s="M";}
  else if(s=="k"){ s="N";}
  else if(s=="l"){ s="P";}
  else if(s=="m"){ s="Q";}
  else if(s=="n"){ s="R";}
  else if(s=="o"){ s="S";}
  else if(s=="p"){ s="T";}
  else if(s=="q"){ s="U";}
  else if(s=="r"){ s="V";}
  else if(s=="s"){ s="W";}
  else if(s=="t"){ s="X";}
  else if(s=="u"){ s="Y";}
  else if(s=="v"){ s="Z";}
  else if(s=="w"){ s="A";}
  else if(s=="x"){ s="B";}
  else if(s=="y"){ s="C";}
  else { s="Z";}  
  
  // Show the code in the window alert
  window.alert(document.getElementById("idGen").innerHTML = 
               "รหัสคำขอของ คุณ" + text + " " + text2 + " " + 
               "คือ\n" + f + s + yz + mz + dz + hz + " " + 
               "\nออกโดย\n" + officer + " \nเมื่อวันที่ " + 
               dd + " " + mx + " พ.ศ. " + yyyy + " \nเวลา " + 
               hh + " : " + min + " น.");
}
