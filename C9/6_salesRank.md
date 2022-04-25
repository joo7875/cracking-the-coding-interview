1. Clarify and Assume
- Each product has a sales figure(수치) and categories like 'sports' and 'safety'
- As an E-commerce company, there is a need of scale, real-time update, updating without delay(No need to be immediate, can have hour or day long)
- Assume that supply chain is taken care of, and the focus here is on categorical ranking
    - Frontend, define what sales mean(total historical past month, past week?)
    - multiple categories or sub-categories
    - precision is important for popular items > less important for less popular items
    - No need to be precise about time range
- At scale, need to rank efficiently

2. Basic Setup
- Database of products with sales figure
- Database of sales index by category
- Build sales ranking
- Sort overall and assign rank
- For each category, sort and assign rank
- Assume using merge sort O(nlogn)
- Build ranking index of each item
- Security

3. Problems
- Inefficient to sort by categories everytime
- Analytics are expensive
    - Tables to store sales require computation
    - Need to find effective way to store sales
- Database write is very frequent
    - should batch up sales records and update periodically at one go
    - likely more frequent for popular items
    - Ensure no bias in data, ensure sales rank doesn't run until all stored data is processed, or by dividing up in-memory cache by sometime period
- Join is expensive
    - For each category, pull data from items and then sort
- Database query is expensive
    - use log files and MapReduce
    - Write sales to each category, overall ranking, just pair-wise merge if we need to
    - Advantage of scale
- Scale
    - Too many items to rank
    - Weekly sales

-----------------

[Suggested Answer]

1. Where do you think you'd hit the next bottlenecks? What would you do about that?
- Black Friday sales, Most popular items
- MapReduce still scalable

2. What if there were subcategories as well?
- Treat subcategories as the 'overall' of category

3. What if data needed to be more accurate? What if it needed to be accurate within 30 minutes for all items?
- Need to refresh log files every 30 minutes, maybe just for popular items
- Expensive (should not run 24/7, only during popular times)