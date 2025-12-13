// Apply Form Handler
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
    const form = document.getElementById('applicationForm');
    const productTabs = document.querySelectorAll('.product-tab');
    const selectedLoanTypeInput = document.getElementById('selected-loan-type');
    const productSpecificFields = document.getElementById('product-specific-fields');
    const pageTitle = document.getElementById('page-title');
    const pageSubtitle = document.getElementById('page-subtitle');
    const formTitle = document.getElementById('form-title');
    const formDescription = document.getElementById('form-description');

    // Product information
    const productInfo = {
        'personal': {
            title: 'Personal Loan Application',
            subtitle: 'Quick funds for your personal needs',
            formTitle: 'Personal Loan Application Form',
            description: 'Get instant personal loan with minimal documentation'
        },
        'business': {
            title: 'Business Loan Application',
            subtitle: 'Capital to grow your business',
            formTitle: 'Business Loan Application Form',
            description: 'Fuel your business growth with our flexible business loans'
        },
        'home': {
            title: 'Home Loan Application',
            subtitle: 'Your dream home, now a reality',
            formTitle: 'Home Loan Application Form',
            description: 'Make your dream home a reality with our competitive home loans'
        },
        'lap': {
            title: 'Loan Against Property Application',
            subtitle: 'Unlock the value of your property',
            formTitle: 'LAP Application Form',
            description: 'Get funds against your property at attractive interest rates'
        },
        'vehicle': {
            title: 'Vehicle Loan Application',
            subtitle: 'Drive your dream car today',
            formTitle: 'Vehicle Loan Application Form',
            description: 'Finance your dream vehicle with easy EMI options'
        },
        'education': {
            title: 'Education Loan Application',
            subtitle: 'Invest in your future education',
            formTitle: 'Education Loan Application Form',
            description: 'Secure your educational future with our education loans'
        },
        'credit-card': {
            title: 'Credit Card Application',
            subtitle: 'Best rewards and offers',
            formTitle: 'Credit Card Application Form',
            description: ''
        },
        'working-capital': {
            title: 'Working Capital Application',
            subtitle: 'Manage your daily operations',
            formTitle: 'Working Capital Application Form',
            description: 'Maintain smooth business operations with working capital loans'
        }
    };

    // Get loan type from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const initialLoanType = urlParams.get('type');

    // If user comes from direct link, hide product selector and show focused form
    if (initialLoanType && productInfo[initialLoanType]) {
        // Hide product selector for direct links
        document.querySelector('.product-type-selector').style.display = 'none';
        selectProduct(initialLoanType);

        // For credit card, hide all header texts
        if (initialLoanType === 'credit-card') {
            document.querySelector('.product-selection-header').style.display = 'none';
            document.querySelector('.form-header').style.display = 'none';
        } else if (initialLoanType === 'home') {
            // For home loan, hide only the page header, keep form header
            document.querySelector('.product-selection-header').style.display = 'none';
        } else {
            // Update subtitle to be more focused for other products
            pageSubtitle.textContent = 'Fill in the details below to process your application';
        }
    } else {
        // Show product selector for general access
        selectProduct('personal');
    }

    // Product tab click handlers
    productTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const productType = this.getAttribute('data-product');
            selectProduct(productType);
        });
    });

    // Select product function
    function selectProduct(productType) {
        // Update active tab
        productTabs.forEach(tab => tab.classList.remove('active'));
        document.querySelector(`[data-product="${productType}"]`).classList.add('active');

        // Update hidden input
        selectedLoanTypeInput.value = productType;

        // Update page content
        const info = productInfo[productType];
        pageTitle.textContent = info.title;
        pageSubtitle.textContent = info.subtitle;
        formTitle.textContent = info.formTitle;
        formDescription.textContent = info.description;

        // Show product-specific fields
        showProductSpecificFields(productType);

        // Update URL without page reload
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('type', productType);
        window.history.replaceState({}, '', newUrl);
    }

    // Show product-specific fields
    function showProductSpecificFields(loanType) {
        let fieldsHTML = '';

        switch (loanType) {
            case 'personal':
                fieldsHTML = `
                    <div class="product-fields">
                        <h3><i class="fas fa-briefcase"></i> Personal Loan Details</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="company_name">Company Name (if salaried)</label>
                                <input type="text" id="company_name" name="company_name">
                            </div>
                            <div class="form-group">
                                <label for="work_experience">Total Work Experience (years)</label>
                                <input type="number" id="work_experience" name="work_experience">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="existing_emis">Existing EMIs?</label>
                                <select id="existing_emis" name="existing_emis">
                                    <option value="">Select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="salary_mode">Salary Credit Mode</label>
                                <select id="salary_mode" name="salary_mode">
                                    <option value="">Select</option>
                                    <option value="bank-transfer">Bank Transfer</option>
                                    <option value="cash">Cash</option>
                                    <option value="cheque">Cheque</option>
                                </select>
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 'business':
            case 'working-capital':
                fieldsHTML = `
                    <div class="product-fields">
                        <h3><i class="fas fa-building"></i> Business Details</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="business_name">Business Name*</label>
                                <input type="text" id="business_name" name="business_name" required>
                            </div>
                            <div class="form-group">
                                <label for="business_type">Business Type*</label>
                                <select id="business_type" name="business_type" required>
                                    <option value="">Select</option>
                                    <option value="proprietorship">Proprietorship</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="pvt-ltd">Pvt Ltd</option>
                                    <option value="llp">LLP</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="business_vintage">Business Vintage (years)*</label>
                                <input type="number" id="business_vintage" name="business_vintage" required>
                            </div>
                            <div class="form-group">
                                <label for="annual_turnover">Annual Turnover (₹)*</label>
                                <input type="number" id="annual_turnover" name="annual_turnover" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="gst_registered">GST Registered?</label>
                                <select id="gst_registered" name="gst_registered">
                                    <option value="">Select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="existing_od_cc">Existing OD/CC Limit?</label>
                                <select id="existing_od_cc" name="existing_od_cc">
                                    <option value="">Select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 'home':
                fieldsHTML = `
                    <div class="product-fields">
                        <h3><i class="fas fa-home"></i> Home Loan Details</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="loan_purpose">Purpose*</label>
                                <select id="loan_purpose" name="loan_purpose" required>
                                    <option value="">Select</option>
                                    <option value="new-purchase">New Purchase</option>
                                    <option value="balance-transfer">Balance Transfer</option>
                                    <option value="top-up">Top-up</option>
                                    <option value="construction">Construction</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="property_type">Property Type*</label>
                                <select id="property_type" name="property_type" required>
                                    <option value="">Select</option>
                                    <option value="flat">Flat</option>
                                    <option value="bungalow">Bungalow</option>
                                    <option value="plot">Plot</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="property_location">Property Location*</label>
                                <input type="text" id="property_location" name="property_location" required>
                            </div>
                            <div class="form-group">
                                <label for="property_value">Approx. Property Value (₹)*</label>
                                <input type="number" id="property_value" name="property_value" required>
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 'lap':
                fieldsHTML = `
                    <div class="product-fields">
                        <h3><i class="fas fa-city"></i> Property Details</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="property_type_lap">Property Type*</label>
                                <select id="property_type_lap" name="property_type" required>
                                    <option value="">Select</option>
                                    <option value="residential">Residential</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="industrial">Industrial</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="ownership_type">Ownership Type*</label>
                                <select id="ownership_type" name="ownership_type" required>
                                    <option value="">Select</option>
                                    <option value="self">Self</option>
                                    <option value="family">Family</option>
                                    <option value="co-owned">Co-owned</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="market_value">Approx. Market Value (₹)*</label>
                                <input type="number" id="market_value" name="market_value" required>
                            </div>
                            <div class="form-group">
                                <label for="current_loan">Current Loan on Property?</label>
                                <select id="current_loan" name="current_loan">
                                    <option value="">Select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 'vehicle':
                fieldsHTML = `
                    <div class="product-fields">
                        <h3><i class="fas fa-car"></i> Vehicle Details</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="vehicle_type">Vehicle Type*</label>
                                <select id="vehicle_type" name="vehicle_type" required>
                                    <option value="">Select</option>
                                    <option value="car">Car</option>
                                    <option value="bike">Bike</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="used-car">Used Car</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="vehicle_condition">New or Used*</label>
                                <select id="vehicle_condition" name="vehicle_condition" required>
                                    <option value="">Select</option>
                                    <option value="new">New</option>
                                    <option value="used">Used</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="vehicle_make">Vehicle Make & Model</label>
                                <input type="text" id="vehicle_make" name="vehicle_make" placeholder="e.g., Maruti Swift">
                            </div>
                            <div class="form-group">
                                <label for="vehicle_price">On-Road Price (₹)</label>
                                <input type="number" id="vehicle_price" name="vehicle_price">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="down_payment">Down Payment (₹)</label>
                            <input type="number" id="down_payment" name="down_payment">
                        </div>
                    </div>
                `;
                break;

            case 'education':
                fieldsHTML = `
                    <div class="product-fields">
                        <h3><i class="fas fa-graduation-cap"></i> Education Details</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="course_type">Course Type*</label>
                                <select id="course_type" name="course_type" required>
                                    <option value="">Select</option>
                                    <option value="ug">UG</option>
                                    <option value="pg">PG</option>
                                    <option value="professional">Professional</option>
                                    <option value="abroad">Abroad</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="course_duration">Course Duration (years)*</label>
                                <input type="number" id="course_duration" name="course_duration" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="university">Country & University Name</label>
                                <input type="text" id="university" name="university">
                            </div>
                            <div class="form-group">
                                <label for="co_applicant">Co-applicant Relation*</label>
                                <select id="co_applicant" name="co_applicant" required>
                                    <option value="">Select</option>
                                    <option value="father">Father</option>
                                    <option value="mother">Mother</option>
                                    <option value="spouse">Spouse</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="tuition_fee">Tuition Fee (₹ per year)</label>
                            <input type="number" id="tuition_fee" name="tuition_fee">
                        </div>
                    </div>
                `;
                break;

            case 'credit-card':
                fieldsHTML = `
                    <div class="product-fields">
                        <h3><i class="fas fa-credit-card"></i> Credit Card Details</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="current_bank">Current Bank Account With*</label>
                                <select id="current_bank" name="current_bank" required>
                                    <option value="">Select Bank</option>
                                    <option value="sbi">State Bank of India</option>
                                    <option value="hdfc">HDFC Bank</option>
                                    <option value="icici">ICICI Bank</option>
                                    <option value="axis">Axis Bank</option>
                                    <option value="kotak">Kotak Mahindra</option>
                                    <option value="pnb">Punjab National Bank</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="existing_card">Existing Credit Card Holder?</label>
                                <select id="existing_card" name="existing_card">
                                    <option value="">Select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="current_limit">Current Limit (₹)</label>
                                <input type="number" id="current_limit" name="current_limit">
                            </div>
                            <div class="form-group">
                                <label for="monthly_spend">Average Monthly Card Spend (₹)</label>
                                <input type="number" id="monthly_spend" name="monthly_spend">
                            </div>
                        </div>
                    </div>
                `;
                break;
        }

        productSpecificFields.innerHTML = fieldsHTML;
    }

    // Form submission handler - DISABLED to allow FormSubmit.co to handle submissions
    // FormSubmit.co now handles all form submissions directly
    /*
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            submitBtn.disabled = true;

            // Collect form data
            const formData = new FormData(form);

            // Send to backend
            fetch('/api/submit-loan-application', {
                method: 'POST',
                body: formData // allow FormData to set Content-Type header to multipart/form-data
            })
                .then(response => response.json())
                .then(result => {
                    if (result.success) {
                        // Show success message
                        document.getElementById('success-message').style.display = 'flex';
                        form.reset();
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
                });
        });
    }
    */
});

// Close success message
function closeSuccessMessage() {
    document.getElementById('success-message').style.display = 'none';
}
