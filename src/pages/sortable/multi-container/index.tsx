import { useState } from "react";
import { PointerSensor, UniqueIdentifier, useSensor, useSensors } from "@dnd-kit/core";
import { Item } from "./item";
import { SortableContainer } from "./sortable-container";
import { SortableColumn } from "./sortable-column";
import { SortableItem } from "./sortable-item";

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
  ['Phase 1', [g('Task 1'), g('Task 2'), g('Task 3')]],
  ['Phase 2', [g('Task 4'), g('Task 5'), g('Task 6')]],
  ['Phase 3', [g('Task 7'), g('Task 8'), g('Task 9')]],
  ['Phase 4', []],
])

export default () => {
  const [tasksMap, setTasksMap] = useState(initialTasksMap)

  const sensor = useSensor(PointerSensor, {
    // activationConstraint: {
    //   delay: 200,
    //   tolerance: 10,
    // }
  })

  const sensors = useSensors(sensor)

  return (
    <SortableContainer className="gap-2 flex flex-row" sensors={sensors} itemsMap={tasksMap} setItemsMap={setTasksMap} Overlay={TaskNode} >
      {Array.from(tasksMap).map(([containerId, tasks]) => (
        <SortableColumn className="bg-slate-200 p-2 flex-1" containerId={containerId} items={tasks} key={containerId}>
          <div className="gap-2 flex flex-col">
            {tasks.map(task => (
              <SortableItem item={task} Content={TaskNode} key={task.id} />
            ))}
          </div>
        </SortableColumn>
      ))}
    </SortableContainer>
  )
}
