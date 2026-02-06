// Simple JavaScript for Resume Interactivity

// Print functionality
function printResume() {
    window.print();
}

// Add print button to header
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const printButton = document.createElement('button');
    printButton.textContent = 'Print Resume';
    printButton.style.cssText = `
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
        font-size: 16px;
    `;
    printButton.addEventListener('click', printResume);
    header.appendChild(printButton);

    // Smooth scrolling for sections
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
