import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, CircleHelp, X } from 'lucide-react';

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
              >
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  aria-label={`Ajuda sobre ${title}`}
                  onMouseEnter={() => setIsHelpBalloonOpen(true)}
                  onFocus={() => setIsHelpBalloonOpen(true)}
                  onClick={() => setIsHelpBalloonOpen((prev) => !prev)}
                >
                  <CircleHelp className="h-4 w-4" />
                </Button>
                {isHelpBalloonOpen ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsHelpBalloonOpen(false)}
                      className="sm:hidden fixed inset-0 bg-foreground/45 z-10"
                      aria-label="Fechar destaque da descrição"
                    />
                    <div className="absolute top-full left-1/2 sm:left-auto sm:right-0 -translate-x-1/2 sm:translate-x-0 mt-2 w-[320px] max-w-[calc(100vw-1rem)] rounded-md border border-border bg-popover px-4 py-3 text-left shadow-md z-20 overflow-visible">
                      <button
                        type="button"
                        className="absolute -top-2 -right-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border bg-popover text-popover-foreground shadow-sm z-10 transition-colors hover:bg-popover-foreground hover:text-popover"
                        aria-label="Fechar ajuda"
                        title="Fechar"
                        onClick={(event) => {
                          event.stopPropagation();
                          setIsHelpBalloonOpen(false);
                        }}
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                      <p className="text-sm text-popover-foreground leading-tight pr-1">{description}</p>
                    </div>
                  </>
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