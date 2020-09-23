import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from '../components/app'
import rootReducers from '../reducers'
import Head from 'next/head'
const AppTodo = () => {
    const store = createStore(rootReducers);
    return (
        <>
        <Head>
            <title>Todo App</title>
        </Head>
           
                <App />
        </>
    )
}

export default AppTodo
