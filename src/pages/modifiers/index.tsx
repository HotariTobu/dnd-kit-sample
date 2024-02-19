import { DndContext, DragOverlay } from '@dnd-kit/core';
import {
  createSnapModifier,
  restrictToFirstScrollableAncestor,
  restrictToHorizontalAxis,
  restrictToParentElement,
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from '@dnd-kit/modifiers';
import { Draggable } from '../drag-overlay/Draggable';

export default () => {
  const gridSize = 20
  const snapModifier = createSnapModifier(gridSize)

  return (
    <div style={{
      border: 'red solid 1px',
    }}>
      <div>modifiers</div>

      <DndContext modifiers={[restrictToVerticalAxis]}>
        <Draggable id="dnd-id">vertical</Draggable>
        <DragOverlay modifiers={[restrictToWindowEdges]}>
          window edge
        </DragOverlay>
      </DndContext>

      <DndContext modifiers={[restrictToHorizontalAxis]}>
        <Draggable id="dnd-id">horizontal</Draggable>
        <DragOverlay modifiers={[restrictToWindowEdges]}>
          window edge
        </DragOverlay>
      </DndContext>

      <DndContext modifiers={[restrictToVerticalAxis]}>
        <Draggable id="dnd-id">vertical</Draggable>
        <DragOverlay modifiers={[restrictToParentElement]}>
          parent
        </DragOverlay>
      </DndContext>

      <DndContext modifiers={[restrictToHorizontalAxis]}>
        <Draggable id="dnd-id">horizontal</Draggable>
        <DragOverlay modifiers={[restrictToParentElement]}>
          parent
        </DragOverlay>
      </DndContext>

      <DndContext modifiers={[restrictToVerticalAxis]}>
        <Draggable id="dnd-id">vertical</Draggable>
        <DragOverlay modifiers={[restrictToFirstScrollableAncestor]}>
          scrollable
        </DragOverlay>
      </DndContext>

      <DndContext modifiers={[snapModifier]}>
        <Draggable id="dnd-id">snap</Draggable>
        <DragOverlay>
          snap
        </DragOverlay>
      </DndContext>
    </div>
  )
}
