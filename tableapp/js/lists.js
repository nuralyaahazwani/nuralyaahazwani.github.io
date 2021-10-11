let refreshNowBtn = document.getElementById('refreshNow')
refreshNowBtn.addEventListener('click' , function(){
    console.log('refreshNowBtn clicked!')
})

function GetBooking(){
    let url = 'https://api.sheety.co/cd25a7a66ecca1aa4cf0532482379d9a/bookingApp/sheet1';
    fetch(url)
        .then((response) => response.jsn())
        .them(json => {
            //do somthing about the data
            console.log(json.bookings);

            let bookingNameList = document.getElementById('bookingNameList')

            //delete all rows in the table
            for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
                bookingNameList.deleteRow(k)
            }
                
            // load all rows from sheety API
            for (let i = 0; i < json.bookings.length ; i++ ) {
                let gName = json.bookings[i].name;
                let gEmail = json.bookings[i].email;
                let gPax = json.bookings[i].npax;
                let gRemarks = json.bookings[i].remarks;
                let gId = json.bookings[i].id;

                let row = bookingNameList.insertRow(bookingNameList.rows.length)
                row.insertcell(0).innerHTML = gId
                row.insertcell(1).innerHTML = gName
                row.insertcell(2).innerHTML = gEmail
                row.insertcell(3).innerHTML = gPax
                row.insertcell(4).innerHTML = gRemarks
                row.insertcell(5).innerHTML = ''
                

            }

        });
}