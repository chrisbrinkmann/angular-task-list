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

