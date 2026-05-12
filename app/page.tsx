import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import ParallaxHero from '@/components/ParallaxHero';
import CTAForm from '@/components/CTAForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dr. Sharon E. Lavin | Premium Therapy & Counseling',
  description: 'Marriage and Family Therapist in Woodland Hills, CA — compassionate, evidence-based therapy for individuals, couples, families, and children. Now accepting new patients.',
  openGraph: { title: 'Dr. Sharon E. Lavin | Premium Therapy & Counseling', description: 'Compassionate therapy for individuals, couples, and families in Woodland Hills, CA.' },
};

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <ParallaxHero />

      {/* HERO */}
      <section className="home-hero">
        <Image src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop" alt="Hero Background" fill sizes="100vw" className="hero-bg" style={{ objectFit: 'cover' }} priority />
        <div className="hero-overlay"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
        <div className="home-hero-content">
          <span className="hero-badge animate-1">
            <span className="hero-badge-dot"></span>
            Now Accepting New Patients
          </span>
          <h2 className="animate-2">Healing Begins<br /><em>With Connection</em></h2>
          <p className="animate-3">I work with my patients as a team — actively listening, building trust, and creating a safe space to explore feelings and develop healthy ways of coping with life&apos;s challenges.</p>
          <div className="hero-cta-group animate-4">
            <Link href="/contact" className="btn-primary btn-glow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Book a Session
            </Link>
            <Link href="/about" className="btn-outline-hero">
              Learn About Sharon
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
        </div>
        <div className="hero-stats animate-4">
          <div className="hero-stat"><span className="hero-stat-number">30+</span><span className="hero-stat-label">Years Experience</span></div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat"><span className="hero-stat-number">5,000+</span><span className="hero-stat-label">Patients Helped</span></div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat"><span className="hero-stat-number">MFC#25638</span><span className="hero-stat-label">Licensed Therapist</span></div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="trust-strip-inner">
          <div className="trust-item">
            <div className="trust-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
            <div><strong>Safe &amp; Confidential</strong><span>HIPAA Compliant Practice</span></div>
          </div>
          <div className="trust-item">
            <div className="trust-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
            <div><strong>Flexible Hours</strong><span>Evenings &amp; Weekends Available</span></div>
          </div>
          <div className="trust-item">
            <div className="trust-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
            <div><strong>All Ages Welcome</strong><span>Children, Teens &amp; Adults</span></div>
          </div>
          <div className="trust-item">
            <div className="trust-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
            <div><strong>Evidence-Based</strong><span>Proven Treatment Methods</span></div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="philosophy-section">
        <div className="philosophy-container">
          <div className="philosophy-left" data-reveal>
            <span className="section-label">My Purpose As A Therapist</span>
            <h2 className="section-heading">My purpose as a <em>therapist</em></h2>
            <p>My purpose as a therapist is to create a safe environment where the patient will be able to open up and explore what is going on within them. It is my job to help patients understand how to validate their feelings. Together we will work to understand why they feel the way they do, and explore different ways of coping with what is going on.</p>
            <p>I work with families, groups, and individuals of all ages including adults, adolescence, and children. In order to see progress, I work with my patients as a team, actively listening and developing trust. I help point out how anxiety, depression, and stress are brought on by external forces: work, school, abandonment, cancer, chronic illnesses, diabetes, divorce, family issues, dependency, adoptions, unhealthy relationships, control issues, and communication problems.</p>
          </div>
          <div className="philosophy-right" data-reveal>
            <div className="philosophy-quote-card">
              <div className="quote-accent-bar"></div>
              <svg className="quote-watermark" width="80" height="80" viewBox="0 0 24 24" fill="currentColor" opacity="0.06"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              <blockquote>I believe that everyone is dealt a certain deck of cards, and it is my job as a therapist to help you play the deck of cards the best way you possibly can.</blockquote>
              <div className="quote-author-line">
                <div className="quote-author-avatar">S</div>
                <div>
                  <strong>Dr. Sharon E. Lavin</strong>
                  <span>PSY. D — Marriage &amp; Family Therapist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <div className="services-header" data-reveal>
          <span className="section-label">What I Offer</span>
          <h2 className="section-heading centered">Specialty Therapeutic Services</h2>
          <p className="section-desc">I combine and integrate social, biological, and psychological aspects of the self to help determine underlying issues while using a multifaceted approach to preventative care.</p>
        </div>
        <div className="services-masonry" data-reveal>
          {[
            { href: '/services/health', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2099&auto=format&fit=crop', label: 'Health & Wellness', featured: true, tag: 'Core Service', desc: 'Holistic approach to mind-body wellness through compassionate therapeutic support.' },
            { href: '/services/chronic-illness', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop', label: 'Chronic Illness', featured: false },
            { href: '/services/diabetes', img: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2090&auto=format&fit=crop', label: 'Diabetes Counseling', featured: false },
            { href: '/services/parenting', img: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=2070&auto=format&fit=crop', label: 'Parenting', featured: false },
            { href: '/services/children', img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop', label: 'Children Psychotherapy', featured: false },
            { href: '/services/adolescents', img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069&auto=format&fit=crop', label: 'Adolescent Psychotherapy', featured: false },
            { href: '/services/adults', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop', label: 'Adult Psychotherapy', featured: false },
            { href: '/services/couples', img: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=2000&auto=format&fit=crop', label: 'Couples Therapy', featured: false },
          ].map((svc) => (
            <Link key={svc.href} href={svc.href} className={`svc-card${svc.featured ? ' svc-card-featured' : ''}`}>
              <Image src={svc.img} alt={svc.label} fill sizes="(max-width: 768px) 100vw, 25vw" style={{ objectFit: 'cover', transition: 'transform 0.7s ease' }} />
              <div className="svc-card-overlay"></div>
              <div className="svc-card-content">
                {svc.featured && svc.tag && <span className="svc-tag">{svc.tag}</span>}
                <h3>{svc.label}</h3>
                {svc.featured && svc.desc && <p>{svc.desc}</p>}
                <span className="svc-link">
                  {svc.featured ? 'Explore Service' : 'Learn More →'}
                  {svc.featured && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT HOME */}
      <section className="about-home-section">
        <div className="about-home-container">
          <div className="about-home-image" data-reveal>
            <div className="about-image-frame">
              <div style={{ position: 'relative', width: '100%', height: '480px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', zIndex: 1, boxShadow: 'var(--shadow-lg)' }}>
                <Image src="/images/drs.jpg" alt="Dr Sharon Lavin" fill sizes="(max-width: 1024px) 100vw, 35vw" priority style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className="about-experience-badge">
              <span className="exp-number">30+</span>
              <span className="exp-text">Years of<br />Experience</span>
            </div>
          </div>
          <div className="about-home-text" data-reveal>
            <span className="section-label">Meet Your Therapist</span>
            <h2 className="section-heading">Dr. Sharon E. Lavin</h2>
            <div className="about-credentials">
              <span className="credential-tag">PSY. D</span>
              <span className="credential-tag">Marriage &amp; Family Therapist</span>
              <span className="credential-tag">Lic# MFC25638</span>
            </div>
            <p>As a therapist, my primary purpose is to cultivate a secure space where clients feel empowered to unravel their innermost thoughts and emotions. I consider it a vital part of my role to guide individuals toward validating their feelings.</p>
            <p>Through collaborative efforts, we aim to uncover the roots of emotional responses and traverse various coping mechanisms to navigate life&apos;s challenges effectively.</p>
            <Link href="/about" className="btn-primary">
              More About Sharon
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* HELP */}
      <section className="help-section">
        <div className="help-header" data-reveal>
          <span className="section-label">Areas of Focus</span>
          <h2 className="section-heading centered">I Can Help You With</h2>
          <p className="section-desc">Through compassionate and evidence-based practices, we address your unique challenges directly.</p>
        </div>
        <div className="help-grid" data-reveal>
          {[
            { img: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=200&auto=format&fit=crop', title: 'Communication & Relationship', desc: 'Navigating difficulties in how couples speak, listen, and resolve their everyday differences.', num: '01' },
            { img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=200&auto=format&fit=crop', title: 'Family Relationships', desc: 'Resolving conflicts and improving the bonds between parents, children and extended family.', num: '02' },
            { img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=200&auto=format&fit=crop', title: 'Parental Disputes', desc: 'Finding common ground in parenting styles and decisions to establish a stable, loving environment.', num: '03' },
            { img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=200&auto=format&fit=crop', title: 'Career & Work Issues', desc: 'Managing workplace stress, burnout, and finding balance between professional and personal life.', num: '04' },
          ].map((card) => (
            <div key={card.num} className="help-card">
              <div className="help-card-icon-wrap">
                <Image src={card.img} alt={card.title} width={70} height={70} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="help-card-body">
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
              <div className="help-card-number">{card.num}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-home-section">
        <div className="testimonials-home-bg"></div>
        <div className="testimonials-home-container" data-reveal>
          <span className="section-label" style={{ color: 'var(--primary-color)' }}>Testimonials</span>
          <h2 className="section-heading centered" style={{ color: 'var(--white)' }}>Voices of Healing</h2>
          <p className="section-desc" style={{ color: 'rgba(255,255,255,0.7)' }}>Real stories from those who have walked the path to recovery.</p>
          <div className="testimonials-track">
            {[
              { initials: 'SC', name: 'Sarah C.', role: 'Family Therapy', quote: '"I started therapy hesitant, but Dr. Lavin has completely changed my view. Her approach is so warm and engaging, and I genuinely feel heard. The steps we\'ve taken together have improved my family life incredibly."' },
              { initials: 'MJ', name: 'Mark & Jane', role: 'Couples Counseling', quote: '"Working with Dr. Sharon has been the best decision for our marriage. We were dealing with severe communication issues, but through her guidance, we learned how to listen to one another again and rebuild our foundation."' },
              { initials: 'RL', name: 'Rachel L.', role: 'Chronic Illness Support', quote: '"Dr. Lavin helped me cope with my chronic illness diagnosis in ways I never thought possible. She provided practical strategies and emotional support that made an incredible difference in my daily life."' },
            ].map((t) => (
              <div key={t.initials} className="testi-card">
                <div className="testi-stars">★★★★★</div>
                <p>{t.quote}</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.initials}</div>
                  <div><strong>{t.name}</strong><span>{t.role}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="articles-section">
        <div className="articles-header" data-reveal>
          <span className="section-label">Insights &amp; Resources</span>
          <h2 className="section-heading centered">Featured Articles</h2>
          <p className="section-desc">Insights and resources for navigating life&apos;s psychological challenges.</p>
        </div>
        <div className="articles-grid" data-reveal>
          {[
            { img: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2090&auto=format&fit=crop', cat: 'Psychology', date: 'June 1, 2026', title: 'Dealing with Depression', desc: 'Although the foods you ingest cannot treat depression, diet does have significant effects on your ability to cope...' },
            { img: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=2070&auto=format&fit=crop', cat: 'Wellness', date: 'March 7, 2026', title: 'Living with Chronic Illness', desc: 'The most common reaction to this unexpected and dire pronouncement is a flood of negative emotions...' },
            { img: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?q=80&w=2070&auto=format&fit=crop', cat: 'Family', date: 'March 2, 2026', title: 'Six Rules for Parenting Teenagers', desc: 'Navigating the teenage years can be extremely stressful. Here are six essential rules for maintaining open communication...' },
          ].map((a) => (
            <article key={a.title} className="art-card">
              <div className="art-card-image">
                <Image src={a.img} alt={a.title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} />
                <div className="art-card-category">{a.cat}</div>
              </div>
              <div className="art-card-body">
                <span className="art-date">{a.date}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <Link href="/blog" className="art-read-more">
                  Read Full Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-bg-shapes">
          <div className="cta-shape cta-shape-1"></div>
          <div className="cta-shape cta-shape-2"></div>
        </div>
        <div className="cta-container" data-reveal>
          <div className="cta-text-side">
            <span className="section-label" style={{ color: 'var(--primary-color)' }}>Ready to Start?</span>
            <h2>Begin Your Journey<br />To <em>Healing</em> Today</h2>
            <p>Fill out the form and our office will get back to you shortly to schedule your appointment. Taking the first step is the hardest — but also the most important.</p>
            <div className="cta-contact-details">
              <div className="cta-detail"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg><span>(818) 757-7611</span></div>
              <div className="cta-detail"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg><span>speris8809@aol.com</span></div>
              <div className="cta-detail"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>21731 Ventura Blvd Ste 160, Woodland Hills, CA</span></div>
            </div>
          </div>
          <div className="cta-form-side">
            <CTAForm />
          </div>
        </div>
      </section>
    </>
  );
}
