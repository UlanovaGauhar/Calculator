const text=document.getElementById('main-heading')
text.innerHTML='Popular products'
text.style.color='red'
text.style.fontSize='160px' 
const side=document.getElementById('aside')   
side.remove() 
let section=document.getElementsByClassName("section")
 let last=section.className('last')
 let redName=section.className('red')

let highText=document.getElementsByClassName('small heading ')
highText.classList.remove('small headig')



let image=document.createElement('img')
image.setAttribute("alt","eror")
image.setAttribute("src","https://wallpapers.com/images/featured/4k-nature-ztbad1qj8vdjqe0p.jpg")
section.appendChild(image)

