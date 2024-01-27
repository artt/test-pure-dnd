
import './App.css'
import {
  DndContext, 
  closestCenter,
  // KeyboardSensor,
  // PointerSensor,
  // useSensor,
  // useSensors,
} from '@dnd-kit/core';
import {
  // arrayMove,
  SortableContext,
  // sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem';

export type SortableItem = {
  id: number,
  title: string,
  type: 'window' | 'tabgroup' | 'tab',
  children: SortableItem[],
}


function App() {

  // const items: SortableItem[] = [
  //   {
  //     id: 21,
  //     title: 'Tab 21',
  //     type: 'tab',
  //     children: [],
  //   },
  //   {
  //     id: 22,
  //     title: 'Tab 22',
  //     type: 'tab',
  //     children: [],
  //   },
  //   {
  //     id: 23,
  //     title: 'Tab 23',
  //     type: 'tab',
  //     children: [],
  //   },
  // ]

  const items: SortableItem[] = [
    {
      id: 1,
      title: 'Window 1',
      type: 'window',
      children: [
        {
          id: 11,
          title: 'Tab 11',
          type: 'tab',
          children: [],
        },
        {
          id: 12,
          title: 'Tab 12',
          type: 'tab',
          children: [],
        },
        {
          id: 13,
          title: 'Tab 13',
          type: 'tab',
          children: [],
        },
      ]
    },
    {
      id: 2,
      title: 'Window 2',
      type: 'window',
      children: [
        {
          id: 21,
          title: 'Tab 21',
          type: 'tab',
          children: [],
        },
        {
          id: 22,
          title: 'Tab 22',
          type: 'tab',
          children: [],
        },
        {
          id: 23,
          title: 'Tab 23',
          type: 'tab',
          children: [],
        },
      ]
    },
  ]

  return (
    <>
      <DndContext 
        collisionDetection={closestCenter}
        // onDragEnd={handleDragEnd}
      >
        <SortableContext 
          items={items.map(item => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {items.map(item => <SortableItem item={item}/>)}
        </SortableContext>
      </DndContext>
    </>
  )
}

export default App
