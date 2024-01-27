import {SortableContext, useSortable, verticalListSortingStrategy} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

import type {SortableItem} from './App';

export function SortableItem({item, isFirstLevel}: {item: SortableItem, isFirstLevel?: boolean}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: item.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  if (item.children.length > 0) {
    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <div>{item.title}</div>
        {isFirstLevel &&
          <SortableContext 
            items={item.children.map(item => item.id)}
            strategy={verticalListSortingStrategy}
          >
            {item.children.map(item => <SortableItem item={item}/>)}
          </SortableContext>
        }
        {!isFirstLevel &&
          <div>
            {item.children.map(item => <SortableItem item={item}/>)}
          </div>
        }
      </div>
    )
  }
  else {
    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        {item.title}
      </div>
    );
  }
}