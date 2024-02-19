import { PropsWithChildren, forwardRef, CSSProperties } from 'react';


export const Item = forwardRef<HTMLDivElement, PropsWithChildren<{ id: number, style?: CSSProperties, hidden?: boolean }>>(({ id, ...props }, ref) => {
  return (
    <div {...props} ref={ref}>{id}</div>
  )
});
