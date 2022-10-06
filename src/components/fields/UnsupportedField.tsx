import { FC } from 'react';

export interface IUnsupportedFieldProps {
  schema: any;
  reason: string;
}
const UnsupportedField: FC<IUnsupportedFieldProps> = ({ schema, reason }) => {
  return (
    <div className="unsupported-field">
      <p>
        Unsupported field schema
        {reason && <em>: {reason}</em>}.
      </p>
      {schema && <pre>{JSON.stringify(schema, null, 2)}</pre>}
    </div>
  );
};

export default UnsupportedField;
