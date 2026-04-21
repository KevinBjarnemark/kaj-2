import SubmitButton from "@/components/buttons/SubmitButton";
import ApiContext, { UserDto } from "@/context/ApiContext";
import { useContext, useState } from "react";

export const UsersTable = () => {
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
        className="flex-column-relative w-full"
        style={{
          height: "200px",
          overflowY: "auto",
          backgroundColor: "#212324ff",
          padding: "0 8px",
        }}
      >
        {users.map((i) => (
          <div key={i.id} className="flex-row-relative">
            <div
              className="flex-column-row rounded text-center"
              style={{
                backgroundColor: "#3b3d3eff",
                minWidth: "28px",
                padding: "0 5px",
                margin: rowMargin,
                color: "#989fa1ff",
              }}
            >
              <span style={{ fontSize: "12px", color: "#585c5eff" }}>#</span>
              {i.id}
            </div>
            <div
              className="flex-column-row rounded text-center"
              style={{
                margin: rowMargin,
                fontWeight: "800",
                fontFamily: '"Lilita One", sans-serif',
                padding: "0 5px",
                color: "#b3bbbeff",
                lineHeight: "30px",
              }}
            >
              {i.username}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
