import { AppProps } from 'next/dist/shared/lib/router/router';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../errors/ErrorFallback';
import '../styles/globals.css';
import { getLoggedUserId } from '../utils/getLoggedUserId';

// Default way to get a logged user
export const loggedUserId = getLoggedUserId()

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Component {...pageProps} />
    </ErrorBoundary>
  )
};

export default MyApp;
