# Redux

- **Slice** : holds initial data
- **Dispatch** : dispatches an action to change data in the slice
- **Reducer** : the function that the action contains which cahnges the slice data
- **Selector** : used for subscribe/read the data from our store/slice

        Btn press => Dispatch (action) => Reducer(function) => Modify slice data

        sliceData => selector => subscribe/read slice data