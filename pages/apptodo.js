import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from '../components/app'
import rootReducers from '../reducers'
const AppTodo = () => {
    const store = createStore(rootReducers);
    return (
        <>
            <Provider store={store}>
                <App />
            </Provider>
        </>
    )
}

export default AppTodo
