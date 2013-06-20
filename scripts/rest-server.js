#!/usr/bin/env node

'use strict';

var restify = require('restify');

var content = [
  { id: 0, name: 'root', type: 'folder', children:
    [
      { id: 1, name: 'some folder', type: 'folder', children: [] },
      { id: 2, name: 'a file', type: 'file' }
    ]
  }
];

function getAllContent(req, res, next) {
  console.log('getAllContent');

  res.send(content);

  return next();
}

function getContent(req, res, next) {
  console.log('getContent(' + req.params.name + ')');

  res.send({ name: 'workspaces ' + req.params.name });

  return next();
}

var server = restify.createServer();
server.get('/rest/content', getAllContent);
server.get('/rest/content/:name', getContent);
server.get(/.*/, restify.serveStatic({
  directory: './app'
}));

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
