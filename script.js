//Animation Script

function animateOnScroll() {
  const windowHeight = window.innerHeight;
  const offset = 100;

  const animate = document.querySelectorAll(".animate");
  const animateLeft = document.querySelectorAll(".animateLeft");

  function toggleShowClass(elements) {
    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - offset) {
        el.classList.add("show");
      } else {
        el.classList.remove("show");
      }
    });
  }

  toggleShowClass(animate);
  toggleShowClass(animateLeft);
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

//Download CV button
const downloadBtn = document.getElementById("btnOne");
if (downloadBtn) {
  downloadBtn.addEventListener("click", function (event) {
    const originalText = downloadBtn.textContent;
    downloadBtn.textContent = "Downloaded!";
    setTimeout(() => {
      downloadBtn.textContent = originalText;
    }, 2000);
  });
}

//Contact me form
const form = document.querySelector("form");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `First name: ${fName.value}<br> Last name: ${lName.value}<br> Email: 
  ${email.value}<br> Message: ${mess.value}`;

  return Email.send({
    Host: "smtp.elasticemail.com",
    Username: "samametwally149@gmail.com",
    Password: "72D979407073178E31CF4E2DEFB4CEA36323",
    To: "samametwally149@gmail.com",
    From: "samametwally149@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");
  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (
    !fName.classList.contains("error") &&
    !lName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !mess.classList.contains("error")
  ) {
    sendEmail().then((message) => {
      if (sendEmail) {
        const sentPopup = document.querySelector(".sent-popup");
        sentPopup.classList.add("show");
        setTimeout(() => {
          sentPopup.classList.remove("show");
        }, 3000);

        form.reset();
      }
    });

    return false;
  }
});
