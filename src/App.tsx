import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AgentWorkflows } from './components/AgentWorkflows';
import { Statistics } from './components/Statistics';
import { BookingAgent } from './components/BookingAgent';
import { IntegrationData } from './components/IntegrationData';
import { InteractiveDemo } from './components/InteractiveDemo';
import { FAQ } from './components/FAQ';
import { SelectedWork } from './components/SelectedWork';
import { MoreFromKWS } from './components/MoreFromKWS';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { Products } from './pages/Products';
import { Blog } from './pages/Blog';
import { AboutUs } from './pages/AboutUs';
import { Portfolio } from './pages/Portfolio';
import { Industries } from './pages/Industries';
import { Career } from './pages/Career';
import { Contact } from './pages/Contact';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { SeoHead } from './components/SeoHead';
import { getSeoConfig, ALL_ROUTES } from './config/seo.config';
import { useState, useEffect } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentPath, setCurrentPath] = useState('/');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  // Check admin authentication on mount
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAdminAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;
      setCurrentPath(path);
      
      if (path === '/products') {
        setCurrentPage('products');
      } else if (path === '/blog') {
        setCurrentPage('blog');
      } else if (path === '/about-us') {
        setCurrentPage('about-us');
      } else if (path === '/portfolio') {
        setCurrentPage('portfolio');
      } else if (path === '/industries') {
        setCurrentPage('industries');
      } else if (path === '/career') {
        setCurrentPage('career');
      } else if (path === '/contact') {
        setCurrentPage('contact');
      } else if (path === '/adminkws22917') {
        setCurrentPage('admin');
      } else {
        setCurrentPage('home');
        setCurrentPath('/');
      }
    };

    handleNavigation();
    window.addEventListener('popstate', handleNavigation);
    
    // Handle link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.href) {
        const url = new URL(link.href);
        if (url.origin === window.location.origin && ALL_ROUTES.includes(url.pathname)) {
          e.preventDefault();
          window.history.pushState({}, '', url.pathname);
          handleNavigation();
          // Scroll to top on navigation
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Get SEO config for current route
  const seoConfig = getSeoConfig(currentPath);

  // Common page wrapper with SEO
  const PageWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="relative bg-[#f7f5ef]">
      <SeoHead
        title={seoConfig.title}
        description={seoConfig.description}
        canonical={seoConfig.canonical}
        ogType={seoConfig.ogType}
        path={currentPath}
      />
      <Navigation />
      {children}
      <Footer />
    </div>
  );

  if (currentPage === 'products') {
    return (
      <PageWrapper>
        <Products />
      </PageWrapper>
    );
  }

  if (currentPage === 'blog') {
    return (
      <PageWrapper>
        <Blog />
      </PageWrapper>
    );
  }

  if (currentPage === 'about-us') {
    return (
      <PageWrapper>
        <AboutUs />
      </PageWrapper>
    );
  }

  if (currentPage === 'portfolio') {
    return (
      <PageWrapper>
        <Portfolio />
      </PageWrapper>
    );
  }

  if (currentPage === 'industries') {
    return (
      <PageWrapper>
        <Industries />
      </PageWrapper>
    );
  }

  if (currentPage === 'career') {
    return (
      <PageWrapper>
        <Career />
      </PageWrapper>
    );
  }

  if (currentPage === 'contact') {
    return (
      <PageWrapper>
        <Contact />
      </PageWrapper>
    );
  }

  // Admin route - hidden, no navigation
  if (currentPage === 'admin') {
    const handleLoginSuccess = () => {
      setIsAdminAuthenticated(true);
      // Stay on /adminkws22917 - just re-render with dashboard
    };

    const handleLogout = () => {
      setIsAdminAuthenticated(false);
      // Stay on /adminkws22917 - just re-render with login
    };

    if (!isAdminAuthenticated) {
      return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
    }

    return <AdminDashboard onLogout={handleLogout} />;
  }

  // Home page
  return (
    <div className="relative bg-[#f7f5ef]" style={{ 
      backgroundImage: "linear-gradient(90deg, rgb(247, 245, 239) 0%, rgb(247, 245, 239) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" 
    }}>
      <SeoHead
        title={seoConfig.title}
        description={seoConfig.description}
        canonical={seoConfig.canonical}
        ogType={seoConfig.ogType}
        path={currentPath}
      />
      <Navigation />
      <main className="relative">
        <Hero />
        <Statistics />
        <AgentWorkflows />
        <BookingAgent />
        <IntegrationData />
        <InteractiveDemo />
        <MoreFromKWS />
        <SelectedWork />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
