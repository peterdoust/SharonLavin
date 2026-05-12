import Image from 'next/image';
import ServiceLayout from '@/components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diabetes Counseling',
  description: 'Diabetes counseling and therapy in Woodland Hills — Dr. Sharon Lavin helps newly diagnosed patients manage the emotional impact of diabetes, including anxiety, depression, and lifestyle adjustments.',
  openGraph: { title: 'Diabetes Counseling | Sharon E. Lavin', description: 'Compassionate support for managing the emotional and psychological aspects of living with diabetes.' },
};

export default function DiabetesPage() {
  return (
    <ServiceLayout
      title="Diabetes Counseling"
      currentHref="/services/diabetes"
      quoteText="Counseling helps individuals manage the emotional aspects and distress of diseases."
    >
      <h3 className="section-title" style={{ fontSize: '2.2rem', color: 'var(--secondary-color)' }}>What is Diabetes?</h3>
      <p><span className="drop-cap">D</span>iabetes is a chronic illness that affects roughly 25 million people in the United States alone. Diabetes mellitus, also known as sugar diabetes, is a metabolic disease indicating high blood glucose levels produced by the pancreas. There are three types of diabetes: Type 1 Diabetes or early-onset Diabetes; Type 2 Diabetes, the most common type; and Gestational Diabetes, which affects pregnant women.</p>
      <h3 className="section-title" style={{ fontSize: '2.2rem', color: 'var(--secondary-color)', marginTop: '4rem' }}>What is Diabetes Counseling?</h3>
      <p>Often times, patients experience mental and emotional distress after being diagnosed with chronic illnesses. <strong style={{ color: 'var(--primary-dark)' }}>Diabetes counseling and therapy</strong> helps individuals manage the emotional aspects and distress of diseases.</p>
      <p style={{ marginTop: '2rem' }}>Emotional issues may include, but are not limited to:</p>
      <ul className="custom-list">
        {['Adjusting Lifestyle Choices','Communication with Family/Friends','Anxiety','Depression','Problems within Relationships','Issues in the Workplace','Overwhelming Feelings','Feelings of Helplessness','Distress','Parenting Issues'].map((item) => (<li key={item}>{item}</li>))}
      </ul>
      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', margin: '3rem 0', boxShadow: 'var(--shadow-lg)' }}>
        <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" alt="Diabetes Testing" fill sizes="(max-width: 768px) 100vw, 66vw" style={{ objectFit: 'cover' }} />
      </div>
      <p>Counseling may include individual sessions and/or group or family sessions. Therapists work to alleviate emotional distress caused by drastic lifestyle changes while actively creating a better and healthier way of life.</p>
      <h3 className="section-title" style={{ fontSize: '2.2rem', color: 'var(--secondary-color)', marginTop: '4rem' }}>Is Diabetes Counseling Covered by Insurance?</h3>
      <p>Diabetes counseling, care, and management may be covered by some insurance providers. After a physician&apos;s referral and concerning certain diabetes diagnoses, insurance companies cover outpatient services.</p>
    </ServiceLayout>
  );
}
