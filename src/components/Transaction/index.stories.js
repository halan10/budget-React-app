 import  Transaction  from '.';
 export default {
   title: 'Example/Transaction',
   component: Transaction,
   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
   tags: ['autodocs'],
   parameters: {
     // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
     layout: 'fullscreen',
   },
 };
 const Template = (args) => <Transaction {...args}/>;
 export const Income = Template.bind({});
 Income.args = {

     transactoin: {
         label: 'some Income',
         value: 23
     },
 };

