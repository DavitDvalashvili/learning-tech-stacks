import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props: any) {
  const router = useRouter();

  console.log('props-ების ლოგი', props);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href={"/about"} >Go To About</Link>
        <button onClick={() => {
          router.push('/about/company/hello-bitcamp');
        }}>go to hello bitcamp</button>
        <p>{props.data[0].body}</p>
      </main>
    </>
  )
}

// export async function getStaticProps() {
//   const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const obj = await resp.json();

//   return {
//     props: {
//       data: obj
//     }
//   };
// }

export async function getServerSideProps() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  const obj = await resp.json();

  return {
    props: {
      data: obj
    }
  };
}
