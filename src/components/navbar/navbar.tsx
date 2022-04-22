import { useDispatch } from 'react-redux';
import { cityFilter, companyFilter } from '../../redux/usersReducer';
import './navbar.scss'

type PropsType = {};

let Navbar:React.FC<PropsType> = (props) => {

    let dispatch = useDispatch();

    const onCityFilter = () => {
        dispatch(cityFilter());   
    }

    const onCompanyFilter = () => {
        dispatch(companyFilter());   
    }

    return(
        <div className="Navbar">
            <div className='Sort'>
                Сортировка
            </div>
            <button className='SortButton' onClick={() => onCityFilter()}>по городу</button>
            <button className='SortButton' onClick={() => onCompanyFilter()}>по компании</button>
        </div>
    )
}

export default Navbar;