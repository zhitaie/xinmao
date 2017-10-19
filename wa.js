var obj;
{
    let dc=document.querySelector('.faidao')
    console.log(dc)
    obj = document.body.scrollTop == 0 ? document.documentElement : document.body;
    dc.onclick=function () {
        let ab=100;
        let sudu=setInterval(function () {
            obj.scrollTop-=ab
            if(obj.scrollTop==0){
                clearInterval(sudu)
            }
        },50)
    }
}

// 返回顶部结束
let tops=document.querySelector('.namaa')
console.log(tops)
window.onscroll=function () {


if(obj.scrollTop>663){
    tops.style.top=0
}else{
    tops.style.top='-70px'
}
}

let zuom=document.querySelector('.leftbianbox')
let zuoli=document.querySelectorAll('.leftbianboxx')
let cotent=document.querySelectorAll('.heihahuya')
{
    zuoli.forEach(function (ele, index) {
        ele.onclick = function () {
            let st = cotent[index].offsetTop
            // obj.scrollTop=st
            animate(obj,{scrollTop:st-30},1000)
        }
    })
}

{
    window.addEventListener('scroll', function () {
        let st = obj.scrollTop;
        if(st>=663){
            zuom.style.cssText="width:40px;height:280px;"
        }else{
            zuom.style.cssText="width:0;height:0;"
        }
        for(let i=0;i<cotent.length;i++){
            if(st>=(cotent[i].offsetTop-50)){
                for(let i=0;i<cotent.length;i++){
                    zuoli[i].classList.remove('actee')
                }
                zuoli[i].classList.add('actee')
            }
        }
    })
}