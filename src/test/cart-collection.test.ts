import { describe, expect, it } from 'vitest';
import { cartDesigns, cartTotal, changeCartQuantity } from '@/lib/cart-collection';

describe('floating cart collection rules', () => {
  it('includes all eight distinct requested concepts', () => {
    expect(cartDesigns.filter(design => !design.isNew).map(design => design.id)).toEqual(['circular', 'gradient', 'glass', 'three-dimensional', 'outline', 'capsule', 'dual', 'commerce']);
  });
  it('adds four distinct reference-inspired concepts without removing the original eight', () => {
    expect(cartDesigns.filter(design => design.isNew && !design.collection).map(design => design.id)).toEqual(['signature-stack', 'checkout-pill', 'halo-bag', 'folded-tote']);
  });
  it('includes four additional motion concepts while preserving all twelve earlier designs', () => {
    expect(cartDesigns.filter(design => design.collection === 'motion').map(design => design.id)).toEqual(['ribbon-dock', 'orbit-cart', 'ticket-cart', 'jewel-basket']);
  });
  it('adds eight premium concepts first while preserving all sixteen earlier designs', () => {
    expect(cartDesigns.filter(design => design.collection === 'signature').map(design => design.id)).toEqual(['aurora-ribbon', 'velvet-orb', 'monarch-tag', 'silk-scroll', 'prism-panel', 'crown-crest', 'noir-lacquer', 'pearl-drop']);
  });
  it('adds eight premium animated luxe concepts first while preserving all twenty-four earlier designs', () => {
    expect(cartDesigns.filter(design => design.collection === 'luxe').map(design => design.id)).toEqual(['nebula-bloom', 'gilded-frame', 'comet-trail', 'royal-banner', 'mosaic-tile', 'lantern-glow', 'wave-crest', 'signet-seal']);
    expect(cartDesigns).toHaveLength(32);
  });
  it('updates the badge quantity when a product is added', () => {
    expect(changeCartQuantity(3, 1)).toBe(4);
  });
  it('updates the badge quantity when a product is removed', () => {
    expect(changeCartQuantity(3, -1)).toBe(2);
  });
  it('does not allow a negative cart count', () => {
    expect(changeCartQuantity(0, -1)).toBe(0);
  });
  it('calculates the shared sample cart total', () => {
    expect(cartTotal(4)).toBe(9960);
  });
});