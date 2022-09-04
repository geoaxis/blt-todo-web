import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../src/aws-exports';
import ToDoCollection from '../src/ui-components/ToDoCollection'
Amplify.configure(awsExports);


function MyApp({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <ToDoCollection>
        
      </ToDoCollection>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(MyApp);
