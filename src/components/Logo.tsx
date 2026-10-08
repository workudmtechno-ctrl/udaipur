import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'auto';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'auto',
  showSubtitle = true,
}) => {
  const sizeClasses = {
    sm: {
      wrap: 'h-8',
      title: 'text-xl sm:text-2xl',
      sub: 'text-[7px] sm:text-[8px] tracking-[0.25em]',
    },
    md: {
      wrap: 'h-10',
      title: 'text-2xl sm:text-3xl',
      sub: 'text-[9px] sm:text-[10px] tracking-[0.28em]',
    },
    lg: {
      wrap: 'h-14',
      title: 'text-4xl sm:text-5xl',
      sub: 'text-xs sm:text-sm tracking-[0.32em]',
    },
    xl: {
      wrap: 'h-20',
      title: 'text-5xl sm:text-6xl md:text-7xl',
      sub: 'text-sm sm:text-base md:text-lg tracking-[0.36em]',
    },
  }[size];

  // Subtitle color depending on variant
  const subColor =
    variant === 'light'
      ? 'text-zinc-800'
      : variant === 'dark'
      ? 'text-white'
      : 'text-white'; // default contrasting clean white

  return (
    <div
      className={`inline-flex flex-col items-center justify-center leading-none select-none text-center ${sizeClasses.wrap} ${className}`}
      title="LOCANTOZ ESCORT SERVICE"
    >
      {/* Brand Wordmark: Bold Vibrant Red */}
      <span
        className={`font-black font-sans uppercase text-[#e61924] drop-shadow-[0_2px_12px_rgba(230,25,36,0.35)] ${sizeClasses.title}`}
        style={{
          fontFamily:
            "'Impact', 'Arial Black', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          letterSpacing: '0.04em',
          transform: 'scaleY(1.02)',
        }}
      >
        LOCANTOZ
      </span>

      {/* Subtitle: ESCORT SERVICE */}
      {showSubtitle && (
        <span
          className={`font-bold uppercase font-sans font-stretch-expanded mt-0.5 sm:mt-1 opacity-95 ${subColor} ${sizeClasses.sub}`}
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            textShadow:
              variant === 'light'
                ? 'none'
                : '0 1px 3px rgba(0,0,0,0.8), 0 0 1px rgba(255,255,255,0.6)',
          }}
        >
          ESCORT SERVICE
        </span>
      )}
    </div>
  );
};
