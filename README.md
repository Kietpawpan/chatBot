# chatBot
This is a prototype [chatbot of MNRE Service Link Center](https://kietpawpan.github.io/chatBot/). 
This bot can
- generate customer ID with [idGen](https://kietpawpan.github.io/chatBot/IDGen.html)
- track the progress of request submission with [e-Tracking](https://kietpawpan.github.io/chatBot/iTracking.html)
- answer questions about MNRE services with [e-FAQ](https://kietpawpan.github.io/chatBot/FAQ.html)
- get a requestion for MNRE information from people with [e-Request](https://kietpawpan.github.io/info)
- make appointment with [seeMe](https://kietpawpan.github.io/chatBot/seeMe.html)
- check the way to the Minitry with [mapTo](https://kietpawpan.github.io/chatBot/mapTo.html)
- complain the service quality with [complaint](https://kietpawpan.github.io/chatBot/complaint.html)
- check school affairs with [study](https://kietpawpan.github.io/chatBot/study.html)
- romanize Thai words with [roman](https://kietpawpan.github.io/chatBot/romanName.html) (RTGS)
- convert currency number to Thai text with [bahtText](https://kietpawpan.github.io/chatBot/bahtText.html)
- calculate the amount of copy fee with [feeCal](https://kietpawpan.github.io/chatBot/feeCal.html)
- track the progress on any requests with [tracking](https://kietpawpan.github.io/chatBot/tracking.html)
- check meeting schedule with [meeting](https://kietpawpan.github.io/chatBot/meeting.html)
- generate software serial number with [serialGen](https://kietpawpan.github.io/chatBot/serialGen.html)
- check service fee with [feeCheck](https://kietpawpan.github.io/feeCheck/)
- Name an official file with [fileName](https://kietpawpan.github.io/chatBot/fileName.html)
- 
## Architecture:
1. UI is tracking.html: two inputs (Submission ID and standard English Name).
2. Accompanying e-service is the romanization program.
3. infoTracking.js get the input values and open the target url that contains the most up-to-date progress information.
4. information for each submission is a separate static file stored in the other site.     

__Algorithm:__
```
// Create the form UI, with input boxes, an output textarea, and two buttons.
// Get values from each input and format them as an eMail text.
// Allow the user to copy the output text and to paste it in his or her eMail UI.

```

## Credit
Varshith V Hegde wrote the original chatbot code, available at https://github.com/Varshithvhegde/chatbot.

## Version History 
### v1.0.5 | 26 April 2023
- for UI design
- New button needed
- More org names and eMail needed
- Privacy policy needed
- Contact by LINE chat needed

### v.1.0.4 | 25 April 2023
- Complete form
- Without an eMail sending button

### v.1.0.3 | 24 April 2023
- idGen included
- Chnage the content of index.html 
- Include IDGen.html

### v1.0.2 | 21 April 2023
- Add faq files and associated pdf files
- Change file names and paths (chat.js/chat.css/menu.js) 
- Ass more files in faq

### v1.0.1 | 21 April 2023
- Add faq A001.html
- Add 3 pdf files on ground water
- Add html folder
- Disable input in A001.html
- Set placeholder font color
- Adjust #Question font size
- Add menu icon
- Increase font-size in sendBar

### V1.0.0 | 20 April 2023
- Prototype

