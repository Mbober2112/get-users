import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { choiseUser } from '../../redux/usersReducer';
import './user.scss';

type PropsType = {
    id: number,
    name: string,
    city: string,
    company: string,
};

let User: React.FC<PropsType> = (props) => {

    let dispatch = useDispatch();

    let onChoiseUser = (userId: number) => {
        dispatch(choiseUser(userId));
    }

    return (
        <div className="Item">
            <div className='FieldTitle'>
                ФИО:
            </div>
            <div className='Name'>
                {props.name}
            </div>
            <br />
            <div className='FieldTitle'>
                город:
            </div>
            <div className='Name'>
                {props.city}
            </div>
            <br />
            <div className='FieldTitle'>
                компания:
            </div>
            <div className='Name'>
                {props.company}
            </div>
            <NavLink to={'/profile'} onClick={() => onChoiseUser(props.id)}>Подробнее</NavLink>
        </div>
    )
}

export default User;