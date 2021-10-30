let bookNowBtn = document.getElementById('bookNow')
bookNowBtn.addEventListener('click', function(){

    let userName = document.getElementById('userEmail')
    let userNameVal = userName.value

    let userEmail = document.getElementById('userEmail')
    let userEmailVal = userEmail.value

    let userPax = document.getElementById('userEmail')
    let userPaxVal = userPaxvalue

    let userRemarks = document.getElementById('userEmail')
    let userRemarksVal = userRemarks.value

    bookNowBtn(userNameVal, userEmailVal,userPaxVal, userRemarksVal)

})

function BookNow(userName,userEmail,userPax,userRemarks) {
    let url = 'https://api.sheety.co/cd25a7a66ecca1aa4cf0532482379d9a/bookingApp/sheet1';
    let body = {
      booking: {
        name: userName,
        email: userEmail,
        pax: userPax,
        remarks: userRemarks
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      header: {
          "Content-Type": "application/json"
      }
    })
    .then((response) => response.json())
    .then(json => {
      // Do something with object
      console.log(json.booking);
    });
    
}