import { GraphQLServer } from 'graphql-yoga';

import { schema } from './schema';
import { createContext } from './context';

new GraphQLServer({
  schema,
  context: createContext,
}).start(() =>
  console.log(
    '🚀 Server runner in http://localhost:4000',
  ),
);
