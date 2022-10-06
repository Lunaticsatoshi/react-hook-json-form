export type Field = {
  name: string;
  type: string;
  label: string;
  description?: string;
  required?: boolean;
  widget: string;
  [key: string]: any;
};

export type Section = {
  sectionName: string;
  sectionLabel: string;
  content: string;
  fields: Field[];
  [key: string]: any;
};

const getWidget = (widget: any) => {
  if (typeof widget === 'function') {
    return widget;
  }

  if (typeof widget === 'string') {
    return widget.toLowerCase();
  }
};

export const serialiseFieldSchema = (fields: Field[], idPrefix: boolean, idSeperator : string) => {
  const schema: { [key: string | number]: any } = {};
  if (fields && fields.length > 0) {
    fields.forEach((field, index: number) => {
      schema[field._id || field.id || field.name || index] = {
        $id: field._id || field.id || field.name || index,
        name: idPrefix ? `${field._id || index}${idSeperator}${field.name}` : field.name || '',
        label: field.label || '',
        description: field.description || '',
        type: field.type || 'string',
        options: field.options || {},
        placeholder: field.placeholder || 'Please enter this field',
        widget: getWidget(field.widget) || 'text',
        required: field.required || false,
        classNames: field.classNames || '',
        FieldTemplate: field.fieldTemplate || null,
        stackFields: { ...serialiseFieldSchema(field.stackFields || [], idPrefix, idSeperator) },
      };
    });
}
  return schema;
};

export const serialiseSectionSchema = (sections: Section[], idPrefix: boolean, idSeperator: string) => {
  const schema: { [key: string | number]: any } = {};

  sections.forEach((section: Section, index: number) => {
    schema[section._id || section.id || index] = {
      $id: section._id || section.id || index,
      name: idPrefix ? `${section._id || index}${idSeperator}${section.sectionName}` : section.sectionName || section.name || '',
      label: section.sectionLabel || section.label || '',
      description: section.description || section.sectionDescription || '',
      type: 'object',
      order: section.fieldIds || section.order || [],
      options: section.options || {},
      FieldTemplate: section.fieldTemplate || null,
      ObjectFieldTemplate: section.objectFieldTemplate || null,
      ArrayFieldTemplate: section.arrayFieldTemplate || null,
      StackFieldTemplate: section.stackFieldTemplate || null,
      ...serialiseFieldSchema(section.fields, idPrefix, idSeperator),
    };
  });
  return schema;
};

export const createUISchema = (schema: any, idPrefix = true, idSeperator = '_') => {
  let jsonSchema = {};
  if (Object.hasOwn(schema, 'sections')) {
    jsonSchema = {
      ...jsonSchema,
      ...serialiseSectionSchema(schema.sections, idPrefix, idSeperator),
    };
  }
  if (Object.hasOwn(schema, 'fields')) {
    jsonSchema = {
      ...jsonSchema,
      ...serialiseFieldSchema(schema.fields, idPrefix, idSeperator),
    };
  }

  return jsonSchema || {};
};
