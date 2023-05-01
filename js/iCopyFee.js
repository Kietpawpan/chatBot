/* 
Copyright © 2023 Monte Kietpawpan
v.1.0.5 | April 25, 2023
MIT License 

The ThaiBath function was sligthly 
modified from Sumeta Pongpanna's code
at https://github.com/tpsumeta/ThaiBath.
We fixed the 0 and 1 numbers bugs by
adding the following codes:
  if(totalFee == 0){thaibath = "ศูนย์บาทถ้วน";}
  else if (totalFee == 1){thaibath = "หนึ่งบาทถ้วน";}
  else if (totalFee == 0.5){thaibath = "ศูนย์บาทห้าสิบสตางค์";}
  else if (totalFee < 1){thaibath = "ศูนย์"+thaibath;}	

*/

function ThaiNumberToText(Number)
{
	Number = Number.replace (/๐/gi,'0');  
	Number = Number.replace (/๑/gi,'1');  
	Number = Number.replace (/๒/gi,'2');
	Number = Number.replace (/๓/gi,'3');
	Number = Number.replace (/๔/gi,'4');
	Number = Number.replace (/๕/gi,'5');
	Number = Number.replace (/๖/gi,'6');
	Number = Number.replace (/๗/gi,'7');
	Number = Number.replace (/๘/gi,'8');
	Number = Number.replace (/๙/gi,'9');
	return 	ArabicNumberToText(Number);
}

function ArabicNumberToText(Number)
{
	var Number = CheckNumber(Number);
	var NumberArray = new Array ("ศูนย์", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า", "สิบ");
	var DigitArray = new Array ("", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน");
	var BahtText = "";
	if (isNaN(Number))
	{
		return "ข้อมูลนำเข้าไม่ถูกต้อง";
	} else
	{
		if ((Number - 0) > 9999999.9999)
		{
			return "ข้อมูลนำเข้าเกินขอบเขตที่ตั้งไว้";
		} else
		{
			Number = Number.split (".");
			if (Number[1].length > 0)
			{
				Number[1] = Number[1].substring(0, 2);
			}
			var NumberLen = Number[0].length - 0;
			for(var i = 0; i < NumberLen; i++)
			{
				var tmp = Number[0].substring(i, i + 1) - 0;
				if (tmp != 0)
				{
					if ((i == (NumberLen - 1)) && (tmp == 1))
					{
						BahtText += "เอ็ด";
					} else
					if ((i == (NumberLen - 2)) && (tmp == 2))
					{
						BahtText += "ยี่";
					} else
					if ((i == (NumberLen - 2)) && (tmp == 1))
					{
						BahtText += "";
					} else
					{
						BahtText += NumberArray[tmp];
					}
					BahtText += DigitArray[NumberLen - i - 1];
				}
			}
			BahtText += "บาท";
			if ((Number[1] == "0") || (Number[1] == "00"))
			{
				BahtText += "ถ้วน";
			} else
			{
				DecimalLen = Number[1].length - 0;
				for (var i = 0; i < DecimalLen; i++)
				{
					var tmp = Number[1].substring(i, i + 1) - 0;
					if (tmp != 0)
					{
						if ((i == (DecimalLen - 1)) && (tmp == 1))
						{
							BahtText += "เอ็ด";
						} else
						if ((i == (DecimalLen - 2)) && (tmp == 2))
						{
							BahtText += "ยี่";
						} else
						if ((i == (DecimalLen - 2)) && (tmp == 1))
						{
							BahtText += "";
						} else
						{
							BahtText += NumberArray[tmp];
						}
						BahtText += DigitArray[DecimalLen - i - 1];
					}
				}
				BahtText += "สตางค์";
			}
			return BahtText;
		}
	}
}

function CheckNumber(Number){
	var decimal = false;
	Number = Number.toString();						
	Number = Number.replace (/ |,|บาท|฿/gi,'');  		
	for (var i = 0; i < Number.length; i++)
	{
		if(Number[i] =='.'){
			decimal = true;
		}
	}
	if(decimal == false){
		Number = Number+'.00';
	}
	return Number
}

// Get data from Form 1
function copyFee() {
	
  var x = document.getElementById("frm1");
  var userName = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    userName += x.elements[i].value;
  }
  

  // Get data from Form 2
  var y = document.getElementById("frm2");
  var y1 ="";
  var j;
  for (j = 0; j < y.length ;j++) {
    y1 += y.elements[j].valueAsNumber;
  copyNumber = parseInt(y1);
  }
 
 // Get data from Form 3
  var z = document.getElementById("frm3");
  var z1 ="";
  var k;
  for (k = 0; k < z.length ;k++) {
    z1 += z.elements[k].valueAsNumber;
  approval = parseInt(z1);
  }

  let copyFeeRate = 1;
  let approvalFeeRate = 5;
  var copyFee = copyFeeRate * copyNumber;
  var approvalFee = approval * approvalFeeRate;
  var totalFee = copyFee + approvalFee;
  var thaibath = ArabicNumberToText(totalFee);
  if(totalFee == 0){thaibath = "ศูนย์บาทถ้วน";}
  else if (totalFee == 1){thaibath = "หนึ่งบาทถ้วน";}
  else if (totalFee == 0.5){thaibath = "ศูนย์บาทห้าสิบสตางค์";}
  else if (totalFee < 1){thaibath = "ศูนย์"+thaibath;}	

 // Show the code in the window alert
     window.alert(document.getElementById("iRequest").innerHTML = 
            "ค่าธรรมเนียมการขอสำเนาข้อมูลข่าวสารของสำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม\n\n1. ค่าธรรมเนียมการทำสำเนาข้อมูลข่าวสารโดยเครื่องถ่ายเอกสาร \n    จำนวน "  + copyNumber + " หน้า \n    อัตราหน้าละ " + copyFeeRate + " บาท เป็นเงิน " +   copyFee + " บาท\n 2. ค่าธรรมเนียมการให้คำรับรองถูกต้องของข้อมูลข่าวสาร \n    จำนวน " + approval + " คำรับรอง \n    อัตราคำรับรองละ " + approvalFeeRate +  " บาท เป็นเงิน " + approvalFee + " บาท\n\n*****************\nรวมค่าธรรมเนียม เป็นเงิน " + totalFee + " บาท" +"\n(" + thaibath +")" + 
"\n*****************\nศูนย์บริการร่วม กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม\nโทร. 0 2265 6223 - 5");
  
}
 
