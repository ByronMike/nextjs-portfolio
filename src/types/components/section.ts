import React from 'react';

export type sectionId =
  | 'introduction'
  | 'tech-stack'
  | 'about'
  | 'timeline'
  | 'projects'
  | 'partners'
  | 'contact';

export interface SectionProps {
  readonly children: React.ReactNode;
  id: sectionId;
  isMotion?: boolean;
  className?: string;
}
