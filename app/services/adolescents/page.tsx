import Image from 'next/image';
import ServiceLayout from '@/components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adolescent Psychotherapy',
  description: 'Teen and adolescent therapy in Woodland Hills — Dr. Sharon Lavin helps young adults navigate depression, anxiety, peer pressure, academic stress, and the transition to adulthood.',
  openGraph: { title: 'Adolescent Psychotherapy | Sharon E. Lavin', description: 'Building self-esteem, communication skills, and resilience in teens navigating the challenges of growing up.' },
};

export default function AdolescentsPage() {
  return (
    <ServiceLayout
      title="Adolescent Psychotherapy"
      currentHref="/services/adolescents"
      quoteText="By improving communication skills and building self-esteem, I help adolescents become more self-aware."
    >
      <h3 className="section-title" style={{ fontSize: '2.2rem', color: 'var(--secondary-color)' }}>What is Adolescent Psychotherapy?</h3>
      <p><span className="drop-cap">A</span>dolescent therapy can focus on many different aspects of emotional, physical, or cognitive development. Adolescent therapy can help young adults transition into adulthood while making responsible and healthy choices. By improving communication skills and building self-esteem, I can help adolescents and teens become more self-aware with the ability to cope with difficult situations.</p>
      <p style={{ marginTop: '2rem' }}>Such issues a therapist may focus on during <strong style={{ color: 'var(--primary-dark)' }}>adolescent psychotherapy</strong> sessions may include, but are not limited to:</p>
      <ul className="custom-list">
        {['Depression','Anxiety','Grief and Loss','Suicidal Thoughts','Self-Esteem','Peer Conflict','Academic Difficulties','Abandonment','Life Transitions','Caregiver Issues/Stress','Stress','Communication Problems','Divorce','Attachment Issues','Control Issues','Delinquency'].map((item) => (<li key={item}>{item}</li>))}
      </ul>
      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', margin: '3rem 0', boxShadow: 'var(--shadow-lg)' }}>
        <Image src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop" alt="Adolescent Therapy" fill sizes="(max-width: 768px) 100vw, 66vw" style={{ objectFit: 'cover' }} />
      </div>
      <p>The adolescent years are a critical time of development. Teens face unique pressures from school, social media, peer relationships, and family dynamics. Through therapy, adolescents learn to identify and express their emotions in healthy ways, develop problem-solving skills, and build resilience to navigate the challenges of growing up.</p>
    </ServiceLayout>
  );
}
