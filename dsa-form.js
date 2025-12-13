// DSA Form Handler
document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');

            // Change icon
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });

        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                mobileToggle.querySelector('i').className = 'fas fa-bars';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileToggle.querySelector('i').className = 'fas fa-bars';
            }
        });
    }
    const form = document.getElementById('dsaForm');

    // Toggle DSA Details field
    window.toggleDSADetails = function () {
        const existingDSA = document.getElementById('existing_dsa').value;
        const dsaDetailsGroup = document.getElementById('dsa_details_group');

        if (existingDSA === 'yes') {
            dsaDetailsGroup.style.display = 'block';
            document.getElementById('existing_dsa_details').required = true;
        } else {
            dsaDetailsGroup.style.display = 'none';
            document.getElementById('existing_dsa_details').required = false;
        }
    };

    // Form validation
    function validateForm() {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        // Clear previous errors
        document.querySelectorAll('.form-group.error').forEach(group => {
            group.classList.remove('error');
        });

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                const formGroup = field.closest('.form-group');
                if (formGroup) {
                    formGroup.classList.add('error');
                    isValid = false;
                }
            }
        });

        // Validate at least one product is selected
        const productCheckboxes = document.querySelectorAll('input[name="products[]"]:checked');
        if (productCheckboxes.length === 0) {
            alert('Please select at least one product you want to source.');
            isValid = false;
        }

        // Validate PAN format
        const panField = document.getElementById('pan');
        const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        if (panField.value && !panPattern.test(panField.value.toUpperCase())) {
            const formGroup = panField.closest('.form-group');
            formGroup.classList.add('error');
            isValid = false;
        }

        // Validate mobile number
        const mobileField = document.getElementById('mobile');
        const mobilePattern = /^[0-9]{10}$/;
        if (mobileField.value && !mobilePattern.test(mobileField.value)) {
            const formGroup = mobileField.closest('.form-group');
            formGroup.classList.add('error');
            isValid = false;
        }

        // Validate pincode
        const pincodeField = document.getElementById('pincode');
        const pincodePattern = /^[0-9]{6}$/;
        if (pincodeField.value && !pincodePattern.test(pincodeField.value)) {
            const formGroup = pincodeField.closest('.form-group');
            formGroup.classList.add('error');
            isValid = false;
        }

        return isValid;
    }

    // File size validation
    function validateFileSize(file, maxSizeMB = 5) {
        if (file && file.size > maxSizeMB * 1024 * 1024) {
            return false;
        }
        return true;
    }

    // Handle file uploads
    document.querySelectorAll('input[type="file"]').forEach(fileInput => {
        fileInput.addEventListener('change', function () {
            const file = this.files[0];
            const formGroup = this.closest('.form-group');

            if (file) {
                if (!validateFileSize(file)) {
                    alert('File size should not exceed 5MB');
                    this.value = '';
                    formGroup.classList.add('error');
                } else {
                    formGroup.classList.remove('error');
                }
            }
        });
    });

    // Auto-format PAN input
    document.getElementById('pan').addEventListener('input', function () {
        this.value = this.value.toUpperCase();
    });

    // Auto-format mobile numbers
    document.querySelectorAll('input[type="tel"]').forEach(telInput => {
        telInput.addEventListener('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    });

    // Form submission
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            if (!validateForm()) {
                alert('Please fill in all required fields correctly.');
                return;
            }

            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            submitBtn.disabled = true;
            form.classList.add('form-loading');

            // Collect form data
            const formData = new FormData(form);

            // Send to backend
            fetch('http://localhost:3000/submit-dsa-application', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(result => {
                    if (result.success) {
                        showSuccessMessage();
                        form.reset();
                        document.getElementById('dsa_details_group').style.display = 'none';
                        // Scroll to top
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                        alert('Failed to submit application. Please try again.');
                        console.error('Error:', result.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Note: To send emails, please ensure the local Node.js server is running (npm start).');
                })
                .finally(() => {
                    // Reset button
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    form.classList.remove('form-loading');
                });
        });
    }

    function showSuccessMessage() {
        const successHTML = `
            <div class="success-message show">
                <h3><i class="fas fa-check-circle"></i> Application Submitted Successfully!</h3>
                <p>Thank you for your interest in becoming a DSA Partner with RR Trust Capital Solutions. Our team will review your application and contact you within 2-3 business days.</p>
                <p><strong>Next Steps:</strong></p>
                <ul>
                    <li>Document verification by our team</li>
                    <li>Background check and reference verification</li>
                    <li>DSA agreement and onboarding process</li>
                    <li>Training and system access setup</li>
                </ul>
                <p>For any queries, contact us at <strong>90990 09881 / 90990 09882</strong> or <strong>info@rrtrustcapitalsolutions.com</strong></p>
            </div>
        `;

        const formHeader = document.querySelector('.form-header');
        formHeader.insertAdjacentHTML('afterend', successHTML);
    }

    // Smooth scrolling for form sections
    document.querySelectorAll('legend').forEach(legend => {
        legend.style.cursor = 'pointer';
        legend.addEventListener('click', function () {
            this.parentElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

// Auto-save form data to localStorage (optional)
function autoSaveForm() {
    const form = document.getElementById('dsaForm');
    const formData = new FormData(form);
    const data = {};

    for (let [key, value] of formData.entries()) {
        if (key !== 'pan_card' && key !== 'aadhaar_card' && key !== 'passport_photo' &&
            key !== 'cancelled_cheque' && key !== 'address_proof' &&
            key !== 'firm_registration' && key !== 'visiting_card') {
            data[key] = value;
        }
    }

    localStorage.setItem('dsaFormData', JSON.stringify(data));
}

// Load saved form data
function loadSavedFormData() {
    const savedData = localStorage.getItem('dsaFormData');
    if (savedData) {
        const data = JSON.parse(savedData);
        Object.keys(data).forEach(key => {
            const field = document.querySelector(`[name="${key}"]`);
            if (field && field.type !== 'file') {
                field.value = data[key];
            }
        });
    }
}

// Auto-save every 30 seconds
setInterval(autoSaveForm, 30000);