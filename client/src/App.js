import { Switch, Route } from "react-router-dom";

import Navbar from "./shared/Navbar";
import { UpdateBook } from "./UpdateBook";
import { CreateBook } from "./CreateBook";
import { BooksList } from "./BooksList";
import Container from "./shared/Container";

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route
                    path="/update-book/:id"
                    render={(props) => {
                        return <UpdateBook {...props} />;
                    }}
                />
                <Route path="/create-book">
                    <CreateBook />
                </Route>
                <Route path="/" exact>
                    <BooksList />
                </Route>
            </Switch>
        </>
    );
}

export default App;
