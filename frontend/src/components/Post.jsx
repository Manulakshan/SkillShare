import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Card, CardContent, CardActions, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Alert, CircularProgress } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import { getSkillPostById, deleteSkillPost } from '../services/skillPostService';

const Post = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const data = await getSkillPostById(id);
                setPost(data);
            } catch (err) {
                setError(err.message || 'Failed to load post');
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    const handleDelete = async () => {
        setDeleteLoading(true);
        try {
            await deleteSkillPost(id);
            navigate('/');
        } catch (err) {
            setError(err.message || 'Failed to delete post');
        } finally {
            setDeleteLoading(false);
            setDeleteDialogOpen(false);
        }
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!post || error) {
        return (
            <Box sx={{ p: 4 }}>
                <Alert severity="error">
                    {error || 'Post not found'}
                </Alert>
            </Box>
        );
    }

    return (
        <Box sx={{ p: 4 }}>
            <Card>
                <CardContent>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {post.title}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                        {post.category}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {post.content}
                    </Typography>
                    <Typography color="text.secondary">
                        Tags: {post.tags.join(', ')}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined"
                        startIcon={<EditIcon />}
                        onClick={() => navigate(`/edit/${id}`)}
                    >
                        Edit
                    </Button>
                    <IconButton
                        color="error"
                        onClick={() => setDeleteDialogOpen(true)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>

            <Dialog
                open={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
            >
                <DialogTitle>Delete Post</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to delete this post?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => setDeleteDialogOpen(false)}
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleDelete}
                        color="error"
                        disabled={deleteLoading}
                    >
                        {deleteLoading ? <CircularProgress size={20} color="inherit" /> : 'Delete'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Post;
