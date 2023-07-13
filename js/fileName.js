const name = new Map([['นร','OPM'],['กห','MOD'],['กค','MOF'],['กต','MFA'],['กก','MOTS'],
['พม','SDHS'],['อว','HESI'],['กษ','MOAC'],['คค','MOT'],['ดศ','MDES'],['ทส','MNRE'],['พน','MENE'],['พณ','MOC'],['มท','MOI'],
['ยธ','MOJ'],['วธ','MCUL'],['รส','MOL'],['ศธ','MOE'],['สธ','MOPH'],['พศ','ONAB'],['กร','RDPB'],['รภ','ORST'],['สตช','RTP'],['ปง','AMLO'],['ปป','PACC'],

]);


const x = function (year, agency, number, attachment) {
  	if(attachment!==''){return year + '_' + agency + number + '_'+ attachment;}
	else{return year + '_' + agency + number;}
}


function gen(){
var book= document.getElementById("book").value;
var book1 = book.split(' '); // ทส, 0201.62/25
var agency = name.get(book1[0]); // ทส
var number0 =book1[1]; // 0201.62/25
var number1 = number0.toString(); // '0201.62/25'
var number2 = number1.replace('.','_'); // '0201_62/25'
var number = number2.replace('/','_'); // '0201_62_25'

var year = document.getElementById("year").value;
var attachment = document.getElementById("a").value;
var a = x(year, agency, number, attachment);
if(name.get(book1[0])==undefined){alert('ไม่พบรหัสอักษรโรมันของหน่วยงาน ' + book1[0] +  ' ในระเบียบฯ');}
else{document.getElementById("fileName").value=a;}

}

function copy() {
	const element = document.querySelector('#fileName');
	element.select();
	element.setSelectionRange(0, 99999);
 	document.execCommand('copy');
 	window.alert('copied!');
}

