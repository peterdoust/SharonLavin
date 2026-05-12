import Image from 'next/image';
import ServiceLayout from '@/components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Children Psychotherapy',
  description: 'Child psychotherapy in Woodland Hills, CA — Dr. Sharon Lavin uses age-appropriate methods including play, art, and talk therapy to help children with ADHD, anxiety, behavioral issues, and developmental challenges.',
  openGraph: { title: 'Children Psychotherapy | Sharon E. Lavin', description: 'Safe, supportive therapy for children using play, art, and evidence-based methods tailored to their developmental stage.' },
};

export default function ChildrenPage() {
  return (
    <ServiceLayout
      title="Children Psychotherapy"
      currentHref="/services/children"
      quoteText="Early intervention through therapy can have a profound impact on a child's emotional development."
    >
      <h3 className="section-title" style={{ fontSize: '2.2rem', color: 'var(--secondary-color)' }}>What is Children Psychotherapy?</h3>
      <p><span className="drop-cap">P</span>sychology catered towards children uses a variety of methods to communicate with children and teach them problem-solving and coping skills. Working with children requires detailed knowledge and understanding of developmental levels and skill ranges. Child psychotherapy requires caregiver support and communication to best help the patient work through problems in a healthy way.</p>
      <p style={{ marginTop: '2rem' }}>Methods can vary to fit individual needs. Traditional verbal psychotherapy may not be the best fit for some patients; nonverbal treatment may be a more viable option. Depending on child and caregiver goals, different methods and activities can be utilized to help the child make real world connections through <strong style={{ color: 'var(--primary-dark)' }}>roleplaying, puzzles, art, and games</strong>.</p>
      <p style={{ marginTop: '2rem' }}>Such issues a therapist may focus on during children psychotherapy sessions may include, but are not limited to:</p>
      <ul className="custom-list">
        {['Abuse','Developmental Delays','Learning Problems/Disorders','ADHD','Conduct Disorder','Aggressive Behavior','Communication Problems'].map((item) => (<li key={item}>{item}</li>))}
      </ul>
      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', margin: '3rem 0', boxShadow: 'var(--shadow-lg)' }}>
        <Image src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2072&auto=format&fit=crop" alt="Children Therapy" fill sizes="(max-width: 768px) 100vw, 66vw" style={{ objectFit: 'cover' }} />
      </div>
      <p>Child psychotherapy is a collaborative process that involves the child, their caregivers, and the therapist working together. By creating a safe and supportive environment, children are encouraged to express their feelings and develop healthier ways of coping with challenges. Early intervention through therapy can have a profound impact on a child&apos;s emotional development.</p>
    </ServiceLayout>
  );
}
