export declare type Field = {
    name: string;
    type: string;
    label: string;
    description?: string;
    required?: boolean;
    widget: string;
    [key: string]: any;
};
export declare type Section = {
    sectionName: string;
    sectionLabel: string;
    content: string;
    fields: Field[];
    [key: string]: any;
};
export declare const serialiseFieldSchema: (fields: Field[], idPrefix: boolean, idSeperator: string) => {
    [key: string]: any;
    [key: number]: any;
};
export declare const serialiseSectionSchema: (sections: Section[], idPrefix: boolean, idSeperator: string) => {
    [key: string]: any;
    [key: number]: any;
};
export declare const createUISchema: (schema: any, idPrefix?: boolean, idSeperator?: string) => {};
