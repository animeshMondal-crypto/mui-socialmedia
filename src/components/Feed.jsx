import React from "react";
import { Box } from "@mui/material";
import Posts from "./Posts";

const data = [
  {
    profile: "https://loremflickr.com/320/240?random=1",
    img: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    profile: "https://loremflickr.com/320/240?random=2",
    img: "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    profile: "https://loremflickr.com/320/240?random=3",
    img: "https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    profile: "https://loremflickr.com/320/240?random=4",
    img: "https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    profile: "https://loremflickr.com/320/240?random=5",
    img: "https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {data.map((d, index) => (
        <Posts key={index} profile={d.profile} img={d.img} />
      ))}
    </Box>
  );
};

export default Feed;
