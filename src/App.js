import React from "react";
import Layout from "./hoc/Layout/Layout";
import Quiz from './containers/Quiz/Quiz'

const App = () => (
    <div className="App">
        <Layout>
            <Quiz/>
        </Layout>
    </div>
)

export default App;
