import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../src/aws-exports';
import ToDoCollection from '../src/ui-components/ToDoCollection'
Amplify.configure(awsExports);

import { AwsRum } from 'aws-rum-web';

try {
  const config = {
    sessionSampleRate: 1,
    guestRoleArn: "arn:aws:iam::518912499641:role/RUM-Monitor-eu-west-1-518912499641-2985360232661-Unauth",
    identityPoolId: "eu-west-1:1439d33e-4d2b-4490-a680-9c10b73da8be",
    endpoint: "https://dataplane.rum.eu-west-1.amazonaws.com",
    telemetries: [
      "performance",
      "errors",
      [ 'http', { stackTraceLength: 500, addXRayTraceIdHeader: true } ]
    ],
    allowCookies: true,
    enableXRay: true
  };

  const APPLICATION_ID = '99de7114-0b0a-42d9-8624-e7db077f738d';
  const APPLICATION_VERSION = '1.0.0';
  const APPLICATION_REGION = 'eu-west-1';

  const awsRum = new AwsRum(
    APPLICATION_ID,
    APPLICATION_VERSION,
    APPLICATION_REGION,
    config
  );
} catch (error) {
  // Ignore errors thrown during CloudWatch RUM web client initialization
}

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
