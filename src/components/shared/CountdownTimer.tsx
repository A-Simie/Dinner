
"use client";

import { useState, useEffect } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const calculateTimeLeft = (): TimeLeft | null => {
      const difference = +targetDate - +new Date();
      if (difference <= 0) {
        return null; // Event has started or passed
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };
    
    // Set initial time left immediately
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, isClient]);

  if (!isClient) {
    // Render a placeholder or null on the server to avoid hydration mismatch
    return (
      <div className="flex flex-wrap space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-6 justify-center text-center">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex flex-col items-center p-2 sm:p-3 md:p-4 bg-primary/10 rounded-lg shadow-lg min-w-[60px] xs:min-w-[70px] sm:min-w-[80px] md:min-w-[100px]">
            <span className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold text-primary font-headline">--</span>
            <span className="text-[10px] xs:text-xs sm:text-sm md:text-base text-primary/80 uppercase tracking-wider">Loading</span>
          </div>
        ))}
      </div>
    );
  }

  if (!timeLeft) {
    return <div className="text-2xl sm:text-3xl font-bold text-accent font-headline">The moment has arrived!</div>;
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-6 justify-center text-center">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center p-2 sm:p-3 md:p-4 bg-primary/10 rounded-lg shadow-lg min-w-[60px] xs:min-w-[70px] sm:min-w-[80px] md:min-w-[100px] champagne-hover">
          <span className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold text-primary font-headline">
            {String(unit.value).padStart(2, '0')}
          </span>
          <span className="text-[10px] xs:text-xs sm:text-sm md:text-base text-primary/80 uppercase tracking-wider">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
