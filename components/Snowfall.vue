<template>
  <div>
    <canvas class= "c" style=""></canvas>
  </div>
</template>
<script>
export default {
  beforeMount(){

  function init(){
      let canvas = document.querySelector(".c");
      var w =window.innerWidth;
      var h = window.innerHeight;
      canvas.height  = h ;
      canvas.width = w;

      var ctx = canvas.getContext("2d");

      var snow_arr = [];
      let bg = new Image();
      // bg.src=("~assets/snow6.jpg")
      bg.src ="https://lh3.googleusercontent.com/uE2LrGUyQyqqL17NhBiSaD5BWnDRE0pzz2ODL6G-Oaa9aQohiTwdP8fTBOBNUI5yOlTq8k58cUCsfmWCNUdwwGTSJ-dDnLXnwtxWzqwLBQrlSQ-tBMPGoK6RZZ5eJsZ6XAFbMYTOyPGNxzKIhFREYUZMI0wKJ6ULrrbuOB-wKE4HsjQFoD2cM6QrE4_AdAWKplUDXarFZQRLTMjW1ilCobkT-ov3r1tjS94w4U8CH2bLh-94MemGVF6jTUO6guZ7hsdW0rIXJiHAml-Kz2L9ihWwLKtTl8OwC18sBEIM6MaWsZAEQTWISFNrtg4MVn9Ghrc__kXuOILeY6BPl-BTJnngLm8vHVuM-7XQLmD_AwXayw9S5LUvRKffc_ZesmepeCp0u5JbNe5CliixS3hSt4yskzBK8OcEs9viMqvstAzaNvXlAdjyoHgOLraJJPaCG_AoXY2oKFqCgkimt56u9x_t0DBZgiWbHeDpSWF-nBHBjMCOyk-7eSqrIZlLhzGoy6zgIfcb-UPPFcjKSkIrX7iwCxaOYTqyaR0Nvb2O7o2B7hWpKi_G0E1tFhxtOkn92PObNf4CdNJ2m6nYo12KVJbRAo4fqx8T-ecIzmWzXJj9E0ffEUgK_S4VJM996HJBZeiaQ7mVBO_GjVYBjulRVXivVr1wOecA1-Pitp9J25SxLYEo-rZkpA=w1688-h949-no";

      function snowfall(){
          ctx.clearRect(0,0,w,h);
          // ctx.drawImage(bg,0,0);
          ctx.drawImage(bg, 0, 0, bg.width,bg.height,0, 0,w,h);
          addFlake();
          snow();
      }
      function addFlake(){
          let x  = Math.ceil(Math.random()*w);
          var s  = Math.ceil(Math.random()*5);
          snow_arr.push({x:x,y:0,s:s})
      }
      function snow(){
          for(let i=0;i<snow_arr.length;i++){
              let flake = snow_arr[i];
              ctx.beginPath();
              ctx.fillStyle="rgba(255,255,255,.6)";
              ctx.arc(flake.x,snow_arr[i].y+=flake.s/2,flake.s/2,0,5*Math.PI);
              // ctx.shadowColor = `white`;


              // ctx.shadowBlur = 10;
              ctx.fill();
              if(snow_arr[i].y>h){
                  snow_arr.splice(i,1);
              }
          }
      }
      setInterval(snowfall,20)
  }
  window.onload  = init;
  }

}
</script>
<style scoped>
.c{
  height:95vh;
  width:93%;
  border-radius:1%;
  margin-top:1%;
  margin-left:1%;
}
@media screen and (max-width:768px){
  .c{
    height: 100%;
    width:100%;
  }
}
</style>
