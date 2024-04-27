import { cn } from '@/lib/utils';
import React from 'react';

type PageTitleProps = {
  title: string;
  className?: string;
};

const PageTitle = ({ title, className }: PageTitleProps) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className={cn('text-2xl font-semibold', className)}>{title}</h1>
    </div>
  );
};

export default PageTitle;
