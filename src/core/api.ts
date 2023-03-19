import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from 'axios';
import { Store } from '@/src/model/store';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface RequestProps {
  method: Method;
  pathVariable?: unknown;
}

const client = axios.create({
  baseURL: BASE_URL,
});

const reqURL = (param?: unknown) => {
  return param ? `${BASE_URL}/${param}` : BASE_URL;
};

async function request<T>({ method, pathVariable }: RequestProps): Promise<T> {
  try {
    const axiosConfig: AxiosRequestConfig = {
      url: reqURL(pathVariable),
      method: method as Method,
    };

    const response = await client.request<T>(axiosConfig);
    return response.data;
  } catch (axiosError) {
    console.log(axiosError);
    throw axiosError;
  }
}

const api = {
  getStoreList() {
    return request<Store[]>({ method: 'get' });
  },
  getStore(id: number) {
    return request<Store>({ method: 'get', pathVariable : id });
  },
};

export default api;
