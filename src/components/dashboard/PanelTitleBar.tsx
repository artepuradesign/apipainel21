import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, CircleHelp } from 'lucide-react';

interface PanelTitleBarProps {
  title: string;
  icon?: React.ReactNode;
  description?: string;
  badge?: React.ReactNode;
  isExpanded?: boolean;
  isReorderEnabled?: boolean;
  onIconHoldStart?: () => void;
  onIconHoldEnd?: () => void;
  onToggle?: () => void;
}

const PanelTitleBar: React.FC<PanelTitleBarProps> = ({
  title,
  icon,
  description,
  badge,
  isExpanded = true,
  isReorderEnabled = false,
  onIconHoldStart,
  onIconHoldEnd,
  onToggle,
}) => {
  const [isHelpBalloonOpen, setIsHelpBalloonOpen] = React.useState(false);

  return (
    <Card className="bg-card border-border">
      <CardHeader className="px-3 py-3 md:px-4 md:py-3">
        <div className="flex items-center gap-3 min-w-0">
          {icon ? (
            <button
              type="button"
              className={`shrink-0 p-2 rounded-lg border border-border bg-accent/40 ${isReorderEnabled ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
              aria-label="Pressione e segure por 1 segundo para ordenar painéis"
              onPointerDown={onIconHoldStart}
              onPointerUp={onIconHoldEnd}
              onPointerLeave={onIconHoldEnd}
            >
              {icon}
            </button>
          ) : null}
          <CardTitle className="text-base md:text-lg leading-none truncate">{title}</CardTitle>
          <div className="ml-auto flex items-center gap-2 shrink-0">
            {badge ? <div>{badge}</div> : null}
            {description ? (
              <div
                className="relative"
                onMouseEnter={() => setIsHelpBalloonOpen(true)}
                onMouseLeave={() => setIsHelpBalloonOpen(false)}
              >
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  aria-label={`Ajuda sobre ${title}`}
                  onFocus={() => setIsHelpBalloonOpen(true)}
                  onBlur={() => setIsHelpBalloonOpen(false)}
                >
                  <CircleHelp className="h-4 w-4" />
                </Button>
                {isHelpBalloonOpen ? (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-md border border-border bg-popover px-3 py-2 text-xs text-popover-foreground shadow-md z-20 max-w-64 text-left whitespace-normal">
                    {description}
                  </div>
                ) : null}
              </div>
            ) : null}
            {onToggle ? (
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={onToggle}
                className="h-8 w-8 rounded-full"
                aria-label={isExpanded ? 'Recolher painel' : 'Expandir painel'}
              >
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            ) : null}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default PanelTitleBar;