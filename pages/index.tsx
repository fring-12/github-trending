import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import HomePageContent from "@/components/TabbedContent";
import TabbedContent from "@/components/TabbedContent";
import Services from "../services/Services";

interface Props {
  users: UsersProps;
  repositories: any;
}

export const getServerSideProps = async () => {
  const services = new Services(
    process.env.API_URL || "https://api.github.com"
  );

  const userParams = {
    q: "reactjs",
    page: 1,
    per_page: 12,
  };

  const users = await services.getUsers(userParams);
  const repositories = await services.getRepositories(userParams);

  if (!users || !repositories) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      users,
      repositories,
    },
  };
};

const Home: React.FC<Props> = ({ users, repositories }) => {
  const [gitUsers, setGitUsers] = React.useState(users);
  const [gitRepos, setGitrepos] = React.useState(repositories);
  const [seach, setSearchValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);

  const tabs: Tab[] = [
    { id: 1, label: "users", content: gitUsers },
    { id: 2, label: "repositories", content: gitRepos },
  ];

  const search = async () => {
    const services = new Services(
      process.env.API_URL || "https://api.github.com"
    );
    const params = {
      q: "reactjs",
      page: 1,
      per_page: 12,
      score: seach,
    };
    const searchResponse = await services.getSearchResult(params);
    // @ts-ignore
    setGitUsers(searchResponse.users);
    setGitrepos(searchResponse.repos);
  }

  const getPerPageData = async (page: number) => {
    const services = new Services(
      process.env.API_URL || "https://api.github.com"
    );
    const userParams = {
      q: "reactjs",
      page: page,
      per_page: 12,
    };
    const response = await services.getUsers(userParams);
    // @ts-ignore
    setGitUsers(response);
  };

  return (
    <>
      <Head>
        <title>Github Trending</title>
        <meta name="description" content="Github Trending app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <div className={styles.main}>
          <div className={styles.container}>
            <SearchInput
              value={seach}
              onChange={setSearchValue}
              callSearch={search}
            />
            <TabbedContent tabs={tabs} />
            <Pagination
              currentPage={currentPage}
              totalPages={8}
              onPageChange={setCurrentPage}
              dataFunction={getPerPageData}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
