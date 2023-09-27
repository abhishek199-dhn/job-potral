import React from "react";
import JobListing from "./pages/jobs/JobListing";

function App(): React.ReactElement {
	return (
		<div className="h-full w-screen">
			<JobListing />
		</div>
	);
}

export default App;
