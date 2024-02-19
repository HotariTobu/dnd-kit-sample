import { useState } from 'react';
import { DndContext, DragOverlay, DragStartEvent } from '@dnd-kit/core';

import { Draggable } from './Draggable';
import { ScrollableList } from './ScrollableList';
import { Item } from './Item';

export default () => {
  const [items] = useState(['1', '2', '3', '4', '5']);
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <>
      <div>drag overlay</div>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <ScrollableList>
          {items.map(id =>
            <Draggable key={id} id={id}>
              <Item value={`Item ${id}`} />
            </Draggable>
          )}
        </ScrollableList>

        <DragOverlay>
          {activeId ? (
            <Item value={`Dragging Item ${activeId}`} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </>
  );

  function handleDragStart(event: DragStartEvent) {
    if (typeof event.active.id === 'string') {
      setActiveId(event.active.id);
    }
  }

  function handleDragEnd() {
    setActiveId(null);
  }
}
