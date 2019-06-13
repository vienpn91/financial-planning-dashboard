export interface Position {
  value: number;
  icon: string;
  slug: string;
  label: string;
}

export const POSITIONS: Position[] = [
  { value: 1, icon: 'icon-current', slug: 'current', label: 'Current' },
  { value: 2, icon: 'icon-strategy', slug: 'strategy', label: 'Strategy' },
  { value: 3, icon: 'icon-projections', slug: 'switching', label: 'Switching' },
  { value: 4, icon: 'icon-documents', slug: 'documents', label: 'Documents' },
  { value: 5, icon: 'icon-presentation', slug: 'presentation', label: 'Presentation' },
];
