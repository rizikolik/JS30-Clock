function setDate(){
   const now=new Date();               //variables
   const seconds=now.getSeconds();
   const minutes=now.getMinutes();
   const hours=now.getHours();
   const secondsDegree=((seconds/60)*360 +90);
   const minutesDegree=((minutes/60)*360 +90);
   const hoursDegree=((hours/12)*360)+90;
   secondHand.style.transform=`rotate(${secondsDegree}deg)`;   //convertors
   minutesHand.style.transform=`rotate(${minutesDegree}deg)`;
   hoursHand.style.transform=`rotate(${hoursDegree}deg)`;
   
}
const secondHand=document.querySelector(".Clock-Seconds");  //transformers!
const minutesHand=document.querySelector(".Clock-Minutes");
const hoursHand=document.querySelector(".Clock-Hours");


setInterval(setDate,1000);