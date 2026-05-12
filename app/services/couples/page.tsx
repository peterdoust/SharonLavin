import Image from 'next/image';
import ServiceLayout from '@/components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couples Therapy',
  description: 'Couples and marriage counseling in Woodland Hills — Dr. Sharon Lavin helps partners improve communication, resolve conflict, rebuild trust, and strengthen their relationship.',
  openGraph: { title: 'Couples Therapy | Sharon E. Lavin', description: 'Solution-focused therapy that helps couples improve communication, resolve conflict, and rebuild emotional connection.' },
};

export default function CouplesPage() {
  return (
    <ServiceLayout
      title="Couples Therapy"
      currentHref="/services/couples"
      quoteText="Solution-focused therapy acknowledges both partners' perspectives while promoting compromise and commitment."
    >
      <h3 className="section-title" style={{ fontSize: '2.2rem', color: 'var(--secondary-color)' }}>What is Couples Therapy?</h3>
      <p><span className="drop-cap">C</span>ouples therapy, also commonly referred to as marriage counseling or relationship therapy, is the process of seeking emotional guidance and counseling to improve communicative issues within a relationship. Therapists develop customized programs based on each couple&apos;s specific issues and relationship complexity level. Treatment may involve as few as 1-3 sessions or extend to 12-24 sessions depending on therapeutic approaches.</p>
      <p style={{ marginTop: '2rem' }}>The therapist serves as a neutral mediator who helps partners identify and voice concerns. Mental health professionals facilitate dialogue, develop solutions, and promote open communication to address current problems and prevent future conflicts.</p>
      <h3 className="section-title" style={{ fontSize: '2.2rem', color: 'var(--secondary-color)', marginTop: '4rem' }}>What Problems do Couples Have?</h3>
      <p>Individual issues affecting relationships include:</p>
      <ul className="custom-list">
        {['Depression','Anxiety','Stress','Feelings of Isolation','Low Self-Esteem','Lack of Motivation'].map((item) => (<li key={item}>{item}</li>))}
      </ul>
      <p style={{ marginTop: '2rem' }}>External relationship stressors encompass:</p>
      <ul className="custom-list">
        {['Children','In-Laws','Extended Family','Traveling','Careers','Work Schedules','Finances','Domestic Stereotypes','Disconnection','Experiencing Boredom'].map((item) => (<li key={item}>{item}</li>))}
      </ul>
      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', margin: '3rem 0', boxShadow: 'var(--shadow-lg)' }}>
        <Image src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2070&auto=format&fit=crop" alt="Couples Therapy" fill sizes="(max-width: 768px) 100vw, 66vw" style={{ objectFit: 'cover' }} />
      </div>
      <p>Solution-focused therapy acknowledges both partners&apos; perspectives while promoting compromise and commitment.</p>
      <h3 className="section-title" style={{ fontSize: '2.2rem', color: 'var(--secondary-color)', marginTop: '4rem' }}>How is a Couples Therapist Different than a Sex Therapist?</h3>
      <p>The triangular theory of love involves intimacy, passion, and commitment. <strong style={{ color: 'var(--primary-dark)' }}>Couples therapists</strong> focus on emotional intimacy and commitment rather than sexual relations. Couples therapists may address both intimacy and passion concerns.</p>
    </ServiceLayout>
  );
}
