import { VNode } from '@stencil/core';

export type TagVariant = 'standard' | 'avatar';

export type DropdownVariant = 'standard' | 'icon' | 'avatar';

export type PopoverPlacementType =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'left-start'
  | 'left'
  | 'left-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end';

export type PopoverTriggerType = 'click' | 'hover' | 'manual';

interface HyperFunc<T> {
  (tag: any): T;
}
interface HyperFunc<T> {
  (tag: any, data: any): T;
}
interface HyperFunc<T> {
  (tag: any, text: string): T;
}
interface HyperFunc<T> {
  (sel: any, children: Array<T | undefined | null>): T;
}
interface HyperFunc<T> {
  (sel: any, data: any, text: string): T;
}
interface HyperFunc<T> {
  (sel: any, data: any, children: Array<T | undefined | null>): T;
}
interface HyperFunc<T> {
  (sel: any, data: any, children: T): T;
}

export type AllowedStyles = 'width' | 'minWidth' | 'maxWidth';

export type WidthStyles = {
  [prop in AllowedStyles]: any;
};

export type DataTableRow = {
  id: string;
  [prop: string]: string;
};

export type customTemplateFunc<T> = (
  createElement: HyperFunc<T>,
  props: DataTableRow
) => any;

export type DataTableColumn = {
  key: string;
  text: string;
  variant?: string;
  position?: number;
  hide?: boolean;
  widthProperties?: WidthStyles;
  hasFocusableComponent?: boolean;
  customTemplate?: customTemplateFunc<VNode>;
};

export type DataTableAction = {
  name: string;
  handler: (row: DataTableRow) => any;
  hideForRowIds?: string[];
};
