import { useLocation } from "react-router-dom";

export default function useQuery() {
  const saerchParams = new URLSearchParams(useLocation().search);
  return saerchParams;
}
