alert("You are Ready for Test then please click on Ok button");
let data=[
    {
        Q:" Q1. Choose the one-word substitution for the following group of words: ",
        a:"(a)  Astronomer ",
        b:"(b) Astrologer",
        c:"(c) Biologist",
        d:"(d)  Geologist",
        ans:"ans1"
    },
    {
        Q:" Q2. Choose the word that is similar in meaning to the given word: ",
        a:"(a) Flawless",
        b:"(b) Imperfect",
        c:"(c) Ordinary",
        d:"(d) Unusual", 
        ans:"ans2"
    },
    {
        Q:" Q3. Choose the word that is similar in meaning to the given word: ",
        a:"(a) Industrious",
        b:"(b) Lazy",
        c:"(c) Carefull",
        d:"(d) Attentive", 
        ans:"ans2"
    },
    {
        Q:"Q4. Identify the word that is incorrectly spelt",
        a:"(a) Accommodate",
        b:"(b) Accurrence",
        c:"(c) Embrrass",
        d:"(d)  Reicive", 
        ans:"ans1"
    },
    {
        Q:" Q5. Choose the correct meaning of the given idiom:",
        a:"(a)  To do something in the easiest, cheapest, or quickest way ",
        b:"(b)  To decorate nicely",
        c:"(c)  To take a shortcut physically",
        d:"(d)  To be very precise", 
        ans:"ans4"
    },
     {
        Q:" Q6. Select the most appropriate word to fill in the blank. ",
        a:"(a) is going",
        b:"(b) are going",
        c:"(c) were going",
        d:"(d) been going", 
        ans:"ans4"
    },
    {
        Q:" Q7. Change the following into indirect speech ,He said, “I am going to the market",
        a:"(a)   He said that he is going to the market.",
        b:"(b)   He said that I am going to the market.",
        c:"(c)   He said that he was going to the market",
        d:"(d)  He said that he will be going to the market.", 
        ans:"ans4"
    },
    {
        Q:"Q8. I am sorry _______the mistake. ",
        a:"(a)  From",
        b:"(b)  With",
        c:"(c)  For",
        d:"(d)  At", 
        ans:"ans3"
    },
    {
        Q:"Q9. He ______her that she would pass.",
        a:"(a) insured",
        b:"(b) ensured",
        c:"(c) assumed",
        d:"(d) assured", 
        ans:"ans4"
    },
    {
        Q:"Q10. Your father ______worry. I’m a very careful driver. ",
        a:"(a)  needn’t",
        b:"(b)  none ",
        c:"(c)  can’t",
        d:"(d) doesn’t", 
        ans:"ans1"
    },
    {
        Q:"Q11. The _________chosen for construction of the building is in the heart of the city. ",
        a:"(a) cite",
        b:"(b) slight",
        c:"(c) sight",
        d:"(d) site", 
        ans:"ans4"
    },
    {
        Q:" Q12. He runs more faster than I. ",
        a:"(a) than I",
        b:"(b) No error",
        c:"(c) He runs",
        d:"(d) more faster", 
        ans:"ans4"
    },
    {
        Q:"Q13. The boat was drowned.",
        a:"(a)  sank",
        b:"(b) No Improveme",
        c:"(c) was sunk",
        d:"(d)  was drown", 
        ans:"ans1"
    },
    {
        Q:"Q14.Either Kiran or Mala is sure to be chosen for the school debate.",
        a:"(a) Either Kiran or Mala will",
        b:"(b) No Improvement",
        c:"(c) Either Kiran or Mala are sure to",
        d:"(d) Either Kiran nor Mala are sure to", 
        ans:"ans1"
    },
    {
        Q:"Q15. Tom was standing besides the school house poster, towards him.",
        a:"(a)  stood beside the school-house poster",
        b:"(b) No Improvement",
        c:"(c) standing beside the school-house poster",
        d:"(d)  stand besides the school house poster", 
        ans:"ans3"
    },
    {
        Q:"Q16.One who loves books",
        a:"(a)  Bibliophile",
        b:"(b)  Bibliophagist",
        c:"(c)  Bibliophoebe",
        d:"(d) Bibliographer", 
        ans:"ans1"
    },
    {
        Q:"Q17. Speaking without preparation ",
        a:"(a) Deliberate ",
        b:"(b) Fluent",
        c:"(c)  Loquacious",
        d:"(d) Extempore", 
        ans:"ans4"
    },
    {
        Q:"Q18. Someone able to use both hands with equal skill",
        a:"(a) Ambivalent",
        b:"(b) Amphibious",
        c:"(c) Ambiguous",
        d:"(d) Ambidextrous", 
        ans:"ans4"
    },
    {
        Q:"Q19. Find the correctly spelt word. ",
        a:"(a)  pleintive",
        b:"(b) sustein",
        c:"(c)  villain",
        d:"(d)  alleince", 
        ans:"ans3"
    },
    {
        Q:"Q20.  His investments helped him make a killing in the stock market. ",
        a:"(a) lose money quickly ",
        b:"(b) plan a murder quickly",
        c:"(c)  murder someone quickly ",
        d:"(d) make money quickly ", 
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