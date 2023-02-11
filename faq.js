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
  for(let i=0;i<faqData.length;i++){
    createFaq(i);
    
  }
  
  function createFaq(i) {
    
    let faq=document.createElement("div");
    faq.className="faq";
    accordianBody.appendChild(faq);
    let faqheader=document.createElement("div");
    faqheader.className="faq_header";
    faq.appendChild(faqheader);
    let ques=document.createElement("h3");
    
    ques.innerHTML=faqData[i].question;
    faqheader.appendChild(ques);
    
    let showButton=document.createElement("button");
    showButton.className="show_btn";
    showButton.innerHTML="+";
    showButton.setAttribute("onclick","showFaq("+i+")");
    faqheader.appendChild(showButton);

    let ans=document.createElement("p");
    ans.innerHTML=faqData[i].answer;
    ans.classList.add("hidden");
    faq.appendChild(ans);

    faqs.push([ans,showButton]);
    
  }
 // showFaq();
  function showFaq(i){
    let d=document.getElementsByClassName("show_btn");
    let a=document.getElementsByTagName("p");
    a[i].classList.remove("hidden");
    btnStatusUpdate(a[i],d[i]);

  // for(let i=0;i<faqs.length;i++){
  //     faqs[i][1].addEventListener("click",()=>{
  //       let status=btnStatusUpdate(faqs[i][1]);
          
  //         if(status==true){
  //           faqs[i][0].classList.remove("hidden");
  //           faqs[i][1].innerHTML="-";  
  //         }
  //          else{
  //           faqs[i][0].classList.add("hidden");
  //           faqs[i][1].innerHTML="+";  
  //          }        
  //       })
  //  } 
  }

  function btnStatusUpdate(ans,btn){
    // if(item.innerHTML=="+")
    // return true;
    // else 
    // return false;

    if(btn.innerHTML==="+"){
      btn.innerHTML="-";
    }
    else{
      btn.innerHTML="+";
      ans.classList.add("hidden");
    }
  }