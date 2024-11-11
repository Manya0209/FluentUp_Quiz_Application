import { Container, Grid , Box } from "@mui/material"
import { Header } from "../../../shared/components/Header";
import { Menu } from "../../../shared/components/Menu";
import { Major } from "../../../shared/components/Major";
import { Footer } from "../../../shared/components/Footer";

export const DashBoard = () => {
    return (
        <Container maxWidth={false} sx={{ px: 0 }}>
            <Header />

        <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12}>
          <Box sx={{ p: 2, bgcolor: "#fff", borderRadius: 1, boxShadow: 1 }}>
            <Major />
          </Box>
        </Grid>

            </Grid>
                  <Footer/>
        </Container>
    )
}


// color palette -> #9C9797 #DEB69C #FEF7E5 #CD9692