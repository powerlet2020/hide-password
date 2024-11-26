const inputfield = document.querySelector('#password')
const eyeicon = document.querySelector('#icon')

eyeicon.onclick = function(){
     
    if (inputfield.type === 'password') {
        inputfield.type = 'text'
      eyeicon.src = 'images/eye-visible.png'
    } else{  
        inputfield.type = 'password'
        eyeicon.src = 'images/eye-invisble.png'
        console.log(eyeicon.src)
    }
}