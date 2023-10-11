import { Text } from "@chakra-ui/react";
const ErrorPage = ({ errorMessage }) => {
  return <Text fontSize="md">{errorMessage}</Text>;
};

export default ErrorPage;
