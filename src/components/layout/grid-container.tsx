interface GridContainerProps {
    children: React.ReactNode;
    columns?: number;
  }
  
  export function GridContainer({ children, columns = 4 }: GridContainerProps) {
    return (
      <div className={`grid grid-cols-4 md:grid-cols-4 gap-6`}>
        {children}
      </div>
    );
  }