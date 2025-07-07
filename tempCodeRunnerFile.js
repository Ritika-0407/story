 // we put all the data from the jave script  html file is empty

 var arr= [
    {dp:"https://tse2.mm.bing.net/th/id/OIP.ZYaw3Fsjwhxu84aYtKiYOwHaFj?pid=Api&P=0&h=180",story:"http://1.bp.blogspot.com/-oOSDlC_vVHI/UeN7dFDiajI/AAAAAAAAD68/cOLfVuZFbHk/s1600/Cute-Cat-Free.jpg"},
    {dp:"http://wallpapercave.com/wp/UzAi5VX.jpg",story:"https://png.pngtree.com/background/20230516/original/pngtree-adorable-cute-cats-wallpaper-picture-image_2615778.jpg"},
    {dp:"https://theawesomedaily.com/wp-content/uploads/2017/08/cute-cats-26.jpg",story:"https://cdn.wallpapersafari.com/93/39/JfLm6Y.jpg"},
    {dp:"https://wallpapers.com/images/hd/cute-cat-aesthetic-rilakkuma-hat-b4x2z9e5f61n0cha.jpg",story:"https://3.bp.blogspot.com/-AHr5OLE-g_Y/UegIwav3mxI/AAAAAAAATW4/w-cSS1cBzss/s1600/Cute-Cat-Picture-Wallpapers.jpg"},
 
];

 var storiyan = document.querySelector("#storiyan")
 var clutter = "";
 arr.forEach(function(elem, idx){
   clutter += `<div class = "story">
   <img  id="${idx}" src = "${elem.dp}" alt="">
   </div>`
 })
  
storiyan.innerHTML = clutter 
 
  storiyan.addEventListener("click", function(dets){
      document.querySelector("#full-screen").style.display = "block"
      document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
   
   setTimeout( function(){
        document.querySelector("#full-screen").style.display = "none"
   },3000)
    });
 