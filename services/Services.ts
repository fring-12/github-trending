import axios from "axios";

class Services {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getUsers = async (params: any): Promise<UsersProps | undefined> => {
    try {
      const response = await axios.get(`${this.baseUrl}` + `/search/users`, {
        params: params,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  async getRepositories(params: any) {
    try {
      const response = await axios.get(
        `${this.baseUrl}` + "/search/repositories",
        {
          params: params,
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getSearchResult(params: any) {
    const userResponse = await this.getUsers(params);
    const reposReponse = await this.getRepositories(params);

    return {
      users: userResponse,
      repos: reposReponse,
    };
  }

  async getUserById(id : number) {
    try {
      const response = await axios.get(
        `${this.baseUrl}/search/users/${id}`
      );
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default Services;
