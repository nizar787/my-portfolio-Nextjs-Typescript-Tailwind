import { PageInfo } from '../typings'

export const fetchPageInfos = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfos`)

  const data = await res.json()
  const pageInfos: PageInfo[] = data.pageInfos

  // console.log('fetching', pageInfos)
  return pageInfos
}
