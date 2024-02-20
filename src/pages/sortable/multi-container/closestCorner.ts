import { ClientRect, CollisionDescriptor, CollisionDetection } from "@dnd-kit/core";

type Coordinates = {
  x: number;
  y: number;
};

/**
 * Returns the coordinates of the corners of a given rectangle:
 * [TopLeft {x, y}, TopRight {x, y}, BottomLeft {x, y}, BottomRight {x, y}]
 */
const cornersOfRectangle = (rect: ClientRect) => {
  return [
    {
      x: rect.left,
      y: rect.top,
    },
    {
      x: rect.right,
      y: rect.top,
    },
    {
      x: rect.left,
      y: rect.bottom,
    },
    {
      x: rect.right,
      y: rect.bottom,
    },
  ];
}

/**
 * Returns the distance between two points
 */
const distanceBetween = (p1: Coordinates, p2: Coordinates) => {
  const disX = p1.x - p2.x
  const disY = p1.y - p2.y
  return disX * disX + disY * disY
}

/**
 * Returns the closest rectangles from an array of rectangles to the closest corner of another rectangle.
 */
export const closestCorner: CollisionDetection = ({
  collisionRect,
  droppableRects,
  droppableContainers,
}) => {
  const corners = cornersOfRectangle(collisionRect);
  const collisions: CollisionDescriptor[] = [];

  for (const droppableContainer of droppableContainers) {
    const { id } = droppableContainer;
    const rect = droppableRects.get(id);

    if (typeof rect === 'undefined') {
      continue
    }

    const rectCorners = cornersOfRectangle(rect);
    const distances = [0, 1, 2, 3].map(i => distanceBetween(corners[i], rectCorners[i]))
    const effectiveDistance = Math.min(...distances)

    collisions.push({
      id,
      data: { droppableContainer, value: effectiveDistance },
    });
  }

  return collisions.sort((a, b) => a.data.value - b.data.value);
};
