const button = document.getElementById("bt");
button.addEventListener('click', function () {
    var inf = document.getElementById('inp').value;
    localStorage.setItem('thongtin', inf)
    var greetingElement = document.createElement('p');
      greetingElement.textContent = "thông tin :" + inf;
      document.body.appendChild(greetingElement);


})