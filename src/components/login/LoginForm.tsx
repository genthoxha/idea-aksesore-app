import React from "react";

const LoginForm = (props: any) => {
    const {handleSubmit, onSubmit, submitting} = props;
    return (
        <p>form</p>
       /* <form onSubmit={handleSubmit(onSubmit)}>
            <Field type="text"
                   placeholder="Username"
                   name="username"
                component={CustomInput}
            />
            <Field
                type="password"
                placeholder="password"
                name="password"
                component={CustomInput}
            />
            <button
                className="btn m-1 btn-primary btn-block"
                type="submit"
                disabled={submitting}
            >
                Log In
            </button>
        </form>*/
    );
};

export default LoginForm;

