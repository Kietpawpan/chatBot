/* 
Copyright © 2023 Monte Kietpawpan
v.1.0.0 | May 1, 2023
MIT License 

The BAHTTEXT functions were taken from
https://github.com/earthchie/BAHTTEXT.js:
 * @name BAHTTEXT.js
 * @version 1.1.5
 * @update May 1, 2017
 * @website: https://github.com/earthchie/BAHTTEXT.js
 * @author Earthchie http://www.earthchie.com/
 * @license WTFPL v.2 - http://www.wtfpl.net/

*/

function BAHTTEXT(a,b){"use strict";
	if(void 0===b&&(b="บาทถ้วน"), a=a||0,a=a.toString().replace(/[, ]/g,""),
		isNaN(a)||Math.round(100*parseFloat(a))/100==0)return"ศูนย์บาทถ้วน";
  var e,f,h,i,c=["","สิบ","ร้อย","พัน","หมื่น","แสน","ล้าน"], d=["","หนึ่ง","สอง","สาม","สี่","ห้า","หก","เจ็ด","แปด","เก้า"],g="";
	if(a.indexOf(".")>-1)return h=a.toString().split("."), a=h[0], h[1]=parseFloat("0."+h[1]),h[1]=(Math.round(100*h[1])/100).toString(),
		h=h[1].split("."),h.length>1&&1===h[1].length&&(h[1]=h[1].toString()+"0"),
		a=parseInt(a,10)+parseInt(h[0],10),
		g=a?BAHTTEXT(a):"",parseInt(h[1],10)>0&&(g=g.replace("ถ้วน","")+BAHTTEXT(h[1],"สตางค์")),g;
	if(a.length>7){var j=a.substring(0,a.length-6),k=a.slice(-6);return BAHTTEXT(j).replace("บาทถ้วน","ล้าน")+BAHTTEXT(k).replace("ศูนย์","")}for		(e=a.length,i=0;i<e;i+=1)(f=parseInt(a.charAt(i),10))>0&&(g+=e>2&&i===e-1&&1===f&&"สตางค์"!==b?"เอ็ด"+c[e-1-i]:d[f]+c[e-1-i]);
		return g=g.replace("หนึ่งสิบ","สิบ"),
		g=g.replace("สองสิบ","ยี่สิบ"),
		(g=g.replace("สิบหนึ่ง","สิบเอ็ด"))+b}


function BAHTTEXT(num, suffix) {
    'use strict';
    
    if (typeof suffix === 'undefined') {
        suffix = 'บาทถ้วน';
    }
    
    num = num || 0;
    num = num.toString().replace(/[, ]/g, ''); // remove commas, spaces
    
    if (isNaN(num) || (Math.round(parseFloat(num) * 100) / 100) === 0) {
        return 'ศูนย์บาทถ้วน';
    } else {
        
        var t = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน'],
            n = ['', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'],
            len,
            digit,
            text = '',
            parts,
            i;
        
        if (num.indexOf('.') > -1) { // have decimal
            
            /* 
             * precision-hack
             * more accurate than parseFloat the whole number 
             */
            
            parts = num.toString().split('.');
            
            num = parts[0];
            parts[1] = parseFloat('0.' + parts[1]);
            parts[1] = (Math.round(parts[1] * 100) / 100).toString(); // more accurate than toFixed(2)
            parts = parts[1].split('.');
            
            if (parts.length > 1 && parts[1].length === 1) {
                parts[1] = parts[1].toString() + '0';
            }
            
            num = parseInt(num, 10) + parseInt(parts[0], 10);
            
            
            /* 
             * end - precision-hack
             */
            text = num ? BAHTTEXT(num) : '';
            
            if (parseInt(parts[1], 10) > 0) {
                text = text.replace('ถ้วน', '') + BAHTTEXT(parts[1], 'สตางค์');
            }
            
            return text;
            
        } else {

            if (num.length > 7) { // more than (or equal to) 10 millions

				var overflow = num.substring(0, num.length - 6);
				var remains = num.slice(-6);
				return BAHTTEXT(overflow).replace('บาทถ้วน', 'ล้าน') + BAHTTEXT(remains).replace('ศูนย์', '');

			} else {
                
                len = num.length;
                for (i = 0; i < len; i = i + 1) {
                    digit = parseInt(num.charAt(i), 10);
                    if (digit > 0) {
                        if (len > 2 && i === len - 1 && digit === 1 && suffix !== 'สตางค์') {
                            text += 'เอ็ด' + t[len - 1 - i];
                        } else {
                            text += n[digit] + t[len - 1 - i];
                        }
                    }
                }
                
                // grammar correction
                text = text.replace('หนึ่งสิบ', 'สิบ');
                text = text.replace('สองสิบ', 'ยี่สิบ');
                text = text.replace('สิบหนึ่ง', 'สิบเอ็ด');
                
                return text + suffix;
            }
            
        }
        
    }
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
  var thaibath = BAHTTEXT(totalFee);

// Add separators to numbers
  var fcopyNumber = copyNumber.toLocaleString('en-US');
  var fapproval = approval.toLocaleString('en-US');
  var fcopyFee = copyFee.toLocaleString('en-US');
  var fapprovalFee = approvalFee.toLocaleString('en-US');
  var ftotalFee = totalFee.toLocaleString('en-US');

 // Show the result
     window.alert(document.getElementById("iRequest").innerHTML = 
            "ค่าธรรมเนียมการขอสำเนาข้อมูลข่าวสาร\nสำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม\n\n1. ค่าธรรมเนียมการทำสำเนาข้อมูลข่าวสารโดยเครื่องถ่ายเอกสาร \n    จำนวน "  + fcopyNumber + " หน้า \n    อัตราหน้าละ " + copyFeeRate + " บาท เป็นเงิน " +   fcopyFee + " บาท\n 2. ค่าธรรมเนียมการให้คำรับรองถูกต้องของข้อมูลข่าวสาร \n    จำนวน " + fapproval + " คำรับรอง \n    อัตราคำรับรองละ " + approvalFeeRate +  " บาท เป็นเงิน " + fapprovalFee + " บาท\n\n*****************\nรวมค่าธรรมเนียม เป็นเงิน " + ftotalFee + " บาท" +"\n(" + thaibath +")" + 
"\n*****************\nศูนย์บริการร่วม กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม\nโทร. 0 2265 6223 - 5");
  
}
 
