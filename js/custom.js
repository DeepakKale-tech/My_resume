function downloadCV()
{
    const fileUrl = "documents/Deepak_Kale_Java.pdf";  
    const fileName = "Deepak_Kale_CV.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
}

function gotocontact() {
    window.location.href = "contact.html"; 
}
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('.text', {
        strings: ["Java Developer", "Web Developer","Frontend Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay:100,
        loop: true
    });
});

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '.navbar',
  offset: 70
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});