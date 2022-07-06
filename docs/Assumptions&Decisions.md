# Assumptions

- Assumed this was a purely frontend challenge and the use of third party dependencies was allowed.

- Assumed I didn't need to spin up a server to interact with and that hard coding the data was okay.

- Assumed design creativity was encouraged! I didn't follow the example one provided

# Decisions

## Frameworks

Create React App

- Create react app is an easy bootstrap tool to generate a quick UI
- It comes configured with a test runner and integration testing library (RTL/Jest)
- React is a Javascript library that helps you to build and scale user interfaces, I like it because it favours composability
- Worth noting there are many great libraries that you can use, depends on business and customer needs, as well as performance and time-to-live considerations

Typescript

- I chose to use typescript to improve the tooling and scalability of the codebase
- Type safety catches errors at compile time as opposed to run time, which can help catch bugs before it gets to the customer!

## Third party dependencies

I used Material UI, Testcafe, Date fns, uuid and recharts as third party dependencies.

Material UI

- Widely used open source component library, that values performance and responsive design.
- Highly supported and contributed to (no signs of sun setting)
- Has a healthy package score on [Snyk](https://snyk.io/advisor/npm-package/@mui/material)
- Uses css in js, which keeps the styling central to the JS files, it also is highly performant, can be scaled out and reused really nicely in large codebases. Sometimes its not highly performant for components that re-render a lot - so we should track this with custom data analytics and make sure our customer experience is good.

Testcafe

- Uses node.js, easy for frontend engineers to pick up
- Open source and contributed to frequently
- Supports IE11 testing
- Has a healthy package score on [Snyk](https://snyk.io/advisor/npm-package/testcafe)

date-fns

- Doesn't use sunsetted moment.js
- Has a lot of cool utils
- Considers bundle size and performance in terms of locales and tree shaking
- Open source and contributed to frequently
- Has an okay package score on [Snyk](https://snyk.io/advisor/npm-package/date-fns) (needs review)

recharts

- Seemed to be the top charting library used in react
- Okay documentation and was relatively easy to use
- has an okay package score on [Snyk](https://snyk.io/advisor/npm-package/recharts) (needs review)

uuid

- not heavily maintained, needs to be reviewed
- has an okay package score on [Snyk](https://snyk.io/advisor/npm-package/recharts) (needs review)
- handy for generating unique ids - could move away once integrated with the server as may no longer be needed (I admit its probably overkill for the current state of this project)

## Other

- I decided to add a checkbox to allow the user to select whether their name would be publically posted on the review page. I know this wasn't a requirement but it is important!

- I also obfuscated the email in the reviews response from the API - this is PII - and shouldn't be shown to the users. This could be omitted completely.
