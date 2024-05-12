export interface DashboardInterface {
  totalTransactions: number;
  business_category: {
    simple: number;
    complex: number;
    na: number;
  };
  applicationStatus: {
    incomplete: number;
    submitted: number;
    aml: number;
  };
}
