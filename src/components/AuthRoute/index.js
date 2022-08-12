/**路由权限 */
import {getToken} from '@/utils/memory';
import {Navigate} from 'react-router-dom';
function AuthRoute({children}){
    const isToken = getToken();
    if(isToken){
        return <>{children}</>
    }else{
        return <Navigate to='/login' replace></Navigate>
    }
}
export default AuthRoute;