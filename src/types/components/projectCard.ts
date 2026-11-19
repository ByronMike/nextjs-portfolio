import { StaticImageData } from 'next/image';
import { Technology } from '@/types/content/techStack';

export interface projectType {
  id: string;
  name: string;
  type: string[];
  tech: Technology[];
  featuredImage: StaticImageData;
  objectPosition?: string; // CSS object-position, defaults to 'center'
  objectFit?: 'cover' | 'contain'; // image fit, defaults to 'cover'
  darkImage?: boolean; // dark screenshot: black letterbox + brighter text panel
  darkPanel?: boolean; // dark screenshot: in dark mode use a dark frosted panel + light text
  year: string;
  url?: string;
  repository?: string;
}
export interface ProjectCardProps {
  project: projectType;
  cardNumber: number;
}
