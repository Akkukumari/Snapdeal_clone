document.querySelector("#register").addEventListener("click", () => {
    document.querySelector(".card").classList.add("active");
    
})
document.querySelector(".card>i").addEventListener("click", () => {
    document.querySelector(".card").classList.remove("active");
    
})
document.querySelector("#login").addEventListener("click", () => {
    document.querySelector(".card").classList.add("active");
    
})
document.querySelector(".card>i").addEventListener("click", () => {
    document.querySelector(".card").classList.remove("active");
    
})

let userform = document.getElementById("userform");
let userform_login = document.getElementById("userform3");
let email = document.getElementById("email");
let email_signup = document.getElementById("email_signup");
let btn = document.getElementById("continue");
let BTN = document.getElementById("continue_login");
let code = document.getElementById("code");
let OTP;
let user_name="";
let username=document.getElementById("user_name");
let data = JSON.parse(localStorage.getItem("account-data")) || [];

btn.addEventListener("click", (event) => {
    event.preventDefault();
    if (data.length < 1) {
        email_signup.value = email.value;
        document.querySelector(".card").classList.remove("active");
        document.querySelector(".card3").classList.add("active");
        document.querySelector(".card3>i").addEventListener("click", () => {
            document.querySelector(".card3").classList.remove("active");
        })
    } else {
        for (let i = 0; i < data.length; i++) {
            if (email.value == data[i].email) {
                user_name=data[i].name;
                document.querySelector(".card").classList.remove("active");
                document.querySelector(".card2").classList.add("active");
                document.querySelector(".card2>i").addEventListener("click", () => {
                document.querySelector(".card2").classList.remove("active");
                })
                OTP = Math.ceil(Math.random() * 10000);
                setTimeout(() => {
                    alert("OTP For Login To Shopping deal is " + OTP)
                }, 1000)
            } else {
                email_signup.value = email.value;
                document.querySelector(".card").classList.remove("active");
                document.querySelector(".card3").classList.add("active");
                document.querySelector(".card3>i").addEventListener("click", () => {
                document.querySelector(".card3").classList.remove("active");
                })
            }
        }
    }
});

BTN.addEventListener("click", (e) => {
    e.preventDefault();
    if (OTP == code.value) {
        alert("Login Successful");
        document.querySelector(".card").classList.remove("active");
        document.querySelector(".card2").classList.remove("active");
        document.querySelector(".card3").classList.remove("active");
        username.innerText=user_name;
    } else {
        alert("OTP Incorrect");
        document.querySelector(".card2").classList.remove("active");
        document.querySelector(".card").classList.add("active");
        document.querySelector(".card>i").addEventListener("click", () => {
            document.querySelector(".card").classList.remove("active");
        })
    }
})

userform_login.addEventListener("submit", (e) => {
    e.preventDefault();
    let formdata = {
        email: userform_login.email_signup.value,
        mobile: userform_login.mobile.value,
        name: userform_login.name.value,
        dob: userform_login.dob.value,
        password: userform_login.password.value
    }
    user_name=formdata.name;
    data.push(formdata);
    localStorage.setItem("account-data", JSON.stringify(data));
    document.querySelector(".card3").classList.remove("active");
    document.querySelector(".card2").classList.add("active");
    document.querySelector(".card2>i").addEventListener("click", () => {
        document.querySelector(".card2").classList.remove("active");
    })
    OTP = Math.ceil(Math.random() * 10000);
    setTimeout(() => {
        alert("OTP For Login To Shopping deal is " + OTP)
    }, 1000)
})



