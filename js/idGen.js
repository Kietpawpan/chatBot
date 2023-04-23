function myFunction() {
  var x = document.getElementById("frm1");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value;
  }
  var y = document.getElementById("frm2");
  var text2 = "";
  var j;
  for (j = 0; j < y.length ;j++) {
    text2 += y.elements[j].value;
  }
  var z = document.getElementById("ourNameID");
  var officer = z.value;
  var part1 = text.split("");
  var part2 = text2.split("");
  var today = new Date();
  var min = today.getMinutes();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear()+543;
  var yy = yyyy.toString().substr(-2);
  var hh = today.getHours();
  var h = hh.toString().substr(-1);
  if(dd<10){ dd='0'+dd;}
  if(hh<10){ hh='0'+hh;}
    if(min<10){ min='0'+min;}
    if(mm<10){ mm='0'+mm;}
  var yz = yyyy.toString().substr(-1);
  var mz = mm.toString().substr(-1);
  var mx = mm.toString();
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
  else {f="Y";} 
  var s = part2[0]
  if(s=="ก"){ s="A";} 
  else if(s=="ข"){ s="B";} 
  else if(s=="ค"){ s="C";} 
  else if(s=="ฆ"){ s="D";} 
  else if(s=="ง"){ s="E";} 
  else if(s=="จ"){ s="F";} 
  else if(s=="ฉ"){ s="G";} 
  else if(s=="ช"){ s="H";} 
  else if(s=="ซ"){ s="J";} 
  else if(s=="ฌ"){ s="K";} 
  else if(s=="ญ"){ s="L";} 
  else if(s=="ฎ"){ s="M";} 
  else if(s=="ฏ"){ s="N";} 
  else if(s=="ฐ"){ s="Z";} 
  else if(s=="ฑ"){ s="P";} 
  else if(s=="ฒ"){ s="Q";} 
  else if(s=="ณ"){ s="R";} 
  else if(s=="ด"){ s="S";} 
  else if(s=="ต"){ s="T";} 
  else if(s=="ท"){ s="U";} 
  else if(s=="ธ"){ s="V";} 
  else if(s=="น"){ s="W";} 
  else if(s=="บ"){ s="X";} 
  else if(s=="ป"){ s="Y";} 
  else if(s=="ผ"){ s="Z";} 
  else if(s=="ฝ"){ s="A";} 
  else if(s=="พ"){ s="B";} 
  else if(s=="ฟ"){ s="C";} 
  else if(s=="ภ"){ s="D";} 
  else if(s=="ม"){ s="E";} 
  else if(s=="ย"){ s="F";} 
  else if(s=="ร"){ s="G";} 
  else if(s=="ล"){ s="H";} 
  else if(s=="ว"){ s="J";} 
  else if(s=="ศ"){ s="K";} 
  else if(s=="ษ"){ s="L";} 
  else if(s=="ส"){ s="M";} 
  else if(s=="ห"){ s="N";} 
  else if(s=="ฬ"){ s="P";} 
  else if(s=="อ"){ s="Q";} 
  else if(s=="ฮ"){ s="R";} 
  else if(s=="โ"){ s="S";} 
  else if(s=="ใ"){ s="T";} 
  else if(s=="ไ"){ s="U";} 
  else if(s=="ฤ"){ s="V";} 
  else if(s=="เ"){ s="X";} 
  else { s="Y";}  
  window.alert(document.getElementById("idGen").innerHTML = "รหัสคำขอของ คุณ" + text + " " + text2 + " " + "คือ\n" + f + s + yz + mz + dd + hh + " " + "\nออกโดย\n" + officer + " \nเมื่อวันที่ " + dd + " " + mx + " พ.ศ. " + yyyy + " \nเวลา " + hh + " : " + min + " น.");
}
