const passport = require('passport');

const googleAuth = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

const googleAuthCallback = (req, res, next) => {
  // IMPORTANT:
  // This redirect is what sends users back to the frontend after Google OAuth.
  // If FRONTEND_URL isn't set in production, we must NOT silently fall back to localhost.
  const isProdLike =
    process.env.NODE_ENV === 'production' ||
    !!process.env.RENDER_EXTERNAL_URL ||
    !!process.env.RENDER ||
    !!process.env.VERCEL;

  const frontendUrl =
    process.env.FRONTEND_URL ||
    (isProdLike ? 'https://www.jubiac.com' : 'http://localhost:5173');

  passport.authenticate('google', { session: false }, (err, data, info) => {
    if (err) {
      console.error('❌ [Auth] Google Auth Error:', err);
      return res.redirect(`${frontendUrl}/login?error=auth_failed`);
    }

    if (!data || !data.token) {
      console.error('❌ [Auth] No data or token received');
      return res.redirect(`${frontendUrl}/login?error=no_token`);
    }

    const { token } = data;

    // Set cookie on the response
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
    });

    // Redirect to frontend with token in URL (frontend will handle saving it)
    res.redirect(`${frontendUrl}/auth/callback?token=${token}`);
  })(req, res, next);
};

module.exports = {
  googleAuth,
  googleAuthCallback,
};

