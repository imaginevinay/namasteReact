# Optimizing our App

- **Single Responsibility Principle** : each of the component should have a single responsibility also known as **Modularity** : seperate each part in its own module, code becomes smal , reusable and testable

- **Custom Hooks**


- **Break app down to small pieces** : smaller js files during bundling instead of just 1 file so as to reduce the size this is known as  **chunking/ code splitting/dynamic bundling** : this is done using **Lazy Loading**. lazy loading components when required then new js files will be rendered for that component so that main js file size is reduced

        import React, {lazy, Suspense} from 'react';

        const componentName = lazy(() => import('../<path of component>'))

        #here if we try to access this component it will throw an error because lazy laoded modules take some time to load hence we will use <suspense> to handle this
        #now we will wrap our component with Suspense
        <Suspense fallback={<here you can pass any JSX code>}>
            <Component>
        </Suspense>
    

