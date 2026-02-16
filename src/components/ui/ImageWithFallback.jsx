import React, { useState } from 'react';
import Image from 'next/image';

export function ImageWithFallback({ src, alt, className, ...props }) {
    const [error, setError] = useState(false);

    if (error || !src) {
        return (
            <div
                className={`${className} bg-zinc-900 flex items-center justify-center text-zinc-700 text-xs text-center p-4`}
                style={{ minHeight: '100px' }}
            >
                <span>Image not available</span>
            </div>
        );
    }

    return (
        <div className={className} style={{ position: 'relative', overflow: 'hidden' }}>
            <Image
                src={src}
                alt={alt}
                fill
                style={{ objectFit: 'cover' }}
                onError={() => setError(true)}
                unoptimized
                {...props}
            />
        </div>
    );
}
