'use client';
import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function CTAForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const update = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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
      <div className="cta-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', minHeight: '320px' }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--primary-dark)" strokeWidth="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: 'var(--secondary-color)' }}>Message Sent!</h3>
        <p style={{ color: 'var(--text-light)', textAlign: 'center', maxWidth: '340px', lineHeight: 1.7 }}>
          Thank you for reaching out. Our office will get back to you shortly to schedule your appointment.
        </p>
      </div>
    );
  }

  return (
    <form className="cta-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="cta-name">Full Name</label>
          <input type="text" id="cta-name" placeholder="John Doe" required value={form.name} onChange={update('name')} />
        </div>
        <div className="form-group">
          <label htmlFor="cta-email">Email Address</label>
          <input type="email" id="cta-email" placeholder="john@example.com" required value={form.email} onChange={update('email')} />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="cta-phone">Phone Number</label>
        <input type="tel" id="cta-phone" placeholder="(818) 000-0000" value={form.phone} onChange={update('phone')} />
      </div>
      <div className="form-group">
        <label htmlFor="cta-message">How Can I Help?</label>
        <textarea id="cta-message" placeholder="Tell me a little about what you're going through..." rows={4} value={form.message} onChange={update('message')}></textarea>
      </div>

      {status === 'error' && (
        <p style={{ color: '#ef4444', fontSize: '0.88rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          {errorMsg}
        </p>
      )}

      <button type="submit" className="btn-primary btn-full" disabled={status === 'loading'} style={{ opacity: status === 'loading' ? 0.7 : 1 }}>
        {status === 'loading' ? 'Sending…' : 'Send Secure Message'}
        {status !== 'loading' && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        )}
      </button>
      <p className="form-privacy">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        Your information is protected and never shared.
      </p>
    </form>
  );
}
