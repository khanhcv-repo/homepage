# UI Design Specification: NeuroShin AI - Contact Us Page

## 1. Overview
- **Page Name:** Contact Us (お問い合わせ)
- **Objective:** Provide a professional and easy way for Japanese enterprises to reach out for inquiries, support, or free trial requests.
- **Brand Consistency:** High-tech teal (`#1E302D`) and vibrant orange (`#FF5A36`).

## 2. Design Goals
- **Trust:** Display clear contact information and office locations.
- **Efficiency:** Minimalistic form with validation for Japanese business fields.
- **Accessibility:** Clear labeling and mobile-responsive layout.

## 3. Layout & Structure

### 3.1 Header (Inherited)
- Standard Navbar with "Contact Us" active state.

### 3.2 Hero / Intro Section
- **Headline:** お問い合わせ (Contact Us)
- **Sub-headline:** NeuroShin AIのソリューションに関するご質問や、無料トライアルのご相談など、お気軽にお問い合わせください。

### 3.3 Contact Form (Left Side / Center)
- **Fields:**
    1. **お名前 (Full Name):** Required.
    2. **会社名 (Company Name):** Required.
    3. **メールアドレス (Email):** Required, business email validation.
    4. **電話番号 (Phone Number):** Optional.
    5. **お問い合わせ項目 (Inquiry Type):** Dropdown (Free Trial, Technical Support, Partnership, Others).
    6. **お問い合わせ内容 (Message):** Textarea, required.
- **Privacy Policy:** Checkbox for "個人情報保護方針に同意する" (Agree to Privacy Policy).
- **CTA Button:** "送信する" (Submit) - Large Orange Button.

### 3.4 Office Information (Right Side)
- **Tokyo HQ:**
    - Address: 東京都千代田区大手町 (Sample Address)
    - Phone: 03-XXXX-XXXX
- **Interactive Map:** Google Maps integration showing Tokyo office.

### 3.5 FAQ / Quick Links (Bottom)
- Links to common support articles or documentation to reduce unnecessary inquiries.

## 4. Interactions
- **Form Validation:** Real-time error messages in Japanese.
- **Success State:** Fade-in thank you message with "Return to Home" button.
- **Hover Effects:** Subtle glow on the submit button.

## 5. Styling
- **Typography:** Noto Sans JP for clear readability.
- **Input Fields:** Rounded borders (`rounded-xl`), soft teal focus ring.
