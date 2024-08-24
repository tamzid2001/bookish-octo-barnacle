'use client'

import React from 'react';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ChevronRight, Video, Zap, Globe, Code, Send, GitBranch, Link2, Coffee, Mail, Phone, MapPin } from 'lucide-react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Button, TextField, Typography, Card, CardContent, AppBar, Toolbar, Container, Grid, IconButton, Link, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4F46E5',
    },
    secondary: {
      main: '#10B981',
    },
  },
});

const Header = () => (
  <AppBar position="static" color="primary">
    <Toolbar className="container mx-auto px-4 flex justify-between items-center">
      <Typography variant="h6" component="div">ClipCraft AI</Typography>
      <Box>
        <Button color="inherit" href="#about">About Us</Button>
        <Button color="inherit" href="#contact">Contact</Button>
        <SignedOut>
          <SignInButton mode="modal">
            <Button color="inherit">Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </Box>
    </Toolbar>
  </AppBar>
);

const Hero = () => (
  <Box className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
    <Container maxWidth="md" className="text-center">
      <Typography variant="h2" component="h1" gutterBottom>
        Craft Stunning Video Clips with AI
      </Typography>
      <Typography variant="h5" paragraph>
        Transform your ideas into engaging social media content in seconds
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        endIcon={<ChevronRight />}
        href="https://colab.research.google.com/#fileId=https%3A//huggingface.co/multimodalart/diffusers_text_to_video/blob/main/Text_to_Video_with_Diffusers.ipynb"
        target="_blank"
        rel="noopener noreferrer"
      >
        Start Crafting
      </Button>
      <Box mt={6}>
        <Typography variant="h6" gutterBottom>
          See AI-generated video in action:
        </Typography>
        <Box className="aspect-w-16 aspect-h-9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ysz5S6PUM-U"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Box>
    </Container>
  </Box>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card>
    <CardContent>
      <Icon size={48} className="text-indigo-600 mb-4" />
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);

const Features = () => (
  <Box className="py-20 bg-gray-100">
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom>
        Why Choose ClipCraft AI?
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard
            icon={Video}
            title="AI-Powered Editing"
            description="Our advanced AI understands context and creates perfectly timed cuts and transitions."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard
            icon={Zap}
            title="Lightning Fast"
            description="Generate social media-ready clips in seconds, not hours."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard
            icon={Globe}
            title="Multi-Platform Support"
            description="Optimize your content for TikTok, Instagram, YouTube, and more with a single click."
          />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const Demo = () => {
  const [prompt, setPrompt] = React.useState('');
  const [videoUrl, setVideoUrl] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating video generation
    setVideoUrl('https://example.com/generated-video.mp4');
  };

  return (
    <Box className="py-20">
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          See ClipCraft AI in Action
        </Typography>
        <Paper component="form" onSubmit={handleSubmit} className="p-4">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your video idea..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="mb-4"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            endIcon={<Send />}
          >
            Craft Clip
          </Button>
        </Paper>
        {videoUrl && (
          <Box className="mt-8 aspect-w-16 aspect-h-9">
            <video src={videoUrl} controls className="rounded-lg shadow-lg">
              Your browser does not support the video tag.
            </video>
          </Box>
        )}
      </Container>
    </Box>
  );
};

const PricingCard = ({ title, price, features }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="div" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h4" component="div" gutterBottom>
        ${price}<Typography variant="subtitle1" component="span">/mo</Typography>
      </Typography>
      <ul className="mt-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <ChevronRight className="text-indigo-600 mr-2" />
            <Typography variant="body2">{feature}</Typography>
          </li>
        ))}
      </ul>
      <Button variant="contained" color="primary" fullWidth className="mt-4">
        Choose Plan
      </Button>
    </CardContent>
  </Card>
);

const Pricing = () => (
  <Box className="py-20 bg-gray-100">
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom>
        Simple, Transparent Pricing
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <PricingCard
            title="Starter"
            price={29}
            features={[
              "50 AI-generated clips per month",
              "720p video quality",
              "Basic editing tools",
              "Email support"
            ]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <PricingCard
            title="Pro"
            price={99}
            features={[
              "250 AI-generated clips per month",
              "1080p video quality",
              "Advanced editing tools",
              "Priority support",
              "API access"
            ]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <PricingCard
            title="Enterprise"
            price="Custom"
            features={[
              "Unlimited AI-generated clips",
              "4K video quality",
              "Custom AI model training",
              "Dedicated account manager",
              "24/7 phone support"
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const AboutUs = () => (
  <Box id="about" className="py-20 bg-gray-50">
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom>
        About ClipCraft AI
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Revolutionizing Content Creation
          </Typography>
          <Typography variant="body1" paragraph>
            At ClipCraft AI, we're pushing the boundaries of artificial intelligence to transform the way digital content is created. Our team of world-class AI researchers and software engineers is dedicated to developing cutting-edge technology that empowers creators and businesses alike.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            We're on a mission to democratize high-quality video content creation, making it accessible to everyone from individual creators to large enterprises. By harnessing the power of AI, we're not just changing the game – we're redefining it.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Join Our Team
          </Typography>
          <Typography variant="body1" paragraph>
            We're always looking for talented individuals who are passionate about AI and content creation. If you're excited about shaping the future of digital media, we want to hear from you. Check out our open positions and become part of our innovative team!
          </Typography>
          <Button variant="contained" color="primary" href="#contact">
            View Open Positions
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="/team-collaboration.jpg" alt="ClipCraft AI Team" style={{ width: '100%', borderRadius: '8px' }} />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const ContactUs = () => (
  <Box id="contact" className="py-20 bg-gray-100">
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1" paragraph>
            We'd love to hear from you! Whether you're interested in our product, looking for a career opportunity, or just want to learn more about ClipCraft AI, don't hesitate to reach out.
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="Email" secondary="careers@clipcraftai.com" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Phone />
              </ListItemIcon>
              <ListItemText primary="Phone" secondary="+1 (555) 123-4567" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MapPin />
              </ListItemIcon>
              <ListItemText primary="Address" secondary="123 AI Boulevard, San Francisco, CA 94105" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Send Us a Message
            </Typography>
            <form>
              <TextField fullWidth margin="normal" label="Name" variant="outlined" />
              <TextField fullWidth margin="normal" label="Email" variant="outlined" />
              <TextField fullWidth margin="normal" label="Subject" variant="outlined" />
              <TextField fullWidth margin="normal" label="Message" variant="outlined" multiline rows={4} />
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const Footer = () => (
  <Box component="footer" className="bg-indigo-900 text-white py-12">
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            ClipCraft AI
          </Typography>
          <Typography variant="body2">
            Revolutionizing content creation with AI.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Link href="#" color="inherit" display="block">Home</Link>
          <Link href="#about" color="inherit" display="block">About Us</Link>
          <Link href="#contact" color="inherit" display="block">Contact</Link>
          <Link href="#" color="inherit" display="block">Careers</Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Connect With Us
          </Typography>
          <IconButton color="inherit" component="a" href="https://github.com/tamzid2001/bookish-octo-barnacle" target="_blank">
            <GitBranch />
          </IconButton>
          <IconButton color="inherit" component="a" href="https://www.linkedin.com/in/tamzid-ullah-8a50a2234/" target="_blank">
            <Link2 />
          </IconButton>
        </Grid>
      </Grid>
      <Box mt={4} pt={4} borderTop={1} borderColor="rgba(255,255,255,0.1)">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} ClipCraft AI. All rights reserved.
        </Typography>
      </Box>
    </Container>
  </Box>
);

const SupportDeveloper = () => (
  <Box textAlign="center" my={4}>
    <Link
      href="https://donate.stripe.com/4gwcOCg7abFQatO3cc"
      target="_blank"
      rel="noopener noreferrer"
      color="textSecondary"
      sx={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
    >
      <Coffee size={16} style={{ marginRight: 8 }} />
      <Typography variant="body2">
        Support the developers
      </Typography>
    </Link>
  </Box>
);

export default function Home() {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <ThemeProvider theme={theme}>
        <Box className="min-h-screen flex flex-col">
          <Header />
          <Box component="main" className="flex-grow">
            <SignedOut>
              <Hero />
              <Features />
              <AboutUs />
              <ContactUs />
            </SignedOut>
            <SignedIn>
              <Demo />
              <Pricing />
              <AboutUs />
              <ContactUs />
            </SignedIn>
          </Box>
          <SupportDeveloper />
          <Footer />
        </Box>
      </ThemeProvider>
    </ClerkProvider>
  );
}