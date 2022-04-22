import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { compose } from "redux";
import { withUsersRedirect } from "../../hoc/withUsersRedirect";
import { changeModeSelector, currentUserSelector} from "../../redux/selectors";
import { changeOff, onChange } from "../../redux/usersReducer";
import './profile.scss';

type PropsType = {
    // name: string,
    // username: string,
    // email: string,
    // street: string,
    // city: string,
    // zipcode: string,
    // phone: string,
    // website: string,
}

const Profile: React.FC<PropsType> = (props) => {

    let newName: React.RefObject<HTMLInputElement> = React.createRef();
    let newUsername: React.RefObject<HTMLInputElement> = React.createRef();
    let newEmail: React.RefObject<HTMLInputElement> = React.createRef();
    let newStreet: React.RefObject<HTMLInputElement> = React.createRef();
    let newCity: React.RefObject<HTMLInputElement> = React.createRef();
    let newZipcode: React.RefObject<HTMLInputElement> = React.createRef();
    let newPhone: React.RefObject<HTMLInputElement> = React.createRef();
    let newWebsite: React.RefObject<HTMLInputElement> = React.createRef();
    let newComment: React.RefObject<HTMLTextAreaElement> = React.createRef();

    let currentUser = useSelector(currentUserSelector);
    let changeModeOn = useSelector(changeModeSelector);

    let dispatch = useDispatch();

    let onChangeModeOn = () => {
        dispatch(onChange());
    }

    let onSubmit = () => {
        let newProfileData = {
            name: newName.current!.value,
            username: newUsername.current!.value,
            email: newEmail.current!.value,
            street: newStreet.current?.value,
            city: newCity.current?.value,
            zipcode: newZipcode.current?.value,
            phone: newPhone.current?.value,
            website: newWebsite.current?.value,
            comment: newComment.current?.value,
        }
        if(newProfileData.name && newProfileData.username && newProfileData.email && newProfileData.street && newProfileData.city
             && newProfileData.zipcode && newProfileData.phone && newProfileData.website) {
            let newProfileDataJSON = JSON.stringify(newProfileData);
            console.log(newProfileDataJSON);
            dispatch(changeOff());
        } else alert('Заполните необходимые поля');
    }

    return (
        <div className="Profile">
            <div className="ProfileTitle">
                Профиль пользователя
            </div>
            <button className="ChangeButton" onClick={() => onChangeModeOn()}>Редактировать</button>
            <form>
                <div className="Form">
                    <div className="FieldName">
                        Name
                    </div>
                    <div className="Field">
                        {changeModeOn
                            ? <input type='text' ref={newName} defaultValue={currentUser!.name} required/>
                            : <input type='text' value='' placeholder={currentUser!.name} readOnly/>}
                    </div>
                    <div className="FieldName">
                        User name
                    </div>
                    <div className="Field">
                        {changeModeOn
                            ? <input type='text' ref={newUsername} defaultValue={currentUser!.username} required/>
                            : <input type='text' value='' placeholder={currentUser!.username} readOnly/>}                       
                    </div>
                    <div className="FieldName">
                        E-mail
                    </div>
                    <div className="Field">
                        {changeModeOn
                            ? <input type='text' ref={newEmail} defaultValue={currentUser!.email} required />
                            : <input type='text' value='' placeholder={currentUser!.email} readOnly />}
                    </div>
                    <div className="FieldName">
                        Street
                    </div>
                    <div className="Field">
                        {changeModeOn
                            ? <input type='text' ref={newStreet} defaultValue={currentUser!.address.street} required />
                            : <input type='text' value='' placeholder={currentUser!.address.street} readOnly />}
                    </div>
                    <div className="FieldName">
                        City
                    </div>
                    <div className="Field">
                        {changeModeOn
                            ? <input type='text' ref={newCity} defaultValue={currentUser!.address.city} required />
                            : <input type='text' value='' placeholder={currentUser!.address.city} readOnly />}
                    </div>
                    <div className="FieldName">
                        Zip code
                    </div>
                    <div className="Field">
                        {changeModeOn
                            ? <input type='text' ref={newZipcode} defaultValue={currentUser!.address.zipcode} required />
                            : <input type='text' value='' placeholder={currentUser!.address.zipcode} readOnly />}
                    </div>
                    <div className="FieldName">
                        Phone
                    </div>
                    <div className="Field">
                        {changeModeOn
                            ? <input type='text' ref={newPhone} defaultValue={currentUser!.phone} required />
                            : <input type='text' value='' placeholder={currentUser!.phone} readOnly />}
                    </div>
                    <div className="FieldName">
                        Website
                    </div>
                    <div className="Field">
                        {changeModeOn
                            ? <input type='text' ref={newWebsite} defaultValue={currentUser!.website} required />
                            : <input type='text' value='' placeholder={currentUser!.website} readOnly />}
                    </div>
                    <div className="FieldName">
                        Comment
                    </div>
                    <div className="TextArea">
                    {changeModeOn
                            ? <textarea className="Comment" ref={newComment} name={'comment'} required />
                            : <textarea className="Comment" name={'comment'} readOnly/>}    
                    </div>
                </div>
            </form>
            <div>
                {changeModeOn
                            ? <button className="SendButtonActive" onClick={() => onSubmit()}>Отправить</button>
                            : <button className="SendButtonDisabled" disabled>Отправить</button>}
                    
            </div>
        </div>
    )
}

export default compose(withUsersRedirect) (Profile);