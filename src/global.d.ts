declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

declare namespace NodeJS {
  interface ProcessEnv {
    VITE_AWS_PROJECT_REGION: string;
    VITE_AWS_COGNITO_IDENTITY_POOL_ID: string;
    VITE_AWS_COGNITO_REGION: string;
    VITE_AWS_USER_POOLS_ID: string;
    VITE_AWS_USER_POOLS_WEB_CLIENT_ID: string;
  }
}
