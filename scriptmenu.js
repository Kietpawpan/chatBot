// This code was modified from https://github.com/Varshithvhegde/chatbot

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    var name="";
    if(inputText.toLowerCase().includes("my name is")){
        name=inputText.substring(inputText.indexOf("is")+2);
        if(name.toLowerCase().includes("varshith")){
            sendTextMessage("Ohh! That's my name too");
            
        }
        inputText="input";
    }
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("ขอข้อมูลข่าวสาร<div class='social'><a target='_blank' href='https://kietpawpan.github.io/iRequest/index.html'> <div class='socialItem'><img class='socialItemI' src='images/info.svg' alt=''></div> </a></div>ติดตามผลการพิจารณาคำขอ พิมพ์ว่า see ที่นี่ค่ะ<div class='social'><a target='_blank' href='index.html'> <div class='socialItem'><img class='socialItemI' src='images/track.svg' alt=''></div> </a></div>ชำระค่าธรรมเนียม<div class='social'><a target='_blank' href='https://kietpawpan.github.io/iRequest/CopyFee.html'> <div class='socialItem'><img class='socialItemI' src='images/pay.svg' alt=''></div> </a></div>Chat กับเจ้าหน้าที่ <div class='social'><a target='_blank' href='https://lin.ee/O9TyPRw'><div class='socialItem'><img class='socialItemI' src='images/officer.svg' alt=''></div></a></div>นัดรับข้อมูล<div class='social'><a target='_blank' href='https://kietpawpan.github.io/iRequest/SeeMe.html'> <div class='socialItem'><img class='socialItemI' src='images/go.svg' alt=''></div> </a></div>ขอคำปรึกษา<div class='social'><a target='_blank' href='FAQ.html'> <div class='socialItem'><img class='socialItemI' src='images/FAQ.svg' alt=''></div> </a></div>แนะนำติชม<div class='social'><a target='_blank' href='https://github.com/Kietpawpan/chatBot/issues'> <div class='socialItem'><img class='socialItemI' src='images/comment.svg' alt=''></div> </a></div>");




            }, 2000);
                break;
              
   
        // case "about":

        //     break;

    
        default:
            setTimeout(() => {
                sendTextMessage("โปรดกดปุ่ม <a class='alink'> home </a></span> ด้านล่างก่อนค่ะ");
            }, 2000);
            break;
    }


}


function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
