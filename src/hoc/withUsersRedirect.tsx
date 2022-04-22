import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppStateType } from "../redux/reduxStore";

type MapStatePropsType = {
    redirect: boolean,
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        redirect: state.usersState.redirect,
    }
}

export const withUsersRedirect = (Component: React.ComponentType<MapStatePropsType>) => {
    class RedirectComponent extends React.Component<MapStatePropsType> {
        render () {
        if (this.props.redirect) return <Navigate to='/' />
        return <Component {...this.props}/>
        }
    }
    const ConnectUsersRedirectComponent = connect(mapStateToProps) (RedirectComponent);
    return ConnectUsersRedirectComponent;
}