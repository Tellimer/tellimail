import fs from 'fs'
import juice from 'juice'
import Vue from 'vue'
import { createRenderer } from 'vue-server-renderer'

async function getCssFile(file: string) {
  return await fs.readFileSync(file, 'utf-8')
}

export default async function render(app: Vue, themeFile?: string) {
  const renderer = createRenderer()
  const html = await renderer.renderToString(app)
  let extraCss = null

  if (themeFile) {
    extraCss = await getCssFile(themeFile)
  }

  return await juice(html, {
    applyAttributesTableElements: false,
    ...(extraCss !== null ? {extraCss} : {}),
  })
}
