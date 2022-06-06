import { useAuth } from "@/hooks/useAuth";
import { CircularProgress, Flex,  } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

const AdminSignInPage: FC = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/admin/signin");
    return;
  });

  if (!user) {
    return (
      <Flex alignItems="center" justifyContent={"center"} h="100vh">
        <CircularProgress isIndeterminate color="blue.300" />
      </Flex>
    );
  } else {
    router.push("/admin/dashboard");
    return (
      <Flex alignItems="center" justifyContent={"center"} h="100vh">
        <CircularProgress isIndeterminate color="blue.300" />
      </Flex>
    );
  }
};

AdminSignInPage.displayName = "AdminDashboard";

export default AdminSignInPage;
