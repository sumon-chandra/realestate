"use client";

import { AppProgressBar } from "next-nprogress-bar";

const Progressbar = () => {
	return <AppProgressBar height="2px" color="#242C3D" options={{ showSpinner: false }} shallowRouting />;
};

export default Progressbar;
