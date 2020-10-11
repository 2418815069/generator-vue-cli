// 此文件作为generator的核心入口
// 需要导出一个继承Yeoman Generator 的类型
// Yeoman Generator在工作时会自动调用我们在此类型中定义的一些生命周期方法
// 我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能，例如文件写入
const Generator = require('yeoman-generator')

module.exports=class extends Generator{
  prompting(){
    // Yeoman在询问用户环境自动调用此方法
    // 在此方法中可以调用父类的prompt（）方法发出对用户的命令行询问
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'your project name',
      default: this.appname
    }]).then(answers=>{
      this.answers=answers
    })
  }
  // 把每一个文件都通过模板转换到目标路径
  writing(){
    // yeoman自动在生成文件阶段调用此方法
    // 我们这里尝试往项目目录中写入文件
    // 通过模板方式写入文件到目标目录
    //模板文件路径
    const templates = [
      // 'public\favicon.ico',
      'src/App.vue',
      'src/main.js',
      '.env.development',
      '.env.production',
      '.env.test',
      '.gitignore',
      'babel.config.js',
      'element-variables.scss',
      'README.md'
    ]
    templates.forEach(item=>{
    // 输出到目标路径
    const tmpl = this.templatePath(item)
    const output = this.destinationPath(item)
    const context = this.answers
    this.fs.copyTpl(
      // tmpl,
      // output,
      this.templatePath(item),
      this.destinationPath(item),
      context
    )
    })
  }
}