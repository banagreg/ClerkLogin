import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import React, { HTMLAttributes } from 'react';

export interface CardProps {
  label: string;
  amount: string;
  description: string;
  icon: LucideIcon;
}

const Card = (props: CardProps) => {
  return (
    <CardContent>
      <section className="flex justify-between gap-2">
        {/* label */}
        <p className="text-sm">{props.label}</p>
        {/* icon */}
        <props.icon className="h-4 w-4 text-gray-400" />
      </section>
      <section className="flex flex-col gap-1">
        {/* amount */}
        <h2 className="text-2xl font-semibold">{props.amount}</h2>
        <p className="text-xs text-gray-500">{props.description}</p>
      </section>
    </CardContent>
  );
};

export const CardContent = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        'flex w-full flex-col gap-3 rounded-xl border p-5 shadow',
        props.className,
      )}
    />
  );
};

export default Card;
