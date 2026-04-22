import ApiContext from "@/context/ApiContext";
import { ChangeEvent, JSX, useContext, useState } from "react";
import style from "./UserForms.module.css";
import SubmitButton from "@/components/buttons/SubmitButton";

interface UpdateUserData {
  id: string | null;
  username: string | null;
  email: string | null;
}

interface GetDeleteUserData {
  id: string | null;
}

interface CreateUserData {
  username: string | null;
  email: string | null;
  password: string | null;
}

export const UpdateUserByIdForm = (): JSX.Element => {
  const { updateUserById, loadingApi } = useContext(ApiContext);

  const [data, setData] = useState<UpdateUserData>({
    id: null,
    username: null,
    email: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sharedProps = {
    className: "flex-column-relative center w-full h-full " + style["input"],
    onChange: handleChange,
  };

  return (
    <>
      <h4>Update user</h4>
      <input
        {...sharedProps}
        style={{ width: "60%", marginRight: "2%" }}
        name="id"
        type="number"
        placeholder="ID"
      />
      <input
        {...sharedProps}
        name="username"
        type="text"
        placeholder="Username"
      />
      <input {...sharedProps} name="email" type="text" placeholder="Email" />
      <SubmitButton
        onClick={() => updateUserById(data)}
        disabled={loadingApi}
      />
    </>
  );
};

export const GetUserByIdForm = (): JSX.Element => {
  const { getUserById, loadingApi } = useContext(ApiContext);

  const [data, setData] = useState<GetDeleteUserData>({ id: null });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sharedProps = {
    className: "flex-column-relative center w-full h-full " + style["input"],
    onChange: handleChange,
  };

  return (
    <>
      <h4>Get user</h4>
      <input {...sharedProps} name="id" type="number" placeholder="ID" />
      <SubmitButton
        onClick={() => getUserById(data.id)}
        disabled={loadingApi}
      />
    </>
  );
};

export const DeleteUserByIdForm = (): JSX.Element => {
  const { deleteUserById, loadingApi } = useContext(ApiContext);

  const [data, setData] = useState<GetDeleteUserData>({ id: null });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sharedProps = {
    className: "flex-column-relative center w-full h-full " + style["input"],
    onChange: handleChange,
  };

  return (
    <>
      <h4>Delete user</h4>
      <input {...sharedProps} name="id" type="number" placeholder="ID" />
      <SubmitButton
        onClick={() => deleteUserById(data.id)}
        disabled={loadingApi}
      />
    </>
  );
};

export const CreateUserForm = (): JSX.Element => {
  const { createUser, loadingApi } = useContext(ApiContext);

  const [data, setData] = useState<CreateUserData>({
    username: null,
    email: null,
    password: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sharedProps = {
    className: "flex-column-relative center w-full h-full " + style["input"],
    onChange: handleChange,
  };

  return (
    <>
      <h4>Create user</h4>
      <input
        {...sharedProps}
        name="username"
        type="text"
        placeholder="Username"
      />
      <input {...sharedProps} name="email" type="text" placeholder="Email" />
      <input
        {...sharedProps}
        name="password"
        type="password"
        placeholder="Password"
      />
      <SubmitButton onClick={() => createUser(data)} disabled={loadingApi} />
    </>
  );
};
