import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/login';
import { DashboardLayout } from './layouts/DashboardLayout';
import DashboardPage from './pages/dashboard/DashboardPage';
import { useAuthStore } from './store/auth';

const queryClient = new QueryClient();

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const token = useAuthStore((state) => state.token);
  return token ? <>{children}</> : <Navigate to="/" />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<DashboardPage />} />
          </Route>
        </Routes>
      </Router>
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}

export default App;