import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Faqs from './pages/Faqs';
import Layout from './components/Layout';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: '/projects',
      element: (
        <Layout>
          {' '}
          <Projects />
        </Layout>
      ),
    },
    {
      path: '/faqs',
      element: (
        <Layout>
          <Faqs />
        </Layout>
      ),
    },
  ],
  {
    basename: '/',
  }
);

export default router;
