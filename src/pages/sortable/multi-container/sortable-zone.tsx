import { HTMLAttributes } from "react";
import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  SortingStrategy,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { Item } from "./item";

interface Props<I> extends HTMLAttributes<HTMLDivElement> {
  containerId: UniqueIdentifier
  items: I[]
  strategy?: SortingStrategy
}

export const SortableZone = <I extends Item>({ containerId, items, strategy = verticalListSortingStrategy, ...props }: Props<I>) => {
  const { setNodeRef } = useDroppable({
    id: containerId
  });

  return (
    <SortableContext
      id={String(containerId)}
      items={items}
      strategy={strategy}
    >
      <div ref={setNodeRef} {...props} />
    </SortableContext>
  );
}
