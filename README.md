## What I changed 
- Moved contents from `App.tsx` to `Contents.tsx` this was done to make `App.tsx` clean and make room for context.
- Context was added thinking it would reduce the amount of calls between components, but isn't very usefull at the moment as calls are only needed in `calculate_grade.ts`. If the app were to be more fleshed out, it could prove useful.

A lot of my thinking is shown before I removed it in commit `bab7a53ede1492720b2f0ecbe8ad579d70c50388` ("comments"). This included stuff like dummy data files, and console logs showing thought process. I did this so it could be easier to review the code in it's clean state, as there were a lot of comments.
> To go back and view the commit, I'll leave the git command for copy and paste:
```
git reset --hard bab7a53ede1492720b2f0ecbe8ad579d70c50388
```

I added sources for each file at the bottom. An LLM was used in twice for assigning ts types:
- `classContext.ts` as I was having trouble ts typing the useState context.
- `api_types.ts` as I had trouble typing an object keypair "`[{[assignment: string]: number}]`"

#### What I would have done better
- for `createStudentReport()`:
  - If I could, I would have changed the signature of this function as we already call classes and have their information from the main content component. This would
 eliminate some of the calls that happen here.

  - Additionally, perhaps changing the classIds to instead hold the index of the classList.
This way we would always know which class we were referring to without making another API call.

- in `calculateGrade.ts`:
  - I used a bunch of getter functions that called the API. Some of the code repeats, and I thought there could make been some way to abstract it. However in the interest of time, I thought the effort wouldn't be worth it. 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
