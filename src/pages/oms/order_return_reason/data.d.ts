export interface ReturnReasonListItem {
  id: number;
}

export interface ReturnReasonListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListData {
  list: ReturnReasonListItem[];
  pagination: Partial<ReturnReasonListPagination>;
}

export interface ReturnReasonListParams {
  status?: number;
  pageSize?: number;
  current?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };
}
