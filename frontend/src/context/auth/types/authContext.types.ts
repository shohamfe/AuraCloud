import type { AuthCustomer } from "@/services/types/auth.types";

export interface AuthContextValue {
  customer: AuthCustomer | null;
  isLoading: boolean;
  setAuth: (token: string, customer: AuthCustomer) => void;
  updateCustomer: (customer: AuthCustomer) => void;
  logout: () => void;
}
