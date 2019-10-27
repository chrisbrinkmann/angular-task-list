### Start the app
`$ng serve --open`

### Create new component
`$ng g c <path relative to src/app>`

### Create new service
`$ng g s <path relative to src/app>`

### Deploy to GH Pages
```$git checkout -b gh-pages
$git push origin gh-pages
$npm i -g angular-cli-ghpages
$ng build --prod --base-href https:[username].github.io/[repo]/
$ngh --dir=dist/[project-name]
```

## Angular

Single page index.html renders `app-root` component similar to React.

All other components rendered in the app component. If using the routing module... app can just render router-outlet component which will render components depending on the url path.

Each component is a class implemented in TypeScript. The classes have a constructor, init method, properties, and custom methods.

The components also have a separate .html file which defines what elements they render and also pass events & handlers between parents/children (can go both directions.)

The handlers are generally methods in the parent component.

The methods call methods from 'services' which is just a separate store of functions that can be imported and called in the components.

Angular uses observables instead of promises. Effectively, rather than awaiting the return of a promise, the caller will subscribe to the observable which is like a data stream.


