const btn=document.getElementById("button")
const input=document.getElementById("input")
const seznam=document.getElementById("seznam")

btn.addEventListener("click",()=>{
   //lert("programing go brrrrrrrrrrrrrrrrr")//
    const li=document.createElement("li")
    li.textContent=input.value
    input.value=""
    seznam.appendChild(li)
    const button=document.createElement("button")
    button.style.marginLeft="5px"
    button.textContent="smazat"
    li.appendChild(button)
button.addEventListener("click", ()=>{
    seznam.removeChild(li)
})
})
