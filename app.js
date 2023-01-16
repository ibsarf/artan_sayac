const countains=document.querySelectorAll(".countain");

countains.forEach((countain)=>{
    countain.innerText="0";

     const updateCounter=()=>{
        const count=Number(countain.getAttribute("data-target"));
        // console.log(typeof count, count);
        const num = +countain.innerText;

        const increment= count/400;

        if(num<count){
            countain.innerText=`${Math.ceil(num + increment)}`
            setTimeout(updateCounter, 1)
        }else{
            countain.innerText=count
        }

     }
     updateCounter();
})