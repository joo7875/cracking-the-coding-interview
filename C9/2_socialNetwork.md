1. Clarifying questions
- Data structures
- Functionality, each node will contain profile content
- Data to display profile picture, name, education, friends, feed

2. Basic setup
- profile
- Object with properties, containing data
- Peronsal info (education, work, interests, friend connection)
- Undirected graph by user_id (partition features by profile info and connections)

- Algorithm:
    - Find A and B's user_id
    - A and B from both sides, expanding out by degree
    - Removing duplicates (BFS, to minimise the number of degrees searched)
    - bidirectional BFS

3. Identify and Address Problems (at scale)
- exponential, O(n^k) where n is the number of connections, and k is degree
- No real way to reduce the complexity
- Practically, can cache previously searched friends to remove re-processing
- Too many users
- Separate graph search engine from profile info database/server
- In graph search engine, organize graphs in sorted order(e.g. 1 server stores 2 million nodes in alphabetical order, and engine can call the database storing nodes when it needs)
- It would be troublesome to re-index the databases if more users starting with 'A' appy
- Could index by user_id numerical order (with half a billion users that's 10-digit number) => Shard database in numerical order **

4. Points of Failure
- Traffic spike
- caching
- load balancer and horizontal scaling
- servers => buffer capacity
- databases => child database

-----------------

[Suggested Answer]

Undirectional BFS : O(k^n), k is number of edges, n is number of levels
Bidirectional BFS : O(k^(n / 2))

e.g. a -> b -> c -> d -> e, each node has 100 edges
Undirectional BFS will take 100 ^ 4
Bidirectional BFS will take 2 * 100 ^ 2
=> 100 ^ 2 / 2 difference

# Optimization 1

Batch jumps

# Optimization 2

Smart division - by clustering, country, city, college, year

[Follow-up]
1. In the real world, servers fail. How does this affect you?
2. How could you take advantage of caching?
3. Do you search until the end of the graph (infinite)? How do you decide when to give up?
4. In real life, some people have more friends of friends than others, and are therefore more likely ro make a path between you and someone else. How could you use this data to pick where to start traversing?
