import { ReactNode } from "react"

import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"

export const Draggable = (props: {
  children?: ReactNode
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'dnd-id',
  })

  const style = {
    transform: CSS.Transform.toString(transform)
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {props.children}
    </div>
  )
}
