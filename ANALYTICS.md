# Google Analytics Integration

This portfolio website includes comprehensive Google Analytics tracking to monitor visitor behavior and engagement.

## Analytics Setup

### Google Analytics 4 (GA4)
- **Measurement ID**: `G-MCDNXSNJL5`
- **Integration**: Direct gtag.js implementation in `index.html`

### Google Tag Manager (GTM)
- **Container ID**: `GT-5TW9P4HT`
- **Integration**: GTM script in `index.html` with noscript fallback

## Tracked Events

### Button Clicks
- Social media links (LinkedIn, GitHub)
- Contact actions (phone, email)
- Navigation interactions

### Page Views
- Automatic page view tracking
- Project section views
- Component interactions

### Custom Events
- Project views when scrolling into viewport
- Contact form interactions
- Social media link clicks

## Implementation Details

### Files Modified
- `index.html` - Added GA4 and GTM scripts
- `src/main.tsx` - Initialize analytics on app load
- `src/utils/analytics.ts` - Analytics utility functions
- `src/components/Navbar.tsx` - Social link tracking
- `src/components/Contact.tsx` - Contact action tracking
- `src/components/Projects.jsx` - Project view tracking

### Analytics Functions
- `initGA()` - Initialize Google Analytics
- `trackPageView()` - Track page views
- `trackEvent()` - Track custom events
- `trackButtonClick()` - Track button interactions
- `trackFormSubmission()` - Track form submissions
- `trackDownload()` - Track file downloads

## Privacy Considerations

The analytics implementation follows Google's privacy guidelines and includes:
- No personal data collection
- Standard GA4 privacy controls
- GTM for advanced tracking management

## Testing

To verify analytics are working:
1. Open browser developer tools
2. Check Network tab for requests to `googletagmanager.com`
3. Verify `dataLayer` object in console
4. Test events in Google Analytics Real-time reports
