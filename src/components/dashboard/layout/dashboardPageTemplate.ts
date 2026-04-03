export type DashboardSpacingVariant = 'standard' | 'compact';

const dashboardSpacingByVariant: Record<DashboardSpacingVariant, string> = {
  standard: 'space-y-4 sm:space-y-6',
  compact: 'space-y-2 md:space-y-3',
};

const dashboardHeaderGapByVariant: Record<DashboardSpacingVariant, string> = {
  standard: 'mt-4 md:mt-6',
  compact: 'mt-2 md:mt-3',
};

export const getDashboardPageClassName = (variant: DashboardSpacingVariant = 'standard') =>
  `${dashboardSpacingByVariant[variant]} relative z-10 px-1 sm:px-0`;

export const getDashboardHeaderContentGapClassName = (variant: DashboardSpacingVariant = 'standard') =>
  dashboardHeaderGapByVariant[variant];