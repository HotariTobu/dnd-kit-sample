import { ReactNode } from "react"

export const ScrollableList = (props: {
  children: ReactNode
}) => {
  return (
    <ul>
      {props.children}
    </ul>
  )
}
