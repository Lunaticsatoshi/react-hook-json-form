// export const serializeStackFields = (stackFields: any[]) => {
//   const stackFieldsSchema = stackFields.reduce((acc: any, curr: any,) => {
//     if (typeof curr.widget === 'string' && curr.widget.toLowerCase() === 'name') {
//       return { ...acc, firstName: '', lastName: '' };
//     }
//     return { ...acc, [curr.name]: '' };
//   }, {});

//   return stackFieldsSchema;
// };

export const createDynamicHookFormSchema = (schema: any, idPrefix = true, idSeperator = '_') => {
  let dynamicFormSchema = {};
  if (Object.hasOwn(schema, 'sections')) {
    if (schema.sections?.length > 0) {
      schema.sections.forEach((section: any) => {
        dynamicFormSchema = section.fields.reduce((acc: any, curr: any, index: number) => {
          // if (typeof curr.widget === 'string' && curr.widget.toLowerCase() === 'name') {
          //   return { ...acc, [idPrefix ? `${curr._id || index}${idSeperator}firstName` : 'firstName']: '', [idPrefix ? `${curr._id || index}${idSeperator}lastName` : 'lastName']: '' };
          //   return { ...acc, [idPrefix ? `${curr._id || index}${idSeperator}firstName` : 'firstName']: '', [idPrefix ? `${curr._id || index}${idSeperator}lastName` : 'lastName']: '' };
          // }
          // if (curr.type.toLowerCase() === 'stack') {
          //   return {
          //     ...acc,
          //     [`${curr._id || index}_${curr.name}`]: [serializeStackFields(curr.stackFields)],
          //   };
          // }
          return { ...acc, [idPrefix ? `${curr._id || index}${idSeperator}${curr.name}` : curr.name]: '' };
        }, dynamicFormSchema);
      });
    }
  } else if (Object.hasOwn(schema, 'fields')) {
    dynamicFormSchema = schema.fields.reduce((acc: any, curr: any, index: number) => {
      // if (typeof curr.widget === 'string' && curr.widget.toLowerCase() === 'name') {
      //   return { ...acc, [idPrefix ? `${curr._id || index}${idSeperator}firstName` : 'firstName']: '', [idPrefix ? `${curr._id || index}${idSeperator}lastName` : 'lastName']: '' };
      // }
      // if (curr.widget.toLowerCase() === 'stack') {
      //   return {
      //     ...acc,
      //     [`${curr._id || index}_${curr.name}`]: [serializeStackFields(curr.stackFields)],
      //   };
      // }
      return { ...acc, [idPrefix ? `${curr._id || index}${idSeperator}${curr.name}` : curr.name]: '' };
    }, dynamicFormSchema);
  }

  return dynamicFormSchema;
};

export const createDynamicHookFormSchemaFromJson = (schema: any) => {
 const hookFormSchema: Record<string, any> = {};

 if (schema?.type === 'object') {
  Object.keys(schema.properties).forEach((key) => {
    if (schema.properties[key]?.type?.toLowerCase() === 'object') {
        Object.keys(schema.properties).forEach((propertyNamekey) => {
          hookFormSchema[propertyNamekey] = '';
        });
    }
    hookFormSchema[key] = '';
  });
 } else {
   hookFormSchema.default = '';
 }

 return hookFormSchema;
};
