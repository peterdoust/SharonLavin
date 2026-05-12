import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import ContactPageForm from '@/components/ContactPageForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Schedule an appointment with Dr. Sharon E. Lavin — Marriage and Family Therapist in Woodland Hills, CA. Call (818) 757-7611 or send a message.',
  openGraph: { title: 'Contact Dr. Sharon E. Lavin', description: 'Ready to take the first step? Contact our Woodland Hills office to schedule your first session.' },
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="ct-hero">
        <Image src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2069&auto=format&fit=crop" alt="Contact" fill sizes="100vw" className="ct-hero-bg" style={{ objectFit: 'cover' }} priority />
        <div className="ct-hero-overlay"></div>
        <div className="ct-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link> &nbsp;/&nbsp; <span>Contact</span>
          </div>
          <h1>Contact <em>Sharon Lavin</em></h1>
          <p>Have questions or ready to schedule your first session? I&apos;d love to hear from you. Reach out and my office will respond promptly.</p>
        </div>
      </section>

      {/* FLOATING INFO STRIP */}
      <div className="ct-info-strip">
        <div className="ct-info-inner">
          <div className="ct-info-item">
            <div className="ct-info-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
            <div><h4>Call Us</h4><p><a href="tel:8187087350">+1 (818) 708-3750</a></p></div>
          </div>
          <div className="ct-info-item">
            <div className="ct-info-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
            <div><h4>Email Us</h4><p><a href="mailto:speris8809@aol.com">speris8809@aol.com</a></p></div>
          </div>
          <div className="ct-info-item">
            <div className="ct-info-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
            <div><h4>Visit Us</h4><p>21731 Ventura Blvd Ste 160</p></div>
          </div>
        </div>
      </div>

      {/* MAIN FORM + INFO */}
      <section className="ct-main">
        <div className="ct-main-grid">
          <ContactPageForm />

          <div className="ct-info-side">
            <div>
              <h3>Dr. Sharon Lavin</h3>
              <p style={{ color: 'var(--primary-color)', paddingBottom: '1.5rem' }}>Marriage and Family Therapist with over 25 years of dedicated practice in the San Fernando Valley.</p>
              <div className="ct-detail-list">
                <div className="ct-detail">
                  <div className="ct-detail-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
                  <div className="ct-detail-text"><h4>Phone Numbers</h4><p>Office: <a href="tel:8187087350">+1 (818) 708-3750</a><br />Cell: <a href="tel:8188224364">+1 (818) 822-4364</a></p></div>
                </div>
                <div className="ct-detail">
                  <div className="ct-detail-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
                  <div className="ct-detail-text"><h4>Online</h4><p>Email: <a href="mailto:speris8809@aol.com">speris8809@aol.com</a><br />Web: www.drsharonlavin.com</p></div>
                </div>
                <div className="ct-detail">
                  <div className="ct-detail-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                  <div className="ct-detail-text"><h4>Office Location</h4><p>21731 Ventura Blvd Ste 160<br />Woodland Hills, CA 91364</p></div>
                </div>
              </div>
            </div>
            <div className="ct-hours">
              <h4>Office Hours</h4>
              <div className="ct-hours-row"><span className="day">Monday - Friday</span><span className="time">9:00 AM - 6:00 PM</span></div>
              <div className="ct-hours-row"><span className="day">Saturday</span><span className="time">By Appointment</span></div>
              <div className="ct-hours-row"><span className="day">Sunday</span><span className="time off">Closed</span></div>
            </div>
            <div className="ct-social">
              <a href="#"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
              <a href="#"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
              <a href="#"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="ct-map-section">
        <div className="ct-map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.7656919018617!2d-118.60155698478229!3d34.16912388057279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29eed46d0a7a7%3A0xc3b9bed86720dbe7!2s21731%20Ventura%20Blvd%20%23160%2C%20Woodland%20Hills%2C%20CA%2091364!5e0!3m2!1sen!2sus!4v1654109404289!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="ct-map-overlay-bar">
            <div className="ct-map-address">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <p>21731 Ventura Blvd Ste 160, Woodland Hills, CA 91364</p>
            </div>
            <a href="https://maps.google.com/?q=21731+Ventura+Blvd+Ste+160+Woodland+Hills+CA+91364" target="_blank" rel="noopener noreferrer" className="ct-map-btn">
              Get Directions
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ct-faq">
        <div className="ct-faq-header">
          <span className="label">Common Questions</span>
          <h2>Frequently <em>Asked</em></h2>
        </div>
        <div className="ct-faq-grid">
          {[
            { q: 'How do I schedule an appointment?', a: 'Call the office at (818) 708-3750, send an email, or fill out the contact form above. We\'ll respond within one business day.' },
            { q: 'What should I expect in the first session?', a: 'The first session is an opportunity to discuss your concerns, goals, and background in a safe, judgment-free environment.' },
            { q: 'Do you accept insurance?', a: 'Please contact the office to discuss insurance options and coverage. We work to accommodate various plans.' },
            { q: 'Is my information confidential?', a: 'Absolutely. All client information is kept strictly confidential in accordance with HIPAA regulations and professional ethics.' },
          ].map((faq) => (
            <div key={faq.q} className="ct-faq-card">
              <h4>{faq.q}</h4>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
