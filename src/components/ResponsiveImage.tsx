

interface ResponsiveImageProps {
    /** The image source - should be an imported image module */
    src: string;
    /** Alt text for accessibility */
    alt: string;
    /** Additional CSS classes */
    className?: string;
    /** Whether to lazy load the image (default: true) */
    lazy?: boolean;
    /** Optional explicit width to help browser calculate layout */
    width?: number;
    /** Optional explicit height to help browser calculate layout */
    height?: number;
}

/**
 * ResponsiveImage Component
 * 
 * A component optimized for displaying high-quality UI mockup images.
 * Features:
 * - Uses object-contain to prevent upscaling beyond natural size
 * - Applies crisp image rendering for sharp text/lines
 * - Supports lazy loading for performance
 * - Prevents blur from browser scaling algorithms
 */
export function ResponsiveImage({
    src,
    alt,
    className = '',
    lazy = true,
    width,
    height,
}: ResponsiveImageProps) {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={lazy ? 'lazy' : 'eager'}
            decoding="async"
            className={className}
            style={{
                // Prevent browser from using blurry scaling algorithms
                imageRendering: '-webkit-optimize-contrast',
                // Ensure we don't stretch beyond natural size
                maxWidth: '100%',
                maxHeight: '100%',
            }}
        />
    );
}

export default ResponsiveImage;
