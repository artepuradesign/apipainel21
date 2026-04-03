import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

interface PanelTitleBarProps {
  title: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
}

const PanelTitleBar: React.FC<PanelTitleBarProps> = ({ title, icon, badge }) => {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="px-3 py-3 md:px-4 md:py-3">
        <div className="flex items-center gap-3 min-w-0">
          {icon ? <div className="shrink-0 p-2 rounded-lg border border-border bg-accent/40">{icon}</div> : null}
          <CardTitle className="text-base md:text-lg leading-none truncate">{title}</CardTitle>
          {badge ? <div className="shrink-0">{badge}</div> : null}
        </div>
      </CardHeader>
    </Card>
  );
};

export default PanelTitleBar;