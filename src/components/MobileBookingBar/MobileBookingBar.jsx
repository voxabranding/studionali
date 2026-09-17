import { useState, useEffect } from 'react';
import { openBooking } from '../../utils/booking';
import './MobileBookingBar.css';

export default function MobileBookingBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece somente depois de sair da primeira dobra
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`mobile-booking-bar ${isVisible ? 'mobile-booking-bar--visible' : ''}`}
      aria-hidden={!isVisible}
    >
      <button
        className="mobile-booking-bar__btn btn btn--primary"
        onClick={openBooking}
        tabIndex={isVisible ? 0 : -1}
        aria-label="Agendar horário"
      >
        Agendar horário
        <span className="btn__arrow" aria-hidden="true">→</span>
      </button>
    </div>
  );
}
