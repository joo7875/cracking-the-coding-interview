1. Clarify and Assume

- Clarification:
1) API to frontend clients via HTTP requests
2) public information, no need for user_id
3) API resides with the stock price databases (no need to pull data from another source)
4) data will be -stock, -date, -open, -close, -high, -low
5) stores historical data
6) returns JSON
7) clients  in difference geographical locations

- Assumption:
1) no real-time need, used for research and records

2. Basic setup - diagram

3. Identify and Address Problems
- uneven request traffic
- certain times of the day, for certain stock tickers
- estimation(견적):
    - updating users: half of 1000 client applications check once per day, in order to make updates
    - exploring users: 1/4 of 1000 client applications use multiple calls on various stocks
- many calls at one go may overload server
- place HTTP calls into a queue
- horizontally scale servers with a load balancer **
- latency of server
- speed will vary in different global locations
- transmitting speed
- HTTP reponses has no size limit
- too much data
- horizontally scaled and indexed(by alphabetical order)
- have database server to direct database calls and merge database calls into one request to be returned

4. Points of Failure
- database
- have child database with copy of master database on standby
- server
- buffer capacity for peak periods

5. Enhancements to system
- analytics server that logs server and database activity
- outputs report to identify points of improvement
- caching of popupar stock tickers in servers
- when requested, don't have to make database call to retrieve data

-----------------

[Suggested Answer]

1. Considerations
- Client ease of use : easy for client, developers to implement
- Ease for ourselves : make work as efficient as possible, cost of implementing and cost of mantenance
- Flexibility for future demands : can be flexible if demands change
- Scalability and efficiency : mindful of the efficiency, so not overly burden service

# Proposal 1

Keep data in simply text files and let clients download data through some sort of FTP server.
PROS: Easy to maintain in some sense, as files can be easily viewed and backed up.
CONS: Require complex parsing to do any sort of query. If additional data added to text file, might break client's parsing mechanism

# Proposal 2

Use standard SQL database, and let user plug directly into it.
PROS:
    - Easy for clients to do query processing over the data, in case there are additional features we need to support
    - Rolling back, backing up data, and security could be provided using standard database features
    - Easy for clients to integrate into existing applications
CONS:
    - Heavier weight than we really need
    - Need to implement additional layer to maintain and view the data, increases implementation cost
    - Security, while database is generally secure, shouldn't be allowing user to make any SQL request they wish to make
        - Might extract excessive amounts of data
        - Difficult to put in place restrictions
        - May make inefficient queries => server cost

# Proposal 3

XML structure data as a tree
PROS:
    - Clear and easy to distribute, can be read by both machines and humans
    - Most languages have packages/libraries to perform XML parsing
    - Easy to add data to SML, just add addional nodes
    - Can use existing tools to back up data
CONS:
    - Send clients all the information, even if they only want part of it
    - Requires parsing the entire file

SOAP: messaging protocol that allows program that run on disparate OS(such as Windows and Linus) to communicate using HTTP and its XML

Regardless of solution for data storage, we can provide a web service(SOAP) for client data access. Adds a layer to our work, but it can provide additional security, and it may even make it easier for clients to integrate the system.

However, clients could be limited to grabbing the data only how we expect them to. By contrast, SQL implementations could allow users to make complex queries they wanted (e.g. get hightes prices, counts of stocks with a certain % growth)