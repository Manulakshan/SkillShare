import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardActionArea,
    Chip,
    Avatar,
    Stack,
    Divider,
    IconButton,
    Box  // Added Box import
} from '@mui/material';
import { Favorite, Share, Comment } from '@mui/icons-material';

function SkillPostsSection({ posts, loading }) {  // Added loading prop
    return (
        <>
            <Typography variant="h4" gutterBottom sx={{ 
                fontWeight: 600,
                mb: 4,
                color: 'text.primary',
                textAlign: { xs: 'center', sm: 'left' }
            }}>
                Explore Skill Posts
            </Typography>
            
            <Grid container spacing={3}>
                {posts.length > 0 ? (
                    posts.map(post => (
                        <Grid item xs={12} sm={6} md={4} key={post.postId}>
                            <Card sx={{ 
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: 3
                                }
                            }}>
                                <CardActionArea sx={{ flexGrow: 1 }}>
                                    <CardContent>
                                        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                                            <Avatar alt={post.authorName} src={post.authorAvatar} />
                                            <Typography variant="subtitle2">{post.authorName}</Typography>
                                        </Stack>
                                        
                                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                            {post.title}
                                        </Typography>
                                        
                                        <Typography variant="body2" color="text.secondary" paragraph>
                                            {post.description.length > 150 
                                                ? `${post.description.substring(0, 150)}...` 
                                                : post.description}
                                        </Typography>
                                        
                                        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                                            {post.tags?.map(tag => (
                                                <Chip 
                                                    key={tag} 
                                                    label={tag} 
                                                    size="small" 
                                                    variant="outlined" 
                                                />
                                            ))}
                                        </Stack>
                                        
                                        <Divider sx={{ my: 1 }} />
                                        
                                        <Stack 
                                            direction="row" 
                                            justifyContent="space-between" 
                                            alignItems="center"
                                            sx={{ pt: 1 }}
                                        >
                                            <Typography variant="caption" color="text.secondary">
                                                {new Date(post.createdAt).toLocaleDateString()}
                                            </Typography>
                                            
                                            <Stack direction="row" spacing={1}>
                                                <IconButton size="small">
                                                    <Favorite fontSize="small" />
                                                </IconButton>
                                                <IconButton size="small">
                                                    <Comment fontSize="small" />
                                                </IconButton>
                                                <IconButton size="small">
                                                    <Share fontSize="small" />
                                                </IconButton>
                                            </Stack>
                                        </Stack>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    !loading && (  // Now loading is properly defined
                        <Grid item xs={12}>
                            <Box textAlign="center" py={4}>  {/* Now Box is imported */}
                                <Typography variant="h6" color="text.secondary">
                                    No posts available yet
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                                    Be the first to share your skills!
                                </Typography>
                            </Box>
                        </Grid>
                    )
                )}
            </Grid>
        </>
    );
}

export default SkillPostsSection;