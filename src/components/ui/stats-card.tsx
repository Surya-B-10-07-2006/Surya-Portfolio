import { LucideIcon } from 'lucide-react';
import AnimatedCounter from './animated-counter';

interface StatsCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  color?: string;
  delay?: number;
}

const StatsCard = ({ 
  icon: Icon, 
  value, 
  label, 
  suffix = '', 
  prefix = '',
  color = 'from-primary to-secondary',
  delay = 0
}: StatsCardProps) => {
  return (
    <div className={`glass-card text-center group hover:scale-105 transition-all duration-500 delay-${delay}`}>
      <div className={`w-16 h-16 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <div className="mb-2">
        <AnimatedCounter 
          end={value}
          prefix={prefix}
          suffix={suffix}
          className="text-3xl font-bold gradient-text"
        />
      </div>
      
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

export default StatsCard;