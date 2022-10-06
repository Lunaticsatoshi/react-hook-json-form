import fields from '../components/fields';
import widgets from '../components/widgets';

export function getDefaultRegistry(): any {
  return {
    fields,
    widgets,
    definitions: {},
    rootSchema: {},
    formContext: {},
  };
}
