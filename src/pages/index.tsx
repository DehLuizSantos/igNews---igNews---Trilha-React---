import Head from "next/head";
import Image from "next/image";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from './home.module.scss'

import { /* GetServerSideProps */ GetStaticProps } from "next";
import { stripe } from "../services/stripe";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  console.log(product)

  return (
    <div>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publictions <br />
            <span>for {product.amount} mounth</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <Image src='/images/avatar.svg' alt='Girl coding' width={500} height={500} />
      </main>
    </div>
  );
}


// Client-side - Quando você não usa nenhuma função (useEffect) 
//Carrega os dados do lado do cliente em tempo real
//Exemplo: Comentarios (precisa ser em tempo real)

// Server-side Rendelin - Executado pelo lado do servidor next 
//Exemplo: Pouco conteudo dinamico (context) - GetServerSideProps

// Static Site Generator - Executado pelo lado do servidor next 
// para casos que precisamos gerar o HTML da pagina antes
//Exemplo: SEO da pagina - GetStaticProps

export const getStaticProps: GetStaticProps = async () => {


  const price = await stripe.prices.retrieve('price_1L3Tm5KeO2gokBvYRL3uFI0Z'/* , {
    expand: ['product']
  } */)

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),

  };
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24 //atualiza a pagina cada 24h (só presente no GetStaticProps )
  }
}
