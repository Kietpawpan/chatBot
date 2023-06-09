/* Copyright © 2023 Montri Kiatphaophan
 * baht.js | All rights reserved. 
 * v.1.0.2 June 9, 2023
 */

function bahtText() {
	const panLan = new Map([ 
		['',''],
		['0',''],['1','หนึ่งพัน'],['2','สองพัน'],['3','สามพัน'],
		['4','สี่พัน'],['5','ห้าพัน'],['6','หกพัน'], 
		['7','เจ็ดพัน'],['8','แปดพัน'],['9','เก้าพัน'], 
]);
	const roiLan = new Map([ 
		['',''],
		['0',''],['1','หนึ่งร้อย'],['2','สองร้อย'],['3','สามร้อย'],
		['4','สี่ร้อย'],['5','ห้าร้อย'],['6','หกร้อย'], 
		['7','เจ็ดร้อย'],['8','แปดร้อย'],['9','เก้าร้อย'], 
]);


	const sipLan = new Map([ 
		['0',''],['1','สิบ'],['2','ยี่สิบ'],['3','สามสิบ'],
		['4','สี่สิบ'],['5','ห้าสิบ'],['6','หกสิบ'], 
		['7','เจ็ดสิบ'],['8','แปดสิบ'],['9','เก้าสิบ'], 
]);

	const lan = new Map([ 
		['0','ล้าน'],['1','หนึ่งล้าน'],['2','สองล้าน'],['3','สามล้าน'],
		['4','สี่ล้าน'],['5','ห้าล้าน'],['6','หกล้าน'], 
		['7','เจ็ดล้าน'],['8','แปดล้าน'],['9','เก้าล้าน'], 
]);

	const lan2 = new Map([ 
		['1','เอ็ดล้าน'],['2','สองล้าน'],['3','สามล้าน'],
		['4','สี่ล้าน'],['5','ห้าล้าน'],['6','หกล้าน'], 
		['7','เจ็ดล้าน'],['8','แปดล้าน'],['9','เก้าล้าน'],['0','ล้าน'],
]);


	const saen = new Map([ 
		['0',''],['1','หนึ่งแสน'],['2','สองแสน'],['3','สามแสน'],
		['4','สี่แสน'],['5','ห้าแสน'],['6','หกแสน'], 
		['7','เจ็ดแสน'],['8','แปดแสน'],['9','เก้าแสน'], 

]);

	const muen = new Map([ 
		['0',''],['1','หนึ่งหมื่น'],['2','สองหมื่น'],['3','สามหมื่น'],
		['4','สี่หมื่น'],['5','ห้าหมื่น'],['6','หกหมื่น'], 
		['7','เจ็ดหมื่น'],['8','แปดหมื่น'],['9','เก้าหมื่น'], 
]);


	const pan = new Map([ 
		['0',''],['1','หนึ่งพัน'],['2','สองพัน'],['3','สามพัน'],
		['4','สี่พัน'],['5','ห้าพัน'],['6','หกพัน'], 
		['7','เจ็ดพัน'],['8','แปดพัน'],['9','เก้าพัน'], 
]);

	const roi = new Map([ 
		['0',''],['1','หนึ่งร้อย'],['2','สองร้อย'],['3','สามร้อย'],
		['4','สี่ร้อย'],['5','ห้าร้อย'],['6','หกร้อย'], 
		['7','เจ็ดร้อย'],['8','แปดร้อย'],['9','เก้าร้อย'], 
]);
	const sip = new Map([ 
		['0',''],['1','สิบ'],['2','ยี่สิบ'],['3','สามสิบ'],
		['4','สี่สิบ'],['5','ห้าสิบ'],['6','หกสิบ'], 
		['7','เจ็ดสิบ'],['8','แปดสิบ'],['9','เก้าสิบ'], 
]);

	const nuoi = new Map([ 
		['0',''],['1','หนึ่ง'],['2','สอง'],['3','สาม'],
		['4','สี่'],['5','ห้า'],['6','หก'], 
		['7','เจ็ด'],['8','แปด'],['9','เก้า'], 
]);

	const nuoi2 = new Map([ 
		['0',''],['1','เอ็ด'],['2','สอง'],['3','สาม'],
		['4','สี่'],['5','ห้า'],['6','หก'], 
		['7','เจ็ด'],['8','แปด'],['9','เก้า'], 
]);
	const satang10 = new Map([
		['',' '],
		['0',''],['1','สิบ'],['2','ยี่สิบ'],['3','สามสิบ'],
		['4','สี่สิบ'],['5','ห้าสิบ'],['6','หกสิบ'], 
		['7','เจ็ดสิบ'],['8','แปดสิบ'],['9','เก้าสิบ'], 
]);

	const satang1 = new Map([
		['',''],
		['0',''],['1','หนึ่ง'],['2','สอง'],['3','สาม'],
		['4','สี่'],['5','ห้า'],['6','หก'], 
		['7','เจ็ด'],['8','แปด'],['9','เก้า'], 
]);
	const satang12 = new Map([ 
		['0',''],['1','เอ็ด'],['2','สอง'],['3','สาม'],
		['4','สี่'],['5','ห้า'],['6','หก'], 
		['7','เจ็ด'],['8','แปด'],['9','เก้า'], 
]);

	var thName = document.getElementById("thaiName").value; // 1,000,000,000.00
	var n0 = thName.toString(); // "1,000,000,000.00"
	var n1 = n0.replace(/,/g,""); //"1000000000.00"
	var n2 ="";
	if(n1.includes('.')==false){n2 = n1 + '.00';}
	else{n2 = n1;}
	var sName = n2.split("."); // sName[0]="1000000000", sName [1]="00"
	var t1 = Array.from(sName[0]); // 1,0,0,0,0,0,0,0,0,0
	var t11 = t1.reverse(); // 0,0,0,0,0,0,0,0,0,1
	var t2 = Array.from(sName[1]); // 0,0

	var namePanLan="";
	var nameRoiLan="";
	var nameSipLan="";
	var nameLan="";
	var nameSaen="";
	var nameMuen="";
	var namePan="";
	var nameRoi="";
	var nameSip="";
                var bathUnit="";
                var satangUnit="";
	var nameNuoi="";
	var nameSipSatang="";
	var nameNuoiSatang="";
	
	if(panLan.has(t11[9])==true){namePanLan = panLan.get(t11[9]);}
	else{namePanLan="";}

	if(roiLan.has(t11[8])==true){nameRoiLan = roiLan.get(t11[8]);}
	else{nameRoiLan="";}


	if(sipLan.has(t11[7])==true){nameSipLan = sipLan.get(t11[7]);}
	else{nameSipLan="";}

	if(lan.has(t11[6])==true && sipLan.has(t11[7])==false){nameLan = lan.get(t11[6]);}
	else if(lan.has(t11[6])==true){nameLan = lan2.get(t11[6]);}
	else{nameLan='';}


	if(saen.has(t11[5])==true){nameSaen = saen.get(t11[5]);}
	else{nameSaen="";}

	if(muen.has(t11[4])==true){nameMuen = muen.get(t11[4]);}
	else{nameMuen="";}

	if(pan.has(t11[3])==true){namePan = pan.get(t11[3]);}
	else{namePan="";}


	if(roi.has(t11[2])==true){nameRoi = roi.get(t11[2]);}
	else{nameRoi="";}


	if(sip.has(t11[1])==true){nameSip = sip.get(t11[1]);}
	else{nameSip="";}


	if(nuoi.has(t11[0])==true && sip.has(t11[1])==false){nameNuoi = nuoi.get(t11[0]);}
	else{nameNuoi = nuoi2.get(t11[0]);}


	var leadNumber = namePanLan + nameRoiLan + nameSipLan + nameLan + nameSaen + nameMuen + namePan + nameRoi + nameSip + 
		nameNuoi;

	if(leadNumber==''){bathUnit ='';}
	else if(sName[1]!=='00'){bathUnit ='บาท';}
	else{bathUnit ='บาทถ้วน';}


	if(satang10.has(t2[0])==true){nameSipSatang = satang10.get(t2[0]);}
	else{nameSipSatang = "";}

	if(satang1.has(t2[1])==true && t2[0]=='0'){nameNuoiSatang = satang1.get(t2[1]);}
	else if(satang1.has(t2[1])==true){nameNuoiSatang = satang12.get(t2[1]);}
	else{nameNuoiSatang = "";}

	if(sName[1]!=='00'){satangUnit ='สตางค์';}
	else{satangUnit ='';}


	document.getElementById("romanize").value = namePanLan + nameRoiLan + nameSipLan + nameLan + nameSaen + nameMuen + namePan + nameRoi + nameSip + 
		nameNuoi + bathUnit + ' ' + nameSipSatang + nameNuoiSatang + satangUnit;
			

}

function clearText(){

	document.getElementById("romanize").value ="";
	document.getElementById("thaiName").value ="";

}

function copy() {
	var name = document.getElementById('romanize');
	name.setSelectionRange(0, 99999);
	name.select();
	navigator.clipboard.writeText(name.value);
	alert(name.value + ' copied!');
}
