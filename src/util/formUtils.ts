import { Widget } from '../lib/types';

type Component = {
  [key: string]: any;
};

type WidgetMap = {
  [key: string]: any;
};

export const COMPONENT_TYPES: Component = {
  array: 'ArrayField',
  boolean: 'BooleanField',
  integer: 'NumberField',
  number: 'NumberField',
  object: 'ObjectField',
  string: 'StringField',
  stack: 'StackField',
  null: 'NullField',
};
export const WIDGET_MAP: WidgetMap = {
  boolean: {
    checkbox: 'CheckboxWidget',
    radio: 'RadioWidget',
    select: 'SelectWidget',
    hidden: 'HiddenWidget',
  },
  string: {
    text: 'TextWidget',
    textarea: 'TextAreaWidget',
    password: 'PasswordWidget',
    name: 'NameWidget',
    email: 'EmailWidget',
    hostname: 'TextWidget',
    ipv4: 'TextWidget',
    ipv6: 'TextWidget',
    uri: 'URLWidget',
    'data-url': 'FileWidget',
    radio: 'RadioWidget',
    select: 'SelectWidget',
    search_select: 'SearchSelectWidget',
    hidden: 'HiddenWidget',
    date: 'DateWidget',
    datetime: 'DateTimeWidget',
    'date-time': 'DateTimeWidget',
    'alt-date': 'AltDateWidget',
    'alt-datetime': 'AltDateTimeWidget',
    color: 'ColorWidget',
    file: 'FileWidget',
    phone: 'PhoneWidget',
    multi_select: 'MultiSelectWidget',
    editable_select: 'EditableSelectWidget',
    link: 'LinkWidget',
    location: 'LocationWidget',
    user: 'UserWidget',
    stack: 'StackWidget',
  },
  number: {
    text: 'TextWidget',
    select: 'SelectWidget',
    updown: 'UpDownWidget',
    range: 'RangeWidget',
    radio: 'RadioWidget',
    hidden: 'HiddenWidget',
  },
  stack: {
    stack: 'StackWidget',
  },
  integer: {
    text: 'TextWidget',
    select: 'SelectWidget',
    updown: 'UpDownWidget',
    range: 'RangeWidget',
    radio: 'RadioWidget',
    hidden: 'HiddenWidget',
  },
  array: {
    select: 'SelectWidget',
    checkboxes: 'CheckboxesWidget',
    files: 'FileWidget',
    hidden: 'HiddenWidget',
  },
};

export const getSchemaType = (schema: any) => {
  const { type } = schema;

  if (!type && schema.enum) {
    return 'string';
  }
  if (type && type === 'object') {
    return 'object';
  }

  if (type && type === 'stack') {
    return 'stack';
  }

  if (!type && (schema.properties || schema.additionalProperties)) {
    return 'object';
  }

  if (type instanceof Array && type.length === 2 && type.includes('null')) {
    return type.find((newType) => newType !== 'null');
  }

  return type;
};

export const isCustomWidget = (schema: any, widget: any, registeredWidgets: any) => {
  const type = getSchemaType(schema);
  if (typeof widget === 'function') {
    return true;
  }

  if (typeof widget !== 'string') {
    throw new Error(`Unsupported widget definition: ${typeof widget}`);
  }

  // eslint-disable-next-line no-prototype-builtins
  if (!WIDGET_MAP.hasOwnProperty(type)) {
    throw new Error(`No widget for type "${type}"`);
  }

  // eslint-disable-next-line no-prototype-builtins
  if (registeredWidgets.hasOwnProperty(widget)) {
    return true;
  }

  // eslint-disable-next-line no-prototype-builtins
  if (WIDGET_MAP[type].hasOwnProperty(widget)) {
    return false;
  }

  return false;
};

export const getWidget = (
  schema: any,
  widget: any,
  registeredWidgets: any,
): Widget => {
  const type = getSchemaType(schema);
  if (typeof widget === 'function') {
    return widget;
  }

  if (typeof widget !== 'string') {
    throw new Error(`Unsupported widget definition: ${typeof widget}`);
  }

  // eslint-disable-next-line no-prototype-builtins
  if (!WIDGET_MAP.hasOwnProperty(type)) {
    throw new Error(`No widget for type "${type}"`);
  }

  // eslint-disable-next-line no-prototype-builtins
  if (registeredWidgets.hasOwnProperty(widget)) {
    const registeredWidget = registeredWidgets[widget];
    return getWidget(schema, registeredWidget, registeredWidgets);
  }

  // eslint-disable-next-line no-prototype-builtins
  if (WIDGET_MAP[type].hasOwnProperty(widget)) {
    const registeredWidget = registeredWidgets[WIDGET_MAP[type][widget]];
    return getWidget(schema, registeredWidget, registeredWidgets);
  }

  throw new Error(`No widget "${widget}" for type "${type}"`);
};

export const orderProperties = (properties: any[], order: string[]) => {
  if (!Array.isArray(order) || order.length === 0) {
    return properties;
  }
  return properties.sort((a, b) => order.indexOf(a) - order.indexOf(b));
};
