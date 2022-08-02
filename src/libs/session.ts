export const getSession = async (ctx: any) => {
  return ctx.req.session.get('user');
};
