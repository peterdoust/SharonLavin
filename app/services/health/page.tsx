import Image from 'next/image';
import ServiceLayout from '@/components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Health & Wellness',
  description: 'Health and Wellness Psychology in Woodland Hills — Dr. Sharon Lavin integrates social, biological, and psychological approaches to promote preventative care and healthy lifestyle choices.',
  openGraph: { title: 'Health & Wellness Therapy | Sharon E. Lavin', description: 'A holistic approach to mind-body wellness through compassionate, evidence-based therapeutic support.' },
};

export default function HealthPage() {
  return (
    <ServiceLayout
      title="Health & Wellness"
      currentHref="/services/health"
      quoteText="Helping patients make health conscious decisions can improve their mood, quality of life, and relationships."
    >
      <h3 className="section-title" style={{ fontSize: '2.2rem', color: 'var(--secondary-color)' }}>What is Health and Wellness Psychology?</h3>
      <p><span className="drop-cap">M</span>ore physicians, MDs, and medical practices are focusing on the importance of health psychology worldwide. Health psychology is the science of combining a social, biological, and psychological lens to view overall health and wellness. The integration of these aspects of the self helps to determine underlying issues while using a multifaceted approach to preventative care through health and wellness promotion.</p>
      <p style={{ marginTop: '2rem' }}>Such topics discussed in <strong style={{ color: 'var(--primary-dark)' }}>Health and Wellness Therapy</strong> include, but are not limited to:</p>
      <ul className="custom-list">
        {['Health Promotion and Behavior Change','Health-Compromising Behaviors','Stress and Coping','Relationship Problems','Sleep and Rest','Diet and Nutrition','Hygiene','Environmental Effects','Exercise','Physical Health and Genetics','Religion and Spirituality','Lifestyle Choices','How Best to Treat a Specific Illness'].map((item) => (<li key={item}>{item}</li>))}
      </ul>
      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', margin: '3rem 0', boxShadow: 'var(--shadow-lg)' }}>
        <Image src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" alt="Wellness" fill sizes="(max-width: 768px) 100vw, 66vw" style={{ objectFit: 'cover' }} />
      </div>
      <p>Health psychology integrates the relationship between culture and society. By determining key risk factors in health, patients may improve quality of life and develop healthier lifestyles.</p>
      <h3 className="section-title" style={{ fontSize: '2.2rem', color: 'var(--secondary-color)', marginTop: '4rem' }}>How does Health and Wellness Therapy Help?</h3>
      <p>Looking at these factors with regards to social, biological, and psychological factors, allows us to fully treat and understand patient issues. Health and wellness therapy helps patients make healthy choices for themselves and learn how to maintain a high level of comprehension regarding important lifestyle decisions as well as the impact of their daily choices.</p>
    </ServiceLayout>
  );
}
