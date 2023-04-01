import React, { useEffect } from "react";
import { Box, styled, Container, Typography } from "@mui/material";
import HeaderComponent from "../components/HeaderComponent";
import FilterComponent from "./FilterComponent";
import PostList from "./PostList";
import { useSelector } from "react-redux";
import { topic } from "../stores/Topics/topicsSlice";
const MainComponet = (props: any) => {
  const topicElement = useSelector(topic);
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    marginTop: theme.spacing(10),
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "50px",
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "left",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      color: "white",
    },
  }));
  return (
    <Box
      sx={{
        minHeight: "100",
        backgroundImage: `url('https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg')`,
        height: "500px",
        backgroundSize: "fit",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container disableGutters={true} maxWidth={false}>
        <HeaderComponent />
        <CustomBox>
          <Box sx={{ height: "350px" }}>
            <Title variant="h1">
              {topicElement ? topicElement.slug : "Unsplash"}
            </Title>
            <Typography
              sx={{
                fontSize: "16px",
                color: "white",
                fontWeight: "bold",
                textAlign: "left",
                mt: -4,
                wordWrap: "break-word",
              }}
            >
              {topicElement
                ? topicElement.description
                : "The internet’s source for visuals."}
            </Typography>
          
            <FilterComponent borderRadius={"2px"} />
          </Box>
        </CustomBox>
        {props.children}
      </Container>
      <PostList />
    </Box>
  );
};

export default MainComponet;
