// modules/products/domain/repositories/Http.ts

import { Some } from "../../application";

export interface Http {
    get: <T>(path: string, params?: Record<string, Some>, config?: Some) => Promise<T | Some>;
    post: <T>(path: string, params?: Record<string, Some>, config?: Some) => Promise<T | Some>;
    put: <T>(path: string, params?: Record<string, Some>, config?: Some) => Promise<T | Some>;
    delete: <T>(path: string, params?: Some, config?: Some) => Promise<T | Some>;
}
