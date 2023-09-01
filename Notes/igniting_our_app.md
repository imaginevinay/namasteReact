# Parcel 
    - Dev Build
    - Cache build
    - Local server is created
    - HMR = Hot module replacement
    - File watching algorithm using C++ 
    - Faster builds using caching
    - Image optimization
    - Bundle / minification of code
    - Consistent hashing
    - Differential bundling - support/differnt bundle for older browsers
    - Diagnostic
    - Error handling
    - HTTPs - ability to host something on https
    - Tree shaking - removed unused code
    - Different build for dev and prod

- **browserslist** => To make our app compatible for older browsers

- **Bundler** => normal html/css/js file -> needs to be bundled/compressed/minified before sending to production this is done by bundler. For eg : webpack, vite etc

- **create-react-app** => uses webpack bundler behind the scenes

- **npm i -D parcel** => there are 2 types of dependencies that we can install. 
    a. devDependencies => we we are developing our app we use dev dependencies
    b. normal dependencies => used in production also

- **package.lock.json vs package.json** 
    - **packagelock.json** keeps a track/ locks the exact version of the package that was used initially while installing the node module

    - **package.json** has the approximate package version of the package being used

    - **package.lock.json** also has the **"integrity"** key for each package so that what ever package is present on the local is exactly what that gets deployed while in production.

- **transitive dependencieswhile** => on installing installing parcel there were multiple other packages also installed => these are transitive dependencieswhile of parcel that parcel is itself using / parcel's own dependencies





