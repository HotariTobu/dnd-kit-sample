import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const Item = (props: {
  id: UniqueIdentifier
}) => {
  return (
    <div className="bg-white border border-blue-600 h-16 flex items-center justify-center">
      {props.id}
    </div>
  );
}

export const SortableItem = (props: {
  itemId: UniqueIdentifier
}) => {
  const {
    active,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.itemId });

  const style = {
    opacity: props.itemId === active?.id ? 0 : 1,
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Item id={props.itemId} />
    </div>
  );
}
