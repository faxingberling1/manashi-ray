'use client';

import { useState, FormEvent } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const message = (formData.get('message') as string)?.trim();

    if (!name || !email || !message) {
      setStatus('error');
      setFeedback('Please fill in all required fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setFeedback('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1800));

    setStatus('success');
    setFeedback('Thank you! Your message has been received. Manashi will be in touch shortly.');
    form.reset();

    setTimeout(() => {
      setStatus('idle');
      setFeedback('');
    }, 6000);
  };

  return (
    <section className={`${styles.contact} section`} id="contact">
      <div className={styles.bg}></div>
      <div className="container">
        <div className="sectionHeader animateInit">
          <span className="sectionLabel">Connect</span>
          <h2 className="sectionTitle">Get in Touch</h2>
          <div className="sectionRule"></div>
        </div>

        <div className={styles.grid}>
          {/* Info */}
          <div className={`${styles.info} animateInit`}>
            <p className={styles.lead}>
              Whether you&apos;re a reader, fellow scholar, event organiser, or journalist , Manashi would love to hear from you.
            </p>
            <div className={styles.details}>
              <div className={styles.item}>
                <span className={styles.itemIcon}>✉</span>
                <div>
                  <span className={styles.itemLabel}>Email</span>
                  <a href="mailto:contact@manashiray.com" className={styles.itemValue}>
                    contact@manashiray.com
                  </a>
                </div>
              </div>
              <div className={styles.item}>
                <span className={styles.itemIcon}>🎤</span>
                <div>
                  <span className={styles.itemLabel}>Speaking Enquiries</span>
                  <a href="mailto:speaking@manashiray.com" className={styles.itemValue}>
                    speaking@manashiray.com
                  </a>
                </div>
              </div>
              <div className={styles.item}>
                <span className={styles.itemIcon}>📰</span>
                <div>
                  <span className={styles.itemLabel}>Press &amp; Media</span>
                  <a href="mailto:press@manashiray.com" className={styles.itemValue}>
                    press@manashiray.com
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.social}>
              {/* Social links (SVGs) */}
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.732-8.855L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Form */}
          <form className={`${styles.form} animateInit delay150`} onSubmit={handleSubmit} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Your Name</label>
              <input type="text" id="name" name="name" className={styles.input} placeholder="Jane Smith" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input type="email" id="email" name="email" className={styles.input} placeholder="jane@example.com" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject</label>
              <select id="subject" name="subject" className={`${styles.input} ${styles.select}`}>
                <option value="">Select a topic…</option>
                <option value="general">General Enquiry</option>
                <option value="book">Book &amp; Media</option>
                <option value="speaking">Speaking &amp; Events</option>
                <option value="press">Press &amp; Journalism</option>
                <option value="academic">Academic Collaboration</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea id="message" name="message" className={`${styles.input} ${styles.textarea}`} placeholder="Tell me how I can help…" rows={5} required></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`btn btnGold btnFull ${status === 'success' ? styles.btnSuccess : ''}`}
              disabled={status === 'sending' || status === 'success'}
            >
              {status === 'sending' ? 'Sending…' : status === 'success' ? '✓ Message Sent' : 'Send Message'}
            </button>
            
            <p className={styles.note}>All messages are read personally. I aim to respond within 3–5 business days.</p>
            
            {feedback && (
              <p className={`${styles.feedback} ${status === 'success' ? styles.feedbackSuccess : styles.feedbackError}`}>
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
