import { useState, useEffect } from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import Header from '../components/Header';
import SkillPostsSection from '../components/SkillPostsSection';
import Footer from '../components/Footer';
import { getSkillPosts } from '../services/skillPostService';

function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getSkillPosts()
            .then(response => {
                setPosts(response.content || []);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom sx={{
                    textAlign: 'center',
                    mb: 4,
                    color: 'primary.main',
                    fontWeight: 700,
                }}>
                    Welcome to Skill Learn
                </Typography>
                
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <Box sx={{ mb: 4 }}>
                            <SkillPostsSection posts={posts} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ mb: 4 }}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        Popular Categories
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        <Button variant="outlined" fullWidth>
                                            Programming
                                        </Button>
                                        <Button variant="outlined" fullWidth>
                                            Design
                                        </Button>
                                        <Button variant="outlined" fullWidth>
                                            Business
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
}

export default HomePage;