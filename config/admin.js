module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '619541bf677e7cecc9822cc4afb1d0a3'),
  },
});
