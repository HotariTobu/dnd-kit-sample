import type { ClientRect, CollisionDescriptor, CollisionDetection } from "@dnd-kit/core";

/**
 * Returns the intersecting rectangle area between two rectangles
 */
const getIntersectionWidth = (
  entry: ClientRect,
  target: ClientRect
) => {
  const left = Math.max(target.left, entry.left);
  const right = Math.min(target.right, entry.right);

  const width = right - left;

  return Math.max(width, 0)
}

/**
 * Returns the rectangles that has the greatest intersection area with a given
 * rectangle in an array of rectangles.
 */
export const verticalRectIntersection: CollisionDetection = ({
  collisionRect,
  droppableRects,
  droppableContainers,
}) => {
  const collisions: CollisionDescriptor[] = [];

  for (const droppableContainer of droppableContainers) {
    const { id } = droppableContainer;
    const rect = droppableRects.get(id);

    if (rect) {
      const intersectionWidth = getIntersectionWidth(rect, collisionRect);

      if (intersectionWidth > 0) {
        collisions.push({
          id,
          data: { droppableContainer, value: intersectionWidth },
        });
      }
    }
  }

  return collisions.sort((a, b) => b.data.value - a.data.value);
};
