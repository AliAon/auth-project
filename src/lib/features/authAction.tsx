import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constant";
import { getToken } from "../helper";

export const fetchUserType: any = createAsyncThunk(
  "fetchUserType",
  async (thunkAPI) => {
    const token = getToken();
    const response = await axios.get(`${BASE_URL}user-type/user/role`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("response", response);
    return response.data;
  }
);
export const fetchNomad: any = createAsyncThunk(
  "fetchNomad",
  async (thunkAPI) => {
    const token = getToken();
    const response = await axios.get(`${BASE_URL}users/nomad/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("response", response);
    return response.data;
  }
);
export const fetchHost: any = createAsyncThunk(
  "fetchHost",
  async (thunkAPI) => {
    const token = getToken();
    const response = await axios.get(`${BASE_URL}users/host/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("response", response);
    return response.data;
  }
);
