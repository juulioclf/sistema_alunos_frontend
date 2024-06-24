import { AuthProvider } from '@/contexts/AuthContext';
import 'tailwindcss/tailwind.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: any) {
  const getLayout = (Component as any).getLayout || ((page: React.ReactNode) => page);

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
