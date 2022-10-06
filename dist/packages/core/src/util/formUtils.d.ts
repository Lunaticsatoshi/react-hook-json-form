import { Widget } from '../lib/types';
declare type Component = {
    [key: string]: any;
};
declare type WidgetMap = {
    [key: string]: any;
};
export declare const COMPONENT_TYPES: Component;
export declare const WIDGET_MAP: WidgetMap;
export declare const getSchemaType: (schema: any) => any;
export declare const isCustomWidget: (schema: any, widget: any, registeredWidgets: any) => boolean;
export declare const getWidget: (schema: any, widget: any, registeredWidgets: any) => Widget;
export declare const orderProperties: (properties: any[], order: string[]) => any[];
export {};
