export const inquiry = {
  name: 'inquiry',
  title: 'Inquiry',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'budget',
      title: 'Budget',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      readOnly: true,
    },
    {
      name: 'receivedAt',
      title: 'Received At',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    },
  ],
}
