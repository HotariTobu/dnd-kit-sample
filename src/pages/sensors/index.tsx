import {
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import QuickStart from '../quick-start';

export default () => {
  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      // distance: 100,
      delay: 2000,
      tolerance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });

  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(
    mouseSensor,
    touchSensor,
    keyboardSensor,
  );

  const handleDragStart = (event: DragStartEvent) => {
    console.log(event)
  }

  return (
    <>
      <div>sensors</div>
      <QuickStart sensors={sensors} onDragStart={handleDragStart} />
    </>
  )
}
