# signal chat create-react-app typescript

## Packages
- [Redux](https://redux.js.org/) - state manager for application
- [Redux-Saga](https://redux-saga.js.org/) - side-effects manager (controller of application)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start) - Routes manager
- [Connected React Router](https://github.com/supasate/connected-react-router) - Redux Based Router
- [Reselect](https://github.com/reduxjs/reselect) - Data selector with memoization
- [Reactstrap](https://reactstrap.github.io/) - Bootsrap CSS Framework Components for React
- [Redux Create Reducer](https://github.com/kolodny/redux-create-reducer#readme) - Provides convinient interface for creating reducers
- [Lodash](https://lodash.com/docs/4.17.15) - Swiss knife for data manipulation
- [Storybook](https://storybook.js.org/docs/basics/writing-stories/) - Catalog of applicaton components (Components development and documentaton)


## Folders structure
- actions - Contain types and action creators of applicaton
- components - Stupid components of application
- containers - Smart components connected to redux tree
- pages - Pages (routes - root components) of applications
- reducers - Redux tree transformers (Pure functions)
- sagas - Redux Sagas  (JS Generators) - works with async operations (data transfer)
- selectors - Reselect data selectors with memoization
- utils - Reusable pieces of code

## Component, Container, Page - Structure
- Folder like Component name (Login, Users)
    - index.tsx - Component file
    - [name].spec.tsx - Component Test file
    - styles.module.scss - Component styles
    - story.tsx - Storybook file
    - types.ts - Component types



## Instalation
`npm install`
copy file `.env.local.sample` -> `.env.local`

## Development
`npm start`

## Unit Testing
`npm test`

## Build Production
`npm run build`

## Template Generator
There are custom prepared templates almost for all types of files
basic syntax `node ./generator {type} [name] (--name | -n) --force (-f) --skip (-s)`
where 
- `type` - type of template (action, reducer, saga, component, container, page)
- `name` - name of file or module (users, user-orders etc.)
- `force` -  rewrite files if already exists
- `skip` -  depends of template type could skip some files and don't create these files

### Templates

#### Action - creates
- `{name}.ts` and `{name}.spec.ts` in `src/actions` folder, doesn't have `{skip}` param
- `node ./generator action coca-cola -f`
- `npm run g:a -- coca-cola -f`

#### Reducer - creates
- `{name}.ts` and `{name}.spec.ts` in `src/reducers` folder
- import and usage of `{name}.ts` will be automatically added to `src/reducers/index.ts` file
- `{name}.ts` and `{name}.spec.ts` in `src/actions` folder,
- `{skip}` parameter is `boolean` means skip `action` creation
- `node ./generator reducer coca-cola --force --skip`
- `npm run g:r -- coca-cola -f -s`

#### Saga - creates
- `{name}.ts` and `{name}.spec.ts` in `src/sagas` folder, 
- import and usage of `{name}.ts` will be automatically added to `src/sagas/index.ts` file
- `{name}.ts` and `{name}.spec.ts` in `src/reducers` folder, 
- import and usage of `{name}.ts` will be automatically added to `src/reducers/index.ts` file
- `{name}.ts` and `{name}.spec.ts` in `src/actions` folder,
- `{skip}` parameter is comma separated `string`, could skip `reducer` and/or `action` means skip `action` creation
- `node ./generator saga coca-cola --skip r,a -f` - skip `reducer` and `action` creation
- `npm run g:s -- coca-cola -s r` - skip `reducer` creation
- `npm run g:s -- coca-cola -s a` - skip `action` creation

#### Component - creates
- `{name}` folder in `src/components`
- `index.tsx`, `test.spec.ts`, `story.tsx`, `styles.module.scss` in `src/components/{name}` folder
- `{type}` parameter - responsible for type of component (Functional Component or Class Component) - `class|func`, func - default value
- `node ./generator component coca-cola --type class` - create class component
- `npm run g:com -- coca-cola -f` - create functional component
- `npm run g:com -- coca-cola -t class` - create class component

#### Container - creates
- `{name}` folder in `src/containers`
- `index.tsx`, `test.spec.ts`, `story.tsx`, `styles.module.scss` in `src/containers/{name}` folder
- `{type}` parameter - responsible for type of component (Functional Component or Class Component) - `class|func`, func - default value
- `node ./generator component coca-cola --type class` - create class component
- `npm run g:com -- coca-cola -f` - create functional component
- `npm run g:com -- coca-cola -t class` - create class component

#### Page - creates
- `{name}` folder in `src/pages`
- `index.tsx`, `test.spec.ts`, `story.tsx`, `styles.module.scss` in `src/pages/{name}` folder
- `{type}` parameter - responsible for type of component (Functional Component or Class Component) - `class|func`, func - default value
- `node ./generator component coca-cola --type class` - create class component
- `npm run g:com -- coca-cola -f` - create functional component
- `npm run g:com -- coca-cola -t class` - create class component


## Production deployment on AWS S3
1. install [NodeJS 12.16.1 or later](https://nodejs.org/) to your machine
2. fetch source code by git `git clone git@bitbucket.org:i-viewnow/sigchat-www-v2.git` or download and extract as zip
3. change directory to root folder `cd sigchat-www-v2`
4. install NPM dependencies `npm install`
5. create production environment file `sigchat-www-v2/.env.production` with next content:
```env
REACT_APP_ENV="production"
REACT_APP_API_BASE_URL="https://sigchat-api-dev.eba-vnstk3hj.us-east-1.elasticbeanstalk.com"
REACT_APP_LINKS__CALL_ADT="800 238 2727"
REACT_APP_LINKS__TERMS_OF_SERVICE="https://www.adt.com/about-adt/legal/adt-control-terms-of-use"
REACT_APP_LINKS__FAQ="https://www.adt.com"
REACT_APP_LINKS__PRIVACY_POLICY="https://www.adt.com/about-adt/legal/privacy-policy"
REACT_APP_LINKS__MYADT="https://www.myadt.com/"
``` 
where `REACT_APP_API_BASE_URL` url to your PYTHON server (signalchat server)

6. build production files `npm run build -- --production`
7. upload all files from `sigchat-www-v2/build` to S3 bucket
8. configure S3 bucket - in `Properties` tab on `Static web site hosting` widget set index document and error document to `index.html`

## Production deployment with Continius Integration tools (Jenkins, Pipelines, etc.)
There are no certain instructions, just be sure you have next state:
1. You have installed [NodeJS 12.16.1 or later](https://nodejs.org/)
2. You have access to git repository of project `git@bitbucket.org:i-viewnow/sigchat-www-v2.git`
3. You have set environment variables
```env
REACT_APP_ENV="production"
REACT_APP_API_BASE_URL="https://sigchat-api-dev.eba-vnstk3hj.us-east-1.elasticbeanstalk.com"
REACT_APP_LINKS__CALL_ADT="800 238 2727"
REACT_APP_LINKS__TERMS_OF_SERVICE="https://www.adt.com/about-adt/legal/adt-control-terms-of-use"
REACT_APP_LINKS__FAQ="https://www.adt.com"
REACT_APP_LINKS__PRIVACY_POLICY="https://www.adt.com/about-adt/legal/privacy-policy"
REACT_APP_LINKS__MYADT="https://www.myadt.com/"
``` 
4. You have a hook to run build command `npm run build`
5. You have access to `/build` as dist folder
