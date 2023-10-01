//cau1
const button = document.getElementById("bt");
button.addEventListener('click', function () {
    var inf = document.getElementById('inp').value;
    localStorage.setItem('thongtin', inf)
    var greetingElement = document.createElement('p');
      greetingElement.textContent = "thông tin :" + inf;
      document.body.appendChild(greetingElement);


})

//cau2
const button1 = document.getElementById("bt1")
button1.addEventListener('click', function ( ) {
  inf = ("")
   localStorage.clear('thongtin')
})


//cau3
const button2 = document.getElementById("bt2")
button2.addEventListener('click', function ( ) {
  localStorage.getItem('thongtin')
  if (localStorage.getItem('thongtin').value == ""){
    alert("localStorage chưa được lưu");
  }else{
    alert ("localStorage đã được lưu là:" + inf);
  }
})