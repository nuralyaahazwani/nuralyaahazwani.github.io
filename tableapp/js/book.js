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

function bookNow (userName, userEmail,userPax, userRemarks){

    
    console.log(userName)
    console.log(userEmail)
    console.log(userPax)
    console.log(userRemarks)
}