import DragOverlay from "./drag-overlay"
import GridAndColumn from "./grid-and-column"
import KeyVertical from "./key-vertical"
import MultiContainer from "./multi-container"
import QuickStart from "./quick-start"

export default () => {
  return (
    <>
      <div>sortable</div>
      <QuickStart />
      <KeyVertical />
      <DragOverlay />
      <MultiContainer />
      <GridAndColumn />
    </>
  )
}
