import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Sharon Lavin',
  description: 'Learn about Dr. Sharon E. Lavin — Psy.D., Marriage and Family Therapist with over 40 years of experience serving the San Fernando Valley. UCLA, Pepperdine, and CSPP graduate.',
  openGraph: { title: 'About Dr. Sharon E. Lavin', description: 'Over 40 years of compassionate therapy practice in Woodland Hills, CA — specializing in individuals, couples, and families.' },
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-image">
          <Image src="/images/drs.jpg" alt="Dr. Sharon E. Lavin" fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: 'cover', objectPosition: 'center top', animation: 'kenBurns 25s ease-in-out infinite alternate' }} priority />
        </div>
        <div className="about-hero-text">
          <span className="hero-subtitle">About Dr. Lavin</span>
          <h1>Dr. Sharon <em>E.<br />Lavin</em></h1>
          <p className="hero-role">Marriage and Family Therapist</p>
          <p>My purpose as a therapist is to create a safe environment where the patient will be able to open up and explore what is going on within them. It is my job to help patients understand how to validate their feelings.</p>
          <div className="hero-contact-strip">
            <a href="tel:8187577611">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              (818) 757-7611
            </a>
            <a href="mailto:speris8809@aol.com">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              speris8809@aol.com
            </a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="story-section">
        <div className="story-header">
          <span className="section-label">My Story</span>
          <h2>A Career Dedicated to <em>Healing</em></h2>
          <p>Together we will work to understand why they feel the way they do, and explore different ways of coping with what is going on.</p>
        </div>
        <div className="story-grid">
          <div className="story-content">
            <h3>Who I Work With</h3>
            <p>I work with families, groups, and individuals of all ages including adults, adolescents, and children. In order to see progress, I work with my patients as a team, actively listening and developing trust.</p>
            <p>I help point out how anxiety, depression, and stress are brought on by external forces: work, school, abandonment, cancer, chronic illnesses, diabetes, divorce, family issues, dependency, adoptions, unhealthy relationships, control issues, and communication problems.</p>
            <h3>My Specialties</h3>
            <p>Working with children and troubled adolescents, working with displaced workers, and helping patients cope with anxiety and depression. A large focus of my career is dedicated to working with newly diagnosed diabetic patients and teaching seminars on stress management.</p>
            <div className="specialty-tags">
              {['Anxiety & Depression', 'Children & Adolescents', 'Diabetes Counseling', 'Stress Management', 'Family Therapy', 'Couples Therapy'].map((t) => (
                <span key={t} className="specialty-tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="story-content">
            <h3>Credentials</h3>
            <p>I began studying psychology because I was interested in connecting with people and helping them. It is my job to make patients understand their feelings in order to express and communicate their anxieties, worries, and stress that emotionally impact everyday well-being.</p>
            <p>My credentials include a Bachelor&apos;s Degree in Psychology from University of California Los Angeles, a Master&apos;s Degree in Psychology from Pepperdine University, and a Psy.D. in Psychology from the California School of Professional Psychology.</p>
            <p>I have been in private practice for over 40 years located in Woodland Hills, California which allows me to treat patients in the heart of the San Fernando Valley and the greater Los Angeles area.</p>
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="quote-banner">
        <div className="quote-banner-inner">
          <div className="quote-mark">&ldquo;</div>
          <blockquote>I believe that everyone is dealt a certain deck of cards, and it is my job as a therapist to help you play the deck of cards the best way you possibly can.</blockquote>
          <cite>Dr. Sharon E. Lavin, Psy.D.</cite>
        </div>
      </section>

      {/* CREDENTIALS CARDS */}
      <section className="credentials-section">
        <div className="credentials-container">
          <div className="credential-card">
            <div className="credential-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
            </div>
            <h3>Education</h3>
            <p>B.A. Psychology from UCLA. Master&apos;s from Pepperdine University. Psy.D. from the California School of Professional Psychology.</p>
          </div>
          <div className="credential-card">
            <div className="credential-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3>Over 40 Years Experience</h3>
            <p>Private practice located in Woodland Hills, California, treating patients across the San Fernando Valley and the greater Los Angeles area.</p>
          </div>
          <div className="credential-card">
            <div className="credential-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3>All Ages</h3>
            <p>Working with families, groups, and individuals of all ages including adults, adolescents, and children in a safe, collaborative environment.</p>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="approach-section">
        <div className="approach-container">
          <div className="approach-text">
            <span className="section-label">My Approach</span>
            <h2>Personalized Care <em>for You</em></h2>
            <p>By listening to clients, I personalize treatment options to build confidence, handle emotions, and create awareness that leads to better, conscious choices. I strongly believe that collaboration between a client and the client&apos;s therapist allows for the exploration of difficult parts of life.</p>
            <p>I help individuals, whether children or adults, understand the bigger picture, which often includes grief and anxiety. Through therapy, I encourage people to experience grief, loss, stress, or depression without feeling helpless or trapped.</p>
            <div className="approach-values">
              {[
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>, title: 'Safe Environment', desc: 'A space to open up and explore' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>, title: 'Active Listening', desc: 'Building trust through collaboration' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>, title: 'Healing Process', desc: 'Validated feelings, real progress' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>, title: 'Conscious Choices', desc: 'Awareness that leads to growth' },
              ].map((v) => (
                <div key={v.title} className="approach-value">
                  <div className="approach-value-icon">{v.icon}</div>
                  <div><h4>{v.title}</h4><p>{v.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="approach-image">
            <div style={{ position: 'relative', width: '100%', height: '550px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <Image src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop" alt="Therapeutic approach" fill sizes="(max-width: 1024px) 100vw, 45vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTY SERVICES */}
      <section className="specialties-section">
        <div className="specialties-header">
          <span className="section-label">What I Treat</span>
          <h2>Specialty Therapeutic <em>Services</em></h2>
          <p>I combine and integrate social, biological, and psychological aspects of the self to help determine underlying issues while using a multifaceted approach to preventative care.</p>
        </div>
        <div className="specialties-grid">
          {[
            { href: '/services/health', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop', label: 'Health & Wellness' },
            { href: '/services/chronic-illness', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop', label: 'Chronic Illness' },
            { href: '/services/diabetes', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop', label: 'Diabetes Counseling' },
            { href: '/services/parenting', img: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?q=80&w=800&auto=format&fit=crop', label: 'Parenting' },
            { href: '/services/children', img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop', label: 'Children Psychotherapy' },
            { href: '/services/adolescents', img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop', label: 'Adolescent Psychotherapy' },
            { href: '/services/adults', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop', label: 'Adult Psychotherapy' },
            { href: '/services/couples', img: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop', label: 'Couples Therapy' },
          ].map((s) => (
            <Link key={s.href} href={s.href} className="spec-card">
              <Image src={s.img} alt={s.label} fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: 'cover', transition: 'transform 0.7s ease' }} />
              <div className="spec-card-overlay"></div>
              <div className="spec-card-content">
                <h4>{s.label}</h4>
                <span>Learn More &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section className="booking-section">
        <div className="booking-container">
          <div className="booking-info">
            <span className="section-label">Get Started</span>
            <h2>Book An <em>Appointment</em></h2>
            <p>Ready to take the first step? Fill out the form and my office will get back to you shortly to schedule your appointment.</p>
            <div className="booking-details">
              <div className="booking-detail">
                <div className="booking-detail-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
                <div><strong>Call Us</strong><span>(818) 757-7611</span></div>
              </div>
              <div className="booking-detail">
                <div className="booking-detail-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
                <div><strong>Email Us</strong><span>speris8809@aol.com</span></div>
              </div>
              <div className="booking-detail">
                <div className="booking-detail-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                <div><strong>Visit Us</strong><span>21731 Ventura Boulevard #165, Woodland Hills</span></div>
              </div>
            </div>
          </div>
          <div className="booking-form-card">
            <h3>Request an Appointment</h3>
            <p>All information is kept strictly confidential.</p>
            <form className="booking-form">
              <div className="booking-form-row">
                <div><label htmlFor="b-name">Full Name</label><input type="text" id="b-name" placeholder="Your name" required /></div>
                <div><label htmlFor="b-email">Email Address</label><input type="email" id="b-email" placeholder="you@email.com" required /></div>
              </div>
              <div className="booking-form-row">
                <div><label htmlFor="b-phone">Phone Number</label><input type="tel" id="b-phone" placeholder="(000) 000-0000" /></div>
                <div><label htmlFor="b-service">Service Needed</label><input type="text" id="b-service" placeholder="e.g. Family Therapy" /></div>
              </div>
              <div><label htmlFor="b-msg">Your Message</label><textarea id="b-msg" placeholder="How can Dr. Sharon help you?" rows={4}></textarea></div>
              <button type="submit" className="btn-primary">Send Secure Message</button>
              <div className="booking-form-privacy">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                Your information is protected and never shared.
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
