import React from "react";
import CardPatientSatisfaction from "./CardPatientSatisfaction";
import { VStack, Heading } from "@chakra-ui/react";

const ListCard = ({ data }) => {
  return (
    <>
      <VStack spacing={4} align="stretch" mb={5}>
        {data.map((element) => (
          <CardPatientSatisfaction
            key={element.id}
            name={element.name}
            patientSatisfaction={element.patient_satisfaction}
            advice={element.advice}
          />
        ))}
      </VStack>
    </>
  );
};

export default ListCard;
