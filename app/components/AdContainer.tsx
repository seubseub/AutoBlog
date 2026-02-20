'use client';

import { useEffect, useRef } from 'react';

type AdProps = {
  className?: string;
  style?: React.CSSProperties;
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  layoutKey?: string;
  responsive?: boolean;
};

export default function AdContainer({
  className,
  style,
  slot,
  format = 'auto',
  layoutKey,
  responsive = true
}: AdProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  // 개발 환경에서는 광고 대신 플레이스홀더 표시
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className={`bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 text-sm p-4 my-4 ${className}`} style={{ minHeight: '100px', ...style }}>
        AdSense Placeholder (Slot: {slot})
      </div>
    );
  }

  return (
    <div className={`ad-container my-6 overflow-hidden ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-5998647153718815"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
        data-ad-layout-key={layoutKey}
      />
    </div>
  );
}
