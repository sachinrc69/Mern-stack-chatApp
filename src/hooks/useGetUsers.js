import React, { useEffect, useState, useContext } from "react";
import { OtherUesrsContext } from "../contexts/otherUesrsContext";

const useGetUsers = () => {
  const { setOtherUsers, setLoading } = useContext(OtherUesrsContext);

  const authToken = localStorage.getItem("authToken");

  const getUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/users", {
        headers: { Authorization: "Bearer " + authToken },
      });
      const resData = await res.json();
      if (!res.ok) {
        throw new Error(resData.message);
      } else {
        setOtherUsers(resData);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { getUsers };
};

export default useGetUsers;
