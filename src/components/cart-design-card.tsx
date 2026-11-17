import { ArrowUpRight, Bookmark, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { FloatingCart } from '@/components/floating-cart';
import type { CartDesign } from '@/lib/cart-collection';

interface CartDesignCardProps {
  design: CartDesign;
  index: number;
  selected: boolean;
  saved: boolean;
  device: 'desktop' | 'mobile';
  count: number;
  animationKey: number;
  onSelect: () => void;
  onSave: () => void;
  onOpen: () => void;
}

export function CartDesignCard({ design, index, selected, saved, device, count, animationKey, onSelect, onSave, onOpen }: CartDesignCardProps) {
  return (
    <article className="design-card" data-selected={selected} data-new={design.isNew || undefined} aria-label={`${design.name} design`}>
      <div className={`design-stage stage-${design.id}`} data-device={device}>
        <div className="stage-meta">
          <div className="stage-index"><span className="design-number">{String(index + 1).padStart(2, '0')}</span>{design.isNew && <span className="new-design-label">NEW</span>}</div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="shortlist" size="icon" className="size-7" data-saved={saved} aria-pressed={saved} aria-label={`${saved ? 'Remove' : 'Save'} ${design.name} ${saved ? 'from' : 'to'} shortlist`} onClick={onSave}>
                <Bookmark className={saved ? 'fill-current' : ''} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{saved ? 'Remove from shortlist' : 'Save to shortlist'}</TooltipContent>
          </Tooltip>
        </div>
        <div className="store-ghost" aria-hidden="true" />
        <div className="stage-cart">
          <FloatingCart style={design.id} count={count} animationKey={animationKey} onOpen={onOpen} label={`Open ${design.name} cart`} />
        </div>
        {selected && <span className="stage-selected"><Check size={10} /> In live preview</span>}
      </div>
      <div className="design-info">
        <h2 className="design-name">{design.name}</h2>
        <p className="design-description">{design.description}</p>
        <div className="design-card-footer">
          <span className="style-tag">{design.treatment}</span>
          <Button variant="preview" className="h-6 gap-1 px-0 text-[9px] [&_svg]:size-3" data-active={selected} aria-label={`Preview ${design.name}`} aria-pressed={selected} onClick={onSelect}>
            {selected ? 'Selected' : 'Live preview'}{selected ? <Check /> : <ArrowUpRight />}
          </Button>
        </div>
      </div>
    </article>
  );
}