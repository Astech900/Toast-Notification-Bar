let buttons = document.querySelectorAll('button');
let allButtons = Array.from(buttons);

let body = document.querySelector('body');
let notifiContainer = document.getElementById("toast-container");

allButtons.forEach(e => {

    e.addEventListener('click', (btn) => {

        let notifyEl = document.createElement("div");

        if (btn.target.innerHTML == 'Success') {
            notifyEl.innerHTML = ` <i class="fa-solid fa-circle-check"></i>   Succesfully Submitted`;
            notifyEl.classList.add("sucess");

        }
        else if (btn.target.innerHTML == 'Error') {
            notifyEl.innerHTML = ` <i class="fa-solid fa-circle-xmark"></i> Please Fix The Error`;
            notifyEl.classList.add("error");
            notifyEl.classList.add("error-style");
        }
        else if (btn.target.innerHTML == 'Invalid') {
            notifyEl.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Invalidation Submission`;
            notifyEl.classList.add("invalid");
            notifyEl.classList.add("invalid-style");
        }


        notifyEl.classList.add("toast");
        notifiContainer.appendChild(notifyEl);


        setTimeout(() => {
            notifiContainer.removeChild(notifyEl);
        }, 5000)



    })



})


