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

### Technnical ###
- redux actions:
  * SORT_COLUMN - when the mouse click each column
  * START_ORDER_ORDINAL - when the user press ctrl or alt
  * STOP_ORDER_ORDINAL - when the user released the ctrl or alt ( a multiple columns sort will happen)
  * ORDER_SORT_COLUMN - when the user hold the ctrl or alt, and click the header to reorder columns
  * PEOPLE_DATA_UPDATED - when the people data is fetched from server side json data

- update webpack config to use file-loader to process json data path

### Screen shot for current implementation:

1) Initial run for the default data

![Table Sample](/images/results/default.png)

2) With click the columns

![Table Sample](/images/results/multiple_sort.png)

3) With Ctrl or Alt pressed, reorder the sort columns

![Table Sample](/images/results/keybard_sortorder.png)

## To do furthur ##
- fetch is not supported mocha test, needs to pass test. 
  and we cannot install isomorphic test
  tried to use the mockup.js, but mockup won't be able to load json in browser although it passed the test

- for mapDispatchToProp, the slatest redux it can pass action object to auto connect

- should use anonymous function in react component class, then it won't need to rebind function to this in constructor.

- should consider the virtualized table for reactabular. the current implementation won't support too many data loads

- use jest tests to do the snapshots test

