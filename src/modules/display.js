import fetchData from "./fetctData";
import { showcase } from "./variables";

const display = async () => {
  // Execution
  await fetchData();
};

export default display;