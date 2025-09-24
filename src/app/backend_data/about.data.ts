export type Highlight = { icon: string; title: string; desc: string; };
export type Stat = { value: string; label: string; colorClass?: string; };

export const HIGHLIGHTS: Highlight[] = [
  { icon: 'language',  title: 'Web Development',    desc: 'Responsive, accessible apps with modern frameworks.' },
  { icon: 'robot_2',   title: 'GenAI Applications', desc: 'Generative AI and ML integrations, end‑to‑end.' },
  { icon: 'insights',  title: 'Project Management', desc: 'Agile delivery from concept to launch.' },
];

export const STATS: Stat[] = [
  { value: '3+',  label: 'Years Experience',   colorClass: 'text-sky-300' },
  { value: '50+', label: 'Projects Completed', colorClass: 'text-fuchsia-300' },
  { value: '15+', label: 'Technologies',       colorClass: 'text-emerald-300' },
];