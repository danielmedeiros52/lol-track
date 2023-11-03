import type { NextPage } from 'next';
import Head from 'next/head';

const Details: NextPage = () => {
    return (
        <>
            <Head>
                <title>Detalhes</title>
                <meta name="description" content="Página de detalhes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-6xl font-bold">
                    Bem-vindo à <a href="https://nextjs.org">Next.js!</a>
                </h1>

                {/* Conteúdo da sua página de detalhes */}
                <p className="mt-3 text-2xl">
                    Esta é a página de detalhes.
                </p>
            </main>
        </>
    );
};

export default Details;
