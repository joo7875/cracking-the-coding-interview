1. Clarifiy and Assume
- Web crawler built using JavaScript
- Traverse through links (a tag)
- Purpose of crawling the web is to build a search index/look for data

- Use case (to build a search index at scale)
    - Indexing engine that crawls the web
    - word => list of URLs in order

2. Basic Setup
- Index database: unique key is search term, list of URLs is values
- Deliverable: keep track of visited site at scale (hashtable)
- Service that does indexing(BFS):
    - In server, maintain hashtable for memoization
    - For each URL travered, if URL presented in hashtable, then skip
    - Store URL as key and 'true' as value (replace '.' with '%dot%' in URL when storing)

3. Identify and Address Problems
- Scale: using hashtable is too big to hold all visited sites
    - build a separate service to store cut-up version of the hashtable
    - store URL key in sharded database
- Organizing the cut-up database by alphabetical order
    - easy to understand but hard to adjust
    - hash and possibly store URLs in linked list(bad idea)

=> Use distributed hashtable to scale up and prevent failure nodes

4. Points of Failure
- database -> child dupliate
- server -> standby server

-----------------

[Suggested Answer]

We have a database that stores a list of items we need to crawl. 
On each itereation, we select the highest priority page to crawl.

1. Open up the page and create a signature of the page based on specific subsections of the page and its URL
2. Query the database to see whether this signature has been crawled recently
3. If the signature has been recently crawled, insert this page back into the database at a low priority
4. If not, crawl the page and insert its links into the database