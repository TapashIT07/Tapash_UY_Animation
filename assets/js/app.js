
                    // create new page starts

document.querySelector('.btn_overflow_active').addEventListener('click', function(){

document.querySelector('.full_screen').classList.add('d_block')
})


document.querySelector('.icon').addEventListener('click', function(){

document.querySelector('.full_screen').classList.remove('d_block')
})


document.querySelector('.full_screen').addEventListener('click', function(){

document.querySelector('.full_screen').classList.remove('d_block')
})

                // create new page ends



                // slider starts

var image = ['assets/image/team_img_01.png','assets/image/team_img_02.png','assets/image/testimonial_img_01.png','assets/image/about_img.png','assets/image/01-Beatles (2).png','assets/image/flickr_img_01.png','assets/image/img_js.jpg'];
 
var my_Img = document.getElementById('myImg');
var count_index = -1;
function changeImg(){  
  count_index++;
  if(count_index >= image.length) {
    count_index = 0;
    my_Img.src = image[count_index] ;
    console.log(count_index);
  } else {
    my_Img.src = image[count_index] ;
    console.log(count_index);
  }
  setTimeout('changeImg()',1000);
 }
 window.onload = changeImg();

                      // slider ends
                

                      
let popup = document.getElementById("popup");

function openPopup(){
  popup.classList.add("open_popup");
}
function closePopup(){
  popup.classList.remove("open_popup");
}