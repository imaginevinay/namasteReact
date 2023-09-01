1. package.json - configuration file for our project

2. bundler - normal html/css/js file -> needs to be bundled/compressed/minified before sending to production this is done by bundler. For eg : webpack, vite etc

3. create-react-app => uses webpack bundler behind the scenes

4. we have used #parcel as a bundler

5. npm i -D <package-name> => there are 2 types of dependencies that we can install. 
    a. devDependencies => we we are developing our app we use dev dependencies
    b. normal dependencies => used in production also

6. package.lock.json vs package.json =>  packagelock.json keeps a track/ locks the exact version of the package that was used initially while installing the node module

package.json has the approximate package version of the package being used

packagelock.json also has the "integrity " key for each package so that what ever package is present on the local is exactly what that gets deployed while in production.

7. while installling parcel there were multiple other packages also installed => these are #transitive dependecies of parcel that parcel is itself using / parcel's own dependencies