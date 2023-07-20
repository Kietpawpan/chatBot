<!DOCTYPE html>
<!Copyright © 2023 MNRE-SLC | All rights reserved.>
<!Developer: servicelinkcenter@mnre.go.th>

<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
  <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="css/iRequest.css">
    <link rel="stylesheet" href="css/chat.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="icon" type="image/png" href="img/krut.png">

<title>MNRE | Chatbot</title>

</head>

<body>

<?php

$u1 = array('A88-888-888-88', 'นายมนตรี เกียรติเผ่าพันธ์','บ้านเลขที่ ตำบล อำเภอ จังหวัดนนทบุรี','081xxxxxxx','xxxxxxxxxxxx');
$u2 = array('A88-888-888-99', 'นายภู่ ภัทร์ธนาโพธิ์แกลม','98 ซอยพหลโยธิน 7 ถนนพหลโยธิน แขวงสามเสนใน เขตพญาไท กรุงเทพฯ','0982627888','9999999999999');

if(
$_POST['userID']!==$u1[0] && 
$_POST['userID']!==$u2[0])

{echo "<script type='text/javascript'>alert('ไม่พบรหัสคำขอนี้ โปรดกรอกข้อมูล');</script>";}

?>

    	<nav>
        <div class="navbar">
            <img class="dpimg" onclick="openFullScreenDP()" src="img/mnre.png" alt="">
            <div class="personalInfo">
                <label id="name">ศูนย์บริการร่วม ทส.</label>
                <label id="lastseen"></label>
            </div>
        </div>
    	</nav>
	<input type="text" id="Question" placeholder="ระบบยื่นคำขอข้อมูลข่าวสาร กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม" title="ID" disabled>
 	<div class="scrollable" id="myScrollable">
      <div id="chatting" class="chatting">
	<ul id="Answer">
   		<li><a href="#">

			<form id="frm2">
  				หมายเลขบัตรประจำตัวประชาชน<br><input type="text" id="iDCard" size="13" placeholder="xxxxxxxxxxxxx" value=
				"<?php if($_POST['userID']==$u1[0]){echo $u1[4];}
					elseif($_POST['userID']==$u2[0]){echo $u2[4];} 
					else{echo '';}
				?>" 
			>
			</form> <br>

			<form id="frm1">
  				ชื่อ-นามสกุล ผู้ขอ<br><input type="text" id="fname" size="35" placeholder="นาย...." value=
				"<?php if($_POST['userID']==$u1[0] && $_POST['nID']==$u1[4]){echo $u1[1];}
					elseif($_POST['userID']==$u2[0] && $_POST['nID']==$u2[4]){echo $u2[1];} 
					else{echo '';}
				?>" 
			><br><br>

			</form> 
			<form id="frm7">
  				ที่อยู่<br><input type="text" id="house" size="50" placeholder="บ้านเลขที่...หมู่ที่...ตำบล...อำเภอ..จังหวัด..." value=
				"<?php if($_POST['userID']==$u1[0] && $_POST['nID']==$u1[4]){echo $u1[2];}
					elseif($_POST['userID']==$u2[0] && $_POST['nID']==$u2[4]){echo $u2[2];} 
					else{echo '';}
				?>" 
			><br><br>

			</form> 
			<form id="frm54">
  				หมายเลขโทรศัพท์<br><input type="text" id="tel" size="10" placeholder="081xxxxxxx" value=
				"<?php if($_POST['userID']==$u1[0] && $_POST['nID']==$u1[4]){echo $u1[3];}
					elseif($_POST['userID']==$u2[0] && $_POST['nID']==$u2[4]){echo $u2[3];} 
					else{echo '';}
				?>" 
			><br><br>
			</form> 

			<form id="frm3">
				หน่วยงานที่มีข้อมูลข่าวสาร:
					<select name="orgName" type="text">
						<option value = "สำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม">สำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม</option>
			                        <option value = "กรมควบคุมมลพิษ">กรมควบคุมมลพิษ</option>
						<option value = "กรมส่งเสริมคุณภาพสิ่งแวดล้อม">กรมส่งเสริมคุณภาพสิ่งแวดล้อม</option>
						<option value = "สำนักงานโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม">สำนักงานโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม</option>
			                        <option value = "กรมอุทยานแห่งชาติ สัตว์ป่าและพันธุ์พืช">กรมอุทยานแห่งชาติ สัตว์ป่าและพันธุ์พืช</option>
						<option value = "กรมป่าไม้">กรมป่าไม้</option>
						<option value = "กรมทรัพยากรทางทะเลและชายฝั่ง">กรมทรัพยากรทางทะเลและชายฝั่ง</option>
			                        <option value = "กรมทรัพยากรธรณี">กรมทรัพยากรธรณี</option>
						<option value = "กรมทรัพยากรน้ำ">กรมทรัพยากรน้ำ</option>
						<option value = "กรมทรัพยากรน้ำบาดาล">กรมทรัพยากรน้ำบาดาล</option>
						<option value = "องค์การสวนสัตว์แห่งประเทศไทย">องค์การสวนสัตว์แห่งประเทศไทย</option>
						<option value = "องค์การอุตสาหกรรมป่าไม้">องค์การอุตสาหกรรมป่าไม้</option>												<option value = "องค์การบริหารจัดการก๊าซเรือนกระจก">องค์การบริหารจัดการก๊าซเรือนกระจก</option>
				        	<option value = "สำนักงานพัฒนาเศรษฐกิจจากฐานชีวภาพ">สำนักงานพัฒนาเศรษฐกิจจากฐานชีวภาพ</option>

		</select>
			</form>
             	<form name="info1" id="frm5"><br>
  				ข้อมูลข่าวสารที่ขอ <br>รายการที่ 1<br><input type="text" name="infowanted1" value="" size="60" placeholder="รายงานการประชุม..."><br>
			</form> 

            	<form name="info2" id="frm52"><br>
  				รายการที่ 2<br><input type="text" name="infowanted2" value="" size="60" placeholder="หนังสือสำนักงาน..."><br>
			</form> 

 	        <form name="info3" id="frm53"><br>
  				รายการอื่น ๆ<br><input type="text" name="infowanted3" value="" size="58" placeholder="หนังสือขอความเป็นธรรม..."><br>
			</form> <br>


            	<form name="obj" id="frm4">
  				เพื่อนำไปใช้ในการ<br><input type="text" name="myObj" value="" size="53" placeholder="จัดทำคำชี้แจงต่อคณะกรรมการ..."><br>
                                     <font size="-1">(ผู้ขอไม่จำเป็นต้องบอกเหตุผล แต่การบอก อาจช่วยให้หน่วยงานใช้ดุลพินิจอย่างถูกต้อง)</font>
			</form> 

			<form id="frm6">
				ต้องการ:
					<select name="check-Type" id="checkType">
						<option value = "ขอตรวจดู">ขอตรวจดู</option>
						<option value = "ขอสำเนา">ขอสำเนา (มีค่าธรรมเนียม)</option>
                                                <option value = "ขอสำเนาที่มีคำรับรองถูกต้อง">ขอสำเนาที่มีคำรับรองถูกต้อง (มีค่าธรรมเนียม)</option>
                                                <option value = "ขอไฟล์อิเล็กทรอนิกส์">ขอไฟล์อิเล็กทรอนิกส์</option>
					</select>
			</form>
<br>
			<div>
			<button class="btn" onclick="myFunction()"><i class="fa fa- fa-pencil-square-o"></i> พิมพ์คำขอ</button>
                        </div><br>
			<div>
	                   <textarea id="iRequest" row="30" cols="70" style="height: 300px"></textarea>
			  	 <button class="btn" onclick="copyForm()"><i class="fa fa-copy"></i> คัดลอกข้อความ</button></div><br>			
			<div id="orgEmail"></div><br>
			<textarea id="emailForCopy" row="3"></textarea><br>
			<div id="copyRight">ยื่นคำขอ</div>
			<button class="btn" onclick="sendiMail()"><i class="fa fa-apple"></i> iOS</button>
                        <button class="btn" onclick="sendGmail()"><i class="fa fa-google"></i>mail</button>
			<button class="btn" onclick="copyEmail()"><i class="fa fa-copy"></i> คัดลอกอีเมล</button>
                        
			</div>
            	</a>
		</li>
         <li><center><div id="copyRight"></div></center></li>
         </div>
         </div>
<br>
	<script type = "text/javascript" src = "js/iRequest.js"></script><br>

</body>
</html>
