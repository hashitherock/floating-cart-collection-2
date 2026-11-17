import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cartTotal, formatPrice, sampleProduct } from '@/lib/cart-collection';
import sneaker from '@/assets/everyday-sneaker.jpg';

interface ShoppingCartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  count: number;
  onChange: (delta: number) => void;
  onClear: () => void;
}

export function ShoppingCartDrawer({ open, onOpenChange, count, onChange, onClear }: ShoppingCartDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="drawer-content">
        <SheetHeader className="text-left">
          <div className="eyebrow mb-2">Sholok Shopping</div>
          <SheetTitle className="text-2xl">Your shopping cart</SheetTitle>
          <SheetDescription>{count} {count === 1 ? 'item' : 'items'} · Demo collection</SheetDescription>
        </SheetHeader>
        {count > 0 ? <>
          <div className="drawer-product">
            <img src={sneaker} alt="White and lilac Everyday Sneaker" className="drawer-product-image" width={1024} height={1024} loading="lazy" />
            <div className="drawer-product-info">
              <div className="product-name">{sampleProduct.name}</div>
              <div className="product-price">{formatPrice(sampleProduct.price)}</div>
              <div className="quantity-control">
                <Button variant="ghost" size="icon" className="size-7" aria-label="Remove one sneaker from cart" onClick={() => onChange(-1)}><Minus /></Button>
                <span className="quantity-value" aria-label="Sneaker quantity">{count}</span>
                <Button variant="ghost" size="icon" className="size-7" aria-label="Add one sneaker to cart" onClick={() => onChange(1)}><Plus /></Button>
              </div>
            </div>
            <Tooltip>
              <TooltipTrigger asChild><Button variant="ghost" size="icon" className="text-muted-foreground" aria-label="Remove all sneakers" onClick={onClear}><Trash2 /></Button></TooltipTrigger>
              <TooltipContent>Remove item</TooltipContent>
            </Tooltip>
          </div>
          <div className="drawer-summary">
            <div className="summary-line"><span>Subtotal</span><span>{formatPrice(cartTotal(count))}</span></div>
            <Button className="w-full" onClick={() => onOpenChange(false)}>Continue exploring</Button>
            <p className="mt-4 text-center text-[10px] text-muted-foreground">Sample product and price. No payment will be taken.</p>
          </div>
        </> : <div className="drawer-empty">
          <ShoppingBag size={40} strokeWidth={1.3} className="text-primary" />
          <p>Your cart is empty</p>
          <Button variant="outline" onClick={() => onChange(1)}><Plus /> Add sample sneaker</Button>
        </div>}
      </SheetContent>
    </Sheet>
  );
}