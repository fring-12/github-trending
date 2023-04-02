import Layout from "@/components/Layout";
import Services from "@/services/Services";
import React from "react";

interface Props {
  userInfo: UserProperty;
}

export const getServerSideProps = async (context: any) => {
  const services = new Services(
    process.env.API_URL || "https://api.github.com"
  );

  const userInfo = await services.getUserById(context.params.id);

  if (!userInfo) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      userInfo,
    },
  };
};

const RepositoryDetails: React.FC<Props> = ({ userInfo }) => {
  console.log("userInfo", userInfo);

  return (
    <Layout>
      <div>RepositoryDetails</div>
    </Layout>
  );
};

export default RepositoryDetails;
