import { ReactNode } from "react"

import { useDroppable } from "@dnd-kit/core"

export const Droppable = (props: {
  children?: ReactNode
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'dnd-id',
  })

  const style = {
    color: isOver ? 'green' : '',
  }

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}
