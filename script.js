
// Contact form varification
const userName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
const obs = document.querySelector(".student-count");
const proud = document.querySelector(".proud");
submit.addEventListener("click", (element) => {
    element.preventDefault();
    validate();
    finalValidate();
});

//more email validate
const isEmail = (emailVal) => {
    let pos = emailVal.indexOf("@");
    let dotPos = emailVal.lastIndexOf(".");

    if (pos < 1) {
        return false;
    }
    else if (dotPos == emailVal.length - 1) {
        return false;
    }
    else if (dotPos <= pos + 3) {
        return false;
    }
    else {
        return true;
    }
}
function validate() {
    const nameVal = userName.value.trim();
    const emailVal = email.value.trim();
    const messageVal = message.value.trim();
    //Validate name
    if (nameVal == '') {
        setErrorMessage(userName, "Name cannot be blank");
    }
    else {
        setSucessMessage(userName);
    }

    //Email validation
    if (emailVal == '') {
        setErrorMessage(email, "Email cannot be blank");
    }
    else if (!isEmail(emailVal)) {
        setErrorMessage(email, "Not a valid email");
    }
    else {
        setSucessMessage(email);
    }

    //Message field verification
    if (messageVal == '') {
        setErrorMessage(message, "Message cannot be empty");
    }
    else {
        setSucessMessage(message);
    }
}
function setErrorMessage(input, errormsg) {
    const error = document.getElementById("error-message");
    const par = input.parentElement;
    par.classList.add("error");
    par.classList.remove("sucess");
    error.style.visibility = "visible";
    error.innerText = errormsg;
}
function setSucessMessage(input) {
    const par = input.parentElement;
    par.classList.remove("error");
    par.classList.add("sucess");
    const error = document.getElementById("error-message");
    // error.style.visibility="hidden";
}

function finalValidate() {
    const totalClass = document.querySelectorAll(".sucess");
    {
        if (totalClass.length == 3) {
            location.href = `getdata\php`;
        }
    }
}

// Student count
const observ = new IntersectionObserver((items, obser) => {
    const firstEnt = items[0];
    if (!firstEnt.isIntersecting) {
        return false;
    }
    proud.classList.add("we-proud");
    const userCount = document.querySelectorAll(".count-student");
    userCount.forEach((element) => {
        element.innerHTML = 0;
        const count = () => {
            const target = +element.getAttribute("data-target");
            let incVal = Number(target / 40);
            let starValue = Number(element.innerText);
            if (starValue < target) {
                element.innerText = `${Math.ceil(starValue + incVal)}`;
                setTimeout(count, 60);
            }
        }
        count();
    });
    observ.unobserve(obs);
}, {
    root: null,
    threshold: 0,
}
);
observ.observe(obs);


//Image slider
const ac = document.querySelectorAll(".scontrol");
const test = document.querySelectorAll(".testimonial-person");
let flag = 1;
ac.forEach((element, index) => {
    element.addEventListener("click", () => {
        function showSlide() {
            for (let i = 0; i < test.length; i++) {
                if (i == index) {
                    test[i].classList.add("testimonial-active");
                    ac[i].classList.add("controller-activate");
                }
                else {
                    test[i].classList.remove("testimonial-active");
                    ac[i].classList.remove("controller-activate");
                }
            }
        }
        showSlide();
    });
});

//hamburger
const mobileIcon = document.querySelector(".mobile-icon");
const hamburger = document.querySelector(".second-nevbar");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("nevbar-activated");
});

// image slide
// i=0;
// showImgSlide()
// function showImgSlide(){
//     let slide = document.getElementsByClassName("slider-image");
//     i++;
//     for(let j=0;j<slide.length;j++){
//         if(i==j){
//             slide[j].classList.add("img-slide-active");
//         }
//         else{
//             slide[i].classList.remove("img-slide-active");
//         }
//     }
//     if(i==4){
//         i=0;
//     }
//     setTimeout(showImgSlide,2000);
// }
const bottomToTop = () => {
    const topHeader = document.querySelector(".top-header");
    topHeader.scrollIntoView({ behavior: "smooth" });
}
// Frequently asked question
const questionAnswer = document.querySelectorAll(".question-answer");
questionAnswer.forEach((items)=>{
    items.addEventListener("click", () => {
        items.classList.toggle("frequently-activated");
    });
});


