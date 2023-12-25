import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const Market = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;

  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Heips Market
        </Typography>
        <Typography color={medium}>Add products</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/market.png"
        style={{
          borderRadius: "0.75rem",
          margin: "0.75rem 0",
        }}
      />
      <Typography color={medium} m="0.5rem 0">
        Welcome to Heips Market, where selling your items is a breeze! Snap a
        photo, create a listing, and watch your items find new homes
        effortlessly. Our user-friendly platform ensures a seamless selling
        experience. Say hello to stress-free selling – because with Heips, it's
        easy and rewarding! Join us today and start selling with ease.
      </Typography>
    </WidgetWrapper>
  );
};

export default Market;
