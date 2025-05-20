import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary-600 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 active:bg-primary-700',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive-600 hover:scale-[1.02] hover:shadow-lg hover:shadow-destructive/20 active:bg-destructive-700',
        outline:
          'border-2 border-input bg-background hover:border-primary hover:text-primary hover:scale-[1.02] hover:shadow-md hover:shadow-primary/10 active:bg-primary/5',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary-600 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/20 active:bg-secondary-700',
        ghost: 'hover:bg-accent hover:text-primary hover:scale-[1.02] hover:shadow-sm active:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline hover:text-primary-600 hover:scale-[1.01] active:text-primary-700',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = 'Button';

export { Button, buttonVariants };
