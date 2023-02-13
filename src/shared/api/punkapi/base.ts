import axios from "axios";

import { PUNK_API_URL } from "@/shared/config";

export const apiInstance = axios.create({
  baseURL: PUNK_API_URL,
});
