import { Stack, Avatar, AvatarGroup } from "@mui/material";

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={1} direction="row">
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        <Avatar
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="Jane Doe"
        ></Avatar>
        <Avatar
          src="https://randomuser.me/api/portraits/women/58.jpg"
          alt="Jane Doe"
        ></Avatar>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/80.jpg"
            alt="Jane Doe"
          ></Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/35.jpg"
            alt="Jane Doe"
          ></Avatar>
        </AvatarGroup>
      </Stack>
      <Stack spacing={1} direction="row">
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: 48, height: 48 }}
        >
          BW
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ width: 48, height: 48 }}
          src="https://randomuser.me/api/portraits/women/71.jpg"
          alt="Jane Doe"
        ></Avatar>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
