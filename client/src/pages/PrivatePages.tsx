import React from "react";
import { Routes, Route } from "react-router-dom";

const MessengerRoute = React.lazy(() => import("../routes/MessengerRoute"));
const NotFoundPage = React.lazy(() => import("../pages/NotFoundPage"));

type Props = {};

const PrivatePages = (props: Props) => {
  return (
    <>
      <Routes>
        <Route
          path="/messengers/*"
          element={
            <React.Suspense fallback={<h2>...Loading</h2>}>
              <MessengerRoute />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<h2>...Loading</h2>}>
              <NotFoundPage />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default PrivatePages;
