import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { usersSelector } from "../../redux/selectors";
import { getUsersActionApi } from "../../redux/usersReducer";
import User from "./user";
import './users.scss';
import preloader from '../../images/spinner.gif';

type PropsType = {};

let Users: React.FC<PropsType> = () => {

    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsersActionApi());
    }, []);

    let users = useSelector(usersSelector);

    if (users.length === 0) {
        return (
            <div className="Preloader">
                <img src={preloader} />
            </div>
        )
    }

    let usersData = users.map(ud => <User id={ud.id} name={ud.name} city={ud.address.city} company={ud.company.name}/> );

    return(
        <div className="Items">
            <div className="Title">
                Список пользователей
            </div>
            <div className="UsersData">
                {usersData}
            </div>
            <div className="Total">
                Найдено {users.length} пользователей
            </div>
        </div>
    )
}

export default Users;