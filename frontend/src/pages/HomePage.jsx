import { useState, useEffect } from 'react';
import { 
  Container, 
  Box, 
  CircularProgress, 
  Alert, 
  Button,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Header from '../components/Header';
import SkillPostsSection from '../components/SkillPostsSection';
import Footer from '../components/Footer';
import { getSkillPosts } from '../services/skillPostService';

function HomePage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const fetchPosts = async (pageNum) => {
        try {
            setLoading(true);
            const response = await getSkillPosts(pageNum);
            setPosts(prev => pageNum === 0 ? response.content : [...prev, ...response.content]);
            setHasMore(!response.last);
        } catch (err) {
            console.error(err);
            setError('Failed to load posts. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts(page);
    }, [page]);

    const handleRefresh = () => {
        setPage(0);
        fetchPosts(0);
    };

    const loadMore = () => {
        setPage(prev => prev + 1);
    };

    return (
        <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            background: theme.palette.mode === 'light' 
                ? 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)' 
                : theme.palette.background.default
        }}>
            <Header />
            
            <Container 
                maxWidth="lg" 
                sx={{ 
                    mt: isMobile ? 2 : 4, 
                    mb: 8,
                    flex: 1 
                }}
            >
                <Paper 
                    elevation={0}
                    sx={{
                        mt: isMobile ? 6 : 8,
                        p: isMobile ? 2 : 4,
                        borderRadius: 4,
                        background: theme.palette.mode === 'light'
                            ? 'rgba(255, 255, 255, 0.8)'
                            : theme.palette.background.paper,
                        backdropFilter: 'blur(10px)',
                        border: theme.palette.mode === 'light'
                            ? '1px solid rgba(255, 255, 255, 0.3)'
                            : '1px solid rgba(0, 0, 0, 0.1)',
                        minHeight: '60vh'
                    }}
                >
                    {error && (
                        <Alert 
                            severity="error" 
                            sx={{ 
                                mb: 3,
                                background: theme.palette.error.light,
                                color: theme.palette.error.contrastText
                            }}
                            action={
                                <Button 
                                    color="inherit" 
                                    size="small" 
                                    onClick={handleRefresh}
                                    sx={{
                                        textTransform: 'none',
                                        fontWeight: 600
                                    }}
                                >
                                    Retry
                                </Button>
                            }
                        >
                            {error}
                        </Alert>
                    )}

                    {loading && page === 0 ? (
                        <Box 
                            display="flex" 
                            justifyContent="center" 
                            alignItems="center" 
                            minHeight="200px"
                        >
                            <CircularProgress 
                                size={60}
                                thickness={4}
                                sx={{
                                    color: theme.palette.mode === 'light'
                                        ? theme.palette.primary.main
                                        : theme.palette.secondary.main
                                }} 
                            />
                        </Box>
                    ) : (
                        <>
                            <SkillPostsSection posts={posts} />
                            
                            {loading && page > 0 && (
                                <Box display="flex" justifyContent="center" mt={4}>
                                    <CircularProgress 
                                        sx={{
                                            color: theme.palette.mode === 'light'
                                                ? theme.palette.primary.main
                                                : theme.palette.secondary.main
                                        }} 
                                    />
                                </Box>
                            )}
                            
                            {!loading && hasMore && posts.length > 0 && (
                                <Box display="flex" justifyContent="center" mt={4}>
                                    {/* <Button 
                                        variant="contained"
                                        onClick={loadMore}
                                        disabled={loading}
                                        sx={{
                                            px: 4,
                                            py: 1.5,
                                            borderRadius: 3,
                                            fontWeight: 600,
                                            background: theme.palette.mode === 'light'
                                                ? 'linear-gradient(45deg, #3f51b5, #2196f3)'
                                                : 'linear-gradient(45deg, #9c27b0, #673ab7)',
                                            color: '#fff',
                                            '&:hover': {
                                                transform: 'translateY(-2px)',
                                                boxShadow: 3
                                            },
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        Load More
                                    </Button> */}
                                </Box>
                            )}
                        </>
                    )}
                </Paper>
            </Container>
            
            <Footer />
        </Box>
    );
}

export default HomePage;