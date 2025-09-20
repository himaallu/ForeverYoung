import axios from "axios";
import { CreateOpportunityForm } from "../../types/types";

const fetchAllOpportunities = async () => {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/opportunity",
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const fetchOpportunitiesByUser = async () => {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/opportunity/user",
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const fetchOpportunityById = async (slug: string) => {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_API_URL + `/opportunity/${slug}`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const createOpportunity = async (opportunity: CreateOpportunityForm) => {
  const response = await axios.post(
    process.env.NEXT_PUBLIC_API_URL + "/opportunity",
    opportunity,
    {
      withCredentials: true,
    }
  );

  if (response.data.error) {
    throw new Error(response.data.error);
  }

  return response.data;
};

const updateOpportunity = async (
  opportunityId: string,
  data: CreateOpportunityForm
) => {
  const response = await axios.put(
    process.env.NEXT_PUBLIC_API_URL + `/opportunity/${opportunityId}`,
    data,
    {
      withCredentials: true,
    }
  );

  if (response.data.error) {
    throw new Error(response.data.error);
  }

  return response.data;
};

const deleteOpportunity = async (opportunityId: string) => {
  const response = await axios.delete(
    process.env.NEXT_PUBLIC_API_URL + `/opportunity/${opportunityId}`,
    {
      withCredentials: true,
    }
  );

  if (response.data.error) {
    throw new Error(response.data.error);
  }

  return response.data;
};

const opportunityService = {
  fetchAllOpportunities,
  fetchOpportunitiesByUser,
  fetchOpportunityById,
  createOpportunity,
  updateOpportunity,
  deleteOpportunity,
};

export default opportunityService;
