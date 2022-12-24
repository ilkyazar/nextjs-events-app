import { useRef } from 'react';
import classes from './profile-form.module.css';

function ProfileForm(props) {
  const oldPasswdRef = useRef();
  const newPasswdRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredOldPasswd = oldPasswdRef.current.value;
    const enteredNewPasswd = newPasswdRef.current.value;

    props.onChangePassword({
      oldPassword: enteredOldPasswd,
      newPassword: enteredNewPasswd,
    });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswdRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={oldPasswdRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
