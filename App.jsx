import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

import Protectedroute from "./components/protected.routes";
import { ThemeProvider } from "./components/theme-provider";
import AppLayout from "./layouts/app.layout";
import JobPage from "./pages/job";
import JobListing from "./pages/job-listing";
import LandingPage from "./pages/landing";
import LearningPortal from "./pages/learning - portal";
import MyJobs from "./pages/myjobs";
import Onboarding from "./pages/onboarding";
import PostJob from "./pages/post-job";
import SavedJobs from "./pages/saved-jobs";
const router=createBrowserRouter([
  {
  element:<AppLayout/>,
  children:[
  
  {
    path:'/',
    element:<LandingPage/>,
  },
  

  {
    path:'/onboarding',
    element:(
    <Protectedroute> <Onboarding/></Protectedroute>
    ),
  },
  {
    path: "/jobs",
    element:(
    <Protectedroute>
    <JobListing/>
    </Protectedroute>
    ),
  },
  {
    path:'/post-job',
    element:(
    <Protectedroute>
    <PostJob/>
    </Protectedroute>
    ),
  },
  {
    path:'/my-jobs',
    element:(
    <Protectedroute>
    <MyJobs/>
    </Protectedroute>
    ),
    
  },
  {
    path:'/saved-jobs',
    element:(
    <Protectedroute>
    <SavedJobs/>
    </Protectedroute>
    ),
  },
  {
    path:'/job/:id',
    element:(
  <Protectedroute>
      <JobPage/>
    </Protectedroute>
    ),
  },
  {
    path:'/learningportal',
    element:(
  <Protectedroute>
      <LearningPortal/>
    </Protectedroute>
    ),
  },

    ],
  },
]);
function App() {
  
return (
<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
<RouterProvider router={router}/>;
</ThemeProvider>
);

}

export default App;
