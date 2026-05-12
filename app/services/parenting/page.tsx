import Image from 'next/image';
import ServiceLayout from '@/components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Parenting Therapy',
  description: 'Parenting therapy and family counseling in Woodland Hills — Dr. Sharon Lavin helps parents improve communication, establish consistent boundaries, and create a stable, loving home environment.',
  openGraph: { title: 'Parenting Therapy | Sharon E. Lavin', description: 'Therapeutic parenting support to help families communicate better, set boundaries, and raise emotionally healthy children.' },
};

export default function ParentingPage() {
  return (
    <ServiceLayout
      title="Parenting"
      currentHref="/services/parenting"
      quoteText="Parents who seek therapy prove they are committed to their families and constantly strive to improve."
    >
      <h3 className="section-title" style={{ fontSize: '2.2rem', color: 'var(--secondary-color)' }}>What is Parenting Therapy?</h3>
      <p><span className="drop-cap">C</span>ouples with children may seek parenting therapy or therapeutic parenting, which falls under the larger umbrella of Marriage and Family therapy. Parents may have difficulties communicating with their children or with each other while caring for their children.</p>
      <p style={{ marginTop: '2rem' }}>Issues addressed by <strong style={{ color: 'var(--primary-dark)' }}>parenting therapy</strong> include, but are not limited to:</p>
      <ul className="custom-list">
        {['Child-Centered Marriages','Interference with Intimacy','Preferential Treatment','Communication Issues','Difficulty Establishing Consequences and Rewards','Creating a United Front','Parenting of Children with Special Needs','Gay and Lesbian Parenting','Multi-Parent Families'].map((item) => (<li key={item}>{item}</li>))}
      </ul>
      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', margin: '3rem 0', boxShadow: 'var(--shadow-lg)' }}>
        <Image src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?q=80&w=2070&auto=format&fit=crop" alt="Family Parenting" fill sizes="(max-width: 768px) 100vw, 66vw" style={{ objectFit: 'cover' }} />
      </div>
      <p>A therapist offers support and advice for raising a child during any stage of the child&apos;s life. A child needs to have a nurturing and structuring environment and infrastructure. Children need to see parents as loving yet authoritative figures to regulate and enforce rules in a household.</p>
      <p style={{ marginTop: '2rem' }}>During therapy sessions, a psychologist listens to parents and creates different coping methods to deal and resolve issues within a household while reinforcing rules, security, and affection. Parents need to work together, as a team, to create and reinforce the regulations of the family structure.</p>
      <h3 className="section-title" style={{ fontSize: '2.2rem', color: 'var(--secondary-color)', marginTop: '4rem' }}>How Can a Therapist Help Parents?</h3>
      <p>A therapist works with families to improve parents&apos; ability to:</p>
      <ul className="custom-list">
        {['Guide Children through Developmental Stages','Create an Emotionally Stable Environment','Encourage Responsibility','Conduct Daily Tasks Efficiently'].map((item) => (<li key={item}>{item}</li>))}
      </ul>
      <p style={{ marginTop: '2rem' }}>Parents who schedule an appointment with a therapist prove: they are committed to their families; they constantly strive to improve their parenting skills; and they are concerned for the well-being of their loved ones.</p>
    </ServiceLayout>
  );
}
