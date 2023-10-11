"use client";
import { Heading, Flex, Box, Spinner, Skeleton } from "@chakra-ui/react";
import FormInput from "./components/FormInput";
import ListCard from "./components/ListCard";
import useSWR from "swr";
import ErrorPage from "./components/ErrorPage";
import { fetcher } from "./swr/fetcher";
import ListCardSkeleton from "./components/ListCardSkeleton";

export default function Home() {
  const { data, error, isLoading } = useSWR(
    `/api/patient_satisfaction`,
    fetcher,
    { refreshInterval: 3000 }
  );
  return (
    <Flex h={"100%"} direction={"column"} w={"100%"}>
      <Box mx={4}>
        <Heading as="h4" size="md" mb={5} mt={5}>
          Penilaian Terhadap Pelayanan Kami
        </Heading>

        <FormInput isLoading={isLoading} />

        <Heading as="h4" size="md" mb={5} mt={5}>
          Daftar Pasien yang telah memberikan penilaian
        </Heading>

        <Box overflowY="auto" maxHeight="300px">
          {(isLoading && <ListCardSkeleton />) ||
            (error && <ErrorPage errorMessage={error} />) || (
              <ListCard data={data} />
            )}
        </Box>
      </Box>
    </Flex>
  );
}
