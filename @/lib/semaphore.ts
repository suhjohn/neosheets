import { Mutex, Semaphore } from 'async-mutex';

// Map of semaphores. Key is path
export const SEMAPHORE_MAP = new Map<string, Semaphore>();
export const SEMAPHORE_MUTEX = new Mutex();