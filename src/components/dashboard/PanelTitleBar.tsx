import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface PanelTitleBarProps {
  title: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const PanelTitleBar: React.FC<PanelTitleBarProps> = ({ title, icon, badge, isExpanded = true, onToggle }) => {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="px-3 py-3 md:px-4 md:py-3">
        <div className="flex items-center gap-3 min-w-0">
          {icon ? <div className="shrink-0 p-2 rounded-lg border border-border bg-accent/40">{icon}</div> : null}
          <CardTitle className="text-base md:text-lg leading-none truncate">{title}</CardTitle>
          <div className="ml-auto flex items-center gap-2 shrink-0">
            {badge ? <div>{badge}</div> : null}
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