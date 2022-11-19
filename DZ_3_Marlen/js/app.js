const tabs = document.querySelectorAll('.tabheader__item')
const tabContent = document.querySelectorAll('.tabcontent')
const tabParent = document.querySelector('.tabheader__items')
let i =0

const hideContent =()=>{
    tabs.forEach((item)=>{
        item.classList.remove('tabheader__item_active')
    })
    tabContent.forEach((item)=>{
        item.style.display = 'none'
      
    })
}
const showContent=(i=0)=>{
    tabs[i].classList.add('tabheader__item_active')
    tabContent[i].style.display ='block'
}
hideContent()
showContent()

const setTime = setInterval(()=>{
    i++
    if(i<4){
        hideContent()
        showContent(i)
    }else{
        i=0
        hideContent()
        showContent(i)
    }
},2000)

tabParent.addEventListener('click',(e)=>{
    if(e.target.classList.contains('tabheader__item')){
        tabs.forEach((item,i)=>{
            if(item === e.target){
                clearInterval(setTime)
                hideContent()
                showContent(i)
            }
        })
    }
})


//modal
const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")
let countModal = 0

const openModal = () =>{
    countModal++
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}
modalTrigger.addEventListener('click',openModal)

const closeModal = () =>{
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}
closeModalBtn.addEventListener('click',closeModal)

modal.addEventListener('click',(e)=>{
    if(e.target.classList.contains('modal')){
        closeModal()
    }
})

// maodal hw

const openByScroll =()=> {
    window.addEventListener('scroll', () => {

        const documentHeight = document.documentElement.scrollHeight;
        const currentHeight = window.pageYOffset + document.documentElement.clientHeight;
        const isScrollEnd = Math.abs(documentHeight - currentHeight) < 15;
        const docTop=document.documentElement.scrollTop
        if(isScrollEnd && countModal===0){
            openModal()
        }
        if(docTop>3460){
            openModal()
        }
    }
)
}
openByScroll()