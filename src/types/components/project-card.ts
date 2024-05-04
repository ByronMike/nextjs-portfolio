import { StaticImageData } from 'next/image';
import { Technology } from '@/types/content/tech-stack';

export interface projectType {
  name: string;
  type: string[];
  tech: Technology[];
  description: string;
  featuredImage: StaticImageData;
  year: string;
  url?: string;
  repository?: string;
}
export interface ProjectCardProps {
  project: projectType;
  cardNumber: number;
}
