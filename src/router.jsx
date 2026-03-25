import { createBrowserRouter } from 'react-router';

import Root from './modules/routes/root/Root';

import ErrorPage from './modules/routes/error/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <h1>Loading (WIP)</h1>
    },
]);

export default router;
