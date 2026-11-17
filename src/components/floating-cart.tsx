import { ChevronRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cartTotal, formatPrice, type CartStyle } from '@/lib/cart-collection';
import cartSculpture from '@/assets/cart-sculpture.png';
import { cn } from '@/lib/utils';

interface FloatingCartProps {
  style: CartStyle;
  count: number;
  animationKey: number;
  onOpen: () => void;
  label?: string;
}

export function FloatingCart({ style, count, animationKey, onOpen, label = 'Open shopping cart' }: FloatingCartProps) {
  const Glyph = ShoppingBag;
  const isDetailed = ['nebula-bloom', 'gilded-frame', 'comet-trail', 'royal-banner', 'mosaic-tile', 'lantern-glow', 'wave-crest', 'signet-seal', 'aurora-ribbon', 'velvet-orb', 'monarch-tag', 'silk-scroll', 'prism-panel', 'crown-crest', 'noir-lacquer', 'pearl-drop', 'ribbon-dock', 'orbit-cart', 'ticket-cart', 'jewel-basket', 'signature-stack', 'checkout-pill', 'halo-bag', 'folded-tote'].includes(style);
  const price = formatPrice(cartTotal(count));
  const items = `${count} ${count === 1 ? 'item' : 'items'}`;

  function renderDetailedCart() {
    switch (style) {
      case 'nebula-bloom':
        return <>
          <span className="nebula-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total nebula-total">{price}</span>
        </>;
      case 'gilded-frame':
        return <>
          <span className="gilded-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total gilded-total">{price}</span>
        </>;
      case 'comet-trail':
        return <>
          <span className="comet-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total comet-total">{price}</span>
        </>;
      case 'royal-banner':
        return <>
          <span className="banner-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total banner-total">{price}</span>
        </>;
      case 'mosaic-tile':
        return <>
          <span className="mosaic-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total mosaic-total">{price}</span>
        </>;
      case 'lantern-glow':
        return <>
          <span className="lantern-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total lantern-total">{price}</span>
        </>;
      case 'wave-crest':
        return <>
          <svg className="wave-foam" viewBox="0 0 90 22" fill="none" aria-hidden="true"><path d="M2 20c12-16 24-16 34-8 8 6 18 8 26 2 8-5 14-4 26 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
          <span className="wave-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total wave-total">{price}</span>
        </>;
      case 'signet-seal':
        return <>
          <span className="signet-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total signet-total">{price}</span>
        </>;
      case 'aurora-ribbon':
        return <>
          <span className="aurora-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total aurora-total">{price}</span>
        </>;
      case 'velvet-orb':
        return <>
          <span className="velvet-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total velvet-total">{price}</span>
        </>;
      case 'monarch-tag':
        return <>
          <svg className="tag-thread" viewBox="0 0 60 26" fill="none" aria-hidden="true"><path d="M30 24C30 12 44 12 44 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
          <span className="tag-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span><span className="detail-total">{price}</span></span>
        </>;
      case 'silk-scroll':
        return <>
          <span className="silk-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total silk-total">{price}</span>
        </>;
      case 'prism-panel':
        return <>
          <span className="prism-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total prism-total">{price}</span>
        </>;
      case 'crown-crest':
        return <>
          <svg className="crest-crown" viewBox="0 0 40 16" fill="none" aria-hidden="true"><path d="M3 14 1 4l9 6 10-9 10 9 9-6-2 10Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" /></svg>
          <span className="crest-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total crest-total">{price}</span>
        </>;
      case 'noir-lacquer':
        return <>
          <span className="noir-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total noir-total">{price}</span>
        </>;
      case 'pearl-drop':
        return <>
          <span className="pearl-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total pearl-total">{price}</span>
        </>;
      case 'ribbon-dock':
        return <>
          <span className="ribbon-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total ribbon-total">{price}</span>
        </>;
      case 'orbit-cart':
        return <>
          <span className="orbit-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total orbit-total">{price}</span>
        </>;
      case 'ticket-cart':
        return <>
          <span className="ticket-icon"><ShoppingBag className="detail-bag-glyph" /></span>
          <span className="ticket-details"><span className="detail-items">{items}</span><span className="detail-total">{price}</span></span>
        </>;
      case 'jewel-basket':
        return <>
          <svg className="jewel-shape" viewBox="0 0 110 122" aria-hidden="true">
            <path className="jewel-body" d="M8 39 27 29h56l19 10-9 68-38 11-38-11Z" />
            <path className="jewel-facet" d="m8 39 22 12 25 67-38-11Z" />
            <path className="jewel-facet jewel-facet-right" d="m102 39-22 12-25 67 38-11Z" />
            <path className="jewel-handle" d="M36 35V24a19 19 0 0 1 38 0v11" />
            <path className="jewel-edge" d="m8 39 22 12h50l22-12" />
          </svg>
          <span className="jewel-content"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span><span className="detail-total">{price}</span></span>
        </>;
      case 'signature-stack':
        return <>
          <span className="stack-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total stack-total">{price}</span>
        </>;
      case 'checkout-pill':
        return <>
          <span className="pill-bag"><ShoppingBag className="detail-bag-glyph" /></span>
          <span className="pill-details"><span className="detail-items">{items}</span><span className="detail-total">{price}</span></span>
          <ChevronRight className="pill-chevron" />
        </>;
      case 'halo-bag':
        return <>
          <span className="halo-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total halo-total">{price}</span>
        </>;
      case 'folded-tote':
        return <>
          <svg className="tote-handle" viewBox="0 0 48 32" fill="none" aria-hidden="true"><path d="M10 29V17a14 14 0 0 1 28 0v12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg>
          <span className="tote-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total tote-total">{price}</span>
        </>;
      default:
        return null;
    }
  }

  return (
    <span className={`cart-motion motion-${style}`}>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          key={animationKey}
          variant="cart"
          className={cn(`cart-${style}`, animationKey > 0 && 'cart-pulse')}
          aria-label={`${label}, ${items}`}
          onClick={onOpen}
        >
          {isDetailed ? renderDetailedCart() : style === 'three-dimensional' ? (
            <img className="cart-sculpture" src={cartSculpture} alt="" width={1024} height={1024} loading="lazy" />
          ) : <Glyph className="cart-glyph" aria-hidden="true" />}
          {style === 'capsule' && <span className="capsule-label">My cart</span>}
          <span className={cn('cart-badge', animationKey > 0 && 'badge-pulse')} aria-hidden="true">{count}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">View shopping cart · {price}</TooltipContent>
    </Tooltip>
    </span>
  );
}