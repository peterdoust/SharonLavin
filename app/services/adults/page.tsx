import Image from 'next/image';
import ServiceLayout from '@/components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adult Psychotherapy',
  description: 'Adult psychotherapy in Woodland Hills — Dr. Sharon Lavin helps adults manage stress, depression, anxiety, career challenges, domestic issues, and major life transitions.',
  openGraph: { title: 'Adult Psychotherapy | Sharon E. Lavin', description: 'Evidence-based therapy to help adults lead more fulfilling lives through better emotional balance and self-awareness.' },
};

export default function AdultsPage() {
  return (
    <ServiceLayout
      title="Adult Psychotherapy"
      currentHref="/services/adults"
      quoteText="Through therapy, patients may lead more fulfilling lives of emotional stability and self-power."
    >
      <h3 className="section-title" style={{ fontSize: '2.2rem', color: 'var(--secondary-color)' }}>What is Adult Psychotherapy?</h3>
      <p><span className="drop-cap">A</span>dult therapy focuses on issues and balancing the responsibilities of daily life. Discussing issues with a therapist may relieve feelings of loneliness, depression, and anxiety created from the stress of the adult world. The responsibilities of working, providing and/or caring for a family, dealing with disease and loss, and handling financial burdens of life may become overwhelming for adults.</p>
      <p style={{ marginTop: '2rem' }}>Such issues a therapist may focus on during <strong style={{ color: 'var(--primary-dark)' }}>adult psychotherapy</strong> sessions may include, but are not limited to:</p>
      <ul className="custom-list">
        {['Substance Use','Abortion Issues','Domestic Violence','Crisis Intervention','Adjusting to Change','Stress Management','Career Choices','Psychiatric Hospitalizations','Diabetes Counseling','Chronic Illness Counseling','Displaced Workers'].map((item) => (<li key={item}>{item}</li>))}
      </ul>
      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', margin: '3rem 0', boxShadow: 'var(--shadow-lg)' }}>
        <Image src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=2070&auto=format&fit=crop" alt="Adult Therapy Session" fill sizes="(max-width: 768px) 100vw, 66vw" style={{ objectFit: 'cover' }} />
      </div>
      <p>Adult psychotherapy provides a confidential and supportive environment where individuals can explore their thoughts, feelings, and behaviors. Through evidence-based therapeutic approaches, patients gain insight into the root causes of their difficulties and develop practical strategies for managing stress, improving relationships, and achieving personal growth.</p>
    </ServiceLayout>
  );
}
