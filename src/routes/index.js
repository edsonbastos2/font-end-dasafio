import {Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Erro404 from '../pages/Erro404';


export default function Routes(){
    return(
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route path="*" component={Erro404}/>
        </Switch>
    )
}