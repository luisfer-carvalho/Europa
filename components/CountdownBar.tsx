import React, { useState, useEffect } from 'react';

const CountdownBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          setIsExpired(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="sticky top-0 z-[60] w-full bg-[#dc2626] px-3 py-2 text-center text-white shadow-lg border-b border-red-800">
      <div className="flex items-center justify-center gap-1.5 text-xs font-bold md:text-base tracking-wide">
        {isExpired ? (
          <span className="uppercase tracking-widest">La oferta ha expirado</span>
        ) : (
          <>
            <span>ÚLTIMOS 20 CUPOS DISPONIBLES PARA EL PÚBLICO GENERAL.</span>
            <span className="flex items-center gap-1">
                ⏰ <span className="font-mono text-base md:text-lg tabular-nums">{formatTime(timeLeft)}</span>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default CountdownBar;