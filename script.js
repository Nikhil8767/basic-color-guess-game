const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
};

let clr
const startChanging=function(){
    
    // let dd=document.body.style.backgroundColor=randomColor()
    // setInterval(dd,2000)//we cant do like this means giving variable and then putting in setinterval
    if(!clr){
        clr=setInterval(changebgcolor,3000)
    }
    function changebgcolor(){
        document.body.style.backgroundColor=randomColor()
    }
};
const stopChanging=function(){
    clearInterval(clr)
    clr=null;
}
document.querySelector('#start').addEventListener('click',startChanging)
document.querySelector('#stop').addEventListener('click',stopChanging)





console.log(randomColor());