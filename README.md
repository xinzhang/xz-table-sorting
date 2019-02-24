# ReactJS Table Sorting - Solution #

## Usage
Run `npm install && npm start` will:
- Compile the code into dev version
- Start the dev web server

Runn `npm run test` to test
- sort algorithem
- react components
               
## Notes ## 
-	In my mac and chrome, Ctrl+click will auto select the words and showing popup. 
  So I have to also add the Alt+click quick shortcut as well.

- There is a TestComponent to show the sorts column array in state store, can be enabled for debug purpose.

### Screen shot for current implementation:

1) Initial run for the default data

![Table Sample](/images/results/default.png)

2) With click the columns

![Table Sample](/images/results/keybard_sortorder.png)

3) With Ctrl or Alt pressed, reorder the sort columns

![Table Sample](/images/results/multiple_sort.png)

## To do furthur ##
- update the mock data to use json file
  the current webpack is 1.x, so it needs the file-loader to output the json file for wevb-dev-server to use
  since webpack 2, json data can be imported directly 

- for mapDispatchToProp, the slatest redux it can pass action object to auto connect

- should use anonymous function in react component class, then it won't need to rebind function to this in constructor.

- should consider the virtualized table for reactabular. the current implementation won't support too many data loads

- use jest tests to do the snapshots test

