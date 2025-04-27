import Fetcher from './core/Fetcher';

const { NEXT_PUBLIC_SERVICE_URL, NEXT_PUBLIC_SERVICE_PORT, NEXT_PUBLIC_SERVICE_PREFIX } = process.env;

const baseURL = NEXT_PUBLIC_SERVICE_PORT
  ? `${NEXT_PUBLIC_SERVICE_URL}:${NEXT_PUBLIC_SERVICE_PORT}${NEXT_PUBLIC_SERVICE_PREFIX}`
  : `${NEXT_PUBLIC_SERVICE_URL}${NEXT_PUBLIC_SERVICE_PREFIX}`;

const fetcher = new Fetcher({
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  },
  baseURL,
  next: {
    revalidate: 10,
  }
})

export default fetcher;