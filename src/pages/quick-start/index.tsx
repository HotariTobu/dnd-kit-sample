import { DndContext, DragEndEvent } from "@dnd-kit/core"
import { Draggable } from "./Draggable"
import { Droppable } from "./Droppable"

// import reactLogo from '@/src/assets/react.svg'
// import viteLogo from '@/public/vite.svg'

import reactLogo from '../../assets/react.svg'
import { useState } from "react"

export default (props: Record<string, unknown>) => {
  const [isDropped, setIsDropped] = useState(false)

  const draggableMarkup = (
    <Draggable>
      <img src={reactLogo} className="logo" alt="Vite logo" />
    </Draggable>
  )

  const handleDragEnd = (event: DragEndEvent) => {
    if (event.over === null) {
      return
    }

    if (event.over.id === 'dnd-id') {
      setIsDropped(true)
    }
  }

  return (
    <>
      <DndContext onDragEnd={handleDragEnd} {...props}>
        {isDropped ? null : draggableMarkup}
        <Droppable>
          <div style={{
            display: 'flex'
          }}>
            {isDropped ? draggableMarkup : null}
            <img src={reactLogo} className="logo react" alt="React logo" />
          </div>
        </Droppable>
      </DndContext>
    </>
  )
}
