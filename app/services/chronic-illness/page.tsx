import Image from 'next/image';
import ServiceLayout from '@/components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chronic Illness Counseling',
  description: 'Therapy for individuals living with chronic illness — Dr. Sharon Lavin helps patients manage grief, anxiety, pain, and lifestyle changes with compassion and evidence-based strategies.',
  openGraph: { title: 'Chronic Illness Counseling | Sharon E. Lavin', description: 'Specialized therapy to help you cope with the emotional, psychological, and social challenges of chronic illness.' },
};

export default function ChronicIllnessPage() {
  return (
    <ServiceLayout
      title="Chronic Illness Counseling"
      currentHref="/services/chronic-illness"
      quoteText="Seeking therapy for chronic illness is a sign of strength, not weakness."
    >
      <h3 className="section-title" style={{ fontSize: '2.2rem', color: 'var(--secondary-color)' }}>What is Chronic Illness Counseling?</h3>
      <p><span className="drop-cap">C</span>hronic illness counseling is a specialized form of therapy that helps individuals cope with the emotional, psychological, and social challenges that arise from living with a long-term health condition. Being diagnosed with a chronic illness can bring feelings of grief, anxiety, depression, and uncertainty about the future.</p>
      <p style={{ marginTop: '2rem' }}>Living with a chronic illness affects not only the individual but also their relationships, career, and overall quality of life. A therapist works to address the whole person — mind, body, and spirit — helping patients navigate the complex emotional landscape that accompanies chronic health conditions.</p>
      <h3 className="section-title" style={{ fontSize: '2.2rem', color: 'var(--secondary-color)', marginTop: '4rem' }}>How Can Chronic Illness Therapy Help?</h3>
      <p>Patients dealing with chronic illness often experience a range of emotional and psychological challenges. <strong style={{ color: 'var(--primary-dark)' }}>Chronic illness therapy</strong> helps individuals manage these difficulties while maintaining the best possible quality of life.</p>
      <p style={{ marginTop: '2rem' }}>Topics commonly addressed include, but are not limited to:</p>
      <ul className="custom-list">
        {['Adjusting to a New Diagnosis','Managing Anxiety and Depression','Grief and Loss Related to Health Changes','Coping with Pain and Fatigue','Relationship Strain and Communication','Changes in Self-Image and Identity','Navigating the Healthcare System','Work and Career Adjustments','Building a Support Network','Stress Management and Relaxation Techniques','Family Dynamics and Caregiver Support','Maintaining Independence and Quality of Life'].map((item) => (<li key={item}>{item}</li>))}
      </ul>
      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', margin: '3rem 0', boxShadow: 'var(--shadow-lg)' }}>
        <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" alt="Chronic Illness Support" fill sizes="(max-width: 768px) 100vw, 66vw" style={{ objectFit: 'cover' }} />
      </div>
      <p>Through counseling, patients learn to accept and adapt to the realities of their condition while focusing on what they can control.</p>
      <h3 className="section-title" style={{ fontSize: '2.2rem', color: 'var(--secondary-color)', marginTop: '4rem' }}>The Benefits of Seeking Support</h3>
      <p>Seeking therapy for chronic illness is a sign of strength, not weakness. A therapist provides a non-judgmental space where patients can express their fears, frustrations, and hopes. Together, we work to create strategies that empower patients to live fuller, more meaningful lives despite the challenges of their condition.</p>
    </ServiceLayout>
  );
}
