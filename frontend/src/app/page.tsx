"use client";
import { useContext, useState } from "react";
import { APP_CONSTANTS } from "@/utils/constants/app-constants";
import ApiContext, { UserDto } from "@/context/ApiContext";
import style from "./page.module.css";
import SubmitButton from "@/components/buttons/SubmitButton";
import { ChangeEvent } from "react";

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

// ---- Forms ----

const UpdateUserByIdForm = () => {
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
    className: "flex-column-relative center w-100 h-100 " + style["input"],
    onChange: handleChange,
  };

  return (
    <>
      <h4>Update user</h4>
      <input {...sharedProps} style={{ width: "60%", marginRight: "2%" }} name="id" type="number" placeholder="ID" />
      <input {...sharedProps} name="username" type="text" placeholder="Username" />
      <input {...sharedProps} name="email" type="text" placeholder="Email" />
      <SubmitButton
        onClick={() => updateUserById(data)}
        disabled={loadingApi}
      />
    </>
  );
};

const GetUserByIdForm = () => {
  const { getUserById, loadingApi } = useContext(ApiContext);

  const [data, setData] = useState<GetDeleteUserData>({ id: null });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sharedProps = {
    className: "flex-column-relative center w-100 h-100 " + style["input"],
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

const DeleteUserByIdForm = () => {
  const { deleteUserById, loadingApi } = useContext(ApiContext);

  const [data, setData] = useState<GetDeleteUserData>({ id: null });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sharedProps = {
    className: "flex-column-relative center w-100 h-100 " + style["input"],
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

const CreateUserForm = () => {
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
    className: "flex-column-relative center w-100 h-100 " + style["input"],
    onChange: handleChange,
  };

  return (
    <>
      <h4>Create user</h4>
      <input {...sharedProps} name="username" type="text" placeholder="Username" />
      <input {...sharedProps} name="email" type="text" placeholder="Email" />
      <input {...sharedProps} name="password" type="password" placeholder="Password" />
      <SubmitButton
        onClick={() => createUser(data)}
        disabled={loadingApi}
      />
    </>
  );
};

const AdminActions = () => {
  const { loadingApi, getAllUsers } = useContext(ApiContext);
  const [users, setUsers] = useState<UserDto[]>([]);

  const handleClick = async () => {
    const fetchedUsers = await getAllUsers();
    setUsers(fetchedUsers);
  };

  const rowMargin = "2px 5px 2px 0";

  return (
    <>
      <h4>Users</h4>
      <SubmitButton
        onClick={handleClick}
        disabled={loadingApi}
        label="Show usernames"
      />
      <div
        className="flex-column-relative w-100"
        style={{ height: "200px", overflowY: "auto", backgroundColor: "#212324ff", padding: "0 8px" }}
      >
        {users.map((i) => (
          <div key={i.id} className="flex-row-relative">
            <div
              className="flex-column-row shape-soft text-center"
              style={{ backgroundColor: "#3b3d3eff", minWidth: "28px", padding: "0 5px", margin: rowMargin, color: "#989fa1ff" }}
            >
              <span style={{ fontSize: "12px", color: "#585c5eff" }}>#</span>
              {i.id}
            </div>
            <div
              className="flex-column-row shape-soft text-center"
              style={{ margin: rowMargin, fontWeight: "800", fontFamily: '"Lilita One", sans-serif', padding: "0 5px", color: "#b3bbbeff", lineHeight: "30px" }}
            >
              {i.username}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// ---- Layout ----

const AdminDashBoard = () => {
  const spacing = "38px";

  return (
    <div className="flex-column-relative w-100 start">
      <div className="flex-row-relative w-100">
        <div className="flex-column-relative center" style={{ width: "45vw", marginRight: "15vw" }}>
          <CreateUserForm />
        </div>
        <div className="flex-column-relative center" style={{ width: "45vw" }}>
          <AdminActions />
        </div>
      </div>

      <div className="flex-row-relative w-100" style={{ marginTop: spacing }}>
        <div className="flex-column-relative center" style={{ width: "45vw", marginRight: "15vw" }}>
          <UpdateUserByIdForm />
        </div>
        <div className="flex-column-relative center" style={{ width: "45vw" }}>
          <GetUserByIdForm />
        </div>
      </div>

      <div className="flex-row-relative w-100" style={{ marginTop: spacing }}>
        <div className="flex-column-relative center" style={{ width: "45vw", marginRight: "15vw" }}>
          <DeleteUserByIdForm />
        </div>
        <div className="flex-column-relative center" style={{ width: "45vw" }} />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <article
      className="flex-column-relative w-100 justify-start"
      style={{
        padding: "2vh 2vw",
        minHeight: `calc(100vh - ${APP_CONSTANTS.DIMENSIONS.HEADER.HEIGHT}px)`,
      }}
    >
      <AdminDashBoard />
    </article>
  );
}