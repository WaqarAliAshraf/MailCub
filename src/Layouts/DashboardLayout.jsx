import { Outlet } from "react-router";
import { styled } from "@mui/material";
import ClippedDrawer from "../Components/ClippedDrawer";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden',
  });

const Main = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
        paddingTop: APP_BAR_DESKTOP + 24,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));

const DashBoardLayOut = () => {
    return (
    <>
        <StyledRoot>
            <ClippedDrawer />
            <Main>
                <Outlet />
            </Main>
        </StyledRoot>

    </>);
}

export default DashBoardLayOut;