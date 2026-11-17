import type { SVGProps } from 'react';

export function ShoppingBagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8.2 10.6h15.6l1.35 12a3.25 3.25 0 0 1-3.23 3.62h-11.8a3.25 3.25 0 0 1-3.23-3.62z" />
      <path d="M11.5 10.6V8a4.5 4.5 0 0 1 9 0v2.6" />
    </svg>
  );
}