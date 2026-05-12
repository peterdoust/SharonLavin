'use client';
import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPageForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const update = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
      } else {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="ct-form-side" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-dark)" strokeWidth="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--secondary-color)', fontSize: '2rem', textAlign: 'center' }}>Message Received!</h2>
        <p style={{ color: 'var(--text-light)', textAlign: 'center', maxWidth: '380px', lineHeight: 1.7, fontSize: '1.05rem' }}>
          Thank you for contacting Dr. Sharon. We&apos;ll respond within one business day to schedule your appointment.
        </p>
      </div>
    );
  }

  return (
    <div className="ct-form-side">
      <span className="label">Send a Message</span>
      <h2>Let&apos;s Start a Conversation</h2>
      <p>Fill out the form and we&apos;ll get back to you as soon as possible. All information is strictly confidential.</p>
      <form className="ct-form" onSubmit={handleSubmit}>
        <div className="ct-row">
          <div className="ct-field">
            <label htmlFor="ct-name">Your Name *</label>
            <input type="text" id="ct-name" placeholder="Full name" required value={form.name} onChange={update('name')} />
          </div>
          <div className="ct-field">
            <label htmlFor="ct-email">Email Address *</label>
            <input type="email" id="ct-email" placeholder="you@email.com" required value={form.email} onChange={update('email')} />
          </div>
        </div>
        <div className="ct-row">
          <div className="ct-field">
            <label htmlFor="ct-phone">Phone Number</label>
            <input type="tel" id="ct-phone" placeholder="(000) 000-0000" value={form.phone} onChange={update('phone')} />
          </div>
          <div className="ct-field">
            <label htmlFor="ct-service">Service Needed</label>
            <select id="ct-service" value={form.service} onChange={update('service')}>
              <option value="" disabled>Select a service</option>
              <option value="family">Family Therapy</option>
              <option value="couples">Couples Therapy</option>
              <option value="children">Children Psychotherapy</option>
              <option value="adolescent">Adolescent Psychotherapy</option>
              <option value="adult">Adult Psychotherapy</option>
              <option value="diabetes">Diabetes Counseling</option>
              <option value="chronic">Chronic Illness</option>
              <option value="wellness">Health &amp; Wellness</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="ct-field">
          <label htmlFor="ct-msg">Your Message</label>
          <textarea id="ct-msg" placeholder="Type your message to Dr. Sharon here..." rows={5} value={form.message} onChange={update('message')}></textarea>
        </div>

        {status === 'error' && (
          <p style={{ color: '#ef4444', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            {errorMsg}
          </p>
        )}

        <button type="submit" className="ct-submit" disabled={status === 'loading'} style={{ opacity: status === 'loading' ? 0.7 : 1 }}>
          {status === 'loading' ? 'Sending…' : 'Send Message'}
          {status !== 'loading' && (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          )}
        </button>
        <div className="ct-privacy">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          Your information is HIPAA-protected and never shared.
        </div>
      </form>
    </div>
  );
}
