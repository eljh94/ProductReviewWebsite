# Assumptions

- Assumed this was a purely frontend challenge and the use of third party dependencies was allowed.

- Assumed I didn't need to spin up a server to interact with and that hard coding the data was okay.

- Assumed design creativity was encouraged! I didn't follow the example one provided

# Decisions

## Third party dependencies

I used Material UI, Testcafe, Date fns, uuid and recharts as third party dependencies.

Material UI

- Widely used open source component library, that values performance and responsive design.
- Highly supported and contributed to (no signs of sun setting)
- Has a healthy package score on [Snyk](https://snyk.io/advisor/npm-package/@mui/material)

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
