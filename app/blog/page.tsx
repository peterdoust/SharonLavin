import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Articles',
  description: 'Mental health insights, resources, and articles by Dr. Sharon E. Lavin — covering depression, chronic illness, parenting, family therapy, and more.',
  openGraph: { title: 'Mental Health Blog | Sharon E. Lavin', description: 'Insights and resources for navigating life\'s psychological challenges, written by a licensed Marriage and Family Therapist.' },
};

export default function BlogPage() {
  return (
    <>
      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <div className="blog-hero-left">
            <h1>Insights &amp; <em>Articles</em></h1>
            <div className="breadcrumb">
              <Link href="/">Home</Link> &nbsp;/&nbsp; <span>Blog</span>
            </div>
          </div>
          <div className="blog-hero-right">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Search articles..." />
          </div>
        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className="blog-section">
        <div className="blog-layout">
          <div className="blog-main">
            {/* FEATURED POST */}
            <a href="#" className="featured-post">
              <div style={{ position: 'relative', width: '100%', height: '480px' }}>
                <Image src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2090&auto=format&fit=crop" alt="Dealing with depression" fill sizes="(max-width: 768px) 100vw, 66vw" priority style={{ objectFit: 'cover', transition: 'transform 0.8s ease' }} />
              </div>
              <div className="featured-post-overlay"></div>
              <div className="featured-post-content">
                <span className="featured-badge">Featured</span>
                <h2>Dealing with Depression</h2>
                <p>Although the foods you ingest cannot treat depression, diet does have significant effects on your ability to cope. Research has found that following a healthy diet pattern can reduce the risk of depression and help manage its symptoms.</p>
                <div className="featured-meta">
                  <span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    June 1, 2026
                  </span>
                  <span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    5 Comments
                  </span>
                  <span className="read-link">
                    Read Article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                </div>
              </div>
            </a>

            {/* POST CARDS */}
            <div className="posts-grid">
              <a href="#" className="post-card">
                <div className="post-card-img">
                  <Image src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=2070&auto=format&fit=crop" alt="Living with chronic illness" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover', transition: 'transform 0.7s ease' }} />
                  <span className="post-card-category">Featured</span>
                </div>
                <div className="post-card-body">
                  <div className="post-card-date">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    March 7, 2026
                  </div>
                  <h3>Living with Chronic Illness</h3>
                  <p>The most common reaction to an unexpected diagnosis is a flood of negative emotions. Learning to navigate these emotions is crucial.</p>
                  <div className="post-card-footer">
                    <div className="post-card-author">
                      <div className="post-card-avatar">S</div>
                      <span>Dr. Sharon Lavin</span>
                    </div>
                    <span className="read-link" style={{ fontSize: '0.75rem' }}>
                      Read
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </span>
                  </div>
                </div>
              </a>

              <a href="#" className="post-card">
                <div className="post-card-img">
                  <Image src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?q=80&w=2070&auto=format&fit=crop" alt="Parenting Teenagers" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover', transition: 'transform 0.7s ease' }} />
                  <span className="post-card-category">Parenting</span>
                </div>
                <div className="post-card-body">
                  <div className="post-card-date">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    March 2, 2026
                  </div>
                  <h3>Six Important Rules for Parenting Teenagers</h3>
                  <p>Navigating the teenage years can be extremely stressful. Here are six essential rules for maintaining open communication.</p>
                  <div className="post-card-footer">
                    <div className="post-card-author">
                      <div className="post-card-avatar">S</div>
                      <span>Dr. Sharon Lavin</span>
                    </div>
                    <span className="read-link" style={{ fontSize: '0.75rem' }}>
                      Read
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="blog-sidebar">
            <div className="sb-search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" placeholder="Search articles..." />
            </div>

            <div className="sb-widget sb-about">
              <div className="sb-about-avatar">
                <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" alt="Dr. Sharon E. Lavin" fill sizes="70px" style={{ objectFit: 'cover' }} />
              </div>
              <h4>Dr. Sharon E. Lavin</h4>
              <div className="role">Psy.D. &bull; Marriage &amp; Family Therapist</div>
              <p>Over 40 years helping individuals, families, and couples navigate life&apos;s challenges with compassion and expertise.</p>
            </div>

            <div className="sb-widget">
              <h4 className="sb-widget-title">Recent Posts</h4>
              <div className="sb-recent-list">
                {[
                  { img: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=200&auto=format&fit=crop', title: 'Dealing with Depression', date: 'June 1, 2026' },
                  { img: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=200&auto=format&fit=crop', title: 'Living with Chronic Illness', date: 'March 7, 2026' },
                  { img: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?q=80&w=200&auto=format&fit=crop', title: 'Six Rules for Parenting Teenagers', date: 'March 2, 2026' },
                ].map((p) => (
                  <a key={p.title} href="#" className="sb-recent-item">
                    <div className="sb-recent-thumb">
                      <Image src={p.img} alt={p.title} fill sizes="70px" style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="sb-recent-text"><h5>{p.title}</h5><span>{p.date}</span></div>
                  </a>
                ))}
              </div>
            </div>

            <div className="sb-widget">
              <h4 className="sb-widget-title">Categories</h4>
              <div className="sb-cat-list">
                {[['Featured Articles', '2'], ['Parenting', '1'], ['Mental Health', '1'], ['Chronic Illness', '1']].map(([cat, count]) => (
                  <div key={cat} className="sb-cat-item">
                    <span>{cat}</span>
                    <span className="sb-cat-count">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sb-widget">
              <h4 className="sb-widget-title">Topics</h4>
              <div className="sb-tags">
                {['Depression', 'Anxiety', 'Parenting', 'Chronic Illness', 'Family', 'Teens', 'Diet & Health', 'Coping'].map((t) => (
                  <span key={t} className="sb-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="sb-widget sb-newsletter">
              <h4>Stay Updated</h4>
              <p>Get the latest articles and mental health resources delivered to your inbox.</p>
              <input type="email" placeholder="Your email address" />
              <button type="button">Subscribe Now</button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
