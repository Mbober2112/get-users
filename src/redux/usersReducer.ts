export const GET_USERS_API = 'users/GET-USERS-API';
const GET_USERS = 'users/GET-USERS';
const CITY_FILTER = 'users/CITY-FILTER';
const COMPANY_FILTER = 'users/COMPANY-FILTER';
const CHOISE_USER = 'users/CHOISE-USER';
const ON_CHANGE = 'users/ON-CHANGE';
const CHANGE_OFF = 'users/CHANGE-OFF';

type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: number,
            lng: number,
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    }
}

let InitialState = {
    users: [] as Array<UserType>,
    currentUser: 0 as number,
    changeModeOn: false as boolean,
    redirect: false as boolean,
};

type InitialStateType = typeof InitialState;

const UsersReducer = (state = InitialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.users,
                changeModeOn: false,
            }
        case CITY_FILTER:
            state.users.sort(function (a: UserType, b: UserType) {
                let nameA = a.address.city.toLowerCase();
                let nameB = b.address.city.toLowerCase();

                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            });
            return {
                ...state,
                users: [...state.users],
            }
        case COMPANY_FILTER:
            state.users.sort(function (a: UserType, b: UserType) {
                let nameA = a.company.name.toLowerCase();
                let nameB = b.company.name.toLowerCase();

                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            });
            return {
                ...state,
                users: [...state.users],
            }
        case CHOISE_USER:
            return {
                ...state,
                currentUser: action.id,
                redirect: false,
            }
        case ON_CHANGE:
            return {
                ...state,
                changeModeOn: true,
            }
        case CHANGE_OFF:
            return {
                ...state,
                changeModeOn: false,
                redirect: true,
            }
        default:
            return state;
    }
}
type GetUsersType = {
    type: typeof GET_USERS,
    users: Array<UserType>,
}
type CityFilterType = {
    type: typeof CITY_FILTER,
}
type CompanyFilterType = {
    type: typeof COMPANY_FILTER,
}
type ChoiseUserType = {
    type: typeof CHOISE_USER,
    id: number,
}
type OnChangeType = {
    type: typeof ON_CHANGE,
}
type ChangeOffType = {
    type: typeof CHANGE_OFF,
}

type ActionType = GetUsersType | CityFilterType | CompanyFilterType | ChoiseUserType | OnChangeType | ChangeOffType;

export const getUsers = (data: Array<UserType>): GetUsersType => ({ type: GET_USERS, users: data });
export const cityFilter = (): CityFilterType => ({ type: CITY_FILTER });
export const companyFilter = (): CompanyFilterType => ({ type: COMPANY_FILTER });
export const choiseUser = (id: number): ChoiseUserType => ({ type: CHOISE_USER, id: id });
export const onChange = (): OnChangeType => ({ type: ON_CHANGE });
export const changeOff = (): ChangeOffType => ({ type: CHANGE_OFF });

export const getUsersActionApi = () => ({ type: GET_USERS_API });

export default UsersReducer;