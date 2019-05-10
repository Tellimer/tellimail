import fs from 'fs'
import Vue, { ComponentOptions } from 'vue'
import render from './render'

export class View {
  protected template: string
  protected mixin: ComponentOptions<Vue> | typeof Vue
  protected cssThemeFile: string
  public constructor(template: string, mixin?: ComponentOptions<Vue> | typeof Vue, cssThemeFile?: string) {
    this.mixin = mixin === undefined ? {} : mixin
    this.template = template
    this.cssThemeFile = cssThemeFile
  }

  public async render(): Promise<string> {
    const app = new Vue({
      mixins: [this.mixin],
      template: this.template,
    })

    return await render(app, this.cssThemeFile)
  }

}

export async function templateView(file: string, mixin?: ComponentOptions<Vue> | typeof Vue, cssThemeFile?: string): Promise<View> {
  if (!await fs.existsSync(file)) {
    throw new Error(`Template file '${file}' does not exist.`)
  }

  const template = await fs.readFileSync(file, 'utf-8')

  return new View(template, mixin, cssThemeFile)
}
