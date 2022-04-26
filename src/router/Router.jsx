import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Top } from "../components/page/Top";
import { Users } from "../components/page/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeaderOnly } from "../components/templates/HeaderOnly";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <DefaultLayout>
              <Top />
            </DefaultLayout>
          </Route>
          <Route path="/users">
            <HeaderOnly>
              <Users />
            </HeaderOnly>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
