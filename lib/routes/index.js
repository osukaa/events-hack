var register = function (server, options, next) {

    server.route({
      method: 'GET',
      path: '/',
      handler: require('../handlers/index')
    });

    return next();
};

register.attributes = {
  name: 'index',
  version: '1.0.0'
};

module.exports = register;
