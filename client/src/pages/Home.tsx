import { useEffect, useState } from 'react';

export default function Home() {
  const [decorativeElements, setDecorativeElements] = useState<Array<{ id: number; top: string; left: string; size: string; delay: number }>>([]);

  useEffect(() => {
    // Generate random positions for decorative elements
    // Using a seeded approach for consistent positioning
    // Fewer, larger elements like in the template
    const elements = Array.from({ length: 8 }, (_, i) => {
      const seed = i * 7919; // Prime number for distribution
      const random1 = Math.sin(seed) * 10000;
      const random2 = Math.sin(seed * 2) * 10000;
      const random3 = Math.sin(seed * 3) * 10000;
      
      return {
        id: i,
        top: `${(random1 - Math.floor(random1)) * 100}%`,
        left: `${(random2 - Math.floor(random2)) * 100}%`,
        size: `${(random3 - Math.floor(random3)) * 150 + 200}px`,
        delay: (i % 5) * 1.2,
      };
    });
    setDecorativeElements(elements);
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappUrl = "https://wa.me/2250564913103?text=Salut%20Michael,%20je%20veux%20recevoir%20le%20guide%20'Audit%20IA%20en%2010%20Minutes'.";
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background Decorative Elements */}
      <div className="background-decorations">
        {decorativeElements.map((element) => (
          <div
            key={element.id}
            className="decorative-item animate-float"
            style={{
              top: element.top,
              left: element.left,
              width: element.size,
              height: element.size,
              animationDelay: `${element.delay}s`,
            }}
          >
            <img src="/decorative-element.png" alt="Decorative element" />
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="/logo-iaflow.png" alt="IAflow Logo" className="logo-img" />
          <span className="brand-name">IAflow</span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-container">
          {/* Left Content */}
          <div className="hero-content">
            <h1 className="hero-title">L'Audit IA en 10 minutes</h1>
            
            <p className="hero-subtitle">
              Recevez les{' '}
              <span className="keyword-primary">3 prompts IA</span>
              {' '}exacts que j'utilise pour révéler les{' '}
              <span className="keyword-accent">fuites de cash</span>
              {' '}cachées dans mon business.
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="btn-primary"
              aria-label="Recevoir mon guide gratuit via WhatsApp"
            >
              RECEVOIR MON GUIDE GRATUIT
            </button>
          </div>

          {/* Right Image */}
          <div className="hero-image">
            <img
              src="/photo-founder.png"
              alt="Michael - Fondateur d'IAflow"
              loading="lazy"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

