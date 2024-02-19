import { ReactNode } from 'react';
import { useDraggable } from '@dnd-kit/core';

export const Draggable = (props: {
  id: string
  children: ReactNode
}) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: props.id,
  });

  return (
    <li ref={setNodeRef} {...listeners} {...attributes}>
      {props.children}
    </li>
  );
}
