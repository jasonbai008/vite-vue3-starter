module.exports = function (plop) {
  // 生成器名称是comp，执行的命令是：plop comp
  plop.setGenerator("comp", {
    description: "generate vue compoent file",
    // 输入文件名
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter component name:",
      },
    ],
    // 使用component模版，生成对应文件名的文件
    actions: [
      {
        type: "add",
        path: "src/components/{{name}}.vue",
        templateFile: "templates/component.hbs",
      },
    ],
  });
};
