# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## RR Trust Capital Solutions - Home Page UI Design Demo

---

## 1. DOCUMENT INFORMATION

| **Field** | **Details** |
|-----------|-------------|
| **Product Name** | RR Trust Capital Solutions - Home Page UI Design |
| **Document Version** | 1.0 |
| **Date** | December 2, 2025 |
| **Purpose** | UI Design Specification for Client Presentation |
| **Prepared By** | Design Team |

---

## 2. PAGE OVERVIEW

**Objective:** Create a professional, conversion-focused landing page that showcases RR Trust Capital Solutions' financial services and drives loan applications and DSA partnership inquiries.

**Page Type:** Single-page scrollable landing page (Home Page)

**Target Audience:** 
- Individuals seeking loans (personal, home, business)
- Businesses needing financing
- Potential DSA partners

---

## 3. PAGE SECTIONS & LAYOUT

### 3.1 HEADER (STICKY NAVIGATION)
**Position:** Fixed at top, always visible on scroll

**Layout Structure:**
```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO]    Home  Loans▾  DSA Partnership  About  Contact     │
│                                    [Apply Now] [📞 WhatsApp] │
└─────────────────────────────────────────────────────────────┘
```

**Elements:**
- **Logo** (Left): "RR Trust Capital Solutions" with icon
- **Navigation Menu** (Center):
  - Home
  - Loans (Dropdown: Personal, Business, Home, LAP, Vehicle, Education, Credit Card)
  - DSA Partnership
  - About Us
  - Contact
- **CTA Buttons** (Right):
  - Primary: "Apply Now" (Orange button)
  - Secondary: WhatsApp icon with "+91 99227 79854"

**Design Specs:**
- Background: White with subtle shadow
- Height: 80px (desktop), 60px (mobile)
- Font: Inter/Poppins Semi-bold
- Mobile: Hamburger menu

---

### 3.2 HERO SECTION
**Purpose:** Grab attention and drive immediate action

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│              [Background: Professional Finance Image]         │
│                                                               │
│        Integrated Finance Suite for                           │
│        Individuals and Businesses                             │
│                                                               │
│    Personal, Business, Mortgage, Commercial & Vehicle         │
│    Loans with transparent processing, multi-bank access       │
│    and dedicated support at every step.                       │
│                                                               │
│    ✓ Multi-Bank Network  ✓ Zero Hidden Charges               │
│    ✓ PAN-India Coverage  ✓ Dedicated Support                 │
│                                                               │
│         [Apply for Loan]  [Become DSA Partner]                │
│              [WhatsApp Now →]                                 │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Content:**
- **Headline (H1):** "Integrated Finance Suite for Individuals and Businesses"
  - Font: 48px (desktop), 32px (mobile)
  - Color: Dark blue or white (based on background)
  - Weight: Bold

- **Sub-headline:** 
  - Font: 20px (desktop), 16px (mobile)
  - Color: Gray or white
  - Weight: Regular

- **Trust Indicators:** 4 checkmark badges in row
  - Icon + text format
  - White or brand color

- **CTA Buttons:**
  - Primary: "Apply for Loan" (Large, Orange, Bold)
  - Secondary: "Become DSA Partner" (Outlined)
  - Tertiary: "WhatsApp Now" (Green link with icon)

**Visual Specs:**
- Height: 600px (desktop), 500px (mobile)
- Background: Professional image with dark overlay (40% opacity)
- Padding: 80px vertical
- Text alignment: Center

---

### 3.3 LOAN PRODUCTS SECTION
**Purpose:** Quick access to all loan categories

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                     Our Loan Products                         │
│               Choose the right solution for you               │
│                                                               │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                    │
│  │ 💼   │  │ 🏢   │  │ 🏠   │  │ 🏗️   │                    │
│  │Personal│ │Business│ │Home  │ │ LAP  │                    │
│  │ Loan │  │ Loan │  │ Loan │  │      │                    │
│  └──────┘  └──────┘  └──────┘  └──────┘                    │
│                                                               │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                    │
│  │ 🚗   │  │ 🎓   │  │ 💳   │  │ 💰   │                    │
│  │Vehicle│ │Education│ │Credit│ │Working│                   │
│  │ Loan │  │ Loan │  │ Card │  │Capital│                   │
│  └──────┘  └──────┘  └──────┘  └──────┘                    │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Card Design:**
- **Grid:** 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Card Size:** 250px x 200px
- **Card Style:**
  - Background: White
  - Border: 1px solid light gray
  - Border radius: 12px
  - Shadow: Subtle (0 2px 8px rgba(0,0,0,0.08))
  - Hover: Lift effect (shadow increase + slight scale)

**Card Content:**
- Icon: 56px, centered, brand color
- Loan Name: 18px, bold, dark gray
- Short description: 14px (optional)
- "Learn More →" link at bottom

**Section Specs:**
- Background: Light gray (#F9FAFB)
- Padding: 80px vertical
- Section heading: 36px, centered, bold

---

### 3.4 WHY CHOOSE US SECTION
**Purpose:** Communicate unique value proposition

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                 Why Choose RR Trust Capital Solutions?        │
│                                                               │
│   ┌────────────────┐  ┌────────────────┐  ┌────────────────┐│
│   │ 🏦             │  │ ⚡             │  │ 💰             ││
│   │ Multi-Bank &   │  │ Accelerated    │  │ Zero Hidden    ││
│   │ NBFC Network   │  │ Approval       │  │ Charges        ││
│   │                │  │                │  │                ││
│   │ [Description]  │  │ [Description]  │  │ [Description]  ││
│   └────────────────┘  └────────────────┘  └────────────────┘│
│                                                               │
│   ┌────────────────┐  ┌────────────────┐  ┌────────────────┐│
│   │ 🤝             │  │ 📍             │  │ 📊             ││
│   │ Dedicated      │  │ PAN-India      │  │ Performance-   ││
│   │ Support        │  │ Reach          │  │ Driven Payouts ││
│   │                │  │                │  │                ││
│   │ [Description]  │  │ [Description]  │  │ [Description]  ││
│   └────────────────┘  └────────────────┘  └────────────────┘│
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Card Design:**
- **Grid:** 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Card Style:**
  - No border
  - Icon at top (48px, brand color)
  - Heading: 20px, bold
  - Description: 16px, gray, 3-4 lines
  - Padding: 32px
  - Text alignment: Center

**Section Specs:**
- Background: White
- Padding: 80px vertical
- Section heading: 36px, centered

---

### 3.5 HOW IT WORKS SECTION
**Purpose:** Show simple, transparent process

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                      How It Works                             │
│                 Simple, Fast, Transparent                     │
│                                                               │
│   ┌────────┐      ┌────────┐      ┌────────┐      ┌────────┐│
│   │   📝   │  ──→ │   ✅   │  ──→ │   📄   │  ──→ │   💸   ││
│   │        │      │        │      │        │      │        ││
│   │ Submit │      │Eligibility│   │Document│      │Approval││
│   │ Application│  │Assessment│    │Verification│ │& Disburse││
│   │        │      │        │      │        │      │        ││
│   │ [Details]│    │[Details]│     │[Details]│     │[Details]││
│   └────────┘      └────────┘      └────────┘      └────────┘│
│                                                               │
│              [Start Your Application]                         │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Design:**
- **Layout:** Horizontal timeline (desktop), Vertical (mobile)
- **Steps:** 4 numbered steps with connecting arrows
- **Step Card:**
  - Icon: 64px, circular background
  - Step number badge
  - Title: 18px, bold
  - Description: 14px, 2-3 lines
  - Width: 220px each

**Section Specs:**
- Background: Light blue/gray gradient
- Padding: 80px vertical
- CTA button below timeline

---

### 3.6 DSA PARTNERSHIP SECTION
**Purpose:** Convert visitors into DSA partners

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  ┌────────────────────────┐  ┌────────────────────────────┐ │
│  │                        │  │ Become a DSA Partner &     │ │
│  │                        │  │ Grow Your Income           │ │
│  │   [Partnership         │  │                            │ │
│  │    Image/              │  │ Join India's fastest-      │ │
│  │    Illustration]       │  │ growing loan distribution  │ │
│  │                        │  │ network                    │ │
│  │                        │  │                            │ │
│  │                        │  │ ✓ High Commission          │ │
│  │                        │  │ ✓ Multi-Product Portfolio  │ │
│  │                        │  │ ✓ Dedicated Support        │ │
│  │                        │  │ ✓ Marketing Assistance     │ │
│  │                        │  │ ✓ Timely Payouts           │ │
│  │                        │  │ ✓ CRM & Training Access    │ │
│  │                        │  │                            │ │
│  │                        │  │ [Register as DSA Partner]  │ │
│  └────────────────────────┘  └────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**Design:**
- **Layout:** 2-column (50/50 split), stacked on mobile
- **Left:** Image or illustration
- **Right:** Content + CTA
- **Benefits:** Checkmark list with icons
- **CTA:** Large button, high contrast

**Section Specs:**
- Background: Dark blue or brand color (white text)
- Padding: 80px vertical
- Alternative: White background with colored accent card

---

### 3.7 TRUST & CREDIBILITY SECTION
**Purpose:** Build confidence through social proof

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                   Trusted by Leading Institutions             │
│                                                               │
│     [Bank Logo] [Bank Logo] [Bank Logo] [NBFC Logo]          │
│     [Bank Logo] [Bank Logo] [Bank Logo] [NBFC Logo]          │
│                                                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │   500+   │  │   50+    │  │   98%    │  │   24hrs  │    │
│  │ Customers│  │  Partner │  │Satisfaction│ │ Support  │    │
│  │  Served  │  │  Banks   │  │   Rate   │  │          │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Design:**
- **Partner Logos:** 
  - Grayscale logos, 120px width
  - Horizontal scrolling carousel (if many)
  - Even spacing
  
- **Statistics:**
  - Large numbers (48px, bold, brand color)
  - Label below (16px, gray)
  - Icons optional
  - Cards with subtle background

**Section Specs:**
- Background: White
- Padding: 60px vertical
- Center aligned

---

### 3.8 CONTACT & LOCATION SECTION
**Purpose:** Easy access to contact information

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                       Get in Touch                            │
│                                                               │
│  ┌──────────────────────┐  ┌────────────────────────────┐   │
│  │                      │  │                            │   │
│  │  📍 Address          │  │                            │   │
│  │  Diva Railway        │  │                            │   │
│  │  Station Road,       │  │     [Google Map Embed]     │   │
│  │  Near SBI ATM        │  │                            │   │
│  │  Diva East, Mumbai   │  │                            │   │
│  │                      │  │                            │   │
│  │  📧 Email            │  │                            │   │
│  │  maruti.pol@rrtrust  │  │                            │   │
│  │                      │  │                            │   │
│  │  📞 Phone/WhatsApp   │  │                            │   │
│  │  +91 99227 79854     │  │                            │   │
│  │                      │  │                            │   │
│  │  [Call Now]          │  │                            │   │
│  │  [WhatsApp]          │  │                            │   │
│  │                      │  │                            │   │
│  └──────────────────────┘  └────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Design:**
- **Layout:** 2-column (40/60 split), stacked on mobile
- **Left:** Contact details with icons
- **Right:** Embedded Google Map (responsive)
- **CTA Buttons:** Click-to-call and WhatsApp

**Section Specs:**
- Background: Light gray
- Padding: 80px vertical

---

### 3.9 QUICK INQUIRY FORM (STICKY/INLINE)
**Purpose:** Capture leads throughout the page

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                    Quick Loan Inquiry                         │
│                 Get a callback in 24 hours                    │
│                                                               │
│            [Full Name*]                                       │
│                                                               │
│            [Phone Number*]                                    │
│                                                               │
│            [Email Address*]                                   │
│                                                               │
│            [Select Loan Type* ▾]                              │
│                                                               │
│            [Loan Amount]                                      │
│                                                               │
│                [Submit Inquiry]                               │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Form Fields:**
- Full Name (text input)
- Phone Number (tel input, validated for Indian format)
- Email Address (email input)
- Loan Type (dropdown: Personal, Business, Home, LAP, Vehicle, Education, Working Capital)
- Loan Amount (optional, number input)

**Design:**
- Field height: 48px
- Border: 1px solid gray, rounded corners
- Focus state: Brand color border
- Error state: Red border + message below
- Submit button: Full width, brand color
- Required fields marked with *

**Placement Options:**
1. Fixed floating button on right side (opens form modal)
2. Inline section after "How It Works"
3. Before footer

**Section Specs:**
- Background: White card with shadow
- Padding: 40px
- Max width: 500px
- Center aligned

---

### 3.10 FOOTER
**Purpose:** Navigation, legal links, contact info

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │ About Us │  │ Products │  │ Quick    │  │ Legal    │    │
│  │          │  │          │  │ Links    │  │          │    │
│  │ [Logo]   │  │ Personal │  │ Retail   │  │ Privacy  │    │
│  │          │  │ Loan     │  │ Loans    │  │ Policy   │    │
│  │ Brief    │  │ Business │  │ Business │  │ Terms &  │    │
│  │ company  │  │ Loan     │  │ Loans    │  │ Conditions│   │
│  │ description│ │ Home     │  │ DSA      │  │ Disclaimer│   │
│  │          │  │ Loan     │  │ Partner  │  │          │    │
│  │ [Social  │  │ LAP      │  │ About    │  │ Contact  │    │
│  │  Icons]  │  │ Vehicle  │  │ Contact  │  │ Support  │    │
│  │          │  │ Loan     │  │          │  │          │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│                                                               │
│  ────────────────────────────────────────────────────────── │
│                                                               │
│  © 2025 RR Trust Capital Solutions. All Rights Reserved.     │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Design:**
- **Layout:** 4-column grid (desktop), stacked (mobile)
- **Background:** Dark gray or dark blue
- **Text color:** White/light gray
- **Links:** Hover effect (color change or underline)

**Column Content:**
1. **About:** Logo, 2-line description, social icons
2. **Products:** List of loan types
3. **Quick Links:** Navigation links
4. **Legal:** Privacy, terms, contact

**Bottom Bar:**
- Copyright notice
- Optional: Payment security badges
- "Designed by [Company]" (optional)

**Section Specs:**
- Padding: 60px vertical, 40px horizontal
- Font size: 14px
- Line spacing: 1.8

---

## 4. FLOATING/STICKY ELEMENTS

### 4.1 WhatsApp Floating Button
**Position:** Fixed bottom-right corner

**Design:**
```
  ┌──────┐
  │  💬  │  ← WhatsApp icon
  │      │
  └──────┘
```

- Size: 60px x 60px (desktop), 50px x 50px (mobile)
- Color: WhatsApp green (#25D366)
- Icon: White WhatsApp logo
- Shadow: Prominent shadow for visibility
- Hover: Slight scale increase
- Click: Opens WhatsApp with pre-filled message
- Position: 24px from bottom, 24px from right

### 4.2 Sticky CTA Bar (Mobile)
**Position:** Fixed at bottom on mobile only

**Design:**
```
┌─────────────────────────────────────┐
│      [Apply for Loan]               │
└─────────────────────────────────────┘
```

- Height: 60px
- Background: Brand color
- Button: Full width, white text
- Shows after user scrolls past hero
- z-index: High (always on top)

---

## 5. COLOR PALETTE

### Primary Colors
- **Brand Primary:** #1E40AF (Professional Blue)
- **Brand Accent:** #F59E0B (Gold/Orange for CTAs)
- **Success:** #10B981 (Green)
- **Error:** #EF4444 (Red)

### Neutral Colors
- **Background:** #FFFFFF (White)
- **Background Alt:** #F9FAFB (Light Gray)
- **Text Primary:** #111827 (Dark Gray)
- **Text Secondary:** #6B7280 (Medium Gray)
- **Border:** #E5E7EB (Light Gray)

### Usage Guide
- Primary CTAs: Orange (#F59E0B)
- Secondary CTAs: Blue outlined
- Links: Blue (#1E40AF)
- Icons: Blue or Gray depending on context
- Hover states: Darker shade of base color

---

## 6. TYPOGRAPHY

### Font Family
- **Primary:** Inter or Poppins
- **Fallback:** -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

### Font Sizes (Desktop)
- H1 (Hero): 48px, Bold
- H2 (Sections): 36px, Bold
- H3 (Subsections): 24px, Semi-bold
- Body: 16px, Regular
- Small: 14px, Regular
- Button: 16px, Semi-bold

### Font Sizes (Mobile)
- H1: 32px
- H2: 28px
- H3: 20px
- Body: 16px
- Small: 14px

### Line Heights
- Headings: 1.2
- Body: 1.6
- Buttons: 1

---

## 7. SPACING SYSTEM

### Consistent Spacing Scale
- 4px, 8px, 16px, 24px, 32px, 48px, 64px, 80px

### Section Padding
- Desktop: 80px vertical
- Mobile: 48px vertical

### Component Spacing
- Between sections: 80px (desktop), 48px (mobile)
- Between elements: 24px
- Card padding: 32px
- Button padding: 12px vertical, 32px horizontal

---

## 8. BUTTONS & CTAs

### Primary Button
- Background: #F59E0B (Orange)
- Text: White, 16px, Semi-bold
- Padding: 14px 32px
- Border radius: 8px
- Hover: Darker shade (#DC2626)
- Shadow: 0 4px 12px rgba(245, 158, 11, 0.3)

### Secondary Button
- Background: Transparent
- Border: 2px solid #1E40AF
- Text: #1E40AF, 16px, Semi-bold
- Padding: 12px 30px
- Border radius: 8px
- Hover: Fill with blue, text white

### Text Link
- Color: #1E40AF
- Hover: Underline
- Font: 16px

### WhatsApp Button
- Background: #25D366
- Text: White
- Icon: WhatsApp logo
- Style: Similar to primary button

---

## 9. RESPONSIVE BREAKPOINTS

### Breakpoints
```
Mobile: 320px - 767px
Tablet: 768px - 1023px
Desktop: 1024px - 1440px
Large Desktop: 1441px+
```

### Mobile Adaptations
- Hamburger menu for navigation
- Stack all columns vertically
- Full-width buttons
- Larger tap targets (min 44x44px)
- Reduce font sizes
- Hide/collapse less critical content
- Show sticky CTA bar

---

## 10. ANIMATIONS & INTERACTIONS

### Page Load
- Fade-in hero content (500ms)
- Slide-in navigation (300ms)

### Scroll Animations
- Fade-in sections as they enter viewport
- Counter animations for statistics
- Slide-in cards

### Hover Effects
- Buttons: Background color change + slight scale (1.02)
- Cards: Shadow increase + slight lift (translate -2px)
- Links: Underline appear
- Images: Slight zoom (scale 1.05)

### Transitions
- Default: 200-300ms ease-in-out
- Use CSS transforms for performance
- Smooth scroll behavior

---

## 11. IMAGES & MEDIA

### Image Requirements

**Hero Background:**
- Size: 1920x1080px minimum
- Format: JPG (optimized) or WebP
- File size: <300KB
- Content: Professional finance/office setting
- Overlay: 40% dark gradient for text readability

**Product Icons:**
- Size: 64x64px
- Format: SVG (preferred) or PNG
- Style: Line icons or solid, consistent set
- Color: Brand blue or monochrome

**Logos:**
- Format: SVG (scalable) + PNG fallback
- Transparent background
- Multiple sizes: 40px, 80px, 120px height

**Partner Bank Logos:**
- Format: PNG or SVG
- Size: 120px width
- Grayscale or color (consistent)

### Image Optimization
- Use WebP format with JPG fallback
- Lazy loading for below-fold images
- Responsive images with srcset
- Compress all images (TinyPNG or similar)

---

## 12. FORM DESIGN SPECIFICATIONS

### Input Fields
- Height: 48px
- Padding: 12px 16px
- Border: 1px solid #E5E7EB
- Border radius: 6px
- Font: 16px (prevents zoom on iOS)
- Background: White

### Focus State
- Border: 2px solid #1E40AF
- Outline: None
- Box shadow: 0 0 0 3px rgba(30, 64, 175, 0.1)

### Error State
- Border: 2px solid #EF4444
- Error message: Red, 14px, below field
- Icon: Red exclamation mark

### Success State
- Border: 2px solid #10B981
- Checkmark icon (optional)

### Dropdown Select
- Arrow icon on right
- Same styling as input fields
- Options: White background, hover highlight

### Labels
- Position: Above field
- Font: 14px, semi-bold
- Color: #374151
- Required indicator: Red asterisk (*)

---

## 13. ACCESSIBILITY REQUIREMENTS

### Color Contrast
- Text on background: Minimum 4.5:1 ratio
- Large text: Minimum 3:1 ratio
- Interactive elements: Clear visual distinction

### Keyboard Navigation
- All interactive elements accessible via Tab
- Focus indicators visible and clear
- Logical tab order
- Skip to main content link

### Screen Readers
- Semantic HTML (header, nav, main, footer, section)
- Alt text for all images
- ARIA labels where needed
- Form labels properly associated

### Touch Targets
- Minimum size: 44x44px (mobile)
- Adequate spacing between clickable elements
- Clear active/pressed states

---

## 14. PERFORMANCE TARGETS

### Load Time
- First Contentful Paint: <2.0s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.5s

### Page Weight
- Total page size: <2MB
- Images: Optimized and compressed
- CSS/JS: Minified
- Fonts: Subset and optimized

### Mobile Performance
- Google PageSpeed score: 85+
- Responsive images
- Lazy loading
- Minimal JavaScript

---

## 15. TECHNICAL SPECIFICATIONS

### Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile: iOS Safari, Chrome Mobile

### HTML Structure
- Semantic HTML5
- Proper heading hierarchy (H1 → H2 → H3)
- Valid markup (W3C compliant)
- Clean, commented code

### CSS
- Mobile-first approach
- Flexbox/Grid for layouts
- CSS custom properties for colors
- BEM or similar naming convention
- Minified for production

### JavaScript
- Progressive enhancement
- Minimal dependencies
- Async/defer for non-critical scripts
- Form validation
- Smooth scroll functionality

---

## 16. CONTENT GUIDELINES

### Headlines
- Clear and benefit-focused
- Action-oriented language
- Under 10 words when possible
- Include keywords naturally

### Body Copy
- Short paragraphs (3-4 lines max)
- Bullet points for lists
- Active voice
- Professional but approachable tone
- No jargon or complex terms

### CTA Copy
- Action verbs (Apply, Submit, Get, Register)
- Clear value proposition
- Urgent but not pushy
- Consistent across page

---

## 17. SEO ELEMENTS

### Meta Tags
```html
<title>RR Trust Capital Solutions - Personal & Business Loans Mumbai</title>
<meta name="description" content="Get personal, business, home, and commercial loans with transparent processing. Multi-bank network, zero hidden charges. Apply now!">
```

### Structured Data
- LocalBusiness schema
- FinancialService schema
- Breadcrumb navigation
- Organization schema

### On-Page SEO
- H1: One per page
- H2-H6: Proper hierarchy
- Alt text: All images
- Internal links: Relevant anchor text
- URL structure: Clean and descriptive

---

## 18. UI COMPONENTS LIBRARY

### Cards
```
Standard Card:
- Background: White
- Border: 1px solid #E5E7EB
- Border radius: 12px
- Padding: 32px
- Shadow: 0 2px 8px rgba(0,0,0,0.08)
- Hover: Shadow increase
```

### Badges/Icons
```
Trust Badge:
- Icon: 24px, brand color
- Text: 14px, semi-bold
- Background: Light blue/gray
- Padding: 8px 16px
- Border radius: 20px (pill shape)
```

### Dividers
```
Section Divider:
- Height: 1px
- Color: #E5E7EB
- Margin: 40px vertical
```

---

## 19. MOBILE-SPECIFIC UI ELEMENTS

### Mobile Navigation
```
Hamburger Menu:
- Icon: 3 lines, 24px
- Opens: Full-screen overlay
- Animation: Slide from right
- Close: X icon top-right
- Links: Large tap targets (56px height