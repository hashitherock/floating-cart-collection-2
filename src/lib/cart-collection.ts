export type CartStyle = 'nebula-bloom' | 'gilded-frame' | 'comet-trail' | 'royal-banner' | 'mosaic-tile' | 'lantern-glow' | 'wave-crest' | 'signet-seal' | 'aurora-ribbon' | 'velvet-orb' | 'monarch-tag' | 'silk-scroll' | 'prism-panel' | 'crown-crest' | 'noir-lacquer' | 'pearl-drop' | 'ribbon-dock' | 'orbit-cart' | 'ticket-cart' | 'jewel-basket' | 'signature-stack' | 'checkout-pill' | 'halo-bag' | 'folded-tote' | 'circular' | 'gradient' | 'glass' | 'three-dimensional' | 'outline' | 'capsule' | 'dual' | 'commerce';

export interface CartDesign {
  id: CartStyle;
  name: string;
  description: string;
  treatment: string;
  isNew?: boolean;
  collection?: 'motion' | 'signature' | 'luxe';
}

export const cartDesigns: CartDesign[] = [
  { id: 'nebula-bloom', name: 'Nebula Bloom', description: 'A swirling purple nebula that blooms open around your bag and total.', treatment: 'Luxe · Nebula', isNew: true, collection: 'luxe' },
  { id: 'gilded-frame', name: 'Gilded Frame', description: 'A gallery frame in warm gold-purple, presenting your cart like art.', treatment: 'Luxe · Gilded', isNew: true, collection: 'luxe' },
  { id: 'comet-trail', name: 'Comet Trail', description: 'A comet of light circles the bag, leaving a red-orange trail.', treatment: 'Luxe · Comet', isNew: true, collection: 'luxe' },
  { id: 'royal-banner', name: 'Royal Banner', description: 'A draped royal banner with tassels, carrying your count and total.', treatment: 'Luxe · Royal', isNew: true, collection: 'luxe' },
  { id: 'mosaic-tile', name: 'Mosaic Tile', description: 'Hand-laid purple mosaic tiles with a crimson grout of light.', treatment: 'Luxe · Mosaic', isNew: true, collection: 'luxe' },
  { id: 'lantern-glow', name: 'Lantern Glow', description: 'A paper lantern glowing softly, swaying with your cart inside.', treatment: 'Luxe · Lantern', isNew: true, collection: 'luxe' },
  { id: 'wave-crest', name: 'Wave Crest', description: 'A curling purple wave that crests over a pearl-white price drop.', treatment: 'Luxe · Wave', isNew: true, collection: 'luxe' },
  { id: 'signet-seal', name: 'Signet Seal', description: 'A pressed wax signet with the Sholok monogram and a ribbon total.', treatment: 'Luxe · Signet', isNew: true, collection: 'luxe' },
  { id: 'aurora-ribbon', name: 'Aurora Ribbon', description: 'A luminous purple arc with a ribbon of light sweeping across your bag.', treatment: 'Premium · Aurora', isNew: true, collection: 'signature' },
  { id: 'velvet-orb', name: 'Velvet Orb', description: 'Deep velvet purple, softly glowing, with a polished total beneath.', treatment: 'Premium · Velvet', isNew: true, collection: 'signature' },
  { id: 'monarch-tag', name: 'Monarch Tag', description: 'A boutique price tag, tied with a red-orange thread and a wax seal count.', treatment: 'Premium · Boutique', isNew: true, collection: 'signature' },
  { id: 'silk-scroll', name: 'Silk Scroll', description: 'A flowing silk panel that unfurls your items and total in one gesture.', treatment: 'Premium · Silk', isNew: true, collection: 'signature' },
  { id: 'prism-panel', name: 'Prism Panel', description: 'A faceted glass panel catching the light, edged in signature purple.', treatment: 'Premium · Prism', isNew: true, collection: 'signature' },
  { id: 'crown-crest', name: 'Crown Crest', description: 'A regal crest with a crowned bag and a bold red-orange total banner.', treatment: 'Premium · Regal', isNew: true, collection: 'signature' },
  { id: 'noir-lacquer', name: 'Noir Lacquer', description: 'Midnight lacquer with a purple inlay and a crimson price seal.', treatment: 'Premium · Noir', isNew: true, collection: 'signature' },
  { id: 'pearl-drop', name: 'Pearl Drop', description: 'A porcelain pearl with a satin purple band and a dewdrop price tag.', treatment: 'Premium · Pearl', isNew: true, collection: 'signature' },
  { id: 'ribbon-dock', name: 'Ribbon Dock', description: 'A slender purple dock, wrapped with a signature red-orange ribbon.', treatment: 'Tailored · Ribbon', isNew: true, collection: 'motion' },
  { id: 'orbit-cart', name: 'Orbit Cart', description: 'A softly orbiting frame around a bold little shopping basket.', treatment: 'Fluid · Orbit', isNew: true, collection: 'motion' },
  { id: 'ticket-cart', name: 'Ticket Cart', description: 'A crisp white ticket with a purple basket and a vivid price accent.', treatment: 'Fresh · Ticket', isNew: true, collection: 'motion' },
  { id: 'jewel-basket', name: 'Jewel Basket', description: 'Faceted purple, a sculpted handle, and a little jewel-like presence.', treatment: 'Sculpted · Faceted', isNew: true, collection: 'motion' },
  { id: 'signature-stack', name: 'Signature Stack', description: 'A sculpted shopping bag, finished with a bold red-orange total.', treatment: 'Signature · Stacked', isNew: true },
  { id: 'checkout-pill', name: 'Checkout Pill', description: 'Your bag and total, side by side. Slim, effortless, and always close.', treatment: 'Sleek · Horizontal', isNew: true },
  { id: 'halo-bag', name: 'Halo Bag', description: 'A porcelain-white frame, a purple bag, and a neatly tucked price tab.', treatment: 'Light · Halo', isNew: true },
  { id: 'folded-tote', name: 'Folded Tote', description: 'A tailored tote silhouette with a little red-orange receipt detail.', treatment: 'Sculpted · Tote', isNew: true },
  { id: 'circular', name: 'Modern Circular', description: 'A timeless silhouette. Clean lines, with a soft floating shadow.', treatment: 'Classic · Circular' },
  { id: 'gradient', name: 'Gradient Floating', description: 'Two signature colors. One bold, seamlessly blended statement.', treatment: 'Vibrant · Gradient' },
  { id: 'glass', name: 'Glassmorphism', description: 'Frosted glass, delicate borders, and a beautifully light presence.', treatment: 'Elegant · Glass' },
  { id: 'three-dimensional', name: '3D Floating', description: 'Sculpted depth and playful detail. A cart with a little character.', treatment: 'Expressive · 3D' },
  { id: 'outline', name: 'Minimal Outline', description: 'Less, but better. A crisp purple outline with a vivid little accent.', treatment: 'Minimal · Outline' },
  { id: 'capsule', name: 'Premium Capsule', description: 'An elongated silhouette with a little more room for your cart.', treatment: 'Refined · Capsule' },
  { id: 'dual', name: 'Dual-Color', description: 'Signature purple meets red-orange in the smallest of details.', treatment: 'Playful · Two-tone' },
  { id: 'commerce', name: 'Modern E-commerce', description: 'A confident, compact shape. Finished with a signature red edge.', treatment: 'Distinctive · Modern' },
];

export const sampleProduct = { name: 'Everyday Sneaker', price: 2490, category: 'The everyday edit' };
export const initialCartCount = 3;

export function changeCartQuantity(current: number, delta: number) {
  return Math.max(0, current + delta);
}

export function cartTotal(quantity: number) {
  return quantity * sampleProduct.price;
}

export function formatPrice(value: number) {
  return `৳${value.toLocaleString('en-US')}`;
}