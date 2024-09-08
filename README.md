This is a boilerplate for Front End side with NextJS

## Getting Started

First, duplicate your local env file base on `.env.example` and replace with your value

Then, run the development server:

```bash
yarn dev
```

## Structure

- app: where contain all the routing of pages ( Following as NextJS structure routing )
- components: where contain all the shares component ( please following as [Atoms design pattern](https://atomicdesign.bradfrost.com/chapter-2))
- constants: where contain all the share variables during application
- pages: where contain all components pages ( separate from `app` )
- stores: where contain the global stores ( in this boilerplate, we're using [Redux Toolkit](https://redux-toolkit.js.org), but we still can replace with any others library and putting here )
- hooks: where contain custom hooks
- services: where storing all the services