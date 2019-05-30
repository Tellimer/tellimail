import fs from 'fs'
import inlineCss from 'inline-css'
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

  console.log(extraCss, html)

  return await inlineCss(html, {
    ...(extraCss !== null ? {extraCss} : {}),
    //@ts-ignore
    removeHtmlSelectors: true,
    url: ' ',
  })
}
