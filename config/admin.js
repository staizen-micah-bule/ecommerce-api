module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ee8af9e977b8c49d5bfd8428faef4011'),
  },
});
