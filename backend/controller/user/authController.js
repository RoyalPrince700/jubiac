const passport = require('passport');

const googleAuth = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

const googleAuthCallback = (req, res, next) => {
  passport.authenticate('google', { session: false }, (err, data, info) => {
    if (err) {
      console.error('❌ [Auth] Google Auth Error:', err);
      return res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5173'}/login?error=auth_failed`);
    }

    if (!data || !data.token) {
      console.error('❌ [Auth] No data or token received');
      return res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5173'}/login?error=no_token`);
    }

    const { token } = data;

    // Set cookie on the response
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
    });

    // Redirect to frontend with token in URL (frontend will handle saving it)
    res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5173'}/auth/callback?token=${token}`);
  })(req, res, next);
};

module.exports = {
  googleAuth,
  googleAuthCallback,
};

