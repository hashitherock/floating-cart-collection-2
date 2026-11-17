import { createFileRoute } from "@tanstack/react-router";
import { useState } from 'react';
import { ArrowUpRight, Bookmark, Check, Minus, Monitor, Plus, ShoppingBag, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { CartDesignCard } from '@/components/cart-design-card';
import { FloatingCart } from '@/components/floating-cart';
import { ShoppingCartDrawer } from '@/components/shopping-cart-drawer';
import { cartDesigns, changeCartQuantity, formatPrice, initialCartCount, sampleProduct, type CartStyle } from '@/lib/cart-collection';
import sneaker from '@/assets/everyday-sneaker.jpg';

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: 'Floating Cart Collection — Sholok Shopping' },
      { name: 'description', content: 'Explore thirty-two animated Sholok Shopping floating cart designs with live item counts, totals, and a right-side shopping cart.' },
      { property: 'og:title', content: 'Floating Cart Collection — Sholok Shopping' },
      { property: 'og:description', content: 'Thirty-two animated cart concepts. One unmistakable Sholok Shopping identity.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Index,
});

function Index() {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'all' | 'shortlist'>('all');
  const [shortlist, setShortlist] = useState<CartStyle[]>([]);
  const [selected, setSelected] = useState<CartStyle>('ribbon-dock');
  const [count, setCount] = useState(initialCartCount);
  const [animationKey, setAnimationKey] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [lastAction, setLastAction] = useState('');

  function updateQuantity(delta: number) {
    setCount(current => changeCartQuantity(current, delta));
    setAnimationKey(current => current + 1);
    setLastAction(delta > 0 ? 'Sample sneaker added to cart' : 'Sample sneaker removed from cart');
  }

  function toggleShortlist(id: CartStyle) {
    setShortlist(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  }

  function openPreview(id: CartStyle) {
    setSelected(id);
    setCartOpen(true);
  }

  const designs = activeTab === 'all' ? cartDesigns : cartDesigns.filter(design => shortlist.includes(design.id));

  return (
    <div className="min-h-screen bg-background">
      <header className="site-header">
        <div className="page-shell header-inner">
          <a href="/" className="brand" aria-label="Sholok Shopping home"><div className="brand-name">SHOLOK</div></a>
          <nav className="header-nav" aria-label="Collection navigation">
            <Button variant="ghost" className="nav-button" data-active={activeTab === 'all'} onClick={() => setActiveTab('all')}>Design collection</Button>
            <Button variant="ghost" className="nav-button" onClick={() => document.getElementById('cart-playground')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>Live playground <ArrowUpRight className="size-3" /></Button>
            <Button variant="ghost" className="nav-button" data-active={activeTab === 'shortlist'} onClick={() => setActiveTab('shortlist')}>My shortlist {shortlist.length > 0 && <span className="tab-count">{shortlist.length}</span>}</Button>
          </nav>
          <div className="header-end">
            <span className="collection-label">DESIGN EXPLORATION / 2026</span>
            <Tooltip>
              <TooltipTrigger asChild><Button variant="outline" size="icon" className="size-8 border-border text-primary" aria-label="Open your shopping cart" onClick={() => setCartOpen(true)}><ShoppingBag /></Button></TooltipTrigger>
              <TooltipContent>Shopping cart · {count} items</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </header>

      <main className="page-shell collection-main">
        <section className="intro">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot" /> Sholok Shopping · Design collection</div>
            <h1 className="page-title">Floating cart collection<span className="text-primary">.</span></h1>
            <p className="intro-description">A signature bag. A beautiful little detail.<br />Thirty-two unique expressions of the Sholok Shopping identity.</p>
          </div>
          <div className="palette" aria-label="Sholok brand colors">
            <div className="palette-color"><span className="palette-swatch bg-primary" /><div><strong>Signature purple</strong><small>#5D0096</small></div></div>
            <div className="palette-color"><span className="palette-swatch bg-brand-highlight" /><div><strong>Red-orange</strong><small>#D31710</small></div></div>
          </div>
        </section>

        <section aria-label="Cart design comparison">
          <div className="gallery-toolbar">
            <div className="gallery-tabs" aria-label="Filter collection">
              <Button variant="collectionTab" size="sm" className="gap-2 text-[10px]" data-active={activeTab === 'all'} aria-pressed={activeTab === 'all'} onClick={() => setActiveTab('all')}>All designs <span className="tab-count">{cartDesigns.length}</span></Button>
              <Button variant="collectionTab" size="sm" className="gap-1.5 text-[10px]" data-active={activeTab === 'shortlist'} aria-pressed={activeTab === 'shortlist'} onClick={() => setActiveTab('shortlist')}><Bookmark className="size-3" /> Shortlist <span className="tab-count">{shortlist.length}</span></Button>
            </div>
            <div className="preview-controls">
              <span className="preview-label">Preview mode</span>
              <div className="segmented" aria-label="Preview device">
                <Tooltip><TooltipTrigger asChild><Button variant="device" size="sm" className="h-7 gap-1.5 px-2.5 text-[10px]" data-active={device === 'desktop'} aria-pressed={device === 'desktop'} aria-label="Desktop preview" onClick={() => setDevice('desktop')}><Monitor className="size-3" /><span className="hidden sm:inline">Desktop</span></Button></TooltipTrigger><TooltipContent>Desktop preview</TooltipContent></Tooltip>
                <Tooltip><TooltipTrigger asChild><Button variant="device" size="sm" className="h-7 gap-1.5 px-2.5 text-[10px]" data-active={device === 'mobile'} aria-pressed={device === 'mobile'} aria-label="Mobile preview" onClick={() => setDevice('mobile')}><Smartphone className="size-3" /><span className="hidden sm:inline">Mobile</span></Button></TooltipTrigger><TooltipContent>Mobile preview</TooltipContent></Tooltip>
              </div>
            </div>
          </div>
          {designs.length > 0 ? <div className="design-grid">
            {designs.map(design => <CartDesignCard key={design.id} design={design} index={cartDesigns.indexOf(design)} selected={selected === design.id} saved={shortlist.includes(design.id)} device={device} count={count} animationKey={animationKey} onSelect={() => setSelected(design.id)} onSave={() => toggleShortlist(design.id)} onOpen={() => openPreview(design.id)} />)}
          </div> : <div className="empty-shortlist"><Bookmark size={30} strokeWidth={1.3} /><p>Your shortlist is waiting for a favorite.</p><Button variant="outline" onClick={() => setActiveTab('all')}>View all designs <ArrowUpRight /></Button></div>}
        </section>

        <section className="test-section" id="cart-playground" aria-labelledby="playground-heading">
          <div className="section-heading"><div><h2 className="section-title" id="playground-heading">A little cart playground</h2><p className="section-kicker">The everyday edit · Sample collection</p></div><Button variant="ghost" size="sm" className="text-[10px] text-primary" onClick={() => setCartOpen(true)}>View cart <ArrowUpRight className="size-3" /></Button></div>
          <div className="test-content">
            <div className="product-demo">
              <img className="product-image" src={sneaker} alt="White and lilac Everyday Sneaker" width={1024} height={1024} loading="lazy" />
              <div><div className="product-category">{sampleProduct.category}</div><h3 className="product-name">{sampleProduct.name}</h3><p className="product-price">{formatPrice(sampleProduct.price)}<span className="demo-price-label">Sample price</span></p><Button size="sm" className="h-8 text-[10px]" onClick={() => updateQuantity(1)}><Plus className="size-3" /> Add to cart</Button></div>
            </div>
            <div className="cart-demo-controls">
              <div><div className="eyebrow text-[9px]">Your cart</div><div className="item-count-number" aria-live="polite" aria-atomic="true"><output aria-label="Cart item count">{count}</output><span>{count === 1 ? 'item' : 'items'} in the bag</span></div></div>
              <div><div className="quantity-control"><Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" className="size-8" aria-label="Decrease cart quantity" disabled={count === 0} onClick={() => updateQuantity(-1)}><Minus /></Button></TooltipTrigger><TooltipContent>Remove one item</TooltipContent></Tooltip><span className="quantity-value">{count}</span><Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" className="size-8" aria-label="Increase cart quantity" onClick={() => updateQuantity(1)}><Plus /></Button></TooltipTrigger><TooltipContent>Add one item</TooltipContent></Tooltip></div><p className="quantity-caption">Item quantity</p></div>
            </div>
          </div>
          <span className="sr-only" role="status">{lastAction}</span>
        </section>
      </main>

      <footer className="footer"><div className="page-shell footer-inner"><span>Thoughtfully designed for Sholok Shopping.</span><span className="footer-note"><Check size={11} className="text-primary" /> {cartDesigns.length} concepts <span className="mx-1">·</span> Desktop & mobile <span className="mx-1">·</span> Interactive collection</span></div></footer>
      <div className="live-float" data-testid="live-floating-cart"><FloatingCart style={selected} count={count} animationKey={animationKey} onOpen={() => setCartOpen(true)} label="Open live floating cart" /></div>
      <ShoppingCartDrawer open={cartOpen} onOpenChange={setCartOpen} count={count} onChange={updateQuantity} onClear={() => { setCount(0); setAnimationKey(current => current + 1); setLastAction('Shopping cart cleared'); }} />
    </div>
  );
}
