import styles from './app.module.css';
import NxWelcome from './nx-welcome';

import { Button as TeamRedButton } from '@mono-repo-nx-example/team-red';
import { Button as TeamGreenButton } from '@mono-repo-nx-example/team-green';

export function App() {
  return (
    <>
      <h1>
        <TeamRedButton />
        <TeamGreenButton />
      </h1>
      <NxWelcome title="main" />
      <div />
    </>
  );
}

export default App;
