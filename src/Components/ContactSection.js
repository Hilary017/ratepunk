import './ContactSection.css'

const ContactSection = () => {
    return <div className='contact-section'>
        <div className='logo-contact'>
            <img src='./logo.svg' alt='Logo' className='contact--img' />
            <p>Ratepunk compares hotel room prices across the 
                major online travel agencies. When you seach 
                for a room, Ratepunk extension scans the top 
                booking sites and runs a price comparison, so 
                you can be confident in knowing you are getting 
                the best deal</p>
            <p className='copyright--text'>&copy; 2023 Ratepunk. All Rights Reserved</p>    
        </div>
        <div className='quick--links'>
            <h4 className='quick--head'>QUICK LINKS</h4>
            <a href='#' className='active-link contact-link'>Price Comparison</a> <br/>
            <a href='#' className='contact-link'>Chrome Extension</a> <br/>
            <a href='#' className='contact-link'>How it works</a> <br/>
            <a href='#' className='contact-link'>Ratepunk Blog</a> <br/>
            <a href='#' className='contact-link'>Privacy Policy</a> <br/>
        </div>
        <div className='socials-sect'>
            <div className='contact--sect'>
                <h4 className='contact--h'>CONTACT</h4>
                <p><span><img src='./email-footer.svg' className='rp--mail' /></span>    hi@ratepunk.com</p>
            </div>
            <div className='social--sect'>
                <h4>SOCIAL</h4>
                <div className='social-links'>
                    <img src='./instagram.svg' className='social--img' />
                    <img src='./facebook.svg' className='social--img'/>
                    <img src='./linkedin.svg' className='social--img' />
                    <img src='./twitter.svg' className='social--img' />
                    <img src='./tiktok.svg' className='social--img' />
                </div>
            </div>
            <p className='rights--text'>&copy; 2023 Ratepunk. All Rights Reserved.</p>
        </div>
    </div>
}

export default ContactSection;