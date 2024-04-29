import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const defaultTheme = createTheme();

export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme} >
            <Container component="main" maxWidth="xl" sx={{ width: '100vw' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5">Contact Us</Typography>
                        <Typography variant="body1">We are delighted to receive your communication! Whether you have inquiries, require assistance, or wish to share your thoughts, our dedicated team is ready to assist you. Please do not hesitate to get in touch using the provided contact details or by completing the contact form.</Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h6">Contact Information</Typography>
                        <Typography variant="body1">Contact Support:</Typography>
                        <Typography variant="body1">Phone: <a href="tel:+14985065432">+1 (498) 506-5432</a></Typography>
                        <Typography variant="body1">Email: <a href="mailto:contact@zeecoware.com">contact@zeecoware.com</a></Typography>
                        <Typography variant="body1">Opening Hours: 9am - 6pm</Typography>
                        <Typography variant="body1">Your interest in our products/services is valued, and we are committed to providing you with optimal support and assistance.</Typography>
                    </Grid>
                </Grid>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Contact Us
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="message"
                                    label="Message"
                                    type="message"
                                    id="message"
                                    autoComplete="new-message"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => alert('We have recieved your message, we will contact you shortly')}
                        >
                            Submit
                        </Button>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}