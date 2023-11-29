document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
});


//Project Tooltips
const projectLinks = document.querySelectorAll('.btn');

projectLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    const projectTitle = link.parentNode.querySelector('h3').textContent;
    link.title = `View ${projectTitle} Project`;
  });
});

// Hover Effect
const serviceColumns = document.querySelectorAll('.service-column');

serviceColumns.forEach(column => {
  column.addEventListener('mouseover', () => {
    column.style.backgroundColor = '#00abf0';
  });

  column.addEventListener('mouseout', () => {
    column.style.backgroundColor = '#081b29'; 
  });
});


//contact


function showEmailMessage() {
  alert("You clicked on the email link!");
}


function openPhoneApp() {
  window.location.href = "tel:9840873481";
}


document.querySelector(".contact-detail.email a").addEventListener("click", showEmailMessage);
document.querySelector(".contact-detail.phone a").addEventListener("click", openPhoneApp);