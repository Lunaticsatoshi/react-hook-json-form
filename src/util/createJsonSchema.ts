export type Field = {
  name: string;
  type: string;
  label: string;
  description?: string;
  required?: boolean;
  [key: string]: any;
};

export type Section = {
  sectionName: string;
  sectionLabel: string;
  content: string;
  fields: Field[];
  [key: string]: any;
};

export const serialiseFieldSchema = (fields: Field[], idPrefix: boolean, idSeperator : string) => {
  const schema: { [key: string | number]: any } = {};
  if (fields && fields.length > 0) {
    fields.forEach((field, index: number) => {
      schema[field._id || field.id || field.name || index] = {
        $id: field._id || field.id || field.name || index,
        name: idPrefix ? `${field._id || index}${idSeperator}${field.name}` : field.name || '',
        label: field.label || '',
        type: field.type.toLowerCase(),
        description: field.description || '',
        required: field.required || false,
        requiredMessage: field.requiredMessage || 'This field is required',
        enums: field.fieldOptions || field.enums || [],
        defaultValue: field.defaultValue || '',
        properties: { ...serialiseFieldSchema(field.stackFields || [], idPrefix, idSeperator) },
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
      properties: serialiseFieldSchema(section.fields, idPrefix, idSeperator),
    };
  });

  return schema;
};

export const createJsonSchema = (schema: any, idPrefix = true, idSeperator = '_') => {
  let jsonSchema = {};
  if (Object.hasOwn(schema, 'sections')) {
    jsonSchema = {
      name: 'form',
      type: 'object',
      properties: serialiseSectionSchema(schema.sections, idPrefix, idSeperator),
    };
  }
  if (Object.hasOwn(schema, 'fields')) {
    jsonSchema = {
      name: 'form',
      type: 'object',
      properties: serialiseFieldSchema(schema.fields, idPrefix, idSeperator),
    };
  }

  return jsonSchema || {};
};
