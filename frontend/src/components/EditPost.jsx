import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Container, Paper, Alert, CircularProgress } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { getSkillPostById, updateSkillPost } from '../services/skillPostService';

const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        userId: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const post = await getSkillPostById(id);
                setFormData({
                    title: post.title,
                    content: post.content,
                    category: post.category,
                    tags: post.tags.join(', ')
                });
            } catch (err) {
                setError(err.message || 'Failed to load post');
            }
        };
        fetchPost();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await updateSkillPost(id, formData);
            navigate(`/post/${id}`);
        } catch (err) {
            setError(err.message || 'Failed to update post');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container component="main" maxWidth="md">
            <Paper elevation={3} sx={{ p: 4, mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h4" sx={{ mb: 4 }}>
                    Edit Post
                </Typography>
                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="Post Title"
                        name="title"
                        autoComplete="off"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        multiline
                        rows={4}
                        id="content"
                        label="Post Content"
                        name="content"
                        autoComplete="off"
                        value={formData.content}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="userId"
                        label="User ID"
                        name="userId"
                        type="number"
                        inputProps={{ min: 1 }}
                        value={formData.userId}
                        onChange={handleChange}
                        helperText="Your user ID (required)"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={loading}
                    >
                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Update Post'}
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        sx={{ mt: 2 }}
                        onClick={() => navigate(`/post/${id}`)}
                    >
                        Cancel
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default EditPost;
