## Github Issues App

### Installation

1. Unzip Folder and run `yarn` from project root.
2. Change `token` in `src/config.json` to your github token.
3. Run `yarn start` and open browser to `localhost:3000`

### Comments

There a handful of places to improve in this code, most notably the algorithm to sort the issues. It currently allows to rank 1 - amount of issues and uses a selector to sort by priority. Maybe could have been more useful and easier to just swap issues in the array.

The design of the app could also be better and there are places to create more reusable components such as creating a more generic `InfoRow` component that both repos and issues could use.
