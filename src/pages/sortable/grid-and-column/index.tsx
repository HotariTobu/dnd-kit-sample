import { useState } from "react";
import { UniqueIdentifier } from "@dnd-kit/core";
import { Item } from "../multi-container/item";
import { SortableContainer } from "../multi-container/sortable-container";
import { SortableZone } from "../multi-container/sortable-zone";
import { SortableItem } from "../multi-container/sortable-item";
import { rectSortingStrategy, rectSwappingStrategy } from "@dnd-kit/sortable";

interface Task extends Item {
  name: string
}

const TaskNode = (props: {
  item: Task
}) => {
  return (
    <div className="bg-white border border-blue-600 h-16 flex items-center justify-center">
      {props.item.name}
    </div>
  );
}

const g = (name: string): Task => ({
  id: crypto.randomUUID(),
  name,
})

const initialTasksMap = new Map<UniqueIdentifier, Task[]>([
  ['rect-sort', [g('Task 1'), g('Task 2'), g('Task 3')]],
  ['rect-swap', [g('Task 4'), g('Task 5'), g('Task 6')]],
  ['column', [g('Task 7'), g('Task 8'), g('Task 9')]],
])

const Tasks = (props: {
  tasks: Task[]
}) => (
  <>
    {props.tasks.map(task => (
      <SortableItem item={task} Content={TaskNode} key={task.id} />
    ))}
  </>
)

export default () => {
  const [tasksMap, setTasksMap] = useState(initialTasksMap)

  const rectSortTasks = tasksMap.get('rect-sort') ?? []
  const rectSwapTasks = tasksMap.get('rect-swap') ?? []
  const columnTasks = tasksMap.get('column') ?? []

  return (
    <>
      <div>Grid and Column</div>
      <SortableContainer className="gap-2 grid grid-cols-2" itemsMap={tasksMap} setItemsMap={setTasksMap} Overlay={TaskNode} >
        <SortableZone className="bg-slate-200 p-2" containerId={'rect-sort'} items={rectSortTasks} strategy={rectSortingStrategy}>
          <div className="gap-2 grid grid-cols-2">
            <Tasks tasks={rectSortTasks} />
          </div>
        </SortableZone>
        <SortableZone className="bg-slate-200 p-2 row-span-2" containerId={'column'} items={columnTasks}>
          <div className="gap-2 flex flex-col">
            <Tasks tasks={columnTasks} />
          </div>
        </SortableZone>
        <SortableZone className="bg-slate-200 p-2" containerId={'rect-swap'} items={rectSwapTasks} strategy={rectSwappingStrategy}>
          <div className="gap-2 grid grid-cols-2">
            <Tasks tasks={rectSwapTasks} />
          </div>
        </SortableZone>
      </SortableContainer>
    </>
  )
}
