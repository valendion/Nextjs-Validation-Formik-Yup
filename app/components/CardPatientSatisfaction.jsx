import { Card, Heading, CardBody, Text } from "@chakra-ui/react";

const CardPatientSatisfaction = ({ name, patientSatisfaction, advice }) => {
  return (
    <Card>
      <CardBody>
        <Heading size={"md"} mb={2}>
          {name}
        </Heading>
        <Text>Tingkat kepuasan : {patientSatisfaction}</Text>
        <Text>Saran : {advice}</Text>
      </CardBody>
    </Card>
  );
};

export default CardPatientSatisfaction;
