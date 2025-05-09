import { 
    Box, 
    Container, 
    Grid, 
    Typography, 
    Link, 
    Divider,
    IconButton
  } from '@mui/material';
  import {
    Facebook,
    Twitter,
    Instagram,
    LinkedIn,
    GitHub
  } from '@mui/icons-material';
  
  function Footer() {
    const footerLinks = [
      {
        title: "Explore",
        links: ["Popular Skills", "Recent Posts", "Top Contributors", "Categories"]
      },
      {
        title: "Company",
        links: ["About Us", "Careers", "Blog", "Press"]
      },
      {
        title: "Support",
        links: ["Help Center", "Safety Tips", "Community Guidelines", "Contact Us"]
      },
      {
        title: "Legal",
        links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "GDPR"]
      }
    ];
  
    return (
      <Box 
        component="footer" 
        sx={{ 
          backgroundColor: 'background.paper',
          pt: 6,
          pb: 3,
          mt: 'auto'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {footerLinks.map((column, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Typography 
                  variant="subtitle1" 
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary'
                  }}
                >
                  {column.title}
                </Typography>
                {column.links.map((link, linkIndex) => (
                  <Link 
                    key={linkIndex} 
                    href="#" 
                    color="text.secondary" 
                    underline="hover" 
                    display="block"
                    gutterBottom
                    sx={{
                      '&:hover': {
                        color: 'primary.main'
                      }
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Grid>
            ))}
          </Grid>
          
          <Divider sx={{ my: 4 }} />
          
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} SkillShare. All rights reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
              <IconButton aria-label="Facebook" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton aria-label="Twitter" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton aria-label="Instagram" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton aria-label="LinkedIn" color="inherit">
                <LinkedIn />
              </IconButton>
              <IconButton aria-label="GitHub" color="inherit">
                <GitHub />
              </IconButton>
            </Grid>
          </Grid>
          
          <Typography variant="caption" display="block" color="text.secondary" mt={2}>
            Made with ❤️ for skill enthusiasts worldwide
          </Typography>
        </Container>
      </Box>
    );
  }
  
  export default Footer;