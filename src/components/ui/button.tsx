import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import "@/styles/globals.css"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "rounded-lg  inline-flex items-center justify-center whitespace-nowrap w-fit h-fit",
  {
    defaultVariants: {
      variant: "primary",
      size: "md",
      // size: "default",
    },
    variants: {
      variant: {
        primary: "bg-primary text-gray-50",
        secondary: "bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",

        light: 'border border-gray-200 text-gray-600 hover:shadow-base',
        dark: 'text-gray-50 bg-gradient-to-b from-[#1F2937]/60 to-[#1F2937]/50 dark-border-gradient',
        flat: 'text-gray-50 bg-gray-800 hover:bg-gray-700',
        disabled: 'text-gray-400 bg-gray-200 cursor-not-allowed',
        outline: "border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900",

        text: 'text-gray-800 hover:text-primary',
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
      },
      size: {
        xs: "px-[12px] py-[6px] text-xs font-medium leading-4 gap-[4px]",
        sm: "px-[16px] py-[8px] text-sm font-medium leading-5 gap-[6px]",
        md: "px-[24px] py-[12px] text-base font-semibold leading-6 gap-[8px]",
        lg: "px-[32px] py-[14px] text-base font-semibold leading-6 gap-[12px]",
      },
      option: {
        icon: "items-center p-4",
        rounded: "rounded-full",
      },
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  mbFull?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, option, asChild = false, mbFull, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, option, className }),
          mbFull ? 'w-full md:w-fit' : ''
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
