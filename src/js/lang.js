
window.onload = () => {
  changeLanguage(localStorage.getItem("language") ? localStorage.getItem("language") : 'ar');
};

function changeLanguage(lang) {
  let setLang;
    const language = {
      en: {
        homeLink: "Home",
        aboutLink: "About",
        serviceLink: "Services",
        teamLink: "Our Team",
        worksLink: "Our Works",
        contactLink: "Contact Us",
        devWebLink: "Development Website",
        devMobileLink: "Development Mobile Apps",
        uxLink: "UX UI",
        graphicLink: "Graphic Design",
        motionLink: "Motion Graphic",
        mediaLink: "Social Media",
        // videoEdit: "Video Editing",
        titleCompany: "Coding Company for Software <br /> Services",
        bioCompany:
          "Welcome to our coding company, offering comprehensive services in web development, mobile app development, UX/UI design, graphic design, and social media management. We deliver top-notch solutions tailored to your needs, providing captivating websites, innovative mobile apps, intuitive UX/UI designs, and impactful graphic design. <br> <br>  Our social media expertise ensures a strong online presence, connecting you with your target audience effectively. Let us bring your digital aspirations to life.",
        contactBtn: "Contact with us",
        aboutTitle: "About Coding Company",
        aboutHeader:
          " We are a coding company that <br /> provides software services.",
        visitLink: "visit",
        GraphicDes: "Graphic Designer",
        webFullStack: "FULLSTACK DEVELOPER",
        webFront: "FRONT END DEVELOPER",
        UxUiDesigner: "UX & UI DESIGNER",
        nameCompany: "Coding Company",
        keepinTouch: "Get In Touch",
        sendMessage: "Submit The Message",
        ourLocation: "Our Location",
        contactAndLocation: "Contact and Location",
        timeOpenning: "We are here for you 24 hours a day, 7 days a week",
        email: "Email",
        phone: "Phone",
        address: "Address",
        hours: "Hours",
        allWorks: "All",
        uxWorks: "UX UI",
        webWorks: "Web",
        mobileWorks: "Mobile",
        graphicWorks: "Graphic",
        motionWorks: "Motion",
        addresses: "Address",
        quickLinks: "Quickly Links",
        followUs: "Do'nt Forget To Follow Us At Social Media!😊",
      },
      ar: {
        homeLink: "الرئيسية",
        aboutLink: "من نحن ",
        serviceLink: "خدماتنا",
        teamLink: "فريق العمل",
        worksLink: "أعمالنا",
        contactLink: "تواصل معنا",
        devWebLink: "تطوير المواقع",
        devMobileLink: "بناء وتطوير التطبيقات",
        uxLink: "تصميم واجهة المستخدم  UX/UI",
        graphicLink: "التصميم الجرافيكي",
        motionLink: " موشن جرافيك",
        mediaLink: "التسويق والاعلانات",
        // videoEdit: "مونتاج الفيديو",
        titleCompany: " شركة كودنج    للخدمات البرمجية",
        bioCompany:
          "مرحبًا بكم في شركة كودنج الخاصة بنا ، حيث نقدم خدمات شاملة في تطوير الويب ، وتطوير تطبيقات الأجهزة المحمولة   ، والتصميم الجرافيكي ، وإدارة الوسائط الاجتماعية. نحن نقدم حلولًا من الدرجة الأولى مصممة وفقًا لاحتياجاتك ، ونوفر مواقع ويب جذابة ، وتطبيقات جوال مبتكرة ، وتصميمات  سهلة الاستخدام ، وتصميم رسوميات مؤثر. <br> <br> تضمن خبرتنا في وسائل التواصل الاجتماعي وجودًا قويًا على الإنترنت ، مما يربطك بجمهورك المستهدف بشكل فعال. دعنا نحقق تطلعاتك الرقمية في الحياة.",
        contactBtn: "تواصل الان",
        aboutTitle: "عن شركة كودنج",
        aboutHeader: "نحن شركة برمجة  توفر خدمات برمجية.",
        visitLink: "تصفح",
        GraphicDes: "مصمم جرافيكي",
        webFullStack: "مطور ويب فل ستاك",
        webFront: "مطور الواجهة الامامية",
        UxUiDesigner: "مصمم واجهة وتجربة المستخدم",
        nameCompany: "شركة كودنج",
        keepinTouch: " ابقى على تواصل معنا",
        sendMessage: "أرسل رسالة",
        ourLocation: "موقعنا",
        contactAndLocation: "الموقع والتواصل",
        timeOpenning: "نحن هنا من أجلك 24 ساعة في اليوم ، 7 أيام في الأسبوع",
        email: "الايميل",
        phone: "الهاتف",
        address: "العنوان",
        hours: "متوفر",
        allWorks: "الكل",
        uxWorks: "تصميم UX",
        webWorks: "مواقع",
        mobileWorks: "تطبيقات",
        graphicWorks: "جرافيك",
        motionWorks: "رسوم متحركة",
        addresses: "العناوين",
        quickLinks: "روابط سريعة",
        followUs: "لاتنسوا متابعتنا على منصات التواصل الاجتماعي 😊",
      },
    };
    let elms = [
      ".homeLink",
      ".aboutLink",
      ".serviceLink",
      ".teamLink",
      ".worksLink",
      ".contactLink",
      ".devWebLink",
      ".devMobileLink",
      ".uxLink",
      ".graphicLink",
      ".motionLink",
      ".mediaLink",
      // ".videoEdit",
      ".titleCompany",
      ".bioCompany",
      ".contactBtn",
      ".aboutTitle",
      ".aboutHeader",
      ".visitLink",
      ".GraphicDes",
      ".webFullStack",
      ".webFront",
      ".UxUiDesigner",
      ".nameCompany",
      ".keepinTouch",
      ".sendMessage",
      ".ourLocation",
      ".contactAndLocation",
      ".timeOpenning",
      ".email",
      ".phone",
      ".address",
      ".hours",
      ".allWorks",
      ".uxWorks",
      ".webWorks",
      ".mobileWorks",
      ".graphicWorks",
      ".motionWorks",
      ".addresses",
      ".quickLinks",
      ".followUs",
    ];

    elms.forEach((el) => {
        let elements = document.querySelectorAll(el);
        elements.forEach((ele) => {
        // ele.innerHTML = language[lang][ele.getAttribute('class')] ; // to get value of the class
        ele.innerHTML = language[lang][ele.classList[0]]; // to get the first class
        // console.log(ele.getAttribute('class'))
        });
    }); 
   
    // array of elms to direction auto according to lang
     var direction_to_ar = [
       document.querySelector(".about .info"),
       document.querySelector(".Introduction"),
       document.querySelector("footer"),
       document.querySelector(".works ul"),
     ];
   
    if (lang == "ar") {
      document.querySelector(".container").classList.add("direction-ar");
      if (document.querySelector(".about h3")) {
        document.querySelector(".about h3").classList.add("right");
      }

      // loop and make direction to ar
      direction_to_ar.forEach((el) => {
        if (el) el.style = "direction:rtl";
      });

      if (document.getElementById("formContact")) {
        document.getElementById("formContact").style = "direction:rtl";
        document.getElementById("fname").placeholder = "الاسم الاول";
        document.getElementById("lname").placeholder = "الاسم الثاني";
        document.getElementById("email").placeholder =
          "(الايميل) بريدك لالكتروني ";
        document.getElementById("phone").placeholder = "رقم هاتفك";
        document.getElementById("message").placeholder = " أكتب رسالتك.";
      }

      document.querySelector("footer form").classList.add("direction-en");

      document.querySelector(".header section").classList.add("row-reverse");

      // loop at navbar items and make changes
      document.querySelectorAll(".NavMobile li").forEach((el) => {
        el.style = `padding:0 40px 17px 0`;
        el.classList.add("changeLang");
      });
    } else {

        document.querySelector(".container").classList.remove("direction-ar");
        if (document.querySelector(".about h3")) {
            document.querySelector(".about h3").classList.remove("right");
        }

        // loop and make direction to ar
          direction_to_ar.forEach((el) => { if (el) (el.style = "direction:ltr") });

        // loop at navbar items and make changes
        document.querySelectorAll(".NavMobile li").forEach((el) => (el.style = `padding:0 0 17px 40px`));

        document.querySelector(".header section").classList.remove("row-reverse");

        if (document.getElementById("formContact")) {
          document.getElementById("formContact").style = "direction:ltr";
          document.getElementById("fname").placeholder = "your First Name Sir.";
          document.getElementById("lname").placeholder = "your Last Name Sir.";
          document.getElementById("email").placeholder = "your Email Sir.";
          document.getElementById("phone").placeholder = "your phone Sir.";
          document.getElementById("message").placeholder = "Your message Sir.";
        }

        document.querySelector("footer form").classList.remove("direction-en");
  }
   // storage lang in local storage
    if (lang)
    {
      setLang = lang;
      localStorage.setItem(`language`,setLang);
    }
}
