import React, { Suspense } from "react";
// import ReactLazy from "./LoaderScreen";
import { BounceLoader } from "react-spinners";
const LoaderScreen = React.lazy(() => import("./LoaderScreen"));
const CodeSpliting = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoaderScreen />
    </Suspense>
  );
};

export default CodeSpliting;
