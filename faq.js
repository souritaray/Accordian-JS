const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody=document.querySelector(".accordian_body");
const faqs = [];

function createFaq(i) {

  //creating elements
  let mainDiv=document.createElement("div");
  let header=document.createElement("div");
  let h3=document.createElement("h3");
  let p=document.createElement("p");
  let button=document.createElement("button");

  //giving classnames, id names, to the newly created elements
  mainDiv.className="faq";
  header.className="faq_header";
  button.className="show_btn";
  h3.textContent=faqData[i].question;
  p.textContent=faqData[i].answer;
  p.className="hidden";
  button.innerText="+";
  mainDiv.id=faqData[i].id;

  //organsing all the elements
  accordianBody.appendChild(mainDiv);
mainDiv.appendChild(header);
header.appendChild(h3);
header.appendChild(button);
mainDiv.appendChild(p);

//pushing button and paragraph to a blank array as an object
let obj={};
obj["btn"]=button;
obj["para"]=p;
faqs.push(obj);

}

for(let x=0;x<faqData.length;x++)
{
  createFaq(x);
  
}

function showFaq() {
  for (let index = 0; index < faqs.length; index++) {
    faqs[index].btn.addEventListener("click",function()
    {
      if(faqs[index].btn.innerText=="+"){
        faqs[index].para.style.display="block";
        faqs[index].btn.innerText="-";
      }
      else{
        faqs[index].para.style.display="none";
        faqs[index].btn.innerText="+";
      }
      
    })
}
  
}
showFaq();



