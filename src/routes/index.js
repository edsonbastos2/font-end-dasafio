import {Switch} from 'react-router-dom';
import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Erro404 from '../pages/Erro404';


export default function Routes(){
    return(
        <Switch>
            <MyRoute exact path="/" component={Login} isClosed/>
            <MyRoute path="*" component={Erro404}/>
        </Switch>
    )
}