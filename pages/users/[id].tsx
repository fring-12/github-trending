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
};

const UserDetails: React.FC<Props> = ({ userInfo }) => {
  return (
    <Layout>
      <div>
        Sorry. The api https://api.github.com/users/:id is not working. so I did
        not finished this page as well as respos/:id
      </div>
    </Layout>
  );
};

export default UserDetails;
