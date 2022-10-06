export const jsonSchema = {
  _id: "632d8on52d8d83ffc02e6dd7f",
  welcomeText: "Welcome to Nova Benefits",
  companyId: "6199c1af20b5df6924b4ed8e",
  createdBy: {
    companyName: "nova",
    companyLogo: "https://assets.web.numanshq.com/nova_logo_2e0eaa1f69.svg",
    companyNameForDisplay: "Nova Benefits",
    companyWebsite: null
  },
  sectionIds: [
    "632d88f5d8d83ffc02e6dddf",
    "632d88f5d8d83ffc02e6dde0",
    "632d88f5d8d83ffc02e6dde1",
    "632d88f5d8d83ffc02e6dde2",
    "632d88f5d8d83ffc02e6dde3",
    "632d88f5d8d83ffc02e6dde4"
  ],
  sections: [
    {
      _id: "632d88f5d8d83ffc02e6dddf",
      sectionName: "basicsDetails",
      sectionLabel: "Basics Details",
      sectionDescription: "Basic Details section",
      sectionState: "PUBLISHED",
      fieldIds: [
        "632d88f4d8d83ffc02e6dd87",
        "632d88f4d8d83ffc02e6dd88",
        "632d88f4d8d83ffc02e6dd89",
        "632d88f4d8d83ffc02e6dd8a",
        "632d88f4d8d83ffc02e6dd8b",
        "632d88f4d8d83ffc02e6dd8c"
      ],
      fields: [
        {
          _id: "632d88f4d8d83ffc02e6dd87",
          name: "name",
          description: "This refers to their legal name",
          type: "STRING",
          label: "Name",
          widget: "TEXT",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED_AND_LOCKED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: "what's their name?",
          fieldOptions: null,
          stackFields: null
        },
        {
          _id: "632d88f4d8d83ffc02e6dd88",
          name: "dateOfBirth",
          description: "Helpful in wishing them on their birthday",
          type: "STRING",
          label: "Date of Birth",
          widget: "DATE",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED_AND_LOCKED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: "what's their date of birth?",
          fieldOptions: null,
          stackFields: null
        },
        {
          _id: "632d88f4d8d83ffc02e6dd89",
          name: "gender",
          description: "So that you get your pronouns right",
          type: "STRING",
          label: "Gender",
          widget: "SELECT",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED_AND_LOCKED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: null,
          fieldOptions: [
            {
              optionId: 1,
              optionLabel: "Male",
              optionValue: "male"
            },
            {
              optionId: 2,
              optionLabel: "Female",
              optionValue: "female"
            },
            {
              optionId: 3,
              optionLabel: "Others",
              optionValue: "others"
            }
          ],
          stackFields: null
        },
        {
          _id: "632d88f4d8d83ffc02e6dd8a",
          name: "currentAddress",
          description: "So we know where to send the employee’s swag and laptop",
          type: "STRING",
          label: "Current Address",
          widget: "LOCATION",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED_AND_LOCKED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: "We'll ship a box of goodies to this address in next 7-14 days.?",
          fieldOptions: null,
          stackFields: null
        },
        {
          _id: "632d88f4d8d83ffc02e6dd8b",
          name: "phoneNumber",
          description: "What if the internet’s down",
          type: "STRING",
          label: "Phone Number",
          widget: "PHONE",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: "What's their contact?",
          fieldOptions: null,
          stackFields: null
        }
      ]
    },
    {
      _id: "632d88f5d8d83ffc02e6dde0",
      sectionName: "additionalDetails",
      sectionLabel: "Additional Details",
      sectionDescription: "Additional Details section",
      sectionState: "PUBLISHED",
      fieldIds: [
        "632d88f4d8d83ffc02e6dd8d",
        "632d88f4d8d83ffc02e6dd8e",
        "632d88f4d8d83ffc02e6dd8f",
        "632d88f4d8d83ffc02e6dd90",
        "632d88f4d8d83ffc02e6dd91",
        "632d88f4d8d83ffc02e6dd92",
        "632d88f4d8d83ffc02e6dd93",
        "632d88f4d8d83ffc02e6dd94",
        "632d88f4d8d83ffc02e6dd95",
        "632d88f4d8d83ffc02e6dd96"
      ],
      fields: [
        {
          _id: "632d88f4d8d83ffc02e6dd8d",
          name: "tShirtSize",
          description: "For when you send that crisp swag",
          type: "STRING",
          label: "T-shirt size",
          widget: "SELECT",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED_AND_LOCKED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: "What size fits you?",
          fieldOptions: [
            {
              optionId: 1,
              optionLabel: "XS",
              optionValue: "xs"
            },
            {
              optionId: 2,
              optionLabel: "S",
              optionValue: "s"
            },
            {
              optionId: 3,
              optionLabel: "M",
              optionValue: "m"
            },
            {
              optionId: 4,
              optionLabel: "L",
              optionValue: "l"
            },
            {
              optionId: 5,
              optionLabel: "XL",
              optionValue: "xl"
            },
            {
              optionId: 6,
              optionLabel: "XXL",
              optionValue: "xxl"
            },
            {
              optionId: 7,
              optionLabel: "XXXL",
              optionValue: "xxxl"
            }
          ],
          stackFields: null
        },
        {
          _id: "632d88f4d8d83ffc02e6dd90",
          name: "permanantAddress",
          description: "It’s always safe to know the permanent home",
          type: "STRING",
          label: "Permanant Address",
          widget: "LOCATION",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: null,
          fieldOptions: null,
          stackFields: null
        },
        {
          _id: "632d88f4d8d83ffc02e6dd91",
          name: "bio",
          description: "Learn more about them",
          type: "STRING",
          label: "Bio",
          widget: "TEXTAREA",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: "More about you",
          fieldOptions: null,
          stackFields: null
        },
        {
          _id: "632d88f4d8d83ffc02e6dd92",
          name: "interests",
          description: "Know what to talk about other than work",
          type: "STRING",
          label: "Interests",
          widget: "MULTI_SELECT",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED_AND_LOCKED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: null,
          fieldOptions: [
            {
              optionId: 1,
              optionLabel: "Swimmming",
              optionValue: "swimmming"
            },
            {
              optionId: 2,
              optionLabel: "Travelling",
              optionValue: "travelling"
            },
            {
              optionId: 3,
              optionLabel: "Anime",
              optionValue: "anime"
            }
          ],
          stackFields: null
        },
        {
          _id: "632d88f4d8d83ffc02e6dd93",
          name: "dietaryPreference",
          description: "Know what everyone can munch on",
          type: "STRING",
          label: "Dietary Preference",
          widget: "MULTI_SELECT",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED_AND_LOCKED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: null,
          fieldOptions: [
            {
              optionId: 1,
              optionLabel: "Vegetarian",
              optionValue: "vegetarian"
            },
            {
              optionId: 2,
              optionLabel: "Vegan",
              optionValue: "vegan"
            },
            {
              optionId: 3,
              optionLabel: "Kosher",
              optionValue: "kosher"
            }
          ],
          stackFields: null
        },
        {
          _id: "632d88f4d8d83ffc02e6dd94",
          name: "linkedIn",
          description: "Look at their professional profile",
          type: "STRING",
          label: "LinkedIn",
          widget: "LINK",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: "Linkedin url",
          fieldOptions: null,
          stackFields: null
        }
      ]
    },
    {
      _id: "632d88f5d8d83ffc02e6dde1",
      sectionName: "workDetails",
      sectionLabel: "Work Details",
      sectionDescription: "Work details section",
      sectionState: "PUBLISHED",
      fieldIds: [
        "632d88f4d8d83ffc02e6dd97",
        "632d88f4d8d83ffc02e6dd98",
        "632d88f4d8d83ffc02e6dd99",
        "632d88f4d8d83ffc02e6dd9a",
        "632d88f4d8d83ffc02e6dd9b",
        "632d88f4d8d83ffc02e6dd9c",
        "632d88f4d8d83ffc02e6dd9d",
        "632d88f4d8d83ffc02e6dd9e"
      ],
      fields: [
        {
          _id: "632d88f4d8d83ffc02e6dd97",
          name: "employeeId",
          description: "Sometimes names aren’t unique enough",
          type: "STRING",
          label: "Employee Id",
          widget: "TEXT",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED_AND_LOCKED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: "Employee Id",
          fieldOptions: null,
          stackFields: null
        },
        {
          _id: "632d88f4d8d83ffc02e6dd98",
          name: "office",
          description: "Employees also need to know where their office is",
          type: "STRING",
          label: "Office",
          widget: "LOCATION",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED_AND_LOCKED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: null,
          fieldOptions: null,
          stackFields: null
        },
        {
          _id: "632d88f4d8d83ffc02e6dd99",
          name: "team",
          description: "Which A-team do they belong to",
          type: "STRING",
          label: "Team",
          widget: "SELECT",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED_AND_LOCKED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: null,
          fieldOptions: [
            {
              optionId: 1,
              optionLabel: "Engineering",
              optionValue: "engineering"
            },
            {
              optionId: 2,
              optionLabel: "Marketing",
              optionValue: "marketing"
            },
            {
              optionId: 3,
              optionLabel: "Sales",
              optionValue: "sales"
            }
          ],
          stackFields: null
        },
        {
          _id: "632d88f4d8d83ffc02e6dd9a",
          name: "title",
          description: "Helps find the right person to contact",
          type: "STRING",
          label: "Title",
          widget: "TEXT",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED_AND_LOCKED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: "what's their title",
          fieldOptions: null,
          stackFields: null
        },
        {
          _id: "632d88f4d8d83ffc02e6dd9b",
          name: "employmentType",
          description: "Lets you know the types of employees in your org",
          type: "STRING",
          label: "Employment Type",
          widget: "SELECT",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED_AND_LOCKED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: "What will they be doing",
          fieldOptions: [
            {
              optionId: 1,
              optionLabel: "Full-time",
              optionValue: "Full-time"
            },
            {
              optionId: 2,
              optionLabel: "Part-time",
              optionValue: "Part-time"
            },
            {
              optionId: 3,
              optionLabel: "Internship",
              optionValue: "Internship"
            },
            {
              optionId: 4,
              optionLabel: "Contract",
              optionValue: "Contract"
            }
          ],
          stackFields: null
        },
        {
          _id: "632d88f4d8d83ffc02e6dd9c",
          name: "joiningDate",
          description: "Helps celebrate their time in the organisation",
          type: "STRING",
          label: "Joining Date",
          widget: "DATE",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED_AND_LOCKED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: "When they'll be joining?",
          fieldOptions: null,
          stackFields: null
        },
        {
          _id: "632d88f4d8d83ffc02e6dd9d",
          name: "workEmail",
          description: "To contact them in a professional manner",
          type: "STRING",
          label: "Work Email",
          widget: "EMAIL",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED_AND_LOCKED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: "Their work email",
          fieldOptions: null,
          stackFields: null
        }
      ]
    },
    {
      _id: "632d88f5d8d83ffc02e6dde2",
      sectionName: "documents",
      sectionLabel: "Documents",
      sectionDescription: "Necessary documents for the employee",
      sectionState: "PUBLISHED",
      fieldIds: [
        "632d88f4d8d83ffc02e6dd9f",
        "632d88f4d8d83ffc02e6dda0",
        "632d88f4d8d83ffc02e6dda1",
        "632d88f4d8d83ffc02e6dda2",
        "632d88f4d8d83ffc02e6dda3",
        "632d88f4d8d83ffc02e6dda4",
        "632d88f4d8d83ffc02e6dda5"
      ],
      fields: [
        {
          _id: "632d88f4d8d83ffc02e6dd9f",
          name: "aadhar",
          description: "12 digit number issues by the Unique Identification Authority of India",
          type: "STRING",
          label: "Aadhar",
          widget: "FILE",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED_AND_LOCKED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: null,
          fieldOptions: null,
          stackFields: null
        }
      ]
    },
    {
      _id: "632d88f5d8d83ffc02e6dde3",
      sectionName: "protectedInformation",
      sectionLabel: "Protected Information",
      sectionDescription: "Protected information of the employee",
      sectionState: "PUBLISHED",
      fieldIds: [
        "632d88f4d8d83ffc02e6dda6",
        "632d88f4d8d83ffc02e6dda7",
        "632d88f4d8d83ffc02e6dda8",
        "632d88f4d8d83ffc02e6dda9",
        "632d88f4d8d83ffc02e6ddaa"
      ],
      fields: [
        {
          _id: "632d88f4d8d83ffc02e6dda6",
          name: "emergencyContact",
          description: "In case any emergency arises",
          type: "STACK",
          label: "Emergency Contact",
          widget: "STACK",
          required: true,
          isEditableType: true,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED_AND_LOCKED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: "Emergency Contact",
          fieldOptions: null,
          stackFields: [
            {
              name: "name",
              type: "STRING",
              widget: "TEXT",
              fieldOptions: null
            },
            {
              name: "phone",
              type: "STRING",
              widget: "PHONE",
              fieldOptions: null
            }
          ]
        }
      ]
    },
    {
      _id: "632d88f5d8d83ffc02e6dde4",
      sectionName: "medicalInformation",
      sectionLabel: "Medical Information",
      sectionDescription: "Medical information of the employee",
      sectionState: "PUBLISHED",
      fieldIds: [
        "632d88f4d8d83ffc02e6ddab",
        "632d88f4d8d83ffc02e6ddac"
      ],
      fields: [
        {
          _id: "632d88f4d8d83ffc02e6ddab",
          name: "allergies",
          description: "Helps find the right person to contact",
          type: "STRING",
          label: "Allergies",
          widget: "MULTI_SELECT",
          required: true,
          isEditableType: false,
          editability: "EMPLOYEE_AND_ADMIN",
          fieldState: "PUBLISHED",
          visibility: "EMPLOYEE_AND_ADMIN",
          placeholder: null,
          fieldOptions: [
            {
              optionId: 1,
              optionLabel: "Anitbiotic",
              optionValue: "anitbiotic"
            },
            {
              optionId: 2,
              optionLabel: "Food",
              optionValue: "food"
            },
            {
              optionId: 3,
              optionLabel: "Medicine",
              optionValue: "medicine"
            }
          ],
          stackFields: null
        }
      ]
    }
  ]
};

  export const uiSchema = {
    __typename: 'OnboardingForm',
    _id: '6329b8da97ec9056cab37b38',
    welcomeText: 'Welcome to Nova Benefits',
    companyId: '6199c1af20b5df6924b4ed8e',
    sectionIds: [
      '6329b95997ec9056cab37b98',
      '6329b95997ec9056cab37b99',
      '6329b95997ec9056cab37b9a',
      '6329b95997ec9056cab37b9b',
      '6329b95997ec9056cab37b9c',
      '6329b95997ec9056cab37b9d',
      '6329b98c97ec9056cab37c03',
      '6329d477bddbfa9e9aff872f',
    ],
    createdBy: {
      __typename: 'Creator',
      companyName: 'nova',
      companyLogo: 'https://assets.web.numanshq.com/nova_logo_2e0eaa1f69.svg',
      companyNameForDisplay: 'Nova Benefits',
      companyWebsite: null,
    },
    sections: [
      {
        __typename: 'FormSection',
        _id: '6329b95997ec9056cab37b98',
        sectionName: 'basicsDetails',
        sectionLabel: 'Basics Details',
        sectionDescription: 'Basic Details section',
        sectionIcon: { __typename: 'SectionIcon', iconName: 'UserIcon' },
        fields: [
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b40',
            name: 'name',
            description: 'This refers to their legal name',
            type: 'STRING',
            label: 'Name',
            widget: 'TEXT',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED_AND_LOCKED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'SingleLine',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: "what's their name?",
            fieldOptions: null,
            stackFields: null,
          },
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b41',
            name: 'dateOfBirth',
            description: 'Helpful in wishing them on their birthday',
            type: 'STRING',
            label: 'Date of Birth',
            widget: 'DATE',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED_AND_LOCKED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'Date',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: "what's their date of birth?",
            fieldOptions: null,
            stackFields: null,
          },
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b42',
            name: 'gender',
            description: 'So that you get your pronouns right',
            type: 'STRING',
            label: 'Gender',
            widget: 'SELECT',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED_AND_LOCKED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'SingleSelect',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: null,
            fieldOptions: [
              {
                __typename: 'FieldOptions',
                optionId: 1,
                optionLabel: 'Male',
                optionValue: 'male',
              },
              {
                __typename: 'FieldOptions',
                optionId: 2,
                optionLabel: 'Female',
                optionValue: 'female',
              },
              {
                __typename: 'FieldOptions',
                optionId: 3,
                optionLabel: 'Others',
                optionValue: 'others',
              },
            ],
            stackFields: null,
          },
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b43',
            name: 'currentAddress',
            description:
              'So we know where to send the employee’s swag and laptop',
            type: 'STRING',
            label: 'Current Address',
            widget: 'LOCATION',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED_AND_LOCKED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'Location',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder:
              "We'll ship a box of goodies to this address in next 7-14 days.?",
            fieldOptions: null,
            stackFields: null,
          },
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b44',
            name: 'phoneNumber',
            description: 'What if the internet’s down',
            type: 'STRING',
            label: 'Phone Number',
            widget: 'PHONE',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'Phone',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: "What's their contact?",
            fieldOptions: null,
            stackFields: null,
          },
        ],
      },
      {
        __typename: 'FormSection',
        _id: '6329b95997ec9056cab37b99',
        sectionName: 'additionalDetails',
        sectionLabel: 'Additional Details',
        sectionDescription: 'Additional Details section',
        sectionIcon: { __typename: 'SectionIcon', iconName: 'UserList' },
        fields: [
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b46',
            name: 'tShirtSize',
            description: 'For when you send that crisp swag',
            type: 'STRING',
            label: 'T-shirt size',
            widget: 'SELECT',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED_AND_LOCKED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'SingleSelect',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: 'What size fits you?',
            fieldOptions: [
              {
                __typename: 'FieldOptions',
                optionId: 1,
                optionLabel: 'XS',
                optionValue: 'xs',
              },
              {
                __typename: 'FieldOptions',
                optionId: 2,
                optionLabel: 'S',
                optionValue: 's',
              },
              {
                __typename: 'FieldOptions',
                optionId: 3,
                optionLabel: 'M',
                optionValue: 'm',
              },
              {
                __typename: 'FieldOptions',
                optionId: 4,
                optionLabel: 'L',
                optionValue: 'l',
              },
              {
                __typename: 'FieldOptions',
                optionId: 5,
                optionLabel: 'XL',
                optionValue: 'xl',
              },
              {
                __typename: 'FieldOptions',
                optionId: 6,
                optionLabel: 'XXL',
                optionValue: 'xxl',
              },
              {
                __typename: 'FieldOptions',
                optionId: 7,
                optionLabel: 'XXXL',
                optionValue: 'xxxl',
              },
            ],
            stackFields: null,
          },
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b47',
            name: 'maritalDetails',
            description: 'For when you send that crisp swag',
            type: 'STRING',
            label: 'Marital Details',
            widget: 'STACK',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'Stack',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: null,
            fieldOptions: null,
            stackFields: [
              {
                __typename: 'StackFields',
                name: 'maritalStatus',
                type: 'STRING',
                widget: 'SELECT',
                label: 'MARITAL Status',
                fieldOptions: [
                  {
                    __typename: 'FieldOptions',
                    optionId: 1,
                    optionLabel: 'Married',
                    optionValue: 'married',
                  },
                  {
                    __typename: 'FieldOptions',
                    optionId: 2,
                    optionLabel: 'Single',
                    optionValue: 'single',
                  },
                ],
                fieldIcon: {
                  __typename: 'FieldIcon',
                  iconName: 'SingleSelect',
                  iconUrl:
                    'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
                },
              },
              {
                __typename: 'StackFields',
                name: 'anniversary',
                type: 'STRING',
                widget: 'DATE',
                label: 'Anniversary',
                fieldOptions: null,
                fieldIcon: {
                  __typename: 'FieldIcon',
                  iconName: 'Date',
                  iconUrl:
                    'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
                },
              },
            ],
          },
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b49',
            name: 'permanantAddress',
            description: 'It’s always safe to know the permanent home',
            type: 'STRING',
            label: 'Permanant Address',
            widget: 'LOCATION',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'Location',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: null,
            fieldOptions: null,
            stackFields: null,
          },
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b4a',
            name: 'bio',
            description: 'Learn more about them',
            type: 'STRING',
            label: 'Bio',
            widget: 'TEXTAREA',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'TextField',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: 'More about you',
            fieldOptions: null,
            stackFields: null,
          },
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b4b',
            name: 'interests',
            description: 'Know what to talk about other than work',
            type: 'STRING',
            label: 'Interests',
            widget: 'MULTI_SELECT',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED_AND_LOCKED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'MultiSelect',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: null,
            fieldOptions: [
              {
                __typename: 'FieldOptions',
                optionId: 1,
                optionLabel: 'Swimmming',
                optionValue: 'swimmming',
              },
              {
                __typename: 'FieldOptions',
                optionId: 2,
                optionLabel: 'Travelling',
                optionValue: 'travelling',
              },
              {
                __typename: 'FieldOptions',
                optionId: 3,
                optionLabel: 'Anime',
                optionValue: 'anime',
              },
            ],
            stackFields: null,
          },
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b4c',
            name: 'dietaryPreference',
            description: 'Know what everyone can munch on',
            type: 'STRING',
            label: 'Dietary Preference',
            widget: 'MULTI_SELECT',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED_AND_LOCKED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'MultiSelect',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: null,
            fieldOptions: [
              {
                __typename: 'FieldOptions',
                optionId: 1,
                optionLabel: 'Vegetarian',
                optionValue: 'vegetarian',
              },
              {
                __typename: 'FieldOptions',
                optionId: 2,
                optionLabel: 'Vegan',
                optionValue: 'vegan',
              },
              {
                __typename: 'FieldOptions',
                optionId: 3,
                optionLabel: 'Kosher',
                optionValue: 'kosher',
              },
            ],
            stackFields: null,
          },
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b4d',
            name: 'linkedIn',
            description: 'Look at their professional profile',
            type: 'STRING',
            label: 'LinkedIn',
            widget: 'LINK',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'Link',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: 'Linkedin url',
            fieldOptions: null,
            stackFields: null,
          },
        ],
      },
      {
        __typename: 'FormSection',
        _id: '6329b95997ec9056cab37b9a',
        sectionName: 'workDetails',
        sectionLabel: 'Work Details',
        sectionDescription: 'Work details section',
        sectionIcon: { __typename: 'SectionIcon', iconName: 'SuitcaseSimple' },
        fields: [
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b50',
            name: 'employeeId',
            description: 'Sometimes names aren’t unique enough',
            type: 'STRING',
            label: 'Employee Id',
            widget: 'TEXT',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED_AND_LOCKED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'SingleLine',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: 'Employee Id',
            fieldOptions: null,
            stackFields: null,
          },
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b51',
            name: 'office',
            description: 'Employees also need to know where their office is',
            type: 'STRING',
            label: 'Office',
            widget: 'LOCATION',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED_AND_LOCKED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'Location',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: null,
            fieldOptions: null,
            stackFields: null,
          },
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b52',
            name: 'team',
            description: 'Which A-team do they belong to',
            type: 'STRING',
            label: 'Team',
            widget: 'SELECT',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED_AND_LOCKED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'SingleSelect',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: null,
            fieldOptions: [
              {
                __typename: 'FieldOptions',
                optionId: 1,
                optionLabel: 'Engineering',
                optionValue: 'engineering',
              },
              {
                __typename: 'FieldOptions',
                optionId: 2,
                optionLabel: 'Marketing',
                optionValue: 'marketing',
              },
              {
                __typename: 'FieldOptions',
                optionId: 3,
                optionLabel: 'Sales',
                optionValue: 'sales',
              },
            ],
            stackFields: null,
          },
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b53',
            name: 'title',
            description: 'Helps find the right person to contact',
            type: 'STRING',
            label: 'Title',
            widget: 'TEXT',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED_AND_LOCKED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'SingleLine',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: "what's their title",
            fieldOptions: null,
            stackFields: null,
          },
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b54',
            name: 'employmentType',
            description: 'Lets you know the types of employees in your org',
            type: 'STRING',
            label: 'Employment Type',
            widget: 'SELECT',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED_AND_LOCKED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'SingleSelect',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: 'What will they be doing',
            fieldOptions: [
              {
                __typename: 'FieldOptions',
                optionId: 1,
                optionLabel: 'Full-time',
                optionValue: 'Full-time',
              },
              {
                __typename: 'FieldOptions',
                optionId: 2,
                optionLabel: 'Part-time',
                optionValue: 'Part-time',
              },
              {
                __typename: 'FieldOptions',
                optionId: 3,
                optionLabel: 'Internship',
                optionValue: 'Internship',
              },
              {
                __typename: 'FieldOptions',
                optionId: 4,
                optionLabel: 'Contract',
                optionValue: 'Contract',
              },
            ],
            stackFields: null,
          },
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b55',
            name: 'joiningDate',
            description: 'Helps celebrate their time in the organisation',
            type: 'STRING',
            label: 'Joining Date',
            widget: 'DATE',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED_AND_LOCKED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'Date',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: "When they'll be joining?",
            fieldOptions: null,
            stackFields: null,
          },
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b56',
            name: 'workEmail',
            description: 'To contact them in a professional manner',
            type: 'STRING',
            label: 'Work Email',
            widget: 'EMAIL',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED_AND_LOCKED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'Email',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: 'Their work email',
            fieldOptions: null,
            stackFields: null,
          },
        ],
      },
      {
        __typename: 'FormSection',
        _id: '6329b95997ec9056cab37b9b',
        sectionName: 'documents',
        sectionLabel: 'Documents',
        sectionDescription: 'Necessary documents for the employee',
        sectionIcon: { __typename: 'SectionIcon', iconName: 'Files' },
        fields: [
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b58',
            name: 'aadhar',
            description:
              '12 digit number issues by the Unique Identification Authority of India',
            type: 'STRING',
            label: 'Aadhar',
            widget: 'FILE',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED_AND_LOCKED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'Attachment',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: null,
            fieldOptions: null,
            stackFields: null,
          },
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b59',
            name: 'pan',
            description:
              'Alphanumeric identifier by the Income Tax department of India',
            type: 'STRING',
            label: 'PAN',
            widget: 'FILE',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'Attachment',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: null,
            fieldOptions: null,
            stackFields: null,
          },
        ],
      },
      {
        __typename: 'FormSection',
        _id: '6329b95997ec9056cab37b9c',
        sectionName: 'protectedInformation',
        sectionLabel: 'Protected Information',
        sectionDescription: 'Protected information of the employee',
        sectionIcon: { __typename: 'SectionIcon', iconName: 'ShieldCheck' },
        fields: [
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b5f',
            name: 'emergencyContact',
            description: 'In case any emergency arises',
            type: 'STRING',
            label: 'Emergency Contact',
            widget: 'STACK',
            required: true,
            isEditableType: true,
            fieldState: 'PUBLISHED_AND_LOCKED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'Stack',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: 'Emergency Contact',
            fieldOptions: null,
            stackFields: [
              {
                __typename: 'StackFields',
                name: 'name',
                type: 'STRING',
                widget: 'TEXT',
                label: 'Name',
                fieldOptions: null,
                fieldIcon: {
                  __typename: 'FieldIcon',
                  iconName: 'SingleLine',
                  iconUrl:
                    'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
                },
              },
              {
                __typename: 'StackFields',
                name: 'phone',
                type: 'STRING',
                widget: 'PHONE',
                label: 'Phone',
                fieldOptions: null,
                fieldIcon: {
                  __typename: 'FieldIcon',
                  iconName: 'Phone',
                  iconUrl:
                    'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
                },
              },
            ],
          },
        ],
      },
      {
        __typename: 'FormSection',
        _id: '6329b95997ec9056cab37b9d',
        sectionName: 'medicalInformation',
        sectionLabel: 'Medical Information',
        sectionDescription: 'Medical information of the employee',
        sectionIcon: { __typename: 'SectionIcon', iconName: 'Plus' },
        fields: [
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b65',
            name: 'medicalCondition',
            description: 'Prepares you in case of an emergency',
            type: 'STRING',
            label: 'Medical Condition',
            widget: 'MULTI_SELECT',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'MultiSelect',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: null,
            fieldOptions: [
              {
                __typename: 'FieldOptions',
                optionId: 1,
                optionLabel: 'Aneurysm',
                optionValue: 'aneurysm',
              },
              {
                __typename: 'FieldOptions',
                optionId: 2,
                optionLabel: 'Asthma',
                optionValue: 'asthma',
              },
              {
                __typename: 'FieldOptions',
                optionId: 3,
                optionLabel: 'Cancer',
                optionValue: 'cancer',
              },
            ],
            stackFields: null,
          },
          {
            __typename: 'BaseFormField',
            _id: '6329b95797ec9056cab37b64',
            name: 'allergies',
            description: 'Helps find the right person to contact',
            type: 'STRING',
            label: 'Allergies',
            widget: 'MULTI_SELECT',
            required: true,
            isEditableType: false,
            fieldState: 'PUBLISHED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'MultiSelect',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: null,
            fieldOptions: [
              {
                __typename: 'FieldOptions',
                optionId: 1,
                optionLabel: 'Anitbiotic',
                optionValue: 'anitbiotic',
              },
              {
                __typename: 'FieldOptions',
                optionId: 2,
                optionLabel: 'Food',
                optionValue: 'food',
              },
              {
                __typename: 'FieldOptions',
                optionId: 3,
                optionLabel: 'Medicine',
                optionValue: 'medicine',
              },
            ],
            stackFields: null,
          },
        ],
      },
      {
        __typename: 'FormSection',
        _id: '6329b98c97ec9056cab37c03',
        sectionName: 'footwear',
        sectionLabel: 'Footwear',
        sectionDescription: null,
        sectionIcon: { __typename: 'SectionIcon', iconName: 'Eye' },
        fields: [
          {
            __typename: 'BaseFormField',
            _id: '632ae93c2f79420d762ed2eb',
            name: 'footwearBrand',
            description: 'Footwear brand they wear',
            type: 'STRING',
            label: 'Footwear Brand',
            widget: 'SELECT',
            required: true,
            isEditableType: true,
            fieldState: 'PUBLISHED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'SingleSelect',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: 'Footwear brand they wear',
            fieldOptions: [
              {
                __typename: 'FieldOptions',
                optionId: 0.22076209221815835,
                optionLabel: 'Nike',
                optionValue: 'Nike',
              },
              {
                __typename: 'FieldOptions',
                optionId: 0.5343548912044742,
                optionLabel: 'Addidas',
                optionValue: 'Addidas',
              },
              {
                __typename: 'FieldOptions',
                optionId: 0.5281217356569121,
                optionLabel: 'Puma',
                optionValue: 'Puma',
              },
              {
                __typename: 'FieldOptions',
                optionId: 0.10120464398833162,
                optionLabel: '',
                optionValue: '',
              },
            ],
            stackFields: null,
          },
        ],
      },
      {
        __typename: 'FormSection',
        _id: '6329d477bddbfa9e9aff872f',
        sectionName: 'test',
        sectionLabel: 'test',
        sectionDescription: null,
        sectionIcon: { __typename: 'SectionIcon', iconName: 'Tag' },
        fields: [
          {
            __typename: 'BaseFormField',
            _id: '6329d477bddbfa9e9aff872d',
            name: 'test',
            description: 'Updated Role Field Updated',
            type: 'STRING',
            label: 'User Role',
            widget: 'TEXT',
            required: true,
            isEditableType: true,
            fieldState: 'PUBLISHED',
            visibility: 'EMPLOYEE_AND_ADMIN',
            editability: 'EMPLOYEE_AND_ADMIN',
            fieldIcon: {
              __typename: 'FieldIcon',
              iconName: 'SingleLine',
              iconUrl:
                'https://assets.web.numanshq.com/schemaBuilderFieldIcons/singleLine.svg',
            },
            placeholder: 'Updated Role Field Updated',
            fieldOptions: [],
            stackFields: null,
          },
        ],
      },
    ],
  };
