# Code Structure

## Docs Folder

Contains all relevant documentation to this codebase, with exception to the readme, which references this folder. Any new docs should be added here.

## E2E Folder

This contains all the e2e fixtures, models, setup related to the end to end testing of this website.

This has its own readme to help guide you through best practices.

## Source

Contains the code!

### Components

Contains all the meta components used to make up our pages.

### Pages

The pages you see on the website! These are built up of the smaller components in our codebase.

### Types

Any types shared across our codebase should live in this folder. As the codebase evolves, we can create subdirectories for separation of concerns.

Ideally any generated types from the backend would live here or in a central place to be consumed throughout the application.

### Config

For now config just contains our static data assumed to be returned from an API. This would be replaced eventually by some stores and API client, whether it be GraphQL or RESTful.
