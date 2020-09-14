import axios from "axios";

const instance = axios.create({
	baseURL: "https://morning-retreat-13727.herokuapp.com/",
	// "http://localhost:5001/clone-a8a3b/us-central1/api", //this is where we need to have the API URL or cloud fucntion URL
});

export default instance;
