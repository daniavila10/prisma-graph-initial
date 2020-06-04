import { mutationType, stringArg } from '@nexus/schema';

export const Mutation = mutationType({
  definition(t) {
    t.field('register', {
      type: 'User',
      args: {
        name: stringArg(),
        email: stringArg({ nullable: false }),
        password: stringArg({ nullable: false }),
      },
      resolve: async (_parent, { name, email, password }, ctx) => {
        const user = await ctx.prisma.user.create({
          data: {
            name,
            email,
            password,
          },
        });

        return user;
      },
    });
  },
});
