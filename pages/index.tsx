import type { NextPage } from "next";
import { Typography, Box } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
    >
      <Typography variant="h5" fontWeight={600} textAlign="center">
        NextJS, ReactJS, Recoil, Typescript, MUI &amp; Recoil
      </Typography>
      <Typography paddingY="1rem" variant="caption">A forkable boilerplate repo</Typography>
    </Box>
  );
};

export default Home;
