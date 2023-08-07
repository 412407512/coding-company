 function alertMsg(msg, icon = 'success') {
   let timerInterval;
   Swal.fire({
     title: "جار راسال الرسالة",
     html: "Coding Company Contact",
     timer: 2000,
     timerProgressBar: true,
     didOpen: () => {
       Swal.showLoading();
       const b = Swal.getHtmlContainer().querySelector("b");
       timerInterval = setInterval(() => {
         b.textContent = Swal.getTimerLeft();
       }, 100);
     },
     willClose: () => {
       clearInterval(timerInterval);
     },
   }).then((result) => {
     /* Read more about handling dismissals below */
     if (result.dismiss === Swal.DismissReason.timer) {
       Toaster(msg,'success');
     }
   });
}
// Alert Toaster
 function Toaster(msg, icon ='success') {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: icon,
    title: msg,
  });
}


  let contactForm = document.getElementById("formContact"),
btnSubmitMessage = document.getElementById("submitMessage");
;

// Validation fields

  function validateFields()
{
  let fname = document.getElementById("fname").value,
  lname = document.getElementById("lname").value,
  phone = document.getElementById("phone").value,
  email = document.getElementById("email").value,
  message = document.getElementById("message").value;
  // make validation for inputs
  let errors = {};
  // Check if the first name is valid.
  if (fname.length < 3 || fname.length > 15) {
    return (errors.fname = "! يجب أن يكون الاسم الاول ما بين 3 و 15 حرفًا.");
  } 
  // Check if the Last name is valid.
  if (lname.length < 3 || lname.length > 15) {
    return (errors.lname = "! يجب أن يكون الاسم الثاني ما بين 3 و 15 حرفًا.");
  }
  // Check if the phone number is valid.
  if (!phone.match(/^\d{10}$/)) {
    return (errors.phone = "!الرجاء كتابة رقم هاتف صالحا");
  }

  // Check if the email address is valid.
  if (email.indexOf('gmail') === -1) {
    return errors.email=" !الرجاء كتابة ايميل صالح ";
  
  }
  if (message.length < 10) {
    return  errors.message="!يجب ان تكون الرسالة اكبر من 10 حروف";

  }
  // check if there any errors
  if (Object.keys(errors).length > 0)
  {
    // display errors
    for (const err of errors){
      Toaster(errors[err], 'error');
    }
    return false
  }

  return true;
}


 contactForm.addEventListener('submit', e => {
  e.preventDefault();
  
    if (btnSubmitMessage) {
      if (validateFields() == true) {
        sendEmail();
        btnSubmitMessage.classList.add("btn-loading");
      } else {
        Toaster(validateFields(),'error')
      }
    }

  // btnSubmitMessage.disabled = true;
});


  function sendEmail() {
  var templateId = "template_6bv592j"; // استبدل برقم قالب البريد الإلكتروني الخاص بك
  var userId = "KOtOnLWoglisI4e8W"; // استبدل برقم المستخدم الخاص بك الذي حصلت عليه من EmailJS

  let fnameInput =document.getElementById("fname").value,
    lnameInput = document.getElementById("lname").value,
    phoneInput = document.getElementById("phone").value,
    emailInput = document.getElementById("email").value,
    messageTextarea = document.getElementById("message").value;

  var templateParams = {
    from_name: `${fnameInput} ${lnameInput}`,
    user_email: emailInput,
    user_phone: phoneInput,
    message: messageTextarea,
  };

  emailjs.send("default_service", templateId, templateParams, userId).then(
    function (response) {
      if (response.status == 200) {
        alertMsg("تم ارسال الرسالة بنجاح", "success");
        setInterval(() => {
          location.href = "../../index.html";
        }, 4000);
      } else {
          Toaster("هناك خطأ حاول مجددا", "error");
      }
          
    },
    function (error) {
      Toaster('فشل في ارسال الرسالة !','error')
    }
  );
}
