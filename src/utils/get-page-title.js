import defaultSettings from '@/settings'

const title = defaultSettings.title || '文档分割'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
