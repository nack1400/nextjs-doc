import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function About() {
  return (<>
  <div className={inter.className}>About</div>
  <div>About</div>
  </>
  )
}

export default About