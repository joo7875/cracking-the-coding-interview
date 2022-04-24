1. Clarify and Assume
- Problem: processSearch is expensive
- Use case: Recent queries gets results from cache, and skip processSearch
- Update cache when data changes
- Assumption: data changes when search engine re-build index

2. Basic Setup
- LRU(Least Recently Used) cache service
    - Assuming multiple client server machines
    - Service coordinates with machines to update cache
    - When first set up, loaded up by query term and result after running processSearch
    - Least recently query is discarded
    - Provide API to send a copy of query to index engine when requested
- Index engine
    - when indexing, requests list of popular queries from cache engine, update result, send back to cache engine

3. Identify and Address Problems
- Many queries at the same time by multiple machines
- Queue for cache service
- Need to pink LRU cache service for each search
- Address latency by having CDNs
- Need to update LRU cache for each re-indexing
- Trade-off for not having run processSearch

4. Points of Failure
- Index engine
- Search engine

-----------------

[Suggested Answer]

1. Assumptions
- The number of queries we wish to cache is large(million)
- Calling between machines is quick
- processSearch function is expensive
- The result for a given query is an ordered list of URLs
- Most popular queries are always popular

2. System Requirements
- Efficient lookups given a key
- Discard old data cannot just wait for the cache to expire

# Step 1
LRU cache => Linked list + Hashtable

# Step 2
Expand to many machines
- Each machine has its own cache
- Each machine has a copy of the cache
- Each machine stores a segment of the cache

# Step 3
Updating results when contents change

# Step 4
Further enhancement