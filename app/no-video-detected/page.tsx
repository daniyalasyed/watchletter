import dynamic from 'next/dynamic'

const NoVideoDetectedClient = dynamic(() => import('./NoVideoDetectedClient'), {
  ssr: false
})

export default function NoVideoDetectedPage() {
  return <NoVideoDetectedClient />
}