import {  ContactPage} from './ContactPage';
 import { ThankYouPage } from './ThankYouPage';
import { ContactPageUncontrolled } from './ContactPageUncontrolled';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
 } from 'react-router-dom';
import { ContactPageRouter, contactPageRouterAction } from './ContactPageRouter';
import { ContactPageNativeValidation } from './ContactPageNativevalidation';
import { ContactPageReactHookForm } from './ContactPageReactHookForm';

 const router = createBrowserRouter([
  {
  path: '/',
  element: <Navigate to="contact" />,
  },
  {
  path: '/contact',
  element: <>
      <ContactPage/>
      <ContactPageUncontrolled/>
      <ContactPageRouter />
      <ContactPageNativeValidation/>
      <ContactPageReactHookForm/>
  </>,
  action: contactPageRouterAction, //for Router
  },
  {
  path: '/thank-you/:name',
  element: <ThankYouPage />,
  },
 ]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
