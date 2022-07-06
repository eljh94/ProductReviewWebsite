# To Do (Next Steps)

## General

- Extend the frontends eslint package (assuming there is one) and setup in this webapp to apply the rules. Add to precommit hook and git hooks.

- Hook up to an actual API! I have just used static data, the format of which was an assumption. Ideally there would be shared or generated types from the backend, to enforce type safety and help catch breaking changes.

- Add validation to the form, we should check the user is adding a valid email. We should also santise the inputs for any nasty characters to protect from any security attacks.

## Git Hooks

Git hooks are a efficient and great way to catch errors before we merge our changes to the main branch for deployment.

I would configure git hooks to run on PRs. These would check:

- Ticket linked in the title of PR
- Prettier gates pass
- E2E testing gates pass
- Integration/Unit testing gates pass
- No typescript compilation issues
- ESLINT gates pass
- Codeowner approval
- Build and deploy application to a testing env, for visual sign off from product/design/codeowners
- Sonarqube to report and flag code quality and bugs
- Snyk would run if dependencies were added to check that no vulnerabilities were introduced
- Bundle analyzer would run and report the increase to the bundle size based on the changes made

## CI/CD

- Add CI/CD on main builds to check similar to the hooks above on our develop and main branches
- Depending on branch structure, if we have a develop branch, we could automate to deploy to a development enviornment on each merge
- If we have a main branch or release branches, we can automate so on each merge it is deoployed to production

## Integration Tests

- Some very basic integration tests using RTL (React Testing Library) have been added. Ideally these would be very thorough, testing happy/sad paths, so we can iterate quickly, making changes without worry.

- I would like to add integration tests to also test the form component out.

- Currently no tests for the MUI TextArea or TextInput component, as we aren't changing the behaviour of this, you'd hope they have tested to cover regressions. But when we get some time we can add our own regression/integration tests so we can upgrade MUI with confidence of no breaking changes.

## E2E Tests

- Continue to cover all workflows with testcafe (or the teams choice of framework) e2e tests

- Extend to test cross browser (Safari/Firefox/etc) as some javascript nuances and styling don't behave as expected across all browsers

## Intl

Every good web application supports internationalisation! We should extend this to support different languages.

- We should extract our strings to a en.json file to begin with. (No hardcoded strings should remain).

- Then we can generate other language files, this can be done in house or through an external CMS.

## Performance

- Bundle analysis should be done to identify areas where we can improve, e.g. date-fns and MUI would be good places to start.

- Lazy loading! We could add analytics to our

- Box component from MUI is not very performant, especially on re-renders. We could look to move away depending on what the team prefers and how much impact on the customer it is having. It would be good to do some analysis on this before moving away.

## Error Reporting & Monitoring

- We should add some error reporting and monitoring capabilities, we can use sentry, logrocket, rollbar, depending on whats best for the team. We should report all errors to the dashboard.

- Unhandled errors should be reported to pagerduty and alert based on severity and frequency to those on call (if this site warrants it).

## Accessibility Audit

We should get a professional firm to perform an accessibility audit on the website, to see if we are meeting the WCAG Guidelines and Standards. There are websites that can scan it for you, depending on the user base and amount of traffic the site will get, it might be worth investing in having a third party conduct a audit for us.
