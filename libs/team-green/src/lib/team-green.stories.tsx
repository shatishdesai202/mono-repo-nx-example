import { Story, Meta } from '@storybook/react';
import { TeamGreen, TeamGreenProps } from './team-green';

export default {
  component: TeamGreen,
  title: 'TeamGreen',
} as Meta;

const Template: Story<TeamGreenProps> = (args) => <TeamGreen {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
