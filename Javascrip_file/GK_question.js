alert("You are Ready for Test then please click on Ok button");
let data=[
    {
        Q:" प्रश्न 1: जहाज़ गोदाम (Dockyard) हमें कहाँ मिलता है? ",
        a:"(a) रंगपुर",
        b:"(b) बनवाली",
        c:"(c) धौलीवीरा",
        d:"(d) लोथल",
        ans:"ans4"
    },
    {
        Q:" प्रश्न 2: गिर राष्ट्रीय उद्यान कहाँ स्थित है? ",
        a:"(a) गुजरात",
        b:"(b) केरल",
        c:"(c) राजस्थान ",
        d:"(d) महाराष्ट्र", 
        ans:"ans1"
    },
    {
        Q:" प्रश्न 3: पृथ्वी दिवस कब मनाया जाता है? ",
        a:"(a) 1 जनवरी",
        b:"(b) 30 अप्रैल",
        c:"(c) 22 अप्रैल ",
        d:"(d) उपरोक्त में से कोई नहीं", 
        ans:"ans3"
    },
    {
        Q:"प्रश्न 4: गौतम बुद्ध का महापरिनिर्वाण (निधन) कहाँ हुआ था?",
        a:"(a) कुशीनगर",
        b:"(b)  वैशाली",
        c:"(c) सारनाथ ",
        d:"(d) बोधगया", 
        ans:"ans1"
    },
    {
        Q:" प्रश्न 5: भौतिकी (Physics) में नोबेल पुरस्कार जीतने वाले एकमात्र भारतीय कौन हैं?",
        a:"(a) जे.सी. बोस",
        b:"(b) सी.वी. रमन ",
        c:"(c) विक्रम साराभाई",
        d:"(d) एच. जे. भाभा", 
        ans:"ans2"
    },
     {
        Q:"प्रश्न 6: सिंगापुर की मुद्रा (Currency) क्या है? ",
        a:"(a)  दीनार",
        b:"(b)  डॉलर ",
        c:"(c)  वॉन",
        d:"(d)  उपरोक्त में से कोई नहीं", 
        ans:"ans2"
    },
    {
        Q:" प्रश्न 7: ‘देश बचाओ, देश बनाओ’ नारा किससे जुड़ा है?",
        a:"(a) इंदिरा गांधी ",
        b:"(b) मनमोहन सिंह",
        c:"(c) राजीव गांधी ",
        d:"(d) पी. वी. नरसिंह राव ", 
        ans:"ans4"
    },
    {
        Q:"प्रश्न 8: C.S.I.R. में ‘I’ का क्या अर्थ है? ",
        a:"(a) इंडिया",
        b:"(b) इंडस्ट्रियल  ",
        c:"(c) इन्वेस्टमेंट",
        d:"(d) इंस्ट्रूमेंट", 
        ans:"ans2"
    },
    {
        Q:"प्रश्न 9: वाराणसी किस नदी के किनारे स्थित है? ",
        a:"(a) यमुना",
        b:"(b) संगम ",
        c:"(c) तापती",
        d:"(d) गंगा", 
        ans:"ans4"
    },
    {
        Q:" प्रश्न 10: पाक स्ट्रीट कहाँ स्थित है?",
        a:"(a)  भारत और पाकिस्तान",
        b:"(b)  भारत और बांगलादेश",
        c:"(c) भारत और श्रीलंका",
        d:"(d) भारत और नेपाल", 
        ans:"ans1"
    },
    {
        Q:" प्रश्न 11: चिन्नास्वामी क्रिकेट स्टेडियम कहाँ स्थित है? ",
        a:"(a) बैंगलोर ",
        b:"(b)  चेन्नई",
        c:"(c) दिल्ली",
        d:"(d) हैदराबाद", 
        ans:"ans1"
    },
    {
        Q:" प्रश्न 12: भूकंप मापने के लिए उपयोग किया जाने वाला यंत्र कौन सा है?",
        a:"(a) लैक्टोमीटर",
        b:"(b) बैरोमीटर",
        c:"(c)सिस्मोग्राफ ",
        d:"(d) हाइड्रोमीटर", 
        ans:"ans3"
    },
    {
        Q:" प्रश्न 13: ‘आनंदमठ’ पुस्तक किसने लिखी है? ",
        a:"(a) बंकिम चंद्र चट्टोपाध्याय  ",
        b:"(b) अब्दुल फजल",
        c:"(c) कालिदास ",
        d:"(d) शरत चंद्र चट्टोपाध्याय", 
        ans:"ans1"
    },
    {
        Q:" प्रश्न 14: कौन सा देश 'नील नदी का उपहार' (Gift of Nile) के नाम से जाना जाता है?",
        a:"(a) मिस्र ",
        b:"(b) रोम",
        c:"(c) जापान",
        d:"(d) फिनलैंड", 
        ans:"ans1"
    },
    {
        Q:" प्रश्न 15: दुनिया में जूट का सबसे बड़ा उत्पादक देश कौन सा है?",
        a:"(a) चीन",
        b:"(b) नेपाल",
        c:"(c) बांगलादेश",
        d:"(d) उपरोक्त में से कोई नहीं", 
        ans:"ans3"
    },
    {
        Q:" प्रश्न 16: निम्नलिखित में से कौन सा स्थल ,अनाज के शहर, के नाम से जाना जाता है? ",
        a:"(a)  हड़प्पा",
        b:"(b) मोहनजोदड़ो",
        c:"(c) रंगपुर",
        d:"(d) उपरोक्त में से कोई नहीं ", 
        ans:"ans1"
    },
    {
        Q:"प्रश्न 17: बांदीपुर राष्ट्रीय उद्यान कहाँ स्थित है? ",
        a:"(a) गुजरात ",
        b:"(b) कर्नाटका ",
        c:"(c) केरल",
        d:"(d) तमिलनाडु", 
        ans:"ans2"
    },
    {
        Q:"प्रश्न 18: गौतम बुद्ध का महापरिनिर्वाण (निधन) किस वर्ष हुआ था? ",
        a:"(a) 283 ईसा पूर्व",
        b:"(b) 383 ईसा पूर्व",
        c:"(c) 483 ईसा पूर्व",
        d:"(d)  583 ईसा पूर्व", 
        ans:"ans3"
    },
    {
        Q:"प्रश्न 19: अर्जुन पुरस्कार किसके लिए दिया जाता है? ",
        a:"(a) आपातकाल में असाधारण सेवा",
        b:"(b) युद्धभूमि पर वीरता",
        c:"(c) खेलों में उत्कृष्ट प्रदर्शन",
        d:"(d) झुग्गी-झोपड़ी में असाधारण सेवा", 
        ans:"ans3"
    },
    {
        Q:"प्रश्न 20: ‘सत्यमेव जयते’ वाक्य किससे जुड़ा है? ",
        a:"(a)  डॉ. भीमराव अंबेडकर",
        b:"(b)  महात्मा गांधी ",
        c:"(c)  लाल बहादुर शास्त्री",
        d:"(d)  मदन मोहन मालवीय", 
        ans:"ans4"
    },
]
const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submit=document.querySelector("#submit");
const answers=document.querySelectorAll('.answer');
const Showscore=document.querySelector("#showscore ");
 
let questionCount=0;
let Score=0;
const loadquestion =() =>{
    question.innerHTML=data[questionCount].Q;
    option1.innerHTML=data[questionCount].a;
    option2.innerHTML=data[questionCount].b;
    option3.innerHTML=data[questionCount].c;
    option4.innerHTML=data[questionCount].d;
}
const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnselem)=>{
        if(curAnselem.checked){
            answer=curAnselem.id;
        }
    });
    return answer;
};
const deselectAll = () =>{
    answers.forEach((curAnselem)=>curAnselem.checked=false);
}
submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer()
    console.log(checkedAnswer);
    if(checkedAnswer==data[questionCount].ans){
      Score++;                     
    };
    questionCount++;
    deselectAll();
    if(questionCount<data.length){
        loadquestion();
    }else {
        Showscore.innerHTML = `
            <h3>Congratulations your Score : ${Score}/${data.length} <span class="icon"> 🎉<span> </h3>

        `;
      
    }
});
loadquestion();