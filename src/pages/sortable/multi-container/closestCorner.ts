import { ClientRect, CollisionDescriptor, CollisionDetection } from "@dnd-kit/core";

type Coordinates = {
  x: number;
  y: number;
};

/**
 * Returns the coordinates of the corners of a given rectangle:
 * [TopLeft {x, y}, TopRight {x, y}, BottomLeft {x, y}, BottomRight {x, y}]
 */
function cornersOfRectangle({ left, top, height, width }: ClientRect) {
  return [
    {
      x: left,
      y: top,
    },
    {
      x: left + width,
      y: top,
    },
    {
      x: left,
      y: top + height,
    },
    {
      x: left + width,
      y: top + height,
    },
  ];
}

/**
 * Returns the distance between two points
 */
function distanceBetween(p1: Coordinates, p2: Coordinates) {
  const disX = p1.x - p2.x
  const disY = p1.y - p2.y
  return disX * disX + disY * disY
}

/**
 * Returns the closest rectangles from an array of rectangles to the corners of
 * another rectangle.
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
