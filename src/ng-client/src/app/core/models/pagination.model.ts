export interface PagedQuery {
    offset: number;
    limit: number;
    search?: string;
}

export class PagedResult<T> {
    offset = 0;
    limit = 0;
    totalCount = 0;
    hasMore = false;
    items: Array<T> = [];
}