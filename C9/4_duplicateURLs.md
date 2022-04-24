1. Clarify and Assume
- URL extensions, www.hyewon-joo.com !== www.hyewon-joo.com/resume
- Even if URL is different, this can have the same document/content
- Detect duplicated URLs

2. Basic Setup
- Hashtable and iterate through URLs
- For each URL, mark visited

3. Identify and Address Problems (at scale)
- Running through 10 billion URLs in a single thread will take too long
- Takes up too much space/memory for a server
- Distributed hashtable, into multiple server nodes using distributed system, parallel server nodes

4. Points of Failure
- The distributed approach is good, covers some failure, but comes at a cost of excess capacity

5. Space sizing
1 URL = character is 1 Byte, integer is 4 Bytes, URL is 30 characters => 400 Bytes for 10 billions URLS => 4 TB
4 000 000 000 000 B = 4 000 000 000 KB = 4 000 000 MB = 4 000 GB = 4 TB

-----------------

[Suggested Answer]

1. 1 Hardware drive should be able to store entire list of 10 billion URLs, but it'll be a bit large to open, for speed, list of URLs can be split up into smaller files and multiple server nodes, even in RAM for faster access speed
2. 1 Machine is simple, but slow
3. 2+ Machines is fast and can run parallel, but complex and need backup