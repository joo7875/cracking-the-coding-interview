* Core Functionality
- Back accounts
- Analyze spending habits
- Recommendations

1. Clarify and Assume
1) Clarify
- Frontend
- Backend
- Connect to back accounts (via API)
- only info, not action (GET)
- Detailed transaction data
- Security/Authentication/Privacy
- Analyze spending habits
- Engine to analyze habits
- Make recommendation
- Rules based engine

2) Assume
- Standardized/categorized set of transaction data from difference back
- Don't have to worry about back regulation (differenct countries)
- Tax regimes by country and occupation probably matter
- Personal data, Aggregate data is also of use

[Frontend]
- Connect to bank account
- Once connected, show analyics
- Ask for manual edits/addition/deletion by user (categorize spending)
- budget, recommendation

[Backend]
- Service architecture
- Stores user profile
- Analytic service
- Bank API
- Receives user's transaction

[Web]
- sign up or login page
    - sign up: create user account in database
    - login: bring up user profile view
- enter bank credencials
- call Bank API for bank transaction
- place transaction into database
- input data into analytic service to generate profile
- place analyzed profile into database
- update user web page with result and recommendation

[Mobile]
- less granular data and graphical explanations of recommendation
- whereas web requires space for more extensive visualization