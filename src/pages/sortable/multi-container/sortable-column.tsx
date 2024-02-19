import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";

import { SortableItem } from "./sortable-item";

export const SortableColumn = (props: {
  containerId: UniqueIdentifier
  items: UniqueIdentifier[]
}) => {
  const { setNodeRef } = useDroppable({
    id: props.containerId
  });

  return (
    <SortableContext
      id={String(props.containerId)}
      items={props.items}
      strategy={verticalListSortingStrategy}
    >
      <div className=" bg-slate-200 p-2 flex-1" ref={setNodeRef}>
        <div className="gap-2 flex flex-col">
          {props.items.map((id) => (
            <SortableItem key={id} itemId={id} />
          ))}
        </div>
      </div>
    </SortableContext>
  );
}
