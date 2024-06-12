let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navmenu');
menu.onclick=()=>{
    menu.classList.toggle("fa-xmark")
    navbar.classList.toggle("show")
}
window.onscroll=()=>{
    menu.classList.remove("fa-xmark")
    navbar.classList.remove("show")
}

function downloadPDF() {
    // Path to the PDF file
    const pdfPath = './CV/Ruhid_CV.pdf';

    // Create a download link
    const downloadLink = document.createElement('a');

    // Set the href attribute to the PDF file path
    downloadLink.href = pdfPath;

    // Set the file name for the download
    downloadLink.download = 'Ruhid_CV.pdf';

    // Append the link to the body
    document.body.appendChild(downloadLink);

    // Trigger the click event to start the download
    downloadLink.click();

    // Remove the link from the DOM
    document.body.removeChild(downloadLink);
}