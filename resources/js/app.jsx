import '../css/app.css';
import './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
 resolve: async (name) => {
  const pages = import.meta.glob('./Pages/**/*.jsx');
  const pageModule = await pages[`./Pages/${name}.jsx`]();
  const comp = pageModule.default;

  // Pages you want to exclude from layouts
  const noLayoutPages = ['Auth/Login', 'Auth/Register'];

  if (noLayoutPages.includes(name)) {
    // No layout assigned, render page as-is
    comp.layout = page => page;
  } else if (name.startsWith('Admin/')) {
    const layoutModule = await import('./Layouts/AdminLayout.jsx');
    const MainAdminLayout = layoutModule.default;

    comp.layout = page => (
      <MainAdminLayout pageName={name.split('/').pop()}>
        {page}
      </MainAdminLayout>
    );
  } else {
    const layoutModule = await import('./Layouts/LandingLayout.jsx');
    const MainLayout = layoutModule.default;

    comp.layout = comp.layout || (page => <MainLayout>{page}</MainLayout>);
  }

  return comp;
},

 setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
  progress: {
    color: '#cf280bff',
  },
});
