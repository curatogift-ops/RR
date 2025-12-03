// Dynamic Product-Specific Fields Handler
function showProductFields() {
    const loanType = document.getElementById('loan-type').value;
    const productFieldsContainer = document.getElementById('product-fields');
    
    // Clear existing fields
    productFieldsContainer.innerHTML = '';
    
    if (!loanType) return;
    
    let fieldsHTML = '<div class="product-fields"><h3>Additional Information</h3>';
    
    switch(loanType) {
        case 'personal':
            fieldsHTML += `
                <div class="form-row">
                    <div class="form-group">
                        <label for="company-name">Company Name (if salaried)</label>
                        <input type="text" id="company-name" name="company_name">
                    </div>
                    <div class="form-group">
                        <label for="work-experience">Total Work Experience (years)</label>
                        <input type="number" id="work-experience" name="work_experience">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="existing-emis">Existing EMIs?</label>
                        <select id="existing-emis" name="existing_emis">
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="salary-mode">Salary Credit Mode</label>
                        <select id="salary-mode" name="salary_mode">
                            <option value="">Select</option>
                            <option value="bank-transfer">Bank Transfer</option>
                            <option value="cash">Cash</option>
                            <option value="cheque">Cheque</option>
                        </select>
                    </div>
                </div>
            `;
            break;
            
        case 'business':
        case 'working-capital':
            fieldsHTML += `
                <div class="form-row">
                    <div class="form-group">
                        <label for="business-name">Business Name*</label>
                        <input type="text" id="business-name" name="business_name" required>
                    </div>
                    <div class="form-group">
                        <label for="business-type">Business Type*</label>
                        <select id="business-type" name="business_type" required>
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
                        <label for="business-vintage">Business Vintage (years)*</label>
                        <input type="number" id="business-vintage" name="business_vintage" required>
                    </div>
                    <div class="form-group">
                        <label for="annual-turnover">Annual Turnover (₹)*</label>
                        <input type="number" id="annual-turnover" name="annual_turnover" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="gst-registered">GST Registered?</label>
                        <select id="gst-registered" name="gst_registered">
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="existing-od-cc">Existing OD/CC Limit?</label>
                        <select id="existing-od-cc" name="existing_od_cc">
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>
            `;
            break;
            
        case 'home':
            fieldsHTML += `
                <div class="form-row">
                    <div class="form-group">
                        <label for="loan-purpose">Purpose*</label>
                        <select id="loan-purpose" name="loan_purpose" required>
                            <option value="">Select</option>
                            <option value="new-purchase">New Purchase</option>
                            <option value="balance-transfer">Balance Transfer</option>
                            <option value="top-up">Top-up</option>
                            <option value="construction">Construction</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="property-type">Property Type*</label>
                        <select id="property-type" name="property_type" required>
                            <option value="">Select</option>
                            <option value="flat">Flat</option>
                            <option value="bungalow">Bungalow</option>
                            <option value="plot">Plot</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="property-location">Property Location*</label>
                        <input type="text" id="property-location" name="property_location" required>
                    </div>
                    <div class="form-group">
                        <label for="property-value">Approx. Property Value (₹)*</label>
                        <input type="number" id="property-value" name="property_value" required>
                    </div>
                </div>
            `;
            break;
            
        case 'lap':
            fieldsHTML += `
                <div class="form-row">
                    <div class="form-group">
                        <label for="property-type-lap">Property Type*</label>
                        <select id="property-type-lap" name="property_type" required>
                            <option value="">Select</option>
                            <option value="residential">Residential</option>
                            <option value="commercial">Commercial</option>
                            <option value="industrial">Industrial</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="ownership-type">Ownership Type*</label>
                        <select id="ownership-type" name="ownership_type" required>
                            <option value="">Select</option>
                            <option value="self">Self</option>
                            <option value="family">Family</option>
                            <option value="co-owned">Co-owned</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="market-value">Approx. Market Value (₹)*</label>
                        <input type="number" id="market-value" name="market_value" required>
                    </div>
                    <div class="form-group">
                        <label for="current-loan">Current Loan on Property?</label>
                        <select id="current-loan" name="current_loan">
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>
            `;
            break;
            
        case 'vehicle':
            fieldsHTML += `
                <div class="form-row">
                    <div class="form-group">
                        <label for="vehicle-type">Vehicle Type*</label>
                        <select id="vehicle-type" name="vehicle_type" required>
                            <option value="">Select</option>
                            <option value="car">Car</option>
                            <option value="bike">Bike</option>
                            <option value="commercial">Commercial</option>
                            <option value="used-car">Used Car</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="vehicle-condition">New or Used*</label>
                        <select id="vehicle-condition" name="vehicle_condition" required>
                            <option value="">Select</option>
                            <option value="new">New</option>
                            <option value="used">Used</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="vehicle-make">Vehicle Make & Model</label>
                        <input type="text" id="vehicle-make" name="vehicle_make" placeholder="e.g., Maruti Swift">
                    </div>
                    <div class="form-group">
                        <label for="vehicle-price">On-Road Price (₹)</label>
                        <input type="number" id="vehicle-price" name="vehicle_price">
                    </div>
                </div>
                <div class="form-group">
                    <label for="down-payment">Down Payment (₹)</label>
                    <input type="number" id="down-payment" name="down_payment">
                </div>
            `;
            break;
            
        case 'education':
            fieldsHTML += `
                <div class="form-row">
                    <div class="form-group">
                        <label for="course-type">Course Type*</label>
                        <select id="course-type" name="course_type" required>
                            <option value="">Select</option>
                            <option value="ug">UG</option>
                            <option value="pg">PG</option>
                            <option value="professional">Professional</option>
                            <option value="abroad">Abroad</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="course-duration">Course Duration (years)*</label>
                        <input type="number" id="course-duration" name="course_duration" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="university">Country & University Name</label>
                        <input type="text" id="university" name="university">
                    </div>
                    <div class="form-group">
                        <label for="co-applicant">Co-applicant Relation*</label>
                        <select id="co-applicant" name="co_applicant" required>
                            <option value="">Select</option>
                            <option value="father">Father</option>
                            <option value="mother">Mother</option>
                            <option value="spouse">Spouse</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="tuition-fee">Tuition Fee (₹ per year)</label>
                    <input type="number" id="tuition-fee" name="tuition_fee">
                </div>
            `;
            break;
            
        case 'credit-card':
            fieldsHTML += `
                <div class="form-row">
                    <div class="form-group">
                        <label for="current-bank">Current Bank Account With*</label>
                        <select id="current-bank" name="current_bank" required>
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
                        <label for="existing-card">Existing Credit Card Holder?</label>
                        <select id="existing-card" name="existing_card">
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="current-limit">Current Limit (₹)</label>
                        <input type="number" id="current-limit" name="current_limit">
                    </div>
                    <div class="form-group">
                        <label for="monthly-spend">Average Monthly Card Spend (₹)</label>
                        <input type="number" id="monthly-spend" name="monthly_spend">
                    </div>
                </div>
            `;
            break;
    }
    
    fieldsHTML += '</div>';
    productFieldsContainer.innerHTML = fieldsHTML;
}

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('leadForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Here you can add your form submission logic
            console.log('Form Data:', data);
            
            // Show success message
            alert('Thank you! Your enquiry has been submitted. We will contact you within 24 hours.');
            
            // Reset form
            form.reset();
            document.getElementById('product-fields').innerHTML = '';
        });
    }
});

// Auto-fill loan type if coming from specific product card
function setLoanType(type) {
    document.getElementById('loan-type').value = type;
    showProductFields();
}

// Navigate to form when clicking anywhere on the card
function navigateToForm(loanType) {
    // Scroll to form
    document.getElementById('inquiry-form').scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    // Set loan type after a small delay to ensure form is visible
    setTimeout(() => {
        setLoanType(loanType);
    }, 500);
}