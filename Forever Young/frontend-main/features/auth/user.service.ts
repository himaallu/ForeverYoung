import axios from "axios";

// Fetch user
const fetchUser = async () => {
  const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/user", {
    withCredentials: true,
  });
  return response.data;
};

// Logout user
const logoutUser = async () => {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/auth/logout",
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const userService = {
  fetchUser,
  logoutUser,
};

export default userService;
