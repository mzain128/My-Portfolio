document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            
            // Simulate form submission (in a real app, you would use fetch or AJAX)
            setTimeout(() => {
                // Show success message
                formMessage.textContent = 'Thank you! Your message has been sent successfully.';
                formMessage.classList.remove('error');
                formMessage.classList.add('success');
                formMessage.style.display = 'block';
                
                // Reset form
                contactForm.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }, 1000);
            
            // In a real application, you would use fetch to send the data to a server:
            /*
            fetch('/submit-form', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    formMessage.textContent = 'Thank you! Your message has been sent successfully.';
                    formMessage.classList.remove('error');
                    formMessage.classList.add('success');
                    contactForm.reset();
                } else {
                    formMessage.textContent = 'There was an error sending your message. Please try again.';
                    formMessage.classList.remove('success');
                    formMessage.classList.add('error');
                }
                formMessage.style.display = 'block';
                
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            })
            .catch(error => {
                formMessage.textContent = 'There was an error sending your message. Please try again.';
                formMessage.classList.remove('success');
                formMessage.classList.add('error');
                formMessage.style.display = 'block';
                
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            });
            */
        });
    }
});