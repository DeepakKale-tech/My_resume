function downloadCV()
{
    const fileUrl = "documents/Deepak_Kale.pdf";  
    const fileName = "Deepak_Kale_CV.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
}

function gotoabout() {
    window.location.href = "about.html"; 
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