import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import ar_EG from 'antd/es/locale/ar_EG';
import router from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ConfigProvider direction="rtl" locale={ar_EG}>
    <RouterProvider router={router} />
  </ConfigProvider>,
);
