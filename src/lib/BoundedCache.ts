import Cache from './Cache';

const CacheQueueNotAvailable = new Error('Cache Error: Queue not available.');

class BoundedCache extends Cache {
    /** @property {Array} - Maintains the list of cache keys in order in which they were added to the cache */
    cacheQueue: string[] | null;

    /** @property {number} - The maximum number of entries in the cache */
    maxEntries: number;

    /**
     * [constructor]
     *
     * @param {number} [maxEntries] - Override the maximum number of cache entries
     */
    constructor(maxEntries: number) {
        super();

        this.maxEntries = maxEntries || 500;
        this.cache = {};
        this.cacheQueue = [];
    }

    /**
     * Destroys the bounded cache
     *
     * @return {void}
     */
    destroy(): void {
        this.cache = null;
        this.cacheQueue = null;
    }

    /**
     * Caches a simple object in memory. If the number of cache entries
     * then exceeds the maxEntries value, then the earliest key in cacheQueue
     * will be removed from the cache.
     *
     * @param {string} key - The cache key
     * @param {*} value - The cache value
     * @return {void}
     */
    set(key: string, value: any): void {
        if (!this.cacheQueue) {
            throw CacheQueueNotAvailable;
        }

        // If this key is not already in the cache, then add it
        // to the cacheQueue. This avoids adding the same key to
        // the cacheQueue multiple times if the cache entry gets updated
        if (!this.inCache(key)) {
            this.cacheQueue.push(key);
        }

        super.set(key, value);

        // If the cacheQueue exceeds the maxEntries then remove the first
        // key from the front of the cacheQueue and unset that entry
        // from the cache
        if (this.cacheQueue.length > this.maxEntries) {
            const deleteKey = this.cacheQueue.shift();
            if (deleteKey) {
                this.unset(deleteKey);
            }
        }
    }
}

export default BoundedCache;
