alert("You are Ready for Test then please click on Ok button");
let data=[
    {
        Q:" 1. 125 का वर्गमूल (Square root) क्या है? ",
        a:"(a) 11",
        b:"(b) 12",
        c:"(c) 11.18",
        d:"(d) 13",
        ans:"ans3"
    },
    {
        Q:" 2. 20% का 25% कितना होगा? ",
        a:"(a) 5%",
        b:"(b) 4%",
        c:"(c) 6%",
        d:"(d) 8%", 
        ans:"ans1"
    },
    {
        Q:"3. 2:3 और 4:5 का समानुपात क्या होगा? ",
        a:"(a) 8:15",
        b:"(b) 6:10 ",
        c:"(c) 1:2",
        d:"(d) 2:5", 
        ans:"ans1"
    },
    {
        Q:"4. एक वस्तु पर 20% की छूट के बाद उसका मूल्य ₹800 है। मूल मूल्य कितना था? ",
        a:"(a) ₹1000",
        b:"(b) ₹850",
        c:"(c) ₹900",
        d:"(d) ₹960", 
        ans:"ans1"
    },
    {
        Q:"5. एक ट्रेन 90 किमी/घंटा की रफ्तार से चलती है। 2 घंटे में कितनी दूरी तय करेगी? ",
        a:"(a) 120 किमी",
        b:"(b) 150 किमी ",
        c:"(c) 180 किमी",
        d:"(d) 200 किमी", 
        ans:"ans3"
    },
     {
        Q:" 6. साधारण ब्याज का सूत्र क्या है? ",
        a:"(a) (P×R×T)/100",
        b:"(b)  (P+R+T)/100",
        c:"(c)  (P×T)/R",
        d:"(d) (R×T)/P", 
        ans:"ans1"
    },
    {
        Q:"7. यदि CP = ₹500 और SP = ₹550 हो, तो लाभ प्रतिशत क्या है? ",
        a:"(a)  5%",
        b:"(b) 10%",
        c:"(c) 12% ",
        d:"(d) 15%", 
        ans:"ans2"
    },
    {
        Q:" 8. यदि 3A = 2B, तो A:B क्या होगा?",
        a:"(a) 2:3",
        b:"(b) 3:2",
        c:"(c) 1:2",
        d:"(d) 2:1", 
        ans:"ans1"
    },
    {
        Q:" 9. दो संख्याओं का औसत 25 है। उनका योगफल क्या होगा?",
        a:"(a) 40",
        b:"(b) 50",
        c:"(c) 60",
        d:"(d) 70", 
        ans:"ans2"
    },
    {
        Q:"10. यदि X : Y = 2 : 3 और Y : Z = 4 : 5, तो X : Z क्या होगा? ",
        a:"(a) 8:15 ",
        b:"(b) 2:5",
        c:"(c) 3:5",
        d:"(d) 4:5", 
        ans:"ans1"
    },
    {
        Q:" 11. किसी संख्या का 15% = 60 है, संख्या क्या है? ",
        a:"(a) 400",
        b:"(b) 300",
        c:"(c) 500",
        d:"(d) 450", 
        ans:"ans3"
    },
    {
        Q:"12. यदि SP = ₹720 और लाभ प्रतिशत = 20%, तो CP कितना है? ",
        a:"(a) ₹600 ",
        b:"(b) ₹650",
        c:"(c) ₹700",
        d:"(d) ₹750", 
        ans:"ans1"
    },
    {
        Q:"13. दो संख्याओं का LCM = 60 और HCF = 6 है। यदि एक संख्या 12 है तो दूसरी क्या होगी? ",
        a:"(a) 24",
        b:"(b) 30",
        c:"(c) 36",
        d:"(d) 48", 
        ans:"ans2"
    },
    {
        Q:" 14. 1/2 + 1/3 = ? ",
        a:"(a) 2/5",
        b:"(b) 3/5",
        c:"(c) 5/6",
        d:"(d) 1", 
        ans:"ans3"
    },
    {
        Q:"15. किसी त्रिभुज का क्षेत्रफल = (1/2 × आधार × ऊँचाई) होता है। यदि आधार = 10 सेमी और ऊँचाई = 6 सेमी हो, तो क्षेत्रफल क्या होगा? ",
        a:"(a) 30 सेमी²",
        b:"(b) 60 सेमी²",
        c:"(c) 40 सेमी² ",
        d:"(d) 50 सेमी²", 
        ans:"ans1"
    },
    {
        Q:" 16. यदि x + 1/x = 5 हो, तो x² + 1/x² का मान क्या होगा? ",
        a:"(a) 21",
        b:"(b) 23",
        c:"(c) 27",
        d:"(d) 29", 
        ans:"ans1"
    },
    {
        Q:"17. यदि किसी वस्तु पर 25% छूट के बाद ₹600 में बेची गई, तो वस्तु का मूल मूल्य क्या था? ",
        a:"(a) ₹700",
        b:"(b) ₹750",
        c:"(c) ₹800",
        d:"(d) ₹900", 
        ans:"ans3"
    },
    {
        Q:" 18. एक आदमी 2 घंटे में 60 किमी और अगले 1 घंटे में 30 किमी चलता है। उसकी औसत गति क्या है? ",
        a:"(a) 30 किमी/घंटा",
        b:"(b) 40 किमी/घंटा",
        c:"(c) 45 किमी/घंटा",
        d:"(d) 50 किमी/घंटा", 
        ans:"ans2"
    },
    {
        Q:"19. एक व्यक्ति ने ₹12,000 की राशि को 2 वर्षों के लिए 10% प्रति वर्ष साधारण ब्याज पर निवेश किया। ब्याज कितना होगा?",
        a:"(a)  ₹2,400",
        b:"(b)  ₹2,000 ",
        c:"(c)  ₹1,200",
        d:"(d)  ₹1,500", 
        ans:"ans1"
    },
    {
        Q:"20. यदि 1/x + 1/y = 1/4 और x + y = 6, तो xy का मान क्या होगा? ",
        a:"(a)  8",
        b:"(b)  10 ",
        c:"(c)  12",
        d:"(d)  16", 
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
const Showscore = document.querySelector("#showscore");

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