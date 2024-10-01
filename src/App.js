import { Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound"
import Explore from "./pages/Explore";
import About from "./pages/About";
import PlanPage from "./pages/PlanPage";
import ExploreDetails from "./pages/ExploreDetails";
import Review from "./pages/admin/Review";
import Layout from "./component/Layout";
import AdminLayout from "./component/AdminLayout"
import Dashboard from "./pages/admin/Dashboard";
import AdminPlanDetails from "./pages/admin/AdminPlanDetails";
import Income from "./pages/admin/Income";
import Plans from "./pages/admin/Plans";
import React from "react";


function App() {
  return (
<Routes>
  <Route element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="*" element={<PageNotFound/>}/>
    <Route path="planpage" element={<PlanPage/>}/>
    <Route path="explore" element={<Explore/>}/>
    <Route path="explore/:id" element={<ExploreDetails/>}/>


    <Route>
      <Route path="admin" element={<AdminLayout/>}/>
      <Route index element={<Dashboard/>}/>
      <Route path="income" element={<Income/>}/>
      <Route path="review" element={<Review/>}/>
      <Route path="plans" element={<Plans/>}/>
      <Route path="plans/:id" element={<AdminPlanDetails/>}/>
    </Route>
  </Route>
</Routes>

  );
}

export default App;
