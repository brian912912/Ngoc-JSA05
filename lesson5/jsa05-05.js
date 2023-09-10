
var button = document.getElementById('bt');

button.addEventListener('click', function () {
   var yourname = document.getElementById("ten").value;
   console.log(yourname);
   var value = document.getElementById("value").value;
   localStorage.setItem('name', yourname)
   if (yourname == 'hovanngoc' && value == '09122009') {
      localStorage.setItem('name', yourname)
      localStorage.setItem('password', value)
      var greetingElement = document.createElement('p');
      greetingElement.textContent = 'Xin chào: ' + yourname + 'password là :' + value;
      document.body.appendChild(greetingElement);

   } else {
      alert("tên hoặc password đã sai")
   }
}
)

