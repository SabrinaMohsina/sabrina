//login Button functionality
document.getElementById('loginButton').addEventListener('click' , function(e){
   e.preventDefault()
   const mobileNumber = 123456578900;
    const pinNumber = 1234;
    const mobileNumberValue = document.getElementById('mobile-number').value ;
    const mobileNumberConverted = parseInt (mobileNumberValue);

    const pinNumberValue = document.getElementById('pin-number').value ;
    const pinNumberConverted = parseInt (pinNumberValue);

    if(mobileNumberConverted === mobileNumber && pinNumberConverted === pinNumber  ){
        console.log('matched')
        window.location.href= './home2.html'
    }else{
        alert('invalid')
    }
    
})