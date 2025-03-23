const nam = document.getElementById("nam");
const nu = document.getElementById("nu");
const nut = document.getElementById("Nut");
const noi = document.getElementById("kl");
const tuoi = document.getElementById('Tuoi');
const noi2 = document.getElementById('iu');
nut.onclick = function (){
  if (nam.checked) {
    noi.textContent = ' thằng này gay ';
  }
  if (nu.checked){
    noi.textContent = ' thằng này thẳng ';
  }
  if (nam.checked & nu.checked){
    noi.textContent = ' thằng dị giáo ';
  }
  let value = Number(Tuoi.value);
  if (value < 17) {
    noi2.textContent = ' thằng ấm dâu';
    window.alert("Thằng ấm dâu");
  }
  if (value >= 17){
    noi2.textContent = ' 🥳';
    
  }
};

