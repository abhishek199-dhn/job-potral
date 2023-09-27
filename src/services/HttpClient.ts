import axios from "axios";
import Constants from "../utils/constants";

export default axios.create({
	baseURL: Constants.baseAPIURL,
	headers: {
		"Content-type": "application/json",
	},
});
