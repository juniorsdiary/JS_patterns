const Mediator = (() => {
  const addClient = (client, action) => {
    if (!Mediator.clients[client]) {
      Mediator.clients[client] = [];
    }

    Mediator.clients[client] = { context: this, action };

    return this;
  };

  const makeAction = client => {
    if (!Mediator.clients[client]) {
      return false;
    }

    const client_obj = Mediator.clients[client];

    client_obj.action.call(client_obj.context, client);
  };

  return {
    clients: {},
    addClient,
    makeAction,
  };
})();

Mediator.addClient('factory', function(name) {
  this.factory = name;
});

Mediator.addClient('shop', function(name) {
  this.factory = name;
});

Mediator.makeAction('factory');
Mediator.makeAction('shop');
