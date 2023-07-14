const name = new Map([['นร','OPM'],['กห','MOD'],['กค','MOF'],['กต','MFA'],['กก','MOTS'],
['พม','SDHS'],['อว','HESI'],['กษ','MOAC'],['คค','MOT'],['ดศ','MDES'],['ทส','MNRE'],['พน','MENE'],['พณ','MOC'],['มท','MOI'],
['ยธ','MOJ'],['วธ','MCUL'],['รส','MOL'],['ศธ','MOE'],['สธ','MOPH'],['พศ','ONAB'],['กร','RDPB'],['รภ','ORST'],['สตช','RTP'],['ปง','AMLO'],['ปป','PACC'],
['กบ','KBI'],['กท','BKK'],['กจ','KRI'],['กส','KSN'],['กพ','KPT'],['ขก','KKN'],['จบ','CHI'],['ฉช','CCO'],['ชบ','CBI'],['ชน','CNT'],['ชย','CPM'],['ชพ','CPN'],['ชร','CRI'],['ชม','CMI'],
['ตง','TRG'],['ตร','TRT'],['นย','NYK'],['นฐ','NPT'],['นพ','NPM'],['นม','NMA'],['นศ','NRT'],['นว','NSN'],['นบ','NBI'],['นธ','NWT'],['นน','NAN'],['บก','BKN'],['บร','BRM'],['ปท','PTE'],
['ปข','PKN'],['ปจ','PRI'],['ปน','PTN'],['พย','PYO'],['อย','AYA'],['พง','PNA'],['พท','PLG'],['พจ','PCK'],['พล','PLK'],['พบ','PBI'],['พช','PNB'],['พร','PRE'],['ภก','PKT'],['มค','MKM'],
['มห','MDH'],['มส','MSN'],['ยส','YST'],['ยล','YLA'],['รน','RNG'],['รอ','RET'],['รย','RYG'],['รบ','RBR'],['ลบ','LRI'],['ลป','LPG'],['ลพ','LPN'],['ลย','LEI'],['ศก','SSK'],['สน','SNK'],
['สข','SKA'],['สต','STN'],['สป','SPK'],['สส','SKM'],['สค','SKN'],['สก','SKW'],['สบ','SRI'],['สห','SBR'],['สท','STI'],['สพ','SPB'],['สฎ','SNI'],['สร','SRN'],['นค','SKI'],['นภ','NBP'],
['อจ','ACR'],['อด','UDN'],['อต','UTT'],['อน','UTI'],['อบ','UBN'],['อท','ATG']


]);


const x = function (year, agency, number, attachment) {
  	if(attachment!==''){return year + '_' + agency + number + '_'+ attachment;}
	else{return year + '_' + agency + number;}
}


function gen(){
var book  = document.getElementById("book").value;
book1='';
if(book.length==0){book1='xx yy';}
else{book1=book;}


var book2 = book1.split(' ', 2); 

var agency = name.get(book2[0]); // ทส xx
var number0 = book2[1]; // 0201.62/25 yy
var number1 = number0.toString(); // '0201.62/25'
var number2 = number1.replaceAll('.', '_'); 
var number3 = number2.replaceAll('/', '_'); 
var number4 = number3.replaceAll('๐', '0'); 
var number5 = number4.replaceAll('๑', '1'); 
var number6 = number5.replaceAll('๒', '2');
var number7 = number6.replaceAll('๓', '3');
var number8 = number7.replaceAll('๔', '4');
var number9 = number8.replaceAll('๕', '5');
var number10 = number9.replaceAll('๖', '6');
var number11 = number10.replaceAll('๗', '7');
var number12 = number11.replaceAll('๘', '8');
var number = number12.replaceAll('๙', '9');

var year = document.getElementById("year").value;
var attachment = document.getElementById("a").value;
var a = x(year, agency, number, attachment);

if(agency==undefined){alert('ไม่พบรหัสอักษรโรมันของหน่วยงานในระเบียบฯ');}
else{document.getElementById("fileName").value=a;}

}

function copy() {
	const element = document.querySelector('#fileName');
	element.select();
	element.setSelectionRange(0, 99999);
 	document.execCommand('copy');
 	window.alert('copied!');
}

