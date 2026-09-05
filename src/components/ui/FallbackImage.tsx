import type { ImgHTMLAttributes, SyntheticEvent } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement> & { fallbackSrc: string };
export function FallbackImage({ fallbackSrc, onError, ...props }: Props) {
  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    if (event.currentTarget.src !== fallbackSrc) event.currentTarget.src = fallbackSrc;
    onError?.(event);
  };
  return <img {...props} onError={handleError} />;
}
