const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert('Form submitted successfully!');
                form.reset(); // Optionally reset the form after submission
            } else {
                alert('Failed to submit form. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to submit form. Please try again.');
        });
    });
});
