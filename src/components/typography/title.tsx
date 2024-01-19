import { cn } from "@/lib/utils";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Title: React.FC<TitleProps> = ({ children, className}) => {

  return (
    <div className={cn(
      'flex flex-col gap-4',
      className
    )}>
      {children}
    </div>
  )
}

export default Title;