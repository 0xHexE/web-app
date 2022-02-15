import { Block } from 'baseui/block';
import { HomePageToolbar } from './Container/HomePageToolbar';
import WorkflowList from '../../features/WorkflowAdmin/Components/WorkflowList';

export default function HomePage() {
  return (
    <Block maxWidth="1200px" margin="0 auto">
      <HomePageToolbar />

      <WorkflowList />
    </Block>
  );
}
