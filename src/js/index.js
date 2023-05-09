const menuIcon=document.getElementById("menu_icon")

const menu=document.getElementById("menu")

menuIcon?.addEventListener("click",()=>{
  menu.classList.toggle("hidden")
})