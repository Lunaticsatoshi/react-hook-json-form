// import { useState } from 'react';
import { Form } from './components';
// import { jsonSchema, uiSchema } from './schema';

// const CustomWidget = (props: any) => {
//   const { label, setValue, register } = props;

//   return (
//     <div>
//       {label}
//       <input
//         type={'text'}
//         placeholder={'Test field'}
//         {...register('text')}
//         onChange={() => setValue('text', 'helloo')}
//       />
//     </div>
//   );
// };

// const CustomStackWidget = (props: any) => {
//   const { setValue, append, register } = props;

//   return (
//     <div>
//       <input
//         type={'text'}
//         placeholder={'Test field'}
//         {...register('text')}
//         onChange={() => setValue('text', 'helloo')}
//       />
//       <div onClick={() => append({ firstName: 'Hello', lastName: 'Hello', phone: '672596724576' })}>Click</div>
//     </div>
//   );
// };

// const ObjectFieldTemplate = ({ label, properties }) => {
//   return (
//     <div>
//       <h1>{label}</h1>
//       <img src ={"https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"}></img>
//       <div className="grid grid-cols-4">
//         {properties.map((element: any, index: number) => (
//           <div key={index} className="col-span-4 mb-6">
//             {element.content}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const FieldTemplate = ({ label, children }) => {
//   return (
//     <div>
//       <h1>{label}</h1>
//       <img src ={"https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"}></img>
//       <div>
//         {children}
//       </div>
//     </div>
//   );
// };

export const jsonSchema = {
  _id: '632d8on52d8d83ffc02e6dd7f',
  welcomeText: 'Welcome to Nova Benefits',
  companyId: '6199c1af20b5df6924b4ed8e',
  createdBy: {
    companyName: 'nova',
    companyLogo: 'https://assets.web.numanshq.com/nova_logo_2e0eaa1f69.svg',
    companyNameForDisplay: 'Nova Benefits',
    companyWebsite: null,
  },
  sectionIds: ['632d88f5d8d83ffc02e6dddf', '632d88f5d8d83ffc02e6dde0'],
  sections: [
    {
      _id: '632d88f5d8d83ffc02e6dddf',
      sectionName: 'basicsDetails',
      sectionLabel: 'Basics Details',
      sectionDescription: 'Basic Details section',
      sectionState: 'PUBLISHED',
      fieldIds: [
        '632d88f4d8d83ffc02e6dd87',
        '632d88f4d8d83ffc02e6dd9c',
        '632d88f4d8d83ffc02e6dd9d',
      ],
      fields: [
        {
          _id: '632d88f4d8d83ffc02e6dd87',
          name: 'name',
          description: 'This refers to their legal name',
          type: 'STRING',
          label: 'Name',
          widget: 'NAME',
          required: true,
          isEditableType: false,
          editability: 'EMPLOYEE_AND_ADMIN',
          fieldState: 'PUBLISHED_AND_LOCKED',
          visibility: 'EMPLOYEE_AND_ADMIN',
          placeholder: "what's their name?",
          fieldOptions: null,
          stackFields: null,
        },
        {
          _id: '632d88f4d8d83ffc02e6dd9c',
          name: 'joiningDate',
          description: 'Helps celebrate their time in the organisation',
          type: 'STRING',
          label: 'Joining Date',
          widget: 'DATE',
          required: true,
          isEditableType: false,
          editability: 'EMPLOYEE_AND_ADMIN',
          fieldState: 'PUBLISHED_AND_LOCKED',
          visibility: 'EMPLOYEE_AND_ADMIN',
          placeholder: "When they'll be joining?",
          fieldOptions: null,
          stackFields: null,
        },
        {
          _id: '632d88f4d8d83ffc02e6dd9d',
          name: 'personalEmail',
          description: 'To contact them in a professional manner',
          type: 'STRING',
          label: 'Personal Email',
          widget: 'EMAIL',
          required: true,
          isEditableType: false,
          editability: 'EMPLOYEE_AND_ADMIN',
          fieldState: 'PUBLISHED_AND_LOCKED',
          visibility: 'EMPLOYEE_AND_ADMIN',
          placeholder: 'Their work email',
          fieldOptions: null,
          stackFields: null,
        },
      ],
    },
    {
      _id: '632d88f5d8d83ffc02e6dde0',
      sectionName: 'additionalDetails',
      sectionLabel: 'Additional Details',
      sectionDescription: 'Additional Details section',
      sectionState: 'PUBLISHED',
      // objectFieldTemplate: ObjectFieldTemplate,
      fieldIds: [
        '632d88f4d8d83ffc02e6dd9a',
        '632d88f4d8d83ffc02e6dd99',
        '632d88f4d8d4ffc02e6ddf92',
        '632d88f4d8d83ffc02e6dd9b',
      ],
      fields: [
        {
          _id: '632d88f4d8d83ffc02e6dd9a',
          name: 'role',
          description: 'Helps find the right person to contact',
          type: 'STRING',
          label: 'Role',
          widget: 'TEXT',
          required: true,
          isEditableType: false,
          editability: 'EMPLOYEE_AND_ADMIN',
          fieldState: 'PUBLISHED_AND_LOCKED',
          visibility: 'EMPLOYEE_AND_ADMIN',
          placeholder: "what's their title",
          // fieldTemplate: FieldTemplate,
          fieldOptions: null,
          stackFields: null,
        },
        {
          _id: '632d88f4d8d83ffc02e6dd99',
          name: 'team',
          description: 'Which A-team do they belong to',
          type: 'STRING',
          label: 'Team',
          widget: 'SELECT',
          required: true,
          isEditableType: false,
          editability: 'EMPLOYEE_AND_ADMIN',
          fieldState: 'PUBLISHED_AND_LOCKED',
          visibility: 'EMPLOYEE_AND_ADMIN',
          placeholder: null,
          fieldOptions: [
            {
              optionId: 1,
              optionLabel: 'Engineering',
              optionValue: 'engineering',
            },
            {
              optionId: 2,
              optionLabel: 'Marketing',
              optionValue: 'marketing',
            },
            {
              optionId: 3,
              optionLabel: 'Sales',
              optionValue: 'sales',
            },
          ],
          stackFields: null,
        },
        {
          _id: '632d88f4d8d4ffc02e6dd92',
          name: 'reportingManager',
          description: 'Who they will be reporting to',
          type: 'STRING',
          label: 'Reporting Manager',
          widget: 'SELECT',
          required: true,
          isEditableType: false,
          editability: 'EMPLOYEE_AND_ADMIN',
          fieldState: 'PUBLISHED_AND_LOCKED',
          visibility: 'EMPLOYEE_AND_ADMIN',
          placeholder: null,
          fieldOptions: [
            {
              optionId: 1,
              optionLabel: 'Tapan',
              optionValue: 'tapan',
            },
            {
              optionId: 2,
              optionLabel: 'Aditya',
              optionValue: 'aditya',
            },
            // {
            //   optionId: 3,
            //   optionLabel: 'Sales',
            //   optionValue: 'sales',
            // },
          ],
          stackFields: null,
        },
        {
          _id: '632d88f4d8d83ffc02e6dd9b',
          name: 'employmentType',
          description: 'Lets you know the types of employees in your org',
          type: 'STRING',
          label: 'Employment Type',
          widget: 'RADIO',
          required: true,
          isEditableType: false,
          editability: 'EMPLOYEE_AND_ADMIN',
          fieldState: 'PUBLISHED_AND_LOCKED',
          visibility: 'EMPLOYEE_AND_ADMIN',
          placeholder: 'What will they be doing',
          fieldOptions: [
            {
              optionId: 1,
              optionLabel: 'Full-time',
              optionValue: 'Full-time',
            },
            {
              optionId: 2,
              optionLabel: 'Part-time',
              optionValue: 'Part-time',
            },
            {
              optionId: 3,
              optionLabel: 'Internship',
              optionValue: 'Internship',
            },
            {
              optionId: 4,
              optionLabel: 'Contract',
              optionValue: 'Contract',
            },
          ],
          stackFields: null,
        },
      ],
    },
  ],
};

// const testSchema = {
//   title: "Test form",
//   type: "object",
//   properties: {
//     name: {
//       name: "name",
//       label: "Name",
//       type: "string"
//     },
//     age: {
//       name: "age",
//       label: "Age",
//       type: "string"
//     }
//   }
// };

// const testSchema = {
//   name: "widgets",
//   label: "",
//   type: "object",
//   properties: {
//     stringFormats: {
//       type: "object",
//       name: "stringFormats",
//       label: "String formats",
//       properties: {
//         email: {
//           name: "email",
//           label: "Email",
//           type: "string",
//           format: "email"
//         },
//         uri: {
//           name: "uri",
//           label: "URL",
//           type: "string",
//           format: "uri"
//         }
//       }
//     },
//   }
// };

// const testUiSchema = {
//   name: {
//     name: "name",
//     label: "Name",
//     widget: "text",
//   },
//   age: {
//     name: "age",
//     label: "Age",
//     widget: 'text',
//   },
// };

// const testUiSchema = {
//   stringFormats: {
//     email: {
//       name: "email",
//       label: "Email",
//       type: "string",
//       format: "email"
//     },
//     uri: {
//       name: "uri",
//       label: "URL",
//       type: "string",
//       format: "uri"
//     }
//   },
// };

function App() {
  // const [compState, setComp] = useState(0);
  return (
    <div className="mt-20 max-w-xl mx-auto">
      <Form
        schema={jsonSchema}
        uiSchema={jsonSchema}
        useJsonSchema={false}
        // Widgets={{ test: CustomWidget, customstackwidget: CustomStackWidget }}
        onSubmit={(data) => console.log('data', data)}
        onError={(err) => {
          console.log(err, 'err');
        }}
      />
      {/* <MultistepForm
        schema={jsonSchema}
        uiSchema={jsonSchema}
        useJsonSchema={false}
        currentStep={compState}
        setCurrentStep={setComp}
        onSubmit={(data) => console.log('data', data)}
      /> */}
    </div>
  );
}

export default App;
