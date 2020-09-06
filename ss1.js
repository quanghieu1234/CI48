let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let email = document.getElementById("email")
let pnumber = document.getElementById("pnumber")

let obj = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
}
let collection = "users"
//them du lieu vao trong ban ghi
async function addObj(obj) {
    await firebase.firestore().collection(users).add({
        firstName: obj.firstName,
        lastName: obj.lastName,
        email: obj.email,
        phoneNumber: obj.phoneNumber,
    })
}

function addData() {
    if(isNaN(Number(pnumber.value)) == false){
        obj.firstName = fname.value
        obj.lastName = lname.value
       
        obj.email = email.value
        obj.phoneNumber = Number(pnumber.value)
        addObj(obj)
        alert('Dk thanh cong')
    } else {
        alert('vui long nhap sdt')
    }
}


async function readData() {
    let result = await firebase.firestore().collection(users).get();
    for (let doc of result.docs) {
        console.log(doc.data())
    }
}
//updatephonenumber thanh dau 84

async function updatePhoneNumber() {
    let result = await firebase.firestore().collection(users).get();
    for (let doc of result.docs) {
        let newPhonenumber = Number('84' + doc.data().phoneNumber)
        await firebase.firestore().collection(users).doc(doc.id).update({
            phoneNumber : newPhonenumber,
        })
    }
}


//xoa cac ban ghi co last name turng nhau: ko lam dc
