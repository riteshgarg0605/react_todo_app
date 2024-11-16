const zod = require("zod");
// schema
/* not required for get todo route

  post(create new) todo:
{
  title:string,
  description:string
}

put(update) todo:
{
id:string
}
 */

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTodo = zod.object({
  id: zod.string(),
});

module.exports = {
  createTodo,
  updateTodo,
};
