function romanize() {
	var thName = document.getElementById("thaiName").value; // มนตรี
	var thNameStr = thName.toString(); // "มนตรี"
	var th = Array.from(thName); // ม,น,ต,รี,
	var r1 = th[0]; // ม
	var r2 = th[0]+th[1]; // มน
	var r3 = th[0]+th[1]+th[2]; // กมล
	var r4 = th[0]+th[1]+th[2]+th[3]; // รินท
	var r5 = th[0]+th[1]+th[2]+th[3]+th[4]; // รินทร ไม่มีการรันต์
	var r6 = th[0]+th[1]+th[2]+th[3]+th[4]+th[5];
	var r7 = th[0]+th[1]+th[2]+th[3]+th[4]+th[5]+th[6];
	const words = new Map([
			['ะ','A'], ['บ','B'], ['จ','J'], ['ฎ','D'], ['ด','D'], ['เ','E'], ['ฝ','F'], ['ฟ','F'],
			['ห','H'], ['ฮ','H'], ['ม','M'], ['น','N'], ['ณ','N'], ['โ','O'], ['ป','P'], ['ร','R'],
			['ส','S'], ['ษ','S'], ['ศ','S'], ['ซ','S'], ['ฏ','T'], ['ต','T'],	['ว','W'], ['ย','Y'],
			['ญ','Y'], ['ฐ','TH'], ['ฑ','TH'], ['ฒ','TH'], ['ถ','TH'], ['ท','TH'],	['ธ','TH'],
			['ผ','PH'], ['พ','PH'],	['ภ','PH'],	['ข','KH'],	['ฆ','KH'],	['ค','KH'],	['ฅ','KH'],
			['ฉ','CH'],	['ช','CH'],	['ฌ','CH'],	['ง','NG'],	
			['เก','KE'],	
			['แก','KAE'],
			['เกา','KAO'],
			['กะ','KA'],
			['กัก','KAK'],['กัข','KAK'],['กัฆ','KAK'],['กัค','KAK'],['กัฅ','KAK'],
			['กัง','KANG'],
			['กัจ','KAT'],['กัฉ','KAT'],['กัช','KAT'],['กัซ','KAT'],['กัฎ','KAT'],['กัฏ','KAT'],['กัฐ','KAT'],['กัฑ','KAT'],['กัฒ','KAT'],
			['กัด','KAT'],['กัต','KAT'],['กัถ','KAT'],['กัธ','KAT'],['กัท','KAT'],['กัจ','KAT'],['กัฉ','KAT'],['กัช','KAT'],['กัซ','KAT'],['กัฎ','KAT'],
			['กัด','KAT'],['กัศ','KAT'],['กัส','KAT'],['กัษ','KAT'],
			['กัญ','KAN'],['กัณ','KAN'],['กัน','KAN'],['กัร','KAN'],['กัล','KAN'],['กัฬ','KAN'],['กรร','KAN'],['กรรน','KAN'],['กรรณ','KAN'],
			['กา','KA'],['ก่า','KA'],['ก้า','KA'],['ก๊า','KA'],['ก๋า','KA'],
			['กิ','KI'],['กิ่','KI'],['กิ้','KI'],['กิ๊','KI'],['กิ๋','KI'],
			['กี','KI'],['กี่','KI'],['กี้','KI'],['กี๊','KI'],['กี๋','KI'],
			['กึ','KUE'],['กึ่','KUE'],['กึ้','KUE'],['กึ๊','KUE'],['กึ๋','KUE'],
			['กุ','KU'],['กุ่','KU'],['กุ้','KU'],['กุ๊','KU'],['กุ๋','KU'],
			['กู','KU'],['กู่','KU'],['กู้','KU'],['กู๊','KU'],['กู๋','KU'],
			['เกะ','KAE'],
			['แก','KAE'],['แกร','KAE'],['แกล','KAE'],
			['แกะ','KAE'],
			['เกีย','KIA'],
			['เกียะ','KIA'],
			['เกือ','KUEA'],
			['กัว','KUEA'],
			['กัวะ','KUA'],
			['โกะ','KO'],
			['โก','KO'],
			['เกาะ','KO'],
			['กอ','KO'],
			['กำ','KAM'],['กรรม','KAM'],
			['ไก','KAI'],['ไกร','KRAI'],['ไกล','KLAI'],
			['ใก','KAI'],
			['กาย','KAI'],
			['กัย','KAI'],
			['เกา','KAO'],
			['กาว','KAO'],
			['เกว','KEO'],
			['เก็ว','KEO'],
			['กอก','KOK'],
			['แกว','KAEO'],
			['เกียว','KIAO'],
			['โกย','KOI'],
			['กูย','KUI'],
			['เกย','KOEI'],
			['กวย','KUAI'],
			['เกือย','KUEAI'],
			['กอย','KOI'],
			['มนตรี','MONTRI']
]);
if(words.has(r7)==true){document.getElementById("romanize").value = words.get(r7);}
else if(words.has(r6)==true){document.getElementById("romanize").value = words.get(r6);}
else if(words.has(r5)==true){document.getElementById("romanize").value = words.get(r5);}
else if(words.has(r4)==true){document.getElementById("romanize").value = words.get(r4);}
else if(words.has(r3)==true){document.getElementById("romanize").value = words.get(r3) ;}
else if(words.has(r2)==true){document.getElementById("romanize").value = words.get(r2);}
else{document.getElementById("romanize").value = words.get(r1);}

}

/*
function roman() {
	var thName = document.getElementById("thaiName").value; // มนตรี
	var thNameStr = thName.toString(); // "มนตรี"
	var thC = Array.from(thName); // ม,น,ต,รี,
	var one ="";
	var two ="";
	if(thC[0] == "ะ" || thC[0]=="า"){one = "A";}
	else if(thC[0] == "บ"){one = "B";}
	else if(thC[0] == "จ"){one = "C";}
	else if(thC[0] == "ฎ" || thC[0]=="ด"){one = "D";}
	else if(thC[0] == "เอะ" || thC[0]=="เ" || thC[0]=="เอ"|| thC[0]=="เ-ะ"){one = "E";}
	else if(thC[0] == "ฝ" || thC[0]=="ฟ"){one = "F";}
	else if(thC[0] == "ห" || thC[0]=="ฮ"){one = "H";}
	else if(thC[0] =="ล" || thC[0]=="ฬ"){one = "L";}
	else if(thC[0] =="ม"){one = "M";}
	else if(thC[0] =="น" || thC[0]=="ณ"){one = "N";}
	else if(thC[0] =="โ" || thC[0]=="โอ" || thC[0]=="โอะ" || thC[0]=="โ-ะ"){one = "O";}
	else if(thC[0] =="ป"){one = "P";}
	else if(thC[0] =="ร"){one = "R";}
	else if(thC[0] =="ส" || thC[0]=="ษ"|| thC[0]=="ศ"|| thC[0]=="ซ"){one = "S";}
	else if(thC[0] =="ฏ" || thC[0]=="ต"){one = "T";}
	else if(thC[0] == "อุ" ||thC[0]=="อู"){one = "U";}
	else if(thC[0] =="ว"){one = "W";}
	else if(thC[0] =="ย" || thC[0]=="ญ"){one = "Y";}
	else if(thC[0] =="ฐ" || thC[0]=="ฑ"|| thC[0]=="ฒ"|| thC[0]=="ถ"|| thC[0]=="ท"|| thC[0]=="ธ"){one = "TH";}
	else if(thC[0] =="ผ" || thC[0]=="พ"|| thC[0]=="ภ"){one = "PH";}
	else if(thC[0] =="ข" || thC[0]=="ฃ"|| thC[0]=="ค"|| thC[0]=="ฆ" || thC[0]=="ฅ"){one = "KH";}
	else if(thC[0] =="ฉ" || thC[0]=="ช"|| thC[0]=="ฌ"){one = "CH";}
	else if(thC[0] =="ง"){one = "NG";}
	else if(thC[0] =="อือ" || thC[0] == "ื"){one = "UE";}
	else if(thC[0] =="เออะ" || thC[0] == "เ-อะ"){one = "OE";}
	else if(thC[0] =="แอะ" || thC[0] == "แ-ะ"  || thC[0] == "แ" || thC[0] == "แอ"){one = "AE";}
	else if(thC[0] =="เ-า" || thC[0] == "เอา"){one = "AO";}
	else if(thC[0] =="เ-า" || thC[0] == "เอา"){one = "AO";}
	else if(thC[0] =="เ-ว" || thC[0] == "เอว"){one = "EO";}
	else if(thC[0] =="เ-ว" || thC[0] == "เอว"){one = "EO";}
	else if(thC[0] =="เ-ว" || thC[0] == "เอว"){one = "EO";}
	else if(thC[0] =="แ-ว" || thC[0] == "แอว"){one = "AEO";}
	else if(thC[0] =="อิว"){one = "IO";}
	else if(thC[0] == "เอียว"){one = "IAO";}
	else if(thC[0] =="เอีย" || thC[0] == "เอียะ"){one = "IA";}
	else if(thC[0] =="อัว" || thC[0] == "อัวะ"){one = "UA";}
	else if(thC[0] =="เอือ" || thC[0] == "เอือะ"){one = "UEA";}
	else if(thC[0] =="อาย" || thC[0] == "ไ" || thC[0] == "ใ" || thC[0] == "อัย"){one = "AI";}
	else if(thC[0] =="ออย" || thC[0] == "โอย"){one = "OI";}
	else if(thC[0] =="อูย" || thC[0] == "อุย"){one = "UI";}
	else if(thC[0] =="เอย"){one = "OEI";}
	else if(thC[0] =="อวย"){one = "UAI";}
	else if(thC[0] =="เอือย"){one = "UEAI";}
	else if(thC[0] =="อ"){one = "A";}
	else{one ="No";}


	if(thC[1] == "ม"){two = "M";}
	else if(thC[1] == "ย"){two = "I";}
	else if(thC[1] == "ว"){two = "O";}
	else if(thC[1] == "ญ" || thC[1]=="ณ" || thC[1]=="น"|| thC[1]=="ร"|| thC[1]=="ล"|| thC[1]=="ฬ"){two = "N";}
	else if(thC[1] == "ก" || thC[1]=="ข" || thC[1]=="ค"|| thC[1]=="ฆ"){two = "K";}
	else if(thC[1] == "ง"){two = "NG";}
	else if(thC[1] == "อ"){two = "OR";}
	else{two ="No";}

	document.getElementById("romanize").value = one + two
}
*/