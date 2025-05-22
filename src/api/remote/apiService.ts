import axios from "axios";

import { HOST_LOCAL } from "@env";

const apiDelivery = axios.create({
    baseURL: HOST_LOCAL, // Backend ip
    headers: {
        'Content-type': 'application/json'
    }
});

export { apiDelivery }

