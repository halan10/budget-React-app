 import  Counter  from '.';
 export default {
   title: 'Example/Counter',
   component: Counter,
   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
   tags: ['autodocs'],
   parameters: {
     // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
     layout: 'fullscreen',
   },
 };
 const Template = (args) => <Counter {...args}/>;
 export const Income = Template.bind({});
 Income.args = {
 
 };

