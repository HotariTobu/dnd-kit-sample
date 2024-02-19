import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Item } from './Item';

export function SortableItem(props: {
  id: number
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isSorting,
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Item id={props.id} ref={setNodeRef} style={style} {...attributes} {...listeners}>
    </Item>
  );
}
