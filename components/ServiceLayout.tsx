import Link from 'next/link';
import Image from 'next/image';

const serviceLinks = [
  { href: '/services/health',          label: 'Health & Wellness' },
  { href: '/services/chronic-illness', label: 'Chronic Illness' },
  { href: '/services/diabetes',        label: 'Diabetes Counseling' },
  { href: '/services/children',        label: 'Children Psychotherapy' },
  { href: '/services/adolescents',     label: 'Adolescent Psychotherapy' },
  { href: '/services/adults',          label: 'Adult Psychotherapy' },
  { href: '/services/couples',         label: 'Couples Therapy' },
  { href: '/services/parenting',       label: 'Parenting' },
];

const heroImages: Record<string, string> = {
  '/services/health':
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2099&auto=format&fit=crop',
  '/services/chronic-illness':
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop',
  '/services/diabetes':
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop',
  '/services/children':
    'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop',
  '/services/adolescents':
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069&auto=format&fit=crop',
  '/services/adults':
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop',
  '/services/couples':
    'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=2000&auto=format&fit=crop',
  '/services/parenting':
    'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=2070&auto=format&fit=crop',
};

interface ServiceLayoutProps {
  title: string;
  currentHref: string;
  quoteText: string;
  children: React.ReactNode;
}

export default function ServiceLayout({ title, currentHref, quoteText, children }: ServiceLayoutProps) {
  const heroImage = heroImages[currentHref] ?? heroImages['/services/health'];

  return (
    <>
      <section className="home-hero" style={{ minHeight: '45vh', justifyContent: 'center', textAlign: 'center' }}>
        <Image
          src={heroImage}
          alt={`${title} hero`}
          fill
          sizes="100vw"
          className="hero-bg"
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="hero-overlay" style={{ background: 'linear-gradient(to top, rgba(30,41,59,0.9) 0%, rgba(30,41,59,0.5) 100%)' }}></div>
        <div className="home-hero-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="section-label">Specialty Services</span>
          <h2 style={{ fontSize: '3.5rem', color: 'white' }}>{title}</h2>
          <div style={{ color: 'white', fontWeight: 500, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
            <Link href="/" style={{ opacity: 0.7 }}>Home</Link>
            &nbsp;/&nbsp;
            <span style={{ color: 'var(--primary-color)' }}>{title}</span>
          </div>
        </div>
      </section>

      <div className="page-container content-grid" style={{ marginTop: '5rem', marginBottom: '5rem' }}>
        <div className="main-content">
          {children}
        </div>
        <aside className="sidebar">
          <div className="sidebar-menu">
            <h3>Specialty Services</h3>
            <ul>
              {serviceLinks.map((svc) => (
                <li key={svc.href}>
                  <Link
                    href={svc.href}
                    style={currentHref === svc.href ? { color: 'var(--primary-color)' } : undefined}
                  >
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ marginTop: '3rem', padding: '2rem', borderRadius: 'var(--radius)', background: 'var(--white)', boxShadow: 'var(--shadow-sm)' }}>
            <p style={{ fontSize: '1.4rem', color: 'var(--text-dark)', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', lineHeight: 1.6 }}>
              &ldquo;{quoteText}&rdquo;
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
