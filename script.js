var fullImageBox = document.getElementById("fullImageBox")
var fullImg = document.getElementById("fullImg")

function openFullImg(pic){
    fullImageBox.style.display = 'flex'
    fullImg.src = pic;
}
function closeFullImg(){
     fullImageBox.style.display = 'none'
}