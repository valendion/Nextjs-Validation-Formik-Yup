"use client";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Stack,
  Box,
  Button,
  Textarea,
  useToast,
} from "@chakra-ui/react";

import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

export const FormInput = ({ isLoading }) => {
  const isLoadingString = isLoading.toString();
  const toast = useToast();
  const handleSubmit = async (values) => {
    await axios.post("/api/patient_satisfaction", values);
    formik.resetForm();
    toast({
      title: "Berhasil ditambahkan",
      status: "success",
      isClosable: true,
    });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      patient_satisfaction: "",
      advice: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .matches(/^[a-zA-Z ]*$/, "Nama harus huruf abjad")
        .required("Nama wajib diisi")
        .min(3, "Nama harus lebih dari 3 karakter"),
      patient_satisfaction: yup
        .string()
        .required("Tingkat kepuasan pasien wajib dipilih"),
      advice: yup
        .string()
        .required("Saran wajib diisi")
        .min(20, "Saran harus lebih dari 20 karakter"),
    }),
    onSubmit: handleSubmit,
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing="5">
        <FormControl isInvalid={formik.errors.name}>
          <FormLabel>Nama Anda</FormLabel>
          <Input
            placeholder="Masukkan nama anda"
            size="md"
            type="text"
            name="name"
            onChange={handleForm}
            value={formik.values.name}
            isDisabled={isLoading}
          />

          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.patient_satisfaction}>
          <FormLabel>Tingkat Kepuasan Layanan Kami</FormLabel>

          <Stack direction={"column"} spacing="12px">
            <Box>
              <input
                value="Tidak Puas"
                type="radio"
                name="patient_satisfaction"
                checked={formik.values.patient_satisfaction === "Tidak Puas"}
                onChange={handleForm}
                disabled={isLoading}
              />
              {" Tidak Puas"}
            </Box>
            <Box>
              <input
                value="Biasa saja"
                type="radio"
                name="patient_satisfaction"
                checked={formik.values.patient_satisfaction === "Biasa saja"}
                onChange={handleForm}
                disabled={isLoading}
              />
              {" Biasa saja"}
            </Box>
            <Box>
              <input
                value="Puas"
                type="radio"
                name="patient_satisfaction"
                checked={formik.values.patient_satisfaction === "Puas"}
                onChange={handleForm}
                disabled={isLoading}
              />
              {" Puas"}
            </Box>
            <Box>
              <input
                value="Sangat Puas"
                type="radio"
                name="patient_satisfaction"
                checked={formik.values.patient_satisfaction === "Sangat Puas"}
                onChange={handleForm}
                disabled={isLoading}
              />
              {" Sangat Puas"}
            </Box>
          </Stack>
          <FormErrorMessage>
            {formik.errors.patient_satisfaction}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={formik.errors.advice}>
          <FormLabel>Saran Anda</FormLabel>
          <Textarea
            placeholder="Masukkan saran anda"
            name="advice"
            onChange={handleForm}
            value={formik.values.advice}
            size="sm"
            isDisabled={isLoading}
          />

          <FormErrorMessage>{formik.errors.advice}</FormErrorMessage>
        </FormControl>
        <Button type="submit" isDisabled={isLoading}>
          Kirim
        </Button>
      </Stack>
    </form>
  );
};

export default FormInput;
