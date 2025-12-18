// Mock artwork data - In real app this would come from API GET /artworks
const defaultArtworksData = [
  {
    id: '1',
    title: 'Crimson Waves',
    artist: 'Elena Rodriguez',
    year: 2023,
    medium: 'Oil on Canvas',
    description: 'A stunning exploration of movement and emotion through bold crimson strokes against a turbulent background. This piece captures the raw energy of ocean waves during sunset, symbolizing the constant ebb and flow of human emotions. The artist spent six months perfecting the layering technique that gives the painting its distinctive depth and luminosity.',
    location: 'Modern Art Museum, New York',
    imageUrl: 'https://images.unsplash.com/flagged/photo-1567934150921-7632371abb32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nfGVufDF8fHx8MTc2NTc3ODA5NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '2',
    title: 'Urban Symphony',
    artist: 'Marcus Chen',
    year: 2024,
    medium: 'Bronze Sculpture',
    description: 'An intricate bronze sculpture that embodies the rhythm and energy of city life. Each curve and angle represents the interconnected nature of urban communities. Chen worked with master craftsmen in Florence to achieve the perfect patina that shifts from deep bronze to hints of green, symbolizing growth within the concrete jungle.',
    location: 'Contemporary Sculpture Garden, San Francisco',
    imageUrl: 'https://images.unsplash.com/photo-1691957713140-a9a042252202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY3VscHR1cmV8ZW58MXx8fHwxNzY1NzYyMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '3',
    title: 'Lady in Blue',
    artist: 'Isabella Moretti',
    year: 1892,
    medium: 'Oil on Canvas',
    description: 'A masterpiece of 19th-century portraiture, this painting showcases Moretti\'s exceptional ability to capture both the physical likeness and inner character of her subjects. The delicate blue tones and soft lighting create an atmosphere of quiet contemplation. Recently restored, the painting reveals details that had been hidden for over a century.',
    location: 'National Portrait Gallery, London',
    imageUrl: 'https://images.unsplash.com/photo-1638190559606-27646c25571f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU3OTEyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '4',
    title: 'Mountain Serenity',
    artist: 'David Thompson',
    year: 2022,
    medium: 'Acrylic',
    description: 'Inspired by years of hiking in the Canadian Rockies, Thompson captures the majestic tranquility of mountain landscapes. The interplay of light and shadow across the peaks creates a sense of depth and scale. The painting invites viewers to experience the peaceful isolation and grandeur of nature\'s most impressive formations.',
    location: 'Landscape Art Institute, Vancouver',
    imageUrl: 'https://images.unsplash.com/photo-1688588426729-dc4f7bdb8fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwYWludGluZ3xlbnwxfHx8fDE3NjU3MjE4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '5',
    title: 'Digital Dreams',
    artist: 'Yuki Tanaka',
    year: 2024,
    medium: 'Digital Art',
    description: 'A groundbreaking piece that blurs the line between traditional art and digital innovation. Tanaka uses custom algorithms to generate evolving patterns that reflect the viewer\'s emotions through interactive sensors. This piece represents the future of art, where technology and human creativity merge into something entirely new.',
    location: 'Digital Art Collective, Tokyo',
    imageUrl: 'https://images.unsplash.com/photo-1602464729960-f95937746b68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnR8ZW58MXx8fHwxNzY1NzY2MDEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '6',
    title: 'Spring Awakening',
    artist: 'Sophie Laurent',
    year: 2023,
    medium: 'Watercolor',
    description: 'Laurent\'s delicate watercolor technique brings to life the gentle rebirth of spring. Each brushstroke captures the translucent quality of new petals and the soft morning light. The painting evokes the sense of renewal and hope that comes with the changing seasons, using a limited palette to maximum emotional effect.',
    location: 'Botanical Arts Museum, Paris',
    imageUrl: 'https://images.unsplash.com/photo-1701981652763-4157c436db8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwYXJ0fGVufDF8fHx8MTc2NTc2Nzg1MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '7',
    title: 'Neon Nights',
    artist: 'Alex Rivera',
    year: 2024,
    medium: 'Digital Art',
    description: 'A vibrant exploration of urban nightlife rendered in stunning digital clarity. Rivera combines photography, 3D modeling, and digital painting to create a hyperreal vision of the city after dark. The neon colors and dynamic composition capture the electric energy of metropolitan life in the 21st century.',
    location: 'New Media Gallery, Los Angeles',
    imageUrl: 'https://images.unsplash.com/photo-1765408217738-39fac9c0b3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0d29ya3xlbnwxfHx8fDE3NjU2Nzk3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '8',
    title: 'Classical Elegance',
    artist: 'Vincent Beaumont',
    year: 1875,
    medium: 'Oil on Canvas',
    description: 'A testament to the enduring beauty of classical technique, this painting demonstrates Beaumont\'s mastery of light, composition, and color harmony. The work reflects the artistic values of the late 19th century while maintaining a timeless appeal. Conservation efforts have preserved its original brilliance for future generations.',
    location: 'Classical Art Museum, Rome',
    imageUrl: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwYWludGluZ3xlbnwxfHx8fDE3NjU2Nzk3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '9',
    title: 'Street Stories',
    artist: 'Maya Johnson',
    year: 2024,
    medium: 'Spray Paint',
    description: 'Born from the streets of Brooklyn, this mural-style piece tells the stories of urban communities through bold colors and powerful imagery. Johnson\'s street art background shines through in the confident lines and layered symbolism. The work challenges traditional notions of where art belongs and who it serves.',
    location: 'Urban Art Gallery, Brooklyn',
    imageUrl: 'https://images.unsplash.com/photo-1758030306457-e54f25fe4384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBhcnQlMjBtdXJhbHxlbnwxfHx8fDE3NjU3ODcyODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '10',
    title: 'Quiet Reflections',
    artist: 'Min-jun Park',
    year: 2023,
    medium: 'Mixed Media',
    description: 'Park\'s minimalist approach strips away the unnecessary to reveal the essential. Using a combination of traditional Korean paper, ink, and modern materials, this piece creates a space for contemplation. The subtle variations in texture and tone invite close inspection and reward patient viewing.',
    location: 'Minimalist Art Center, Seoul',
    imageUrl: 'https://images.unsplash.com/photo-1580136607993-fd598cf5c4f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJ0fGVufDF8fHx8MTc2NTc0MzE3MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '11',
    title: 'Vibrant Chaos',
    artist: 'Lucia Fernandez',
    year: 2022,
    medium: 'Acrylic',
    description: 'An explosion of color and energy, this abstract piece embodies the controlled chaos of creative expression. Fernandez layers dozens of colors to create depth and movement, challenging viewers to find their own meaning in the dynamic composition. The painting changes appearance throughout the day as natural light shifts across its surface.',
    location: 'Abstract Expressionism Gallery, Madrid',
    imageUrl: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhaW50aW5nfGVufDF8fHx8MTc2NTcxODI2MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '12',
    title: 'Timeless Beauty',
    artist: 'James Anderson',
    year: 2021,
    medium: 'Photography',
    description: 'Anderson\'s photographic work bridges the gap between documentation and fine art. This piece captures a fleeting moment of beauty in the everyday world, elevated through masterful composition and lighting. The photograph reminds us that art exists all around us, waiting to be noticed and appreciated.',
    location: 'Photography Institute, Chicago',
    imageUrl: 'https://images.unsplash.com/photo-1706665714936-3211c96474c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBhcnR3b3JrfGVufDF8fHx8MTc2NTc5MTIxOXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

// Initialize localStorage with default data if empty
function initializeArtworks() {
  if (!localStorage.getItem('artworks')) {
    localStorage.setItem('artworks', JSON.stringify(defaultArtworksData));
  }
}

// Get all artworks from localStorage (includes default + user-created)
function getAllArtworks() {
  initializeArtworks();
  const artworks = localStorage.getItem('artworks');
  return artworks ? JSON.parse(artworks) : defaultArtworksData;
}

// Get single artwork by ID
function getArtworkById(id) {
  const artworks = getAllArtworks();
  return artworks.find(artwork => artwork.id === id);
}

// Create new artwork (POST /artworks)
function createArtwork(artworkData) {
  const artworks = getAllArtworks();
  
  // Generate unique ID
  const newId = Date.now().toString();
  
  // Create new artwork object
  const newArtwork = {
    id: newId,
    title: artworkData.title,
    artist: artworkData.artist,
    year: parseInt(artworkData.year),
    medium: artworkData.medium,
    description: artworkData.description,
    location: artworkData.location || '',
    imageUrl: artworkData.imageUrl,
    createdAt: new Date().toISOString()
  };
  
  // Add to beginning of array (so it appears first)
  artworks.unshift(newArtwork);
  
  // Save to localStorage
  localStorage.setItem('artworks', JSON.stringify(artworks));
  
  return newArtwork;
}

// Update artwork (PUT /artworks/:id)
function updateArtwork(id, artworkData) {
  const artworks = getAllArtworks();
  const index = artworks.findIndex(artwork => artwork.id === id);
  
  if (index === -1) {
    return null;
  }
  
  // Update artwork
  artworks[index] = {
    ...artworks[index],
    title: artworkData.title,
    artist: artworkData.artist,
    year: parseInt(artworkData.year),
    medium: artworkData.medium,
    description: artworkData.description,
    location: artworkData.location || '',
    imageUrl: artworkData.imageUrl,
    updatedAt: new Date().toISOString()
  };
  
  // Save to localStorage
  localStorage.setItem('artworks', JSON.stringify(artworks));
  
  return artworks[index];
}

// Delete artwork (DELETE /artworks/:id)
function deleteArtwork(id) {
  const artworks = getAllArtworks();
  const filtered = artworks.filter(artwork => artwork.id !== id);
  
  // Save to localStorage
  localStorage.setItem('artworks', JSON.stringify(filtered));
  
  return true;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    getAllArtworks, 
    getArtworkById, 
    createArtwork, 
    updateArtwork, 
    deleteArtwork,
    defaultArtworksData 
  };
}
