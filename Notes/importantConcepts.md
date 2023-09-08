- **Higher order components** : Component which takes up another component as an input and enhances the taken component and returns the enhanced component as an output. Eg : Setting a promoted label on restaurants on swiggy 
      - There are 2 ways to do so 
      - 1. Normally we can write an if condition to add a label in the existing component
      - 2. We make a higher order component

        const RestCard = () => {
            return (
                // ..restaurant card html 
            )
        } 

        export const HigherOrderComponent = (RestCard) => {
            return (props) => {
                return (
                    <label>Promoted</label>
                    <RestCard {...props}/>
                )
            }
        }

        export default RestCard



- **Lifting the state UP (child to parent communication)** : lift the behaviour controlling function from the child element to the parent element and pass this function as a props to the child so that child can call it and interact with other children/siblings of the same parent.

- **React Context API** : Transfer data from top level to any node of the tree/ component veen if there is no relation between parent and siblings
    
        1. Create Context with default value

            import {createContext} from 'react';

            const UserContext = createContext({userName: 'Vinay'})

            export default UserContext

        2. Update context with new value
            
            import {useState, useEffect} from 'react;
            import UserContext from './UserContext';

            // inside App.js
            const [name, setName] = useState();

            useEffect(() => {
                // writing auth logic to fetch username of logged in user and set this username as the new value of our context
                setName('John Doe')
            }, [])
            
            return (
                <UserContext.Provider value={{userName: name}}>
                    <Header />
                    .....
                    <Other conponents>
                </UserContext.Provider>
            )

        3. Use this context value

            // inside any component
            import {useContext} from 'react';
            import UserContext from './UserContext';

            const Header = () => {
                const {userName} = useContext(UserContext)
                comsole.log(userName)
            }