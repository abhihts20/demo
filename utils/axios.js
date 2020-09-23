import axios from "axios";
import store from '../store'
import * as actions from "../actions/index";
import SweetAlert from 'react-bootstrap-sweetalert';


const axiosInstance = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=wework&key=AIzaSyB7fVn0yK-0GSBwfYOhgth6KAiW-dOLnBQ&sessiontoken=1234567890&components=country:IN",
});

axiosInstance.interceptors.request.use((req) => {
  store.dispatch(actions.showLoader());
  console.log("Request Received \n\n :" + JSON.stringify(req));
  return req;
});

axiosInstance.interceptors.response.use(async (res) => {
  setTimeout(() => {
    store.dispatch(actions.hideLoader());
  }, 5000);
  console.log("Response Received");
  return res;
});

export default axiosInstance;
