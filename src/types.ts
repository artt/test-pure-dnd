import type {MutableRefObject} from 'react';
import type {UniqueIdentifier} from '@dnd-kit/core';

export type TabData = chrome.tabs.Tab & {id: number, kind: string, children: []}
export type GroupData = chrome.tabGroups.TabGroup & {id: number, kind: string, children: TabData[]}
export type WindowData = chrome.windows.Window & {id: number, kind: string, children: (TabData | GroupData)[]}

export interface TreeItem {
  id: UniqueIdentifier;
  children: TreeItem[];
  collapsed?: boolean;
}

export type TreeItems = TreeItem[];

export interface FlattenedItem extends TreeItem {
  parentId: UniqueIdentifier | null;
  depth: number;
  index: number;
}

export type SensorContext = MutableRefObject<{
  items: FlattenedItem[];
  offset: number;
}>;
