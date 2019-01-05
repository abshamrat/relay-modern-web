import { graphql } from 'relay-runtime';
import Api from './Api';

const api = Api.create({ baseUrl: '' });

// Fetches data from a RESTful API
api.fetch('/api/posts').then(/* ... */);
// Fetches data from a GraphQL endpoint
api.fetchQuery(graphql`query Foo { ... }`).then(/* ... */);

// Server-side code example
// ------------------------
import express from 'express';
import { graphql } from 'relay-runtime';
import Api from './Api';

const app = express();
app.get('/', (req, res) => {
  const api = Api.create({
    baseUrl: 'http://localhost:3000/graphql',
    headers: req.headers,
  });
  // Fetches data from a RESTful API
  api.fetch('/api/posts').then(/* ... */);
  // Fetches data from a GraphQL endpoint
  api.fetchQuery(graphql`query Foo { ... }`).then(/* ... */);
});